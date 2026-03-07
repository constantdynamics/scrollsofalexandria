import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { allPrinciples, getCategories, getPrinciplesByCategory } from '../data/principles';

// ── Constanten ──
const TILE = 40;
const PLAYER_SPEED = 3;
const INTERACTION_DIST = 50;
const CAMERA_LERP = 0.08; // Smooth camera follow speed

// Deterministic pseudo-random based on position (no flicker)
function seededRandom(x, y, seed) {
  let h = (x * 374761393 + y * 668265263 + seed * 1274126177) | 0;
  h = ((h ^ (h >> 13)) * 1103515245) | 0;
  return ((h & 0x7fffffff) / 0x7fffffff);
}

// Tile types
const EMPTY = 0;
const FLOOR = 1;
const WALL = 2;
const BOOKSHELF = 3;
const DOOR = 4;
const CARPET = 5;
const PILLAR = 6;
const TORCH = 7;
const TABLE = 8;
const PLANT = 9;

// Ambient dust particles (generated once)
const NUM_PARTICLES = 60;
const particles = Array.from({ length: NUM_PARTICLES }, (_, i) => ({
  x: seededRandom(i, 0, 99) * 2000,
  y: seededRandom(0, i, 77) * 2000,
  size: 1 + seededRandom(i, i, 33) * 2,
  speed: 0.1 + seededRandom(i, 0, 55) * 0.3,
  drift: seededRandom(i, 0, 11) * 0.2 - 0.1,
  alpha: 0.15 + seededRandom(i, 0, 22) * 0.2,
}));

// Kleuren
const COLORS = {
  [EMPTY]: '#1a1520',
  [FLOOR]: '#d4c4a8',
  [WALL]: '#6b5b4a',
  [BOOKSHELF]: '#8B4513',
  [DOOR]: '#c9a86c',
  [CARPET]: '#7b3f5e',
  [PILLAR]: '#8a7a66',
  [TORCH]: '#6b5b4a',
  [TABLE]: '#8B6914',
  [PLANT]: '#2d8a4e',
  floorAlt: '#cbb99d',
  wallTop: '#7d6b58',
  shelfBooks1: '#c0392b',
  shelfBooks2: '#2980b9',
  shelfBooks3: '#27ae60',
  shelfBooks4: '#8e44ad',
  shelfBooks5: '#d4a017',
  player: '#5c4fcf',
  playerOutline: '#4337b2',
};

// Category emoji mapping
const CATEGORY_EMOJIS = {
  'Logica': '🔗',
  'Epistemologie': '🧠',
  'Psychologie': '🧩',
  'Behavioral Economics': '💰',
  'Retorica': '🎭',
  'Speltheorie': '♟️',
  'Statistiek': '📊',
  'Besliskunde': '⚖️',
  'Systeemdenken': '🔄',
  'Organisatie': '🏛️',
  'Ethiek': '⭐',
  'Gedachte-experimenten': '💭',
  'Zelfvertrouwen': '💪',
  'Emotieregulatie': '🌊',
};

// ── Bibliotheek layout genereren ──
function generateLibrary(categories) {
  const roomsPerRow = 3;
  const roomW = 10;
  const roomH = 8;
  const corridorW = 4;
  const marginX = 2;
  const marginY = 2;

  const rows = Math.ceil(categories.length / roomsPerRow);
  const mapW = marginX * 2 + roomsPerRow * roomW + (roomsPerRow - 1) * corridorW + corridorW;
  const mapH = marginY * 2 + rows * roomH + (rows + 1) * corridorW + 6; // +6 voor entreehal

  const map = Array.from({ length: mapH }, () => Array(mapW).fill(EMPTY));
  const rooms = [];

  // Entreehal
  const hallX = Math.floor(mapW / 2) - 5;
  const hallY = mapH - marginY - 4;
  const hallW = 10;
  const hallH = 4;
  fillRect(map, hallX, hallY, hallW, hallH, FLOOR);
  addWalls(map, hallX, hallY, hallW, hallH);
  // Tapijt in de hal
  fillRect(map, hallX + 2, hallY + 1, hallW - 4, hallH - 2, CARPET);
  // Entree opening
  map[hallY + hallH - 1][hallX + Math.floor(hallW / 2)] = DOOR;
  map[hallY + hallH - 1][hallX + Math.floor(hallW / 2) - 1] = DOOR;
  // Planten in de hal
  map[hallY + 1][hallX + 1] = PLANT;
  map[hallY + 1][hallX + hallW - 2] = PLANT;

  // Hoofdcorridor - verticaal
  const corStartX = Math.floor(mapW / 2) - Math.floor(corridorW / 2);
  for (let y = marginY; y < hallY + 1; y++) {
    for (let x = corStartX; x < corStartX + corridorW; x++) {
      if (x >= 0 && x < mapW && y >= 0 && y < mapH) {
        map[y][x] = FLOOR;
      }
    }
  }
  // Tapijt in hoofdcorridor
  for (let y = marginY + 1; y < hallY; y++) {
    for (let x = corStartX + 1; x < corStartX + corridorW - 1; x++) {
      if (x >= 0 && x < mapW) map[y][x] = CARPET;
    }
  }

  // Verbinding hal naar corridor
  for (let x = corStartX; x < corStartX + corridorW; x++) {
    map[hallY][x] = FLOOR;
  }

  // Kamers genereren
  categories.forEach((cat, i) => {
    const row = Math.floor(i / roomsPerRow);
    const col = i % roomsPerRow;

    const rx = marginX + col * (roomW + corridorW);
    const ry = marginY + row * (roomH + corridorW);

    // Kamer vloer
    fillRect(map, rx, ry, roomW, roomH, FLOOR);
    addWalls(map, rx, ry, roomW, roomH);

    // Boekenkasten langs de muren (boven en zijkanten)
    for (let x = rx + 1; x < rx + roomW - 1; x++) {
      map[ry + 1][x] = BOOKSHELF; // Boven
    }
    for (let y = ry + 2; y < ry + roomH - 2; y++) {
      map[y][rx + 1] = BOOKSHELF; // Links
      map[y][rx + roomW - 2] = BOOKSHELF; // Rechts
    }

    // Deur (aan de kant die het dichtst bij de corridor is)
    const doorY = ry + roomH - 1;
    const doorX = rx + Math.floor(roomW / 2);
    map[doorY][doorX] = DOOR;
    map[doorY][doorX - 1] = DOOR;

    // Horizontale corridor naar hoofdcorridor
    const corY = ry + roomH - 1;
    const fromX = Math.min(doorX + 1, corStartX + corridorW);
    const toX = Math.max(doorX - 1, corStartX);
    const startX = Math.min(rx, corStartX);
    const endX = Math.max(rx + roomW, corStartX + corridorW);
    for (let x = startX; x < endX; x++) {
      for (let dy = 0; dy < 3; dy++) {
        const cy = corY + dy;
        if (cy < mapH && x >= 0 && x < mapW) {
          if (map[cy][x] === EMPTY || map[cy][x] === WALL) {
            map[cy][x] = FLOOR;
          }
        }
      }
    }

    // Pilaar decoratie
    if (roomW > 6) {
      map[ry + Math.floor(roomH / 2)][rx + Math.floor(roomW / 2)] = PILLAR;
    }

    // Fakkels naast deur
    if (doorX - 2 >= rx + 1) map[doorY][doorX - 2] = TORCH;
    if (doorX + 1 < rx + roomW - 1) map[doorY][doorX + 1] = TORCH;

    // Lestafel in kamer (als er ruimte is)
    const tableY = ry + roomH - 3;
    const tableX = rx + 3;
    if (map[tableY][tableX] === FLOOR) {
      map[tableY][tableX] = TABLE;
    }

    // Categorie kleur voor boekenkasten (hash van naam)
    const catHash = cat.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const catHue = catHash % 360;

    rooms.push({
      name: cat,
      emoji: CATEGORY_EMOJIS[cat] || '📚',
      x: rx,
      y: ry,
      w: roomW,
      h: roomH,
      centerX: (rx + roomW / 2) * TILE,
      centerY: (ry + roomH / 2) * TILE,
      catHue,
    });
  });

  // Herstel hoofdcorridor - kamermuren kunnen deze overschreven hebben
  for (let y = marginY; y < hallY + 1; y++) {
    for (let x = corStartX; x < corStartX + corridorW; x++) {
      if (x >= 0 && x < mapW && y >= 0 && y < mapH) {
        if (map[y][x] === WALL || map[y][x] === EMPTY) {
          map[y][x] = FLOOR;
        }
      }
    }
  }

  // Herstel horizontale corridors - zorg dat ze niet geblokkeerd zijn
  categories.forEach((cat, i) => {
    const row = Math.floor(i / roomsPerRow);
    const col = i % roomsPerRow;
    const rx = marginX + col * (roomW + corridorW);
    const ry = marginY + row * (roomH + corridorW);
    const corY = ry + roomH - 1;
    const startX = Math.min(rx, corStartX);
    const endX = Math.max(rx + roomW, corStartX + corridorW);
    for (let x = startX; x < endX; x++) {
      for (let dy = 0; dy < 3; dy++) {
        const cy = corY + dy;
        if (cy < mapH && x >= 0 && x < mapW) {
          if (map[cy][x] === WALL || map[cy][x] === EMPTY) {
            map[cy][x] = FLOOR;
          }
        }
      }
    }
  });

  // Tapijt in hoofdcorridor herstellen
  for (let y = marginY + 1; y < hallY; y++) {
    for (let x = corStartX + 1; x < corStartX + corridorW - 1; x++) {
      if (x >= 0 && x < mapW && map[y][x] === FLOOR) {
        map[y][x] = CARPET;
      }
    }
  }

  return { map, mapW, mapH, rooms, hallX, hallY, hallW, hallH };
}

function fillRect(map, x, y, w, h, tile) {
  for (let dy = 0; dy < h; dy++) {
    for (let dx = 0; dx < w; dx++) {
      if (y + dy < map.length && x + dx < map[0].length) {
        map[y + dy][x + dx] = tile;
      }
    }
  }
}

function addWalls(map, x, y, w, h) {
  for (let dx = 0; dx < w; dx++) {
    if (y >= 0 && y < map.length) map[y][x + dx] = WALL;
    if (y + h - 1 < map.length) map[y + h - 1][x + dx] = WALL;
  }
  for (let dy = 0; dy < h; dy++) {
    if (x >= 0) map[y + dy][x] = WALL;
    if (x + w - 1 < map[0].length) map[y + dy][x + w - 1] = WALL;
  }
}

function isWalkable(map, px, py, mapW, mapH) {
  // Check all four corners of the player hitbox
  const halfSize = 10;
  const corners = [
    [px - halfSize, py - halfSize],
    [px + halfSize, py - halfSize],
    [px - halfSize, py + halfSize],
    [px + halfSize, py + halfSize],
  ];
  for (const [cx, cy] of corners) {
    const tx = Math.floor(cx / TILE);
    const ty = Math.floor(cy / TILE);
    if (tx < 0 || tx >= mapW || ty < 0 || ty >= mapH) return false;
    const tile = map[ty][tx];
    if (tile === WALL || tile === BOOKSHELF || tile === PILLAR || tile === EMPTY || tile === TORCH || tile === TABLE || tile === PLANT) return false;
  }
  return true;
}

// ── Component ──
const LibraryPage = () => {
  const navigate = useNavigate();
  const { userData, getPrincipleProgress } = useUser();
  const canvasRef = useRef(null);
  const keysRef = useRef(new Set());
  const playerRef = useRef({ x: 0, y: 0, dirX: 0, dirY: 1, bobTime: 0, moving: false });
  const cameraRef = useRef({ x: 0, y: 0 });
  const gameTimeRef = useRef(0);
  const footstepDustRef = useRef([]); // { x, y, age, size }
  const animFrameRef = useRef(null);

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentRoomName, setCurrentRoomName] = useState('Entreehal');
  const [showMinimap, setShowMinimap] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(false);
  const joystickRef = useRef({ dx: 0, dy: 0 });
  const joystickTouchIdRef = useRef(null);
  const joystickOriginRef = useRef({ x: 0, y: 0 });
  const [joystickVisual, setJoystickVisual] = useState(null); // { originX, originY, thumbX, thumbY }

  const categories = useMemo(() => getCategories('academic'), []);

  const library = useMemo(() => generateLibrary(categories), [categories]);
  const { map, mapW, mapH, rooms, hallX, hallY, hallW, hallH } = library;

  // Init player positie
  useEffect(() => {
    const startX = (hallX + hallW / 2) * TILE;
    const startY = (hallY + hallH / 2) * TILE;
    playerRef.current = { x: startX, y: startY, dirX: 0, dirY: 1, bobTime: 0, moving: false };
    cameraRef.current = { x: startX, y: startY };
  }, [hallX, hallY, hallW, hallH]);

  // Detect touch device
  useEffect(() => {
    const checkTouch = () => { setIsMobile(true); isMobileRef.current = true; };
    window.addEventListener('touchstart', checkTouch, { once: true });
    if (window.matchMedia('(pointer: coarse)').matches) { setIsMobile(true); isMobileRef.current = true; }
    return () => window.removeEventListener('touchstart', checkTouch);
  }, []);

  // Virtual joystick touch handlers
  useEffect(() => {
    if (!isMobile) return;

    const handleTouchStart = (e) => {
      for (const touch of e.changedTouches) {
        // Left half of screen = joystick area
        if (touch.clientX < window.innerWidth * 0.5 && joystickTouchIdRef.current === null) {
          joystickTouchIdRef.current = touch.identifier;
          joystickOriginRef.current = { x: touch.clientX, y: touch.clientY };
          joystickRef.current = { dx: 0, dy: 0 };
          setJoystickVisual({ originX: touch.clientX, originY: touch.clientY, thumbX: touch.clientX, thumbY: touch.clientY });
        }
      }
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      for (const touch of e.changedTouches) {
        if (touch.identifier === joystickTouchIdRef.current) {
          const ox = joystickOriginRef.current.x;
          const oy = joystickOriginRef.current.y;
          let dx = touch.clientX - ox;
          let dy = touch.clientY - oy;
          const maxDist = 50;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > maxDist) {
            dx = (dx / dist) * maxDist;
            dy = (dy / dist) * maxDist;
          }
          joystickRef.current = { dx: dx / maxDist, dy: dy / maxDist };
          setJoystickVisual({ originX: ox, originY: oy, thumbX: ox + dx, thumbY: oy + dy });
        }
      }
    };

    const handleTouchEnd = (e) => {
      for (const touch of e.changedTouches) {
        if (touch.identifier === joystickTouchIdRef.current) {
          joystickTouchIdRef.current = null;
          joystickRef.current = { dx: 0, dy: 0 };
          setJoystickVisual(null);
        }
      }
    };

    const opts = { passive: false };
    window.addEventListener('touchstart', handleTouchStart, opts);
    window.addEventListener('touchmove', handleTouchMove, opts);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isMobile]);

  // Keyboard handlers
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'].includes(e.key)) {
        e.preventDefault();
        keysRef.current.add(e.key.toLowerCase());
      }
      if (e.key === 'e' || e.key === 'E' || e.key === ' ') {
        e.preventDefault();
        handleInteraction();
      }
      if (e.key === 'Escape') {
        setSelectedRoom(null);
      }
      if (e.key === 'm' || e.key === 'M') {
        setShowMinimap(prev => !prev);
      }
    };
    const handleKeyUp = (e) => {
      keysRef.current.delete(e.key.toLowerCase());
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [rooms]);

  const handleInteraction = useCallback(() => {
    const p = playerRef.current;
    for (const room of rooms) {
      const dx = p.x - room.centerX;
      const dy = p.y - room.centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < (room.w / 2) * TILE) {
        setSelectedRoom(room.name);
        return;
      }
    }
  }, [rooms]);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const bookColors = [COLORS.shelfBooks1, COLORS.shelfBooks2, COLORS.shelfBooks3, COLORS.shelfBooks4, COLORS.shelfBooks5];

    const gameLoop = () => {
      gameTimeRef.current += 1 / 60;
      const time = gameTimeRef.current;

      // Retina/HiDPI support
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Player movement (keyboard + virtual joystick)
      const keys = keysRef.current;
      let dx = 0, dy = 0;
      if (keys.has('w') || keys.has('arrowup')) dy -= PLAYER_SPEED;
      if (keys.has('s') || keys.has('arrowdown')) dy += PLAYER_SPEED;
      if (keys.has('a') || keys.has('arrowleft')) dx -= PLAYER_SPEED;
      if (keys.has('d') || keys.has('arrowright')) dx += PLAYER_SPEED;

      // Virtual joystick input
      const joy = joystickRef.current;
      if (joy.dx !== 0 || joy.dy !== 0) {
        dx += joy.dx * PLAYER_SPEED;
        dy += joy.dy * PLAYER_SPEED;
      }

      // Normalize diagonal
      const mag = Math.sqrt(dx * dx + dy * dy);
      if (mag > PLAYER_SPEED) {
        dx = (dx / mag) * PLAYER_SPEED;
        dy = (dy / mag) * PLAYER_SPEED;
      }

      const player = playerRef.current;
      const isMoving = Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1;

      // Track direction for eyes
      if (isMoving) {
        player.dirX = dx;
        player.dirY = dy;
        player.bobTime += 0.15;
        player.moving = true;
        // Spawn footstep dust
        if (Math.random() < 0.3) {
          footstepDustRef.current.push({
            x: player.x + (Math.random() - 0.5) * 8,
            y: player.y + 12 + Math.random() * 4,
            age: 0,
            size: 2 + Math.random() * 3,
            vx: -dx * 0.3 + (Math.random() - 0.5) * 0.5,
            vy: -0.3 - Math.random() * 0.3,
          });
        }
      } else {
        player.moving = false;
      }

      // Update footstep dust
      const dust = footstepDustRef.current;
      for (let i = dust.length - 1; i >= 0; i--) {
        dust[i].age += 1 / 60;
        dust[i].x += dust[i].vx;
        dust[i].y += dust[i].vy;
        if (dust[i].age > 0.6) dust.splice(i, 1);
      }

      const newX = player.x + dx;
      const newY = player.y + dy;
      if (isWalkable(map, newX, player.y, mapW, mapH)) player.x = newX;
      if (isWalkable(map, player.x, newY, mapW, mapH)) player.y = newY;

      // Smooth camera (lerp)
      const cam = cameraRef.current;
      const targetCamX = player.x - w / 2;
      const targetCamY = player.y - h / 2;
      cam.x += (targetCamX - cam.x) * CAMERA_LERP;
      cam.y += (targetCamY - cam.y) * CAMERA_LERP;
      const camX = cam.x;
      const camY = cam.y;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = COLORS[EMPTY];
      ctx.fillRect(0, 0, w, h);

      // Visible tile range
      const startTX = Math.max(0, Math.floor(camX / TILE) - 1);
      const endTX = Math.min(mapW, Math.ceil((camX + w) / TILE) + 1);
      const startTY = Math.max(0, Math.floor(camY / TILE) - 1);
      const endTY = Math.min(mapH, Math.ceil((camY + h) / TILE) + 1);

      // Draw tiles
      for (let ty = startTY; ty < endTY; ty++) {
        for (let tx = startTX; tx < endTX; tx++) {
          const tile = map[ty][tx];
          const sx = tx * TILE - camX;
          const sy = ty * TILE - camY;

          if (tile === FLOOR) {
            ctx.fillStyle = (tx + ty) % 2 === 0 ? COLORS[FLOOR] : COLORS.floorAlt;
            ctx.fillRect(sx, sy, TILE, TILE);
            // Subtiele voegen
            ctx.strokeStyle = 'rgba(0,0,0,0.06)';
            ctx.strokeRect(sx, sy, TILE, TILE);
            // Soms een kleine crack/detail
            if (seededRandom(tx, ty, 42) > 0.92) {
              ctx.strokeStyle = 'rgba(0,0,0,0.08)';
              ctx.beginPath();
              ctx.moveTo(sx + TILE * 0.3, sy + TILE * 0.2);
              ctx.lineTo(sx + TILE * 0.7, sy + TILE * 0.6);
              ctx.stroke();
            }
          } else if (tile === WALL) {
            ctx.fillStyle = COLORS[WALL];
            ctx.fillRect(sx, sy, TILE, TILE);
            // Stone brick pattern
            ctx.strokeStyle = 'rgba(0,0,0,0.12)';
            ctx.lineWidth = 1;
            ctx.strokeRect(sx + 1, sy + 1, TILE / 2 - 1, TILE / 2 - 1);
            ctx.strokeRect(sx + TILE / 2, sy + 1, TILE / 2 - 1, TILE / 2 - 1);
            ctx.strokeRect(sx + TILE / 4, sy + TILE / 2, TILE / 2, TILE / 2 - 1);
            // 3D effect
            ctx.fillStyle = COLORS.wallTop;
            ctx.fillRect(sx, sy, TILE, 6);
            ctx.fillStyle = 'rgba(0,0,0,0.15)';
            ctx.fillRect(sx, sy + TILE - 4, TILE, 4);
          } else if (tile === BOOKSHELF) {
            // Kast achtergrond
            ctx.fillStyle = COLORS[BOOKSHELF];
            ctx.fillRect(sx, sy, TILE, TILE);
            // Boeken - deterministic heights via seededRandom
            const booksPerShelf = 5;
            const bookW = (TILE - 4) / booksPerShelf;
            for (let b = 0; b < booksPerShelf; b++) {
              const colorIdx = (tx * 7 + ty * 3 + b) % bookColors.length;
              ctx.fillStyle = bookColors[colorIdx];
              const bh = TILE * (0.5 + seededRandom(tx, ty, b * 13 + 7) * 0.15);
              ctx.fillRect(sx + 2 + b * bookW, sy + (TILE - bh), bookW - 1, bh - 2);
              // Book spine highlight
              ctx.fillStyle = 'rgba(255,255,255,0.12)';
              ctx.fillRect(sx + 2 + b * bookW, sy + (TILE - bh), 1, bh - 2);
            }
            // Plank
            ctx.fillStyle = '#5a3a1a';
            ctx.fillRect(sx, sy + TILE - 3, TILE, 3);
            ctx.fillRect(sx, sy + Math.floor(TILE / 2), TILE, 2);
            // Plank schaduw
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.fillRect(sx, sy + Math.floor(TILE / 2) + 2, TILE, 2);
          } else if (tile === DOOR) {
            // Warm glow underneath door
            const doorGlow = ctx.createRadialGradient(
              sx + TILE / 2, sy + TILE / 2, 2,
              sx + TILE / 2, sy + TILE / 2, TILE * 1.2
            );
            doorGlow.addColorStop(0, 'rgba(255,220,150,0.15)');
            doorGlow.addColorStop(1, 'rgba(255,200,100,0)');
            ctx.fillStyle = doorGlow;
            ctx.fillRect(sx - TILE * 0.5, sy - TILE * 0.5, TILE * 2, TILE * 2);
            // Door base
            ctx.fillStyle = COLORS[DOOR];
            ctx.fillRect(sx, sy, TILE, TILE);
            ctx.fillStyle = 'rgba(0,0,0,0.08)';
            ctx.fillRect(sx + 2, sy + 2, TILE - 4, TILE - 4);
            // Deur panelen
            ctx.strokeStyle = 'rgba(0,0,0,0.12)';
            ctx.lineWidth = 1;
            ctx.strokeRect(sx + 5, sy + 4, TILE - 10, TILE / 2 - 4);
            ctx.strokeRect(sx + 5, sy + TILE / 2 + 2, TILE - 10, TILE / 2 - 6);
            // Door handle
            ctx.fillStyle = '#b8860b';
            ctx.beginPath();
            ctx.arc(sx + TILE - 9, sy + TILE / 2, 2.5, 0, Math.PI * 2);
            ctx.fill();
          } else if (tile === CARPET) {
            ctx.fillStyle = (tx + ty) % 2 === 0 ? COLORS[FLOOR] : COLORS.floorAlt;
            ctx.fillRect(sx, sy, TILE, TILE);
            ctx.fillStyle = COLORS[CARPET];
            ctx.globalAlpha = 0.35;
            ctx.fillRect(sx, sy, TILE, TILE);
            ctx.globalAlpha = 1;
            // Patroon - diamond pattern
            ctx.fillStyle = 'rgba(200,160,80,0.15)';
            ctx.beginPath();
            ctx.moveTo(sx + TILE / 2, sy + 4);
            ctx.lineTo(sx + TILE - 4, sy + TILE / 2);
            ctx.lineTo(sx + TILE / 2, sy + TILE - 4);
            ctx.lineTo(sx + 4, sy + TILE / 2);
            ctx.closePath();
            ctx.fill();
          } else if (tile === PILLAR) {
            ctx.fillStyle = (tx + ty) % 2 === 0 ? COLORS[FLOOR] : COLORS.floorAlt;
            ctx.fillRect(sx, sy, TILE, TILE);
            // Pilaar schaduw
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2 + 2, sy + TILE / 2 + 4, TILE / 3, TILE / 4, 0, 0, Math.PI * 2);
            ctx.fill();
            // Pilaar
            ctx.fillStyle = COLORS[PILLAR];
            ctx.beginPath();
            ctx.arc(sx + TILE / 2, sy + TILE / 2, TILE / 3, 0, Math.PI * 2);
            ctx.fill();
            // Highlight
            ctx.fillStyle = 'rgba(255,255,255,0.15)';
            ctx.beginPath();
            ctx.arc(sx + TILE / 2 - 3, sy + TILE / 2 - 3, TILE / 5, 0, Math.PI * 2);
            ctx.fill();
            // Dark edge
            ctx.strokeStyle = 'rgba(0,0,0,0.15)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(sx + TILE / 2, sy + TILE / 2, TILE / 3, 0, Math.PI * 2);
            ctx.stroke();
          } else if (tile === TABLE) {
            // Floor underneath
            ctx.fillStyle = (tx + ty) % 2 === 0 ? COLORS[FLOOR] : COLORS.floorAlt;
            ctx.fillRect(sx, sy, TILE, TILE);
            // Table shadow
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2 + 2, sy + TILE / 2 + 6, TILE * 0.4, TILE * 0.25, 0, 0, Math.PI * 2);
            ctx.fill();
            // Table top
            ctx.fillStyle = COLORS[TABLE];
            ctx.beginPath();
            ctx.roundRect(sx + 4, sy + 6, TILE - 8, TILE - 12, 3);
            ctx.fill();
            // Table highlight
            ctx.fillStyle = 'rgba(255,255,255,0.12)';
            ctx.fillRect(sx + 6, sy + 8, TILE - 14, 4);
            // Book on table
            ctx.fillStyle = '#8e44ad';
            ctx.fillRect(sx + TILE / 2 - 5, sy + TILE / 2 - 4, 10, 7);
            ctx.fillStyle = 'rgba(255,255,255,0.15)';
            ctx.fillRect(sx + TILE / 2 - 5, sy + TILE / 2 - 4, 10, 1);
          } else if (tile === PLANT) {
            // Floor underneath
            ctx.fillStyle = (tx + ty) % 2 === 0 ? COLORS[FLOOR] : COLORS.floorAlt;
            ctx.fillRect(sx, sy, TILE, TILE);
            // Pot
            ctx.fillStyle = '#a0522d';
            ctx.beginPath();
            ctx.moveTo(sx + TILE * 0.3, sy + TILE * 0.55);
            ctx.lineTo(sx + TILE * 0.7, sy + TILE * 0.55);
            ctx.lineTo(sx + TILE * 0.65, sy + TILE - 4);
            ctx.lineTo(sx + TILE * 0.35, sy + TILE - 4);
            ctx.closePath();
            ctx.fill();
            // Rim
            ctx.fillStyle = '#8b4513';
            ctx.fillRect(sx + TILE * 0.28, sy + TILE * 0.52, TILE * 0.44, 4);
            // Leaves (animated slight sway)
            const sway = Math.sin(time * 1.5 + tx * 2) * 2;
            ctx.fillStyle = COLORS[PLANT];
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2 + sway, sy + TILE * 0.35, 8, 12, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#3aa85e';
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2 - 5 + sway * 0.7, sy + TILE * 0.3, 5, 8, -0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2 + 5 + sway * 0.7, sy + TILE * 0.3, 5, 8, 0.3, 0, Math.PI * 2);
            ctx.fill();
          } else if (tile === TORCH) {
            // Wall background
            ctx.fillStyle = COLORS[WALL];
            ctx.fillRect(sx, sy, TILE, TILE);
            ctx.fillStyle = COLORS.wallTop;
            ctx.fillRect(sx, sy, TILE, 6);
            // Torch bracket
            ctx.fillStyle = '#4a3a2a';
            ctx.fillRect(sx + TILE / 2 - 2, sy + TILE * 0.3, 4, TILE * 0.4);
            // Flame (animated)
            const flicker = Math.sin(time * 8 + tx * 3) * 2 + Math.sin(time * 12 + ty * 5) * 1;
            const flameH = 10 + flicker;
            const flameY = sy + TILE * 0.3 - flameH;
            const grad = ctx.createRadialGradient(
              sx + TILE / 2, flameY + flameH / 2, 1,
              sx + TILE / 2, flameY + flameH / 2, flameH
            );
            grad.addColorStop(0, 'rgba(255,220,100,0.9)');
            grad.addColorStop(0.4, 'rgba(255,160,40,0.7)');
            grad.addColorStop(1, 'rgba(255,80,20,0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2, flameY + flameH / 2, 5 + flicker * 0.3, flameH / 2, 0, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Wall shadow casting onto adjacent floor tiles
      for (let ty = startTY; ty < endTY; ty++) {
        for (let tx = startTX; tx < endTX; tx++) {
          const tile = map[ty][tx];
          if (tile === FLOOR || tile === CARPET || tile === DOOR) {
            const sx = tx * TILE - camX;
            const sy = ty * TILE - camY;
            // Shadow from wall above
            if (ty > 0 && (map[ty - 1][tx] === WALL || map[ty - 1][tx] === TORCH)) {
              const shadowGrad = ctx.createLinearGradient(sx, sy, sx, sy + 10);
              shadowGrad.addColorStop(0, 'rgba(0,0,0,0.12)');
              shadowGrad.addColorStop(1, 'rgba(0,0,0,0)');
              ctx.fillStyle = shadowGrad;
              ctx.fillRect(sx, sy, TILE, 10);
            }
            // Shadow from wall to the left
            if (tx > 0 && (map[ty][tx - 1] === WALL || map[ty][tx - 1] === TORCH)) {
              const shadowGrad = ctx.createLinearGradient(sx, sy, sx + 8, sy);
              shadowGrad.addColorStop(0, 'rgba(0,0,0,0.08)');
              shadowGrad.addColorStop(1, 'rgba(0,0,0,0)');
              ctx.fillStyle = shadowGrad;
              ctx.fillRect(sx, sy, 8, TILE);
            }
          }
        }
      }

      // Torch light glow overlay (additive-like)
      for (let ty = startTY; ty < endTY; ty++) {
        for (let tx = startTX; tx < endTX; tx++) {
          if (map[ty][tx] === TORCH) {
            const sx = tx * TILE - camX + TILE / 2;
            const sy = ty * TILE - camY + TILE * 0.25;
            const flicker = 1 + Math.sin(time * 6 + tx * 5) * 0.1;
            const radius = TILE * 3 * flicker;
            const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, radius);
            glow.addColorStop(0, 'rgba(255,180,60,0.08)');
            glow.addColorStop(0.5, 'rgba(255,140,40,0.03)');
            glow.addColorStop(1, 'rgba(255,100,20,0)');
            ctx.fillStyle = glow;
            ctx.fillRect(sx - radius, sy - radius, radius * 2, radius * 2);
          }
        }
      }

      // Entreehal welkomsttekst
      const hallCenterX = (hallX + hallW / 2) * TILE - camX;
      const hallCenterY = (hallY + 1) * TILE - camY;
      if (hallCenterX > -300 && hallCenterX < w + 300 && hallCenterY > -100 && hallCenterY < h + 100) {
        ctx.font = "700 16px 'Playfair Display', Georgia, serif";
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(92,79,207,0.5)';
        ctx.fillText('Bibliotheek van Alexandrië', hallCenterX, hallCenterY);
        ctx.font = '400 10px Inter, sans-serif';
        ctx.fillStyle = 'rgba(0,0,0,0.35)';
        ctx.fillText('Verken de kamers om te leren', hallCenterX, hallCenterY + 16);
      }

      // Room labels
      for (const room of rooms) {
        const labelX = room.centerX - camX;
        const labelY = room.centerY - camY - 8;
        if (labelX > -200 && labelX < w + 200 && labelY > -100 && labelY < h + 100) {
          ctx.font = '600 13px Inter, sans-serif';
          ctx.textAlign = 'center';
          // Text shadow
          ctx.fillStyle = 'rgba(255,255,255,0.5)';
          ctx.fillText(`${room.emoji} ${room.name}`, labelX + 1, labelY + 1);
          ctx.fillStyle = 'rgba(0,0,0,0.6)';
          ctx.fillText(`${room.emoji} ${room.name}`, labelX, labelY);
        }
      }

      // Check if near a room (for glow)
      let isNearRoom = false;
      for (const room of rooms) {
        const rdx = player.x - room.centerX;
        const rdy = player.y - room.centerY;
        if (Math.sqrt(rdx * rdx + rdy * rdy) < (room.w / 2) * TILE) {
          isNearRoom = true;
          break;
        }
      }

      // Player
      const px = player.x - camX;
      // Idle breathing when stationary, walk bob when moving
      const idleBreath = !player.moving ? Math.sin(time * 2) * 1.5 : 0;
      const bobOffset = player.moving ? Math.sin(player.bobTime) * 2 : idleBreath;
      const py = player.y - camY + bobOffset;

      // Player glow when near interactable room
      if (isNearRoom) {
        const glowPulse = 0.4 + Math.sin(time * 3) * 0.15;
        const glow = ctx.createRadialGradient(px, py, 10, px, py, 35);
        glow.addColorStop(0, `rgba(92,79,207,${glowPulse})`);
        glow.addColorStop(1, 'rgba(92,79,207,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, 35, 0, Math.PI * 2);
        ctx.fill();
      }

      // Schaduw (smaller when bobbing up)
      const shadowScale = player.moving ? 1 - Math.sin(player.bobTime) * 0.15 : 1;
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.beginPath();
      ctx.ellipse(px, player.y - camY + 14, 12 * shadowScale, 5 * shadowScale, 0, 0, Math.PI * 2);
      ctx.fill();

      // Lichaam
      ctx.fillStyle = COLORS.player;
      ctx.beginPath();
      ctx.arc(px, py, 14, 0, Math.PI * 2);
      ctx.fill();

      // Rand
      ctx.strokeStyle = COLORS.playerOutline;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Ogen - follow movement direction
      const dirMag = Math.sqrt(player.dirX * player.dirX + player.dirY * player.dirY);
      const eyeDx = dirMag > 0.1 ? (player.dirX / dirMag) * 2 : 0;
      const eyeDy = dirMag > 0.1 ? (player.dirY / dirMag) * 1.5 : 0;

      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(px - 5 + eyeDx * 0.5, py - 3, 4, 0, Math.PI * 2);
      ctx.arc(px + 5 + eyeDx * 0.5, py - 3, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#1a1520';
      ctx.beginPath();
      ctx.arc(px - 5 + eyeDx, py - 3 + eyeDy, 2, 0, Math.PI * 2);
      ctx.arc(px + 5 + eyeDx, py - 3 + eyeDy, 2, 0, Math.PI * 2);
      ctx.fill();

      // Nameplate
      if (userData?.name) {
        ctx.font = '600 9px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText(userData.name, px, player.y - camY + 26);
      }

      // Footstep dust rendering
      for (const d of footstepDustRef.current) {
        const alpha = 1 - d.age / 0.6;
        ctx.fillStyle = `rgba(180,160,130,${alpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(d.x - camX, d.y - camY, d.size * (1 + d.age), 0, Math.PI * 2);
        ctx.fill();
      }

      // Interactie indicator
      let nearRoom = null;
      for (const room of rooms) {
        const rdx = player.x - room.centerX;
        const rdy = player.y - room.centerY;
        const dist = Math.sqrt(rdx * rdx + rdy * rdy);
        if (dist < (room.w / 2) * TILE) {
          nearRoom = room;
          break;
        }
      }

      // Update current room name
      if (nearRoom) {
        setCurrentRoomName(nearRoom.name);
      } else {
        setCurrentRoomName('Gang');
      }

      // Interactie prompt
      if (nearRoom) {
        const promptY = py - 35;
        ctx.font = '600 13px Inter, sans-serif';
        ctx.textAlign = 'center';
        const text = isMobileRef.current ? 'Tik op boek-knop' : '[ E ] Boeken bekijken';
        const tw = ctx.measureText(text).width;
        ctx.fillStyle = 'rgba(0,0,0,0.75)';
        ctx.beginPath();
        ctx.roundRect(px - tw / 2 - 10, promptY - 14, tw + 20, 26, 8);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.fillText(text, px, promptY + 2);
      }

      // Ambient dust particles
      ctx.fillStyle = 'rgba(220,200,170,0.25)';
      for (const p of particles) {
        const px2 = ((p.x + p.drift * time * 60) % (mapW * TILE)) - camX;
        const py2 = ((p.y - p.speed * time * 60) % (mapH * TILE)) - camY;
        if (px2 > -10 && px2 < w + 10 && py2 > -10 && py2 < h + 10) {
          ctx.globalAlpha = p.alpha * (0.5 + 0.5 * Math.sin(time * 2 + p.x));
          ctx.beginPath();
          ctx.arc(px2, py2, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      // Vignette overlay
      const vignetteGrad = ctx.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, h * 0.9);
      vignetteGrad.addColorStop(0, 'rgba(0,0,0,0)');
      vignetteGrad.addColorStop(1, 'rgba(0,0,0,0.3)');
      ctx.fillStyle = vignetteGrad;
      ctx.fillRect(0, 0, w, h);

      animFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animFrameRef.current = requestAnimationFrame(gameLoop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [map, mapW, mapH, rooms]);

  // Minimap - canvas-based for showing corridors
  const minimapImageRef = useRef(null);

  // Generate minimap image once
  useEffect(() => {
    const scale = 3;
    const mmW = mapW * scale;
    const mmH = mapH * scale;
    const offscreen = document.createElement('canvas');
    offscreen.width = mmW;
    offscreen.height = mmH;
    const mCtx = offscreen.getContext('2d');
    mCtx.fillStyle = 'rgba(0,0,0,0)';
    mCtx.clearRect(0, 0, mmW, mmH);
    for (let ty = 0; ty < mapH; ty++) {
      for (let tx = 0; tx < mapW; tx++) {
        const tile = map[ty][tx];
        if (tile === EMPTY) continue;
        if (tile === WALL || tile === TORCH) mCtx.fillStyle = 'rgba(100,90,75,0.7)';
        else if (tile === BOOKSHELF) mCtx.fillStyle = 'rgba(139,69,19,0.7)';
        else if (tile === CARPET) mCtx.fillStyle = 'rgba(123,63,94,0.5)';
        else if (tile === DOOR) mCtx.fillStyle = 'rgba(201,168,108,0.7)';
        else mCtx.fillStyle = 'rgba(212,196,168,0.4)';
        mCtx.fillRect(tx * scale, ty * scale, scale, scale);
      }
    }
    minimapImageRef.current = offscreen;
  }, [map, mapW, mapH]);

  const renderMinimap = () => {
    if (!showMinimap) return null;
    const scale = 3;
    const mmW = mapW * scale;
    const mmH = mapH * scale;
    const playerTX = Math.floor(playerRef.current.x / TILE);
    const playerTY = Math.floor(playerRef.current.y / TILE);

    return (
      <div
        style={{
          position: 'absolute',
          bottom: isMobile ? 180 : 16,
          right: isMobile ? 8 : 16,
          width: mmW, height: mmH,
          background: 'rgba(0,0,0,0.75)', borderRadius: 8,
          border: '1px solid rgba(255,255,255,0.2)',
          overflow: 'hidden', zIndex: 10,
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
        }}
      >
        <canvas
          width={mmW}
          height={mmH}
          style={{ width: mmW, height: mmH }}
          ref={(el) => {
            if (el && minimapImageRef.current) {
              const mCtx = el.getContext('2d');
              mCtx.clearRect(0, 0, mmW, mmH);
              mCtx.drawImage(minimapImageRef.current, 0, 0);
              // Highlight selected room
              if (selectedRoom) {
                const room = rooms.find(r => r.name === selectedRoom);
                if (room) {
                  mCtx.fillStyle = 'rgba(92,79,207,0.4)';
                  mCtx.fillRect(room.x * scale, room.y * scale, room.w * scale, room.h * scale);
                }
              }
              // Room labels on minimap
              rooms.forEach(room => {
                mCtx.font = '7px sans-serif';
                mCtx.textAlign = 'center';
                mCtx.fillStyle = 'rgba(255,255,255,0.6)';
                mCtx.fillText(room.emoji, (room.x + room.w / 2) * scale, (room.y + room.h / 2) * scale + 3);
              });
              // Player dot
              mCtx.fillStyle = '#5c4fcf';
              mCtx.beginPath();
              mCtx.arc(playerTX * scale, playerTY * scale, 3, 0, Math.PI * 2);
              mCtx.fill();
              mCtx.strokeStyle = '#fff';
              mCtx.lineWidth = 1;
              mCtx.stroke();
            }
          }}
        />
      </div>
    );
  };

  // Boeken panel
  const renderBookPanel = () => {
    if (!selectedRoom) return null;
    const principles = getPrinciplesByCategory(selectedRoom, 'academic');

    return (
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 50,
          animation: 'fadeIn 0.2s ease-out',
        }}
        onClick={() => setSelectedRoom(null)}
      >
        <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(20px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        `}</style>
        <div
          onClick={e => e.stopPropagation()}
          style={{
            background: 'var(--color-surface, #fffef9)',
            borderRadius: 16,
            padding: '24px',
            maxWidth: 560,
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            border: '1px solid var(--color-border, #e5d9c8)',
            animation: 'slideUp 0.25s ease-out',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.5rem',
              color: 'var(--color-text, #1c1510)',
            }}>
              {CATEGORY_EMOJIS[selectedRoom] || '📚'} {selectedRoom}
            </h2>
            <button
              onClick={() => setSelectedRoom(null)}
              style={{
                background: 'none', border: 'none', fontSize: '1.5rem',
                cursor: 'pointer', color: 'var(--color-text-muted, #8a7a66)',
              }}
            >
              ✕
            </button>
          </div>

          {(() => {
            const masteredCount = principles.filter(p => (getPrincipleProgress(p.id)?.masteryPercentage || 0) >= 100).length;
            const readCount = principles.filter(p => getPrincipleProgress(p.id)?.activities?.read).length;
            const avgMastery = principles.length > 0
              ? Math.round(principles.reduce((sum, p) => sum + (getPrincipleProgress(p.id)?.masteryPercentage || 0), 0) / principles.length)
              : 0;
            return (
              <div style={{ marginBottom: 16 }}>
                <p style={{ color: 'var(--color-text-secondary, #4a3d2e)', fontSize: '0.9rem', marginBottom: 8 }}>
                  {principles.length} {principles.length === 1 ? 'boek' : 'boeken'} &middot; {readCount} gelezen &middot; {masteredCount} voltooid
                </p>
                <div style={{ height: 6, borderRadius: 3, background: 'var(--color-bg-alt, #f1e9dc)', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 3,
                    width: `${avgMastery}%`,
                    background: 'linear-gradient(90deg, #5c4fcf, #c9880f)',
                    transition: 'width 0.3s ease',
                  }} />
                </div>
              </div>
            );
          })()}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {principles.map(p => {
              const progress = getPrincipleProgress(p.id);
              const mastery = progress?.masteryPercentage || 0;
              const diffColors = { 1: '#059669', 2: '#c97010', 3: '#dc2626' };
              const diffLabels = { 1: 'Basis', 2: 'Gemiddeld', 3: 'Gevorderd' };

              return (
                <button
                  key={p.id}
                  onClick={() => navigate(`/principle/${p.id}`)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 16px',
                    background: mastery > 0
                      ? 'var(--color-primary-50, #edeafc)'
                      : 'var(--color-bg-alt, #f1e9dc)',
                    border: `1px solid ${mastery > 0 ? 'var(--color-primary-100, #dbd7f8)' : 'var(--color-border, #e5d9c8)'}`,
                    borderRadius: 10,
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{p.emoji}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontWeight: 600, fontSize: '0.95rem',
                      color: 'var(--color-text, #1c1510)',
                      marginBottom: 2,
                    }}>
                      {p.title}
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-text-muted, #8a7a66)',
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                      {p.definition?.slice(0, 80)}...
                    </div>
                    {mastery > 0 && (
                      <div style={{
                        marginTop: 4, height: 4, borderRadius: 2,
                        background: 'var(--color-bg-alt, #f1e9dc)',
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          height: '100%', borderRadius: 2,
                          width: `${mastery}%`,
                          background: 'linear-gradient(90deg, #5c4fcf, #c9880f)',
                        }} />
                      </div>
                    )}
                  </div>
                  <span style={{
                    fontSize: '0.7rem', fontWeight: 600, padding: '2px 8px',
                    borderRadius: 99, color: '#fff',
                    background: diffColors[p.difficulty] || '#8a7a66',
                    flexShrink: 0,
                  }}>
                    {diffLabels[p.difficulty] || '?'}
                  </span>
                </button>
              );
            })}
            {principles.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: 20 }}>
                Geen boeken in deze sectie gevonden.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', background: '#1a1520' }}>
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%', cursor: 'crosshair' }}
        onClick={handleInteraction}
      />

      {/* HUD */}
      <div style={{
        position: 'absolute', top: 16, left: 16,
        display: 'flex', flexDirection: 'column', gap: 8, zIndex: 10,
      }}>
        <div style={{
          background: 'rgba(0,0,0,0.7)', color: '#fff',
          padding: '8px 16px', borderRadius: 10,
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.1rem', fontWeight: 700,
          backdropFilter: 'blur(8px)',
        }}>
          {currentRoomName}
        </div>
        {/* Totale voortgang */}
        <div style={{
          background: 'rgba(0,0,0,0.6)', color: 'rgba(255,255,255,0.8)',
          padding: '6px 12px', borderRadius: 8,
          fontSize: '0.75rem',
          backdropFilter: 'blur(8px)',
        }}>
          {(() => {
            const all = allPrinciples || [];
            const read = all.filter(p => getPrincipleProgress(p.id)?.activities?.read).length;
            return `${read}/${all.length} gelezen`;
          })()}
        </div>
      </div>

      {/* Controls hint — desktop only */}
      {!isMobile && (
        <div style={{
          position: 'absolute', bottom: 16, left: 16,
          background: 'rgba(0,0,0,0.65)', color: 'rgba(255,255,255,0.8)',
          padding: '8px 14px', borderRadius: 8,
          fontSize: '0.75rem', lineHeight: 1.6,
          backdropFilter: 'blur(8px)', zIndex: 10,
        }}>
          <span style={{ fontWeight: 600, color: '#fff' }}>WASD</span> Bewegen &nbsp;
          <span style={{ fontWeight: 600, color: '#fff' }}>E</span> Interactie &nbsp;
          <span style={{ fontWeight: 600, color: '#fff' }}>M</span> Minimap
        </div>
      )}

      {/* Mobile: virtual joystick visual */}
      {isMobile && joystickVisual && (
        <>
          {/* Joystick base */}
          <div style={{
            position: 'fixed',
            left: joystickVisual.originX - 55,
            top: joystickVisual.originY - 55,
            width: 110, height: 110,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '2px solid rgba(255,255,255,0.25)',
            pointerEvents: 'none', zIndex: 20,
          }} />
          {/* Joystick thumb */}
          <div style={{
            position: 'fixed',
            left: joystickVisual.thumbX - 24,
            top: joystickVisual.thumbY - 24,
            width: 48, height: 48,
            borderRadius: '50%',
            background: 'rgba(92,79,207,0.7)',
            border: '2px solid rgba(255,255,255,0.5)',
            boxShadow: '0 0 12px rgba(92,79,207,0.5)',
            pointerEvents: 'none', zIndex: 21,
          }} />
        </>
      )}

      {/* Mobile: joystick hint area */}
      {isMobile && !joystickVisual && (
        <div style={{
          position: 'absolute', bottom: 32, left: 32,
          width: 90, height: 90,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          border: '2px dashed rgba(255,255,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', zIndex: 10,
        }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', fontWeight: 600, textAlign: 'center', lineHeight: 1.3 }}>
            Sleep<br/>hier
          </span>
        </div>
      )}

      {/* Mobile: action button */}
      {isMobile && (
        <button
          onTouchStart={(e) => { e.stopPropagation(); handleInteraction(); }}
          style={{
            position: 'absolute', bottom: 36, right: 32,
            width: 72, height: 72,
            borderRadius: '50%',
            background: 'rgba(92,79,207,0.8)',
            border: '3px solid rgba(255,255,255,0.35)',
            color: '#fff', fontSize: '0.75rem', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 20,
            boxShadow: '0 4px 20px rgba(92,79,207,0.4)',
            touchAction: 'none',
          }}
        >
          Boeken
        </button>
      )}

      {/* Mobile: minimap toggle */}
      {isMobile && (
        <button
          onTouchStart={(e) => { e.stopPropagation(); setShowMinimap(prev => !prev); }}
          style={{
            position: 'absolute', bottom: 120, right: 40,
            width: 44, height: 44,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.6)',
            border: '2px solid rgba(255,255,255,0.2)',
            color: '#fff', fontSize: '1.1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 20,
            touchAction: 'none',
          }}
        >
          {showMinimap ? '🗺️' : '🗺️'}
        </button>
      )}

      {/* Back button */}
      <button
        onClick={() => navigate('/home')}
        style={{
          position: 'absolute', top: 16, right: 16,
          background: 'rgba(0,0,0,0.7)', color: '#fff',
          border: 'none', padding: '8px 16px', borderRadius: 10,
          cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600,
          backdropFilter: 'blur(8px)', zIndex: 10,
        }}
      >
        ← Terug
      </button>

      {renderMinimap()}
      {renderBookPanel()}
    </div>
  );
};

export default LibraryPage;
