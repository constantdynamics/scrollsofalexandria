import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { allPrinciples, getCategories, getPrinciplesByCategory } from '../data/principles';

// ── Constanten ──
const TILE = 40;
const PLAYER_SPEED = 3;
const PLAYER_SPRINT = 6;
const INTERACTION_DIST = 50;
const CAMERA_LERP = 0.08; // Smooth camera follow speed
const DAY_CYCLE_DURATION = 300; // 5 minutes per full day/night cycle

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

// Parallax background stars (generated once)
const NUM_STARS = 120;
const stars = Array.from({ length: NUM_STARS }, (_, i) => ({
  x: seededRandom(i, 0, 200) * 4000 - 500,
  y: seededRandom(0, i, 201) * 4000 - 500,
  size: 0.5 + seededRandom(i, i, 202) * 2,
  twinkleSpeed: 1 + seededRandom(i, 0, 203) * 3,
  twinkleOffset: seededRandom(i, 0, 204) * Math.PI * 2,
  alpha: 0.2 + seededRandom(i, 0, 205) * 0.5,
  hue: seededRandom(i, 0, 206) > 0.7 ? 220 + seededRandom(i, 0, 207) * 40 : 40 + seededRandom(i, 0, 208) * 20,
}));

// Category floor symbols (Unicode geometric shapes per category type)
const CATEGORY_FLOOR_SYMBOLS = {
  'Logica': '◇', 'Epistemologie': '◈', 'Psychologie': '◎',
  'Behavioral Economics': '◆', 'Retorica': '◉', 'Speltheorie': '⬡',
  'Statistiek': '▣', 'Besliskunde': '⬢', 'Systeemdenken': '◌',
  'Organisatie': '▥', 'Ethiek': '✦', 'Gedachte-experimenten': '◇',
};

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
  'Logica': '🔗', 'Epistemologie': '🧠', 'Psychologie': '🧩',
  'Behavioral Economics': '💰', 'Retorica': '🎭', 'Speltheorie': '♟️',
  'Statistiek': '📊', 'Besliskunde': '⚖️', 'Systeemdenken': '🔄',
  'Organisatie': '🏛️', 'Ethiek': '⭐', 'Gedachte-experimenten': '💭',
  'Zelfvertrouwen': '💪', 'Emotieregulatie': '🌊', 'Gedragseconomie': '🧮',
  'Sociale Psychologie': '👥', 'Cognitieve Psychologie': '🧬',
  'Economie': '📈', 'Sociologie': '🌐', 'Filosofie': '🏺',
  'Communicatie': '💬', 'Communicatiewetenschap': '📡', 'Leiderschap': '👑',
  'Organisatiepsychologie': '🏢', 'Persoonlijke Ontwikkeling': '🌱',
  'Politicologie': '🗳️', 'Politieke Filosofie': '⚔️', 'Bedrijfskunde': '💼',
  'Linguïstiek': '🗣️', 'Innovatiemanagement': '💡', 'Pedagogie': '📖',
  'Pedagogiek': '📖', 'Criminologie': '🔍', 'Rechtsfilosofie': '⚖️',
  'Rechtswetenschappen': '⚖️', 'Geschiedenis': '📜', 'Risicobeheer': '🛡️',
  'Wetenschapsfilosofie': '🔬', 'Narratologie': '📕', 'Positieve Psychologie': '☀️',
  'Ontwikkelingspsychologie': '🌿', 'Mindfulness': '🧘', 'Creativiteit': '🎨',
  'Neurowetenschappen': '🧪', 'Stoïcisme': '🗿', 'Existentialisme': '🌑',
  'Sportpsychologie': '🏅', 'Slaapwetenschap': '😴', 'Slaapgeneeskunde': '😴',
  'Motivatiepsychologie': '🔥', 'Conflicthantering': '🤝',
  'Metacognitie': '🪞', 'Schrijfkunst': '✍️', 'Presentatiekunst': '🎤',
  'Ondernemerschap': '🚀', 'Ecologie': '🌍', 'Wiskunde': '➗',
  'Natuurkunde': '⚛️', 'Levensfilosofie': '🌳', 'Tijdmanagement': '⏰',
  'Traumapsychologie': '💜', 'Relatiepsychologie': '❤️',
  'Contemplatieve Wetenschap': '🕊️', 'Levenslooppsychologie': '🔄',
  'Integratiepsychologie': '🔗', 'Ervaringspsychologie': '✨',
  'Levenspsychologie': '🌻', 'Dieptepsychologie': '🌊',
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
  const tileRoomIdx = Array.from({ length: mapH }, () => Array(mapW).fill(-1));
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
    // Mark tiles as belonging to this room
    for (let dy = 0; dy < roomH; dy++) {
      for (let dx = 0; dx < roomW; dx++) {
        if (ry + dy < mapH && rx + dx < mapW) tileRoomIdx[ry + dy][rx + dx] = i;
      }
    }

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
        if (map[y][x] !== FLOOR && map[y][x] !== CARPET && map[y][x] !== DOOR) {
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

  // Corridor fakkels langs de hoofdcorridor (elke 6 tiles)
  for (let y = marginY + 3; y < hallY - 2; y += 6) {
    // Links van corridor
    const leftX = corStartX - 1;
    if (leftX >= 0 && leftX < mapW && y >= 0 && y < mapH && map[y][leftX] === EMPTY) {
      map[y][leftX] = TORCH;
    }
    // Rechts van corridor
    const rightX = corStartX + corridorW;
    if (rightX >= 0 && rightX < mapW && y >= 0 && y < mapH && map[y][rightX] === EMPTY) {
      map[y][rightX] = TORCH;
    }
  }

  // Fountain position (center of entrance hall)
  const fountainX = hallX + Math.floor(hallW / 2);
  const fountainY = hallY + Math.floor(hallH / 2);

  return { map, tileRoomIdx, mapW, mapH, rooms, hallX, hallY, hallW, hallH, fountainX, fountainY };
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
  const getPrincipleProgressRef = useRef(getPrincipleProgress);
  const teleportTargetRef = useRef(null); // { x, y } smooth teleport destination
  const teleportFlashRef = useRef(0); // Flash intensity on arrival
  const interactPulseRef = useRef(0); // Pulse on interaction
  const zoomRef = useRef(1); // Camera zoom level
  const torchSparksRef = useRef([]); // { x, y, vx, vy, life, maxLife, size }
  const lastRoomRef = useRef(null); // Track room entry for camera pulse
  const roomZoomPulseRef = useRef(0); // Camera zoom pulse on room entry
  const discoveredRoomsRef = useRef(new Set()); // Track discovered rooms
  const celebrationParticlesRef = useRef([]); // Golden celebration particles
  const footprintsRef = useRef([]); // { x, y, angle, age }
  const lastFootprintRef = useRef({ x: 0, y: 0 }); // Track distance for spacing
  const batsRef = useRef([]); // { x, y, vx, vy, wingPhase, life }
  const wispsRef = useRef([]); // { x, y, baseX, baseY, phase, life, hue }
  const waterDripsRef = useRef([]); // { x, y, vy, age, splash }
  const sprintTrailRef = useRef([]); // { x, y, age, hue }
  const [toastMessage, setToastMessage] = useState(null); // { text, emoji, time }
  const toastTimeoutRef = useRef(null);

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentRoomName, setCurrentRoomName] = useState('Entreehal');
  const [showMinimap, setShowMinimap] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showStats, setShowStats] = useState(false);
  const searchInputRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  });
  const isMobileRef = useRef(typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches);
  const joystickRef = useRef({ dx: 0, dy: 0 });
  const joystickTouchIdRef = useRef(null);
  const joystickOriginRef = useRef({ x: 0, y: 0 });
  const [joystickVisual, setJoystickVisual] = useState(null); // { originX, originY, thumbX, thumbY }
  const pinchRef = useRef({ active: false, startDist: 0, startZoom: 1 });

  getPrincipleProgressRef.current = getPrincipleProgress;

  const categories = useMemo(() => getCategories('academic'), []);

  // Cache: principles per category (static, computed once)
  const roomPrinciplesMap = useMemo(() => {
    const map = {};
    for (const cat of categories) {
      map[cat] = getPrinciplesByCategory(cat, 'academic');
    }
    return map;
  }, [categories]);

  const library = useMemo(() => generateLibrary(categories), [categories]);
  const { map, tileRoomIdx, mapW, mapH, rooms, hallX, hallY, hallW, hallH, fountainX, fountainY } = library;

  // Init player positie (herstel uit sessionStorage als beschikbaar)
  useEffect(() => {
    const saved = sessionStorage.getItem('libraryPlayerPos');
    let startX, startY;
    if (saved) {
      try {
        const pos = JSON.parse(saved);
        startX = pos.x;
        startY = pos.y;
      } catch {
        startX = (hallX + hallW / 2) * TILE;
        startY = (hallY + hallH / 2) * TILE;
      }
    } else {
      startX = (hallX + hallW / 2) * TILE;
      startY = (hallY + hallH / 2) * TILE;
    }
    playerRef.current = { x: startX, y: startY, dirX: 0, dirY: 1, bobTime: 0, moving: false };
    cameraRef.current = { x: startX, y: startY };
  }, [hallX, hallY, hallW, hallH]);

  // Detect touch device
  useEffect(() => {
    const checkTouch = () => { setIsMobile(true); isMobileRef.current = true; };
    window.addEventListener('touchstart', checkTouch, { once: true });
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
      // Pinch-to-zoom
      if (e.touches.length === 2) {
        const t1 = e.touches[0], t2 = e.touches[1];
        const dist = Math.sqrt((t1.clientX - t2.clientX) ** 2 + (t1.clientY - t2.clientY) ** 2);
        if (!pinchRef.current.active) {
          pinchRef.current = { active: true, startDist: dist, startZoom: zoomRef.current };
        } else {
          const scale = dist / pinchRef.current.startDist;
          zoomRef.current = Math.max(0.4, Math.min(2, pinchRef.current.startZoom * scale));
        }
        return;
      }
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
      if (e.touches.length < 2) pinchRef.current.active = false;
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

  const handleInteraction = useCallback(() => {
    const p = playerRef.current;
    for (const room of rooms) {
      const dx = p.x - room.centerX;
      const dy = p.y - room.centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < (room.w / 2) * TILE) {
        setSelectedRoom(room.name);
        interactPulseRef.current = 1.0;
        return;
      }
    }
  }, [rooms]);

  // Zoom handler
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.05 : 0.05;
      zoomRef.current = Math.max(0.4, Math.min(2, zoomRef.current + delta));
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Keyboard handlers
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't handle game keys when search is open
      if (showSearch) {
        if (e.key === 'Escape') {
          setShowSearch(false);
          setSearchQuery('');
        }
        return;
      }
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'].includes(e.key)) {
        e.preventDefault();
        keysRef.current.add(e.key.toLowerCase());
      }
      if (e.key === 'Shift') keysRef.current.add('shift');
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
      if (e.key === '/' || e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        setShowSearch(true);
        setTimeout(() => searchInputRef.current?.focus(), 50);
      }
      if (e.key === 'q' || e.key === 'Q') {
        setShowStats(prev => !prev);
      }
      if (e.key === 'Home' || e.key === 'h' || e.key === 'H') {
        teleportTargetRef.current = { x: (hallX + hallW / 2) * TILE, y: (hallY + hallH / 2) * TILE };
      }
    };
    const handleKeyUp = (e) => {
      keysRef.current.delete(e.key.toLowerCase());
      if (e.key === 'Shift') keysRef.current.delete('shift');
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleInteraction, showSearch]);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');


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
      const sprinting = keys.has('shift');
      const speed = sprinting ? PLAYER_SPRINT : PLAYER_SPEED;
      let dx = 0, dy = 0;
      if (keys.has('w') || keys.has('arrowup')) dy -= speed;
      if (keys.has('s') || keys.has('arrowdown')) dy += speed;
      if (keys.has('a') || keys.has('arrowleft')) dx -= speed;
      if (keys.has('d') || keys.has('arrowright')) dx += speed;

      // Virtual joystick input
      const joy = joystickRef.current;
      if (joy.dx !== 0 || joy.dy !== 0) {
        dx += joy.dx * speed;
        dy += joy.dy * speed;
      }

      // Normalize diagonal
      const mag = Math.sqrt(dx * dx + dy * dy);
      if (mag > speed) {
        dx = (dx / mag) * speed;
        dy = (dy / mag) * speed;
      }

      const player = playerRef.current;
      const isMoving = Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1;

      // Track direction for eyes
      if (isMoving) {
        player.dirX = dx;
        player.dirY = dy;
        player.bobTime += sprinting ? 0.22 : 0.15;
        player.moving = true;
        // Spawn footstep dust (more when sprinting)
        if (Math.random() < (sprinting ? 0.6 : 0.3)) {
          footstepDustRef.current.push({
            x: player.x + (Math.random() - 0.5) * 8,
            y: player.y + 12 + Math.random() * 4,
            age: 0,
            size: 2 + Math.random() * 3,
            vx: -dx * 0.3 + (Math.random() - 0.5) * 0.5,
            vy: -0.3 - Math.random() * 0.3,
          });
        }
        // Spawn footprints (spaced every ~20px)
        const fpDx = player.x - lastFootprintRef.current.x;
        const fpDy = player.y - lastFootprintRef.current.y;
        if (fpDx * fpDx + fpDy * fpDy > 400) {
          const angle = Math.atan2(dy, dx);
          footprintsRef.current.push({ x: player.x, y: player.y + 10, angle, age: 0 });
          lastFootprintRef.current = { x: player.x, y: player.y };
          if (footprintsRef.current.length > 80) footprintsRef.current.shift();
        }
      } else {
        player.moving = false;
      }

      // Update footprints
      for (let i = footprintsRef.current.length - 1; i >= 0; i--) {
        footprintsRef.current[i].age += 1 / 60;
        if (footprintsRef.current[i].age > 8) footprintsRef.current.splice(i, 1);
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

      // Smooth teleport: move player towards target
      const tp = teleportTargetRef.current;
      if (tp) {
        const tdx = tp.x - player.x;
        const tdy = tp.y - player.y;
        const tdist = Math.sqrt(tdx * tdx + tdy * tdy);
        if (tdist < 5) {
          player.x = tp.x;
          player.y = tp.y;
          teleportTargetRef.current = null;
          teleportFlashRef.current = 0.3; // Flash on arrival
        } else {
          const tSpeed = Math.max(15, tdist * 0.12);
          player.x += (tdx / tdist) * tSpeed;
          player.y += (tdy / tdist) * tSpeed;
        }
      }

      // Room entry zoom pulse decay
      if (roomZoomPulseRef.current > 0) {
        roomZoomPulseRef.current *= 0.93;
        if (roomZoomPulseRef.current < 0.005) roomZoomPulseRef.current = 0;
      }

      // Smooth camera (lerp) with zoom
      const zoom = zoomRef.current + roomZoomPulseRef.current;
      const cam = cameraRef.current;
      const lerpSpeed = tp ? 0.15 : CAMERA_LERP;
      const targetCamX = player.x - w / 2 / zoom;
      const targetCamY = player.y - h / 2 / zoom;
      cam.x += (targetCamX - cam.x) * lerpSpeed;
      cam.y += (targetCamY - cam.y) * lerpSpeed;
      const camX = cam.x;
      const camY = cam.y;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = COLORS[EMPTY];
      ctx.fillRect(0, 0, w, h);

      // Parallax star background (before zoom, screen-space with slow parallax)
      for (const star of stars) {
        const parallax = 0.15;
        const spx = ((star.x - camX * parallax) % w + w) % w;
        const spy = ((star.y - camY * parallax) % h + h) % h;
        const twinkle = 0.5 + 0.5 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const a = star.alpha * twinkle;
        ctx.fillStyle = `hsla(${star.hue}, 60%, 80%, ${a})`;
        ctx.beginPath();
        ctx.arc(spx, spy, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Apply zoom
      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.scale(zoom, zoom);
      ctx.translate(-w / 2, -h / 2);

      // Visible tile range (adjusted for zoom)
      const viewW = w / zoom;
      const viewH = h / zoom;
      const startTX = Math.max(0, Math.floor(camX / TILE) - 2);
      const endTX = Math.min(mapW, Math.ceil((camX + viewW) / TILE) + 2);
      const startTY = Math.max(0, Math.floor(camY / TILE) - 2);
      const endTY = Math.min(mapH, Math.ceil((camY + viewH) / TILE) + 2);

      // Draw tiles
      for (let ty = startTY; ty < endTY; ty++) {
        for (let tx = startTX; tx < endTX; tx++) {
          const tile = map[ty][tx];
          const sx = tx * TILE - camX;
          const sy = ty * TILE - camY;

          if (tile === FLOOR) {
            ctx.fillStyle = (tx + ty) % 2 === 0 ? COLORS[FLOOR] : COLORS.floorAlt;
            ctx.fillRect(sx, sy, TILE, TILE);
            // Subtle room tint for floor tiles inside rooms
            const floorRoomIdx = tileRoomIdx[ty]?.[tx] ?? -1;
            if (floorRoomIdx >= 0 && rooms[floorRoomIdx]) {
              ctx.fillStyle = `hsla(${rooms[floorRoomIdx].catHue}, 20%, 50%, 0.04)`;
              ctx.fillRect(sx, sy, TILE, TILE);
            }
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
            // Base wall with subtle color variation
            const wallVar = seededRandom(tx, ty, 300) * 8 - 4;
            ctx.fillStyle = `rgb(${107 + wallVar},${91 + wallVar},${74 + wallVar})`;
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
            // Wall cracks (rare)
            if (seededRandom(tx, ty, 310) > 0.88) {
              ctx.strokeStyle = 'rgba(0,0,0,0.1)';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              const cx1 = sx + seededRandom(tx, ty, 311) * TILE * 0.3 + TILE * 0.2;
              const cy1 = sy + seededRandom(tx, ty, 312) * TILE * 0.3 + TILE * 0.1;
              ctx.moveTo(cx1, cy1);
              ctx.lineTo(cx1 + seededRandom(tx, ty, 313) * 10 - 3, cy1 + seededRandom(tx, ty, 314) * 12);
              ctx.lineTo(cx1 + seededRandom(tx, ty, 315) * 8, cy1 + seededRandom(tx, ty, 316) * 16);
              ctx.stroke();
            }
            // Moss patches (very rare, on lower walls)
            if (seededRandom(tx, ty, 320) > 0.93) {
              ctx.fillStyle = 'rgba(45,100,50,0.12)';
              ctx.beginPath();
              ctx.ellipse(sx + seededRandom(tx, ty, 321) * TILE * 0.6 + TILE * 0.2,
                sy + TILE * 0.7, 4, 3, 0, 0, Math.PI * 2);
              ctx.fill();
            }
          } else if (tile === BOOKSHELF) {
            // Kast achtergrond
            ctx.fillStyle = COLORS[BOOKSHELF];
            ctx.fillRect(sx, sy, TILE, TILE);
            // Boeken - deterministic heights, colored by room category
            const roomIdx = tileRoomIdx[ty]?.[tx] ?? -1;
            const roomHue = roomIdx >= 0 && rooms[roomIdx] ? rooms[roomIdx].catHue : 0;
            const booksPerShelf = 5;
            const bookW = (TILE - 4) / booksPerShelf;
            for (let b = 0; b < booksPerShelf; b++) {
              // Mix category hue with variation per book
              const hueShift = seededRandom(tx, ty, b * 17 + 3) * 60 - 30;
              const sat = 45 + seededRandom(tx, ty, b * 11 + 5) * 25;
              const lit = 35 + seededRandom(tx, ty, b * 7 + 1) * 20;
              ctx.fillStyle = `hsl(${roomHue + hueShift}, ${sat}%, ${lit}%)`;
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
            // Sparkle effect on bookshelves with unread content
            const sparkRoomIdx = tileRoomIdx[ty]?.[tx] ?? -1;
            if (sparkRoomIdx >= 0 && rooms[sparkRoomIdx]) {
              const sparkRoom = rooms[sparkRoomIdx];
              const sparkRP = roomPrinciplesMap[sparkRoom.name] || [];
              const unreadCount = sparkRP.filter(p => !getPrincipleProgressRef.current(p.id)?.activities?.read).length;
              if (unreadCount > 0) {
                // Twinkling sparkle at random position on shelf
                const sparkSeed = seededRandom(tx, ty, 500);
                const sparkPhase = (time * 2 + sparkSeed * 10) % 4;
                if (sparkPhase < 1) {
                  const sparkAlpha = Math.sin(sparkPhase * Math.PI) * 0.6;
                  const spkX = sx + 4 + sparkSeed * (TILE - 8);
                  const spkY = sy + 4 + seededRandom(tx, ty, 501) * (TILE - 8);
                  ctx.fillStyle = `rgba(255,255,200,${sparkAlpha})`;
                  // 4-point star sparkle
                  ctx.beginPath();
                  ctx.moveTo(spkX, spkY - 3);
                  ctx.lineTo(spkX + 1, spkY - 1);
                  ctx.lineTo(spkX + 3, spkY);
                  ctx.lineTo(spkX + 1, spkY + 1);
                  ctx.lineTo(spkX, spkY + 3);
                  ctx.lineTo(spkX - 1, spkY + 1);
                  ctx.lineTo(spkX - 3, spkY);
                  ctx.lineTo(spkX - 1, spkY - 1);
                  ctx.closePath();
                  ctx.fill();
                }
              }
            }
          } else if (tile === DOOR) {
            // Category-colored glow underneath door
            const doorRoomIdx = tileRoomIdx[ty]?.[tx] ?? -1;
            const doorHue = doorRoomIdx >= 0 && rooms[doorRoomIdx] ? rooms[doorRoomIdx].catHue : 40;
            const doorGlow = ctx.createRadialGradient(
              sx + TILE / 2, sy + TILE / 2, 2,
              sx + TILE / 2, sy + TILE / 2, TILE * 1.5
            );
            doorGlow.addColorStop(0, `hsla(${doorHue}, 60%, 60%, 0.2)`);
            doorGlow.addColorStop(0.5, `hsla(${doorHue}, 50%, 50%, 0.08)`);
            doorGlow.addColorStop(1, `hsla(${doorHue}, 40%, 40%, 0)`);
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
            // Diamond pattern
            ctx.fillStyle = 'rgba(200,160,80,0.15)';
            ctx.beginPath();
            ctx.moveTo(sx + TILE / 2, sy + 4);
            ctx.lineTo(sx + TILE - 4, sy + TILE / 2);
            ctx.lineTo(sx + TILE / 2, sy + TILE - 4);
            ctx.lineTo(sx + 4, sy + TILE / 2);
            ctx.closePath();
            ctx.fill();
            // Inner diamond
            ctx.fillStyle = 'rgba(160,120,60,0.1)';
            ctx.beginPath();
            ctx.moveTo(sx + TILE / 2, sy + 10);
            ctx.lineTo(sx + TILE - 10, sy + TILE / 2);
            ctx.lineTo(sx + TILE / 2, sy + TILE - 10);
            ctx.lineTo(sx + 10, sy + TILE / 2);
            ctx.closePath();
            ctx.fill();
            // Gold thread border
            ctx.strokeStyle = 'rgba(200,160,80,0.12)';
            ctx.lineWidth = 1;
            ctx.strokeRect(sx + 2, sy + 2, TILE - 4, TILE - 4);
            // Carpet fringe at edges (check neighboring tiles)
            const aboveCarpet = ty > 0 && map[ty - 1][tx] === CARPET;
            const belowCarpet = ty < mapH - 1 && map[ty + 1][tx] === CARPET;
            if (!aboveCarpet) {
              for (let fi = 0; fi < 6; fi++) {
                ctx.fillStyle = 'rgba(200,160,80,0.2)';
                ctx.fillRect(sx + 3 + fi * 6, sy - 2, 2, 4);
              }
            }
            if (!belowCarpet) {
              for (let fi = 0; fi < 6; fi++) {
                ctx.fillStyle = 'rgba(200,160,80,0.2)';
                ctx.fillRect(sx + 3 + fi * 6, sy + TILE - 2, 2, 4);
              }
            }
            // Ornate corner dots
            ctx.fillStyle = 'rgba(200,160,80,0.18)';
            ctx.beginPath();
            ctx.arc(sx + 8, sy + 8, 1.5, 0, Math.PI * 2);
            ctx.arc(sx + TILE - 8, sy + 8, 1.5, 0, Math.PI * 2);
            ctx.arc(sx + 8, sy + TILE - 8, 1.5, 0, Math.PI * 2);
            ctx.arc(sx + TILE - 8, sy + TILE - 8, 1.5, 0, Math.PI * 2);
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
            // Leaves (animated multi-layer sway)
            const sway = Math.sin(time * 1.5 + tx * 2) * 2.5;
            const sway2 = Math.sin(time * 2.1 + tx * 3 + 1) * 1.5;
            // Stem
            ctx.strokeStyle = '#2d6a3e';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(sx + TILE / 2, sy + TILE * 0.52);
            ctx.quadraticCurveTo(sx + TILE / 2 + sway * 0.3, sy + TILE * 0.42, sx + TILE / 2 + sway * 0.5, sy + TILE * 0.35);
            ctx.stroke();
            // Main foliage
            ctx.fillStyle = COLORS[PLANT];
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2 + sway, sy + TILE * 0.33, 9, 12, sway * 0.02, 0, Math.PI * 2);
            ctx.fill();
            // Side leaves
            ctx.fillStyle = '#3aa85e';
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2 - 6 + sway * 0.7, sy + TILE * 0.28, 5, 8, -0.3 + sway2 * 0.05, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2 + 6 + sway * 0.7, sy + TILE * 0.28, 5, 8, 0.3 + sway2 * 0.05, 0, Math.PI * 2);
            ctx.fill();
            // Tiny highlight leaves
            ctx.fillStyle = '#4cc86e';
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2 + sway * 0.8 - 2, sy + TILE * 0.26, 3, 4, -0.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2 + sway * 0.8 + 3, sy + TILE * 0.24, 2, 3, 0.4, 0, Math.PI * 2);
            ctx.fill();
          } else if (tile === TORCH) {
            // Wall background
            ctx.fillStyle = COLORS[WALL];
            ctx.fillRect(sx, sy, TILE, TILE);
            ctx.fillStyle = COLORS.wallTop;
            ctx.fillRect(sx, sy, TILE, 6);
            // Torch bracket (more detailed)
            ctx.fillStyle = '#3a2a1a';
            ctx.fillRect(sx + TILE / 2 - 3, sy + TILE * 0.3, 6, TILE * 0.42);
            ctx.fillStyle = '#5a4a3a';
            ctx.fillRect(sx + TILE / 2 - 1, sy + TILE * 0.3, 2, TILE * 0.42);
            // Cup/holder at top
            ctx.fillStyle = '#4a3a2a';
            ctx.beginPath();
            ctx.moveTo(sx + TILE / 2 - 6, sy + TILE * 0.32);
            ctx.lineTo(sx + TILE / 2 + 6, sy + TILE * 0.32);
            ctx.lineTo(sx + TILE / 2 + 4, sy + TILE * 0.28);
            ctx.lineTo(sx + TILE / 2 - 4, sy + TILE * 0.28);
            ctx.closePath();
            ctx.fill();
            // Multi-layered flame
            const flicker = Math.sin(time * 8 + tx * 3) * 2 + Math.sin(time * 12 + ty * 5) * 1;
            const flicker2 = Math.sin(time * 15 + tx * 7) * 1;
            const flameH = 11 + flicker;
            const flameY = sy + TILE * 0.28 - flameH;
            // Outer flame (red-orange)
            const outerGrad = ctx.createRadialGradient(
              sx + TILE / 2, flameY + flameH * 0.6, 1,
              sx + TILE / 2, flameY + flameH * 0.6, flameH * 0.9
            );
            outerGrad.addColorStop(0, 'rgba(255,120,20,0.7)');
            outerGrad.addColorStop(0.6, 'rgba(255,60,10,0.3)');
            outerGrad.addColorStop(1, 'rgba(200,30,0,0)');
            ctx.fillStyle = outerGrad;
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2 + flicker2 * 0.3, flameY + flameH * 0.6, 7 + flicker * 0.4, flameH * 0.55, 0, 0, Math.PI * 2);
            ctx.fill();
            // Inner flame (yellow-white core)
            const innerGrad = ctx.createRadialGradient(
              sx + TILE / 2, flameY + flameH * 0.6, 0,
              sx + TILE / 2, flameY + flameH * 0.6, flameH * 0.5
            );
            innerGrad.addColorStop(0, 'rgba(255,255,200,0.95)');
            innerGrad.addColorStop(0.3, 'rgba(255,220,100,0.8)');
            innerGrad.addColorStop(0.7, 'rgba(255,160,40,0.4)');
            innerGrad.addColorStop(1, 'rgba(255,100,20,0)');
            ctx.fillStyle = innerGrad;
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2, flameY + flameH * 0.65, 4 + flicker * 0.2, flameH * 0.35, 0, 0, Math.PI * 2);
            ctx.fill();
            // Flame tip (flickering upward tongue)
            const tipY = flameY + 2 + Math.sin(time * 10 + tx) * 2;
            ctx.fillStyle = 'rgba(255,200,80,0.4)';
            ctx.beginPath();
            ctx.ellipse(sx + TILE / 2 + flicker2, tipY, 2, 4, 0, 0, Math.PI * 2);
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

      // Dust motes visible in torch light cones
      for (let ty2 = startTY; ty2 < endTY; ty2++) {
        for (let tx2 = startTX; tx2 < endTX; tx2++) {
          if (map[ty2][tx2] === TORCH) {
            const tcx = tx2 * TILE + TILE / 2 - camX;
            const tcy = ty2 * TILE + TILE * 0.25 - camY;
            // 4 dust motes per torch
            for (let dm = 0; dm < 4; dm++) {
              const dmSeed = seededRandom(tx2, ty2, 400 + dm);
              const dmAngle = (time * 0.3 + dmSeed * 6.28 + dm * 1.57) % (Math.PI * 2);
              const dmDist = TILE * (0.5 + dmSeed * 1.5);
              const dmx = tcx + Math.cos(dmAngle) * dmDist;
              const dmy = tcy + Math.sin(dmAngle) * dmDist * 0.6 + Math.sin(time * 0.8 + dm) * 4;
              const dmAlpha = 0.2 + Math.sin(time * 1.5 + dm * 2) * 0.1;
              ctx.fillStyle = `rgba(255,220,150,${dmAlpha})`;
              ctx.beginPath();
              ctx.arc(dmx, dmy, 1 + dmSeed * 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Cobwebs in room corners
      for (const room of rooms) {
        const rcx = room.x * TILE - camX;
        const rcy = room.y * TILE - camY;
        if (rcx > -room.w * TILE && rcx < viewW + 50 && rcy > -room.h * TILE && rcy < viewH + 50) {
          // Top-left corner cobweb (deterministic per room)
          if (seededRandom(room.x, room.y, 600) > 0.5) {
            const cwx = (room.x + 1) * TILE - camX;
            const cwy = (room.y + 1) * TILE - camY;
            ctx.strokeStyle = 'rgba(200,200,200,0.08)';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(cwx, cwy);
            ctx.quadraticCurveTo(cwx + 12, cwy + 8, cwx + 20, cwy);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cwx, cwy);
            ctx.quadraticCurveTo(cwx + 8, cwy + 12, cwx, cwy + 20);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cwx, cwy);
            ctx.quadraticCurveTo(cwx + 10, cwy + 10, cwx + 16, cwy + 16);
            ctx.stroke();
            // Cross threads
            ctx.beginPath();
            ctx.moveTo(cwx + 6, cwy + 2);
            ctx.quadraticCurveTo(cwx + 7, cwy + 7, cwx + 2, cwy + 6);
            ctx.stroke();
          }
          // Top-right corner cobweb
          if (seededRandom(room.x, room.y, 601) > 0.6) {
            const cwx2 = (room.x + room.w - 1) * TILE + TILE - camX;
            const cwy2 = (room.y + 1) * TILE - camY;
            ctx.strokeStyle = 'rgba(200,200,200,0.08)';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(cwx2, cwy2);
            ctx.quadraticCurveTo(cwx2 - 12, cwy2 + 8, cwx2 - 20, cwy2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cwx2, cwy2);
            ctx.quadraticCurveTo(cwx2 - 8, cwy2 + 12, cwx2, cwy2 + 20);
            ctx.stroke();
          }
        }
      }

      // Category symbols etched in room floors
      for (const room of rooms) {
        const rsx = room.centerX - camX;
        const rsy = room.centerY + TILE * 1.2 - camY;
        if (rsx > -100 && rsx < viewW + 100 && rsy > -100 && rsy < viewH + 100) {
          const sym = CATEGORY_FLOOR_SYMBOLS[room.name] || '◈';
          ctx.font = '20px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = `hsla(${room.catHue}, 25%, 50%, 0.06)`;
          ctx.fillText(sym, rsx, rsy + 6);
          // Circular etch ring around symbol
          ctx.strokeStyle = `hsla(${room.catHue}, 20%, 45%, 0.05)`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(rsx, rsy, 16, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Golden ornate border on 100% mastered rooms
      for (const room of rooms) {
        const rmRP = roomPrinciplesMap[room.name] || [];
        if (rmRP.length === 0) continue;
        const rmAvg = rmRP.reduce((s, p) => s + (getPrincipleProgressRef.current(p.id)?.masteryPercentage || 0), 0) / rmRP.length;
        if (rmAvg < 100) continue;
        const bx = room.x * TILE - camX;
        const by = room.y * TILE - camY;
        const bw = room.w * TILE;
        const bh = room.h * TILE;
        if (bx > -bw && bx < viewW + 50 && by > -bh && by < viewH + 50) {
          const goldPulse = 0.4 + Math.sin(time * 1.5) * 0.15;
          // Outer glow
          ctx.strokeStyle = `rgba(201,168,15,${goldPulse * 0.4})`;
          ctx.lineWidth = 4;
          ctx.strokeRect(bx - 2, by - 2, bw + 4, bh + 4);
          // Inner gold line
          ctx.strokeStyle = `rgba(255,215,0,${goldPulse * 0.6})`;
          ctx.lineWidth = 1.5;
          ctx.strokeRect(bx + 1, by + 1, bw - 2, bh - 2);
          // Corner ornaments
          const corners = [[bx, by], [bx + bw, by], [bx, by + bh], [bx + bw, by + bh]];
          for (const [cx, cy] of corners) {
            ctx.fillStyle = `rgba(255,215,0,${goldPulse * 0.5})`;
            ctx.beginPath();
            ctx.arc(cx, cy, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Animated fountain in entrance hall
      const ftx = fountainX * TILE - camX;
      const fty = fountainY * TILE - camY;
      if (ftx > -TILE * 2 && ftx < viewW + TILE * 2 && fty > -TILE * 2 && fty < viewH + TILE * 2) {
        // Basin
        ctx.fillStyle = 'rgba(100,140,180,0.3)';
        ctx.beginPath();
        ctx.ellipse(ftx + TILE / 2, fty + TILE * 0.7, TILE * 0.45, TILE * 0.2, 0, 0, Math.PI * 2);
        ctx.fill();
        // Basin rim
        ctx.strokeStyle = '#8a7a66';
        ctx.lineWidth = 2;
        ctx.stroke();
        // Water ripples
        for (let r = 0; r < 3; r++) {
          const rippleR = (TILE * 0.15 + r * 6 + time * 8) % (TILE * 0.4);
          const rippleA = Math.max(0, 0.3 - rippleR / (TILE * 0.5));
          ctx.strokeStyle = `rgba(150,200,255,${rippleA})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(ftx + TILE / 2, fty + TILE * 0.7, rippleR, rippleR * 0.45, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
        // Center pillar
        ctx.fillStyle = '#8a7a66';
        ctx.fillRect(ftx + TILE / 2 - 3, fty + TILE * 0.3, 6, TILE * 0.4);
        // Water jet
        const jetH = 8 + Math.sin(time * 4) * 3;
        const jetGrad = ctx.createLinearGradient(ftx + TILE / 2, fty + TILE * 0.3 - jetH, ftx + TILE / 2, fty + TILE * 0.3);
        jetGrad.addColorStop(0, 'rgba(150,200,255,0)');
        jetGrad.addColorStop(0.5, 'rgba(150,200,255,0.5)');
        jetGrad.addColorStop(1, 'rgba(150,200,255,0.3)');
        ctx.fillStyle = jetGrad;
        ctx.fillRect(ftx + TILE / 2 - 2, fty + TILE * 0.3 - jetH, 4, jetH);
        // Water droplets
        for (let d = 0; d < 4; d++) {
          const dAngle = (time * 2 + d * 1.57) % (Math.PI * 2);
          const dR = 4 + Math.sin(time * 3 + d) * 2;
          const ddx = Math.cos(dAngle) * dR;
          const ddy = Math.sin(dAngle) * 1.5 + (fty + TILE * 0.3 - jetH + 2);
          ctx.fillStyle = 'rgba(150,200,255,0.6)';
          ctx.beginPath();
          ctx.arc(ftx + TILE / 2 + ddx, ddy + d * 3, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Floating book particles in rooms (subtle floating books)
      for (const room of rooms) {
        const rlx = room.centerX - camX;
        const rly = room.centerY - camY;
        if (rlx > -200 && rlx < viewW + 200 && rly > -200 && rly < viewH + 200) {
          const rp = roomPrinciplesMap[room.name] || [];
          if (rp.length > 0) {
            const numBooks = Math.min(3, rp.length);
            for (let bi = 0; bi < numBooks; bi++) {
              const bx = room.centerX + Math.sin(time * 0.5 + bi * 2.1) * (room.w * TILE * 0.2) - camX;
              const by = room.centerY + Math.cos(time * 0.7 + bi * 1.7) * (room.h * TILE * 0.15) - 10 + Math.sin(time * 1.2 + bi) * 4 - camY;
              const bAngle = Math.sin(time * 0.8 + bi * 3) * 0.2;
              ctx.save();
              ctx.translate(bx, by);
              ctx.rotate(bAngle);
              ctx.globalAlpha = 0.15;
              ctx.fillStyle = `hsl(${room.catHue}, 40%, 45%)`;
              ctx.fillRect(-5, -3, 10, 6);
              ctx.fillStyle = 'rgba(255,255,255,0.3)';
              ctx.fillRect(-5, -3, 1, 6); // Spine
              ctx.globalAlpha = 1;
              ctx.restore();
            }
          }
        }
      }

      // Corridor wall banners (decorative overlays on corridor walls)
      const corCX = Math.floor(mapW / 2);
      const corW2 = 4;
      for (let ty = startTY; ty < endTY; ty++) {
        // Left corridor wall banners
        const lx = corCX - Math.floor(corW2 / 2) - 1;
        if (lx >= 0 && lx < mapW && ty >= 0 && ty < mapH && map[ty][lx] === WALL) {
          if (seededRandom(lx, ty, 777) > 0.85) {
            const bsx = lx * TILE - camX;
            const bsy = ty * TILE - camY;
            const bannerHue = seededRandom(lx, ty, 123) * 360;
            // Banner fabric
            ctx.fillStyle = `hsla(${bannerHue}, 45%, 35%, 0.7)`;
            ctx.fillRect(bsx + TILE * 0.3, bsy + 4, TILE * 0.4, TILE - 6);
            // Banner emblem
            ctx.fillStyle = `hsla(${bannerHue + 40}, 50%, 60%, 0.5)`;
            ctx.beginPath();
            ctx.arc(bsx + TILE * 0.5, bsy + TILE * 0.45, 5, 0, Math.PI * 2);
            ctx.fill();
            // Banner rod
            ctx.fillStyle = '#8a7a66';
            ctx.fillRect(bsx + TILE * 0.25, bsy + 2, TILE * 0.5, 3);
            // Banner point
            ctx.fillStyle = `hsla(${bannerHue}, 45%, 35%, 0.7)`;
            ctx.beginPath();
            ctx.moveTo(bsx + TILE * 0.3, bsy + TILE - 2);
            ctx.lineTo(bsx + TILE * 0.5, bsy + TILE + 4);
            ctx.lineTo(bsx + TILE * 0.7, bsy + TILE - 2);
            ctx.closePath();
            ctx.fill();
          }
        }
        // Right corridor wall banners
        const rx = corCX + Math.floor(corW2 / 2);
        if (rx >= 0 && rx < mapW && ty >= 0 && ty < mapH && map[ty][rx] === WALL) {
          if (seededRandom(rx, ty, 888) > 0.85) {
            const bsx = rx * TILE - camX;
            const bsy = ty * TILE - camY;
            const bannerHue = seededRandom(rx, ty, 456) * 360;
            ctx.fillStyle = `hsla(${bannerHue}, 45%, 35%, 0.7)`;
            ctx.fillRect(bsx + TILE * 0.3, bsy + 4, TILE * 0.4, TILE - 6);
            ctx.fillStyle = `hsla(${bannerHue + 40}, 50%, 60%, 0.5)`;
            ctx.beginPath();
            ctx.arc(bsx + TILE * 0.5, bsy + TILE * 0.45, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#8a7a66';
            ctx.fillRect(bsx + TILE * 0.25, bsy + 2, TILE * 0.5, 3);
            ctx.fillStyle = `hsla(${bannerHue}, 45%, 35%, 0.7)`;
            ctx.beginPath();
            ctx.moveTo(bsx + TILE * 0.3, bsy + TILE - 2);
            ctx.lineTo(bsx + TILE * 0.5, bsy + TILE + 4);
            ctx.lineTo(bsx + TILE * 0.7, bsy + TILE - 2);
            ctx.closePath();
            ctx.fill();
          }
        }
      }

      // Torch spark particles - spawn from visible torches
      for (let ty = startTY; ty < endTY; ty++) {
        for (let tx = startTX; tx < endTX; tx++) {
          if (map[ty][tx] === TORCH && Math.random() < 0.04) {
            torchSparksRef.current.push({
              x: tx * TILE + TILE / 2 + (Math.random() - 0.5) * 6,
              y: ty * TILE + TILE * 0.2,
              vx: (Math.random() - 0.5) * 0.8,
              vy: -0.5 - Math.random() * 1.2,
              life: 0,
              maxLife: 0.4 + Math.random() * 0.6,
              size: 1 + Math.random() * 2,
            });
          }
        }
      }
      // Update and render torch sparks
      const sparks = torchSparksRef.current;
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life += 1 / 60;
        s.x += s.vx;
        s.y += s.vy;
        s.vx += (Math.random() - 0.5) * 0.1;
        if (s.life >= s.maxLife) { sparks.splice(i, 1); continue; }
        const t2 = 1 - s.life / s.maxLife;
        const spx = s.x - camX;
        const spy = s.y - camY;
        if (spx > -20 && spx < viewW + 20 && spy > -20 && spy < viewH + 20) {
          ctx.fillStyle = `rgba(255,${160 + Math.floor(t2 * 60)},${20 + Math.floor(t2 * 40)},${t2 * 0.8})`;
          ctx.beginPath();
          ctx.arc(spx, spy, s.size * t2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      // Cap sparks count
      if (sparks.length > 150) sparks.splice(0, sparks.length - 150);

      // Floor/section numbers along corridor (use rooms[0,3,6,...] y positions)
      const corCenterX = Math.floor(mapW / 2) * TILE + TILE / 2;
      const seenRows = new Set();
      for (let ri = 0; ri < rooms.length; ri++) {
        const rowNum = Math.floor(ri / 3);
        if (seenRows.has(rowNum)) continue;
        seenRows.add(rowNum);
        const ry = rooms[ri].y * TILE + TILE;
        const sx = corCenterX - camX;
        const sy = ry - camY;
        if (sx > -100 && sx < viewW + 100 && sy > -50 && sy < viewH + 50) {
          ctx.font = '700 9px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = 'rgba(255,255,255,0.18)';
          ctx.fillText(`── Rij ${rowNum + 1} ──`, sx, sy);
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

      // Room labels + progress bars + mastery glow
      const getProgress = getPrincipleProgressRef.current;
      for (const room of rooms) {
        const labelX = room.centerX - camX;
        const labelY = room.centerY - camY - 8;
        if (labelX > -200 && labelX < w + 200 && labelY > -100 && labelY < h + 100) {
          // Compute room mastery (cached)
          const roomPrinciples = roomPrinciplesMap[room.name] || [];
          const avgMastery = roomPrinciples.length > 0
            ? roomPrinciples.reduce((sum, p) => sum + (getProgress(p.id)?.masteryPercentage || 0), 0) / roomPrinciples.length
            : 0;

          // Mastery glow for rooms with progress
          if (avgMastery > 0) {
            const glowAlpha = 0.03 + (avgMastery / 100) * 0.08;
            const glowColor = avgMastery >= 100
              ? `rgba(201,136,15,${glowAlpha + Math.sin(time * 2) * 0.02})`
              : `rgba(92,79,207,${glowAlpha})`;
            const glowR = room.w * TILE * 0.6;
            const glow = ctx.createRadialGradient(
              room.centerX - camX, room.centerY - camY, 0,
              room.centerX - camX, room.centerY - camY, glowR
            );
            glow.addColorStop(0, glowColor);
            glow.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = glow;
            ctx.fillRect(room.centerX - camX - glowR, room.centerY - camY - glowR, glowR * 2, glowR * 2);
          }

          ctx.font = '600 13px Inter, sans-serif';
          ctx.textAlign = 'center';
          // Text shadow
          ctx.fillStyle = 'rgba(255,255,255,0.5)';
          ctx.fillText(`${room.emoji} ${room.name}`, labelX + 1, labelY + 1);
          ctx.fillStyle = 'rgba(0,0,0,0.6)';
          ctx.fillText(`${room.emoji} ${room.name}`, labelX, labelY);

          // Progress bar under label
          if (roomPrinciples.length > 0) {
            const barW = 60;
            const barH = 4;
            const barX = labelX - barW / 2;
            const barY = labelY + 6;
            // Background
            ctx.fillStyle = 'rgba(0,0,0,0.25)';
            ctx.beginPath();
            ctx.roundRect(barX, barY, barW, barH, 2);
            ctx.fill();
            // Fill
            if (avgMastery > 0) {
              const fillW = (avgMastery / 100) * barW;
              const grad = ctx.createLinearGradient(barX, barY, barX + barW, barY);
              grad.addColorStop(0, '#5c4fcf');
              grad.addColorStop(1, avgMastery >= 100 ? '#c9880f' : '#7b6bd4');
              ctx.fillStyle = grad;
              ctx.beginPath();
              ctx.roundRect(barX, barY, fillW, barH, 2);
              ctx.fill();
            }
            // Count text
            const readCount = roomPrinciples.filter(p => getProgress(p.id)?.activities?.read).length;
            ctx.font = '500 8px Inter, sans-serif';
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.fillText(`${readCount}/${roomPrinciples.length}`, labelX, barY + barH + 10);
          }
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

      // Direction magnitude (used for eyes + sprint lines)
      const dirMag = Math.sqrt(player.dirX * player.dirX + player.dirY * player.dirY);

      // Sprint speed lines
      if (sprinting && isMoving) {
        const normDx = dirMag > 0.1 ? player.dirX / dirMag : 0;
        const normDy = dirMag > 0.1 ? player.dirY / dirMag : 0;
        for (let i = 0; i < 3; i++) {
          const offset = (i + 1) * 8;
          const spread = (i - 1) * 6;
          const lineAlpha = 0.2 - i * 0.05;
          ctx.strokeStyle = `rgba(92,79,207,${lineAlpha})`;
          ctx.lineWidth = 2 - i * 0.5;
          ctx.beginPath();
          ctx.moveTo(px - normDx * offset + normDy * spread, py - normDy * offset - normDx * spread);
          ctx.lineTo(px - normDx * (offset + 12) + normDy * spread, py - normDy * (offset + 12) - normDx * spread);
          ctx.stroke();
        }
      }

      // Dynamic blob shadow (scales with movement, gradient fade)
      const shadowScale = player.moving ? 1 - Math.sin(player.bobTime) * 0.15 : 1;
      const shadowStretch = sprinting ? 1.2 : 1;
      const shX = px + (sprinting && dirMag > 0.1 ? player.dirX / dirMag * 3 : 0);
      const shY = player.y - camY + 14;
      const shadowGrad2 = ctx.createRadialGradient(shX, shY, 0, shX, shY, 13 * shadowScale);
      shadowGrad2.addColorStop(0, 'rgba(0,0,0,0.3)');
      shadowGrad2.addColorStop(0.6, 'rgba(0,0,0,0.15)');
      shadowGrad2.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = shadowGrad2;
      ctx.beginPath();
      ctx.ellipse(shX, shY, 13 * shadowScale * shadowStretch, 5 * shadowScale, 0, 0, Math.PI * 2);
      ctx.fill();

      // Lichaam - color evolves with overall mastery
      const allP = allPrinciples || [];
      const overallMastery = allP.length > 0
        ? allP.reduce((s, p) => s + (getPrincipleProgressRef.current(p.id)?.masteryPercentage || 0), 0) / allP.length
        : 0;
      // Interpolate from base purple (hsl 248) to gold (hsl 42) as mastery increases
      const playerHue = 248 - (overallMastery / 100) * (248 - 42);
      const playerSat = 50 + (overallMastery / 100) * 20;
      const playerLit = 45 + (overallMastery / 100) * 10;
      ctx.fillStyle = `hsl(${playerHue}, ${playerSat}%, ${playerLit}%)`;
      ctx.beginPath();
      ctx.arc(px, py, 14, 0, Math.PI * 2);
      ctx.fill();

      // Rand
      ctx.strokeStyle = `hsl(${playerHue}, ${playerSat + 10}%, ${playerLit - 12}%)`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Ogen - follow movement direction
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

      // Interaction pulse ring
      if (interactPulseRef.current > 0) {
        const pulseR = 20 + (1 - interactPulseRef.current) * 40;
        ctx.strokeStyle = `rgba(92,79,207,${interactPulseRef.current * 0.6})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(px, py, pulseR, 0, Math.PI * 2);
        ctx.stroke();
        interactPulseRef.current -= 0.025;
      }

      // Nameplate
      if (userData?.name) {
        ctx.font = '600 9px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText(userData.name, px, player.y - camY + 26);
      }

      // Footprint trail rendering
      for (const fp of footprintsRef.current) {
        const fpx = fp.x - camX;
        const fpy = fp.y - camY;
        if (fpx > -20 && fpx < viewW + 20 && fpy > -20 && fpy < viewH + 20) {
          const fpAlpha = Math.max(0, 0.12 * (1 - fp.age / 8));
          ctx.save();
          ctx.translate(fpx, fpy);
          ctx.rotate(fp.angle);
          ctx.fillStyle = `rgba(80,60,40,${fpAlpha})`;
          // Left foot
          ctx.beginPath();
          ctx.ellipse(-3, 0, 2.5, 4, 0, 0, Math.PI * 2);
          ctx.fill();
          // Right foot
          ctx.beginPath();
          ctx.ellipse(3, 0, 2.5, 4, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      // Footstep dust rendering
      for (const d of footstepDustRef.current) {
        const alpha = 1 - d.age / 0.6;
        ctx.fillStyle = `rgba(180,160,130,${alpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(d.x - camX, d.y - camY, d.size * (1 + d.age), 0, Math.PI * 2);
        ctx.fill();
      }

      // Celebration particles (golden burst for 100% rooms)
      const celebs = celebrationParticlesRef.current;
      for (let i = celebs.length - 1; i >= 0; i--) {
        const c = celebs[i];
        c.life += 1 / 60;
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.08; // gravity
        c.vx *= 0.99;
        if (c.life >= c.maxLife) { celebs.splice(i, 1); continue; }
        const ct = 1 - c.life / c.maxLife;
        const cpx = c.x - camX;
        const cpy = c.y - camY;
        if (cpx > -20 && cpx < viewW + 20 && cpy > -20 && cpy < viewH + 20) {
          ctx.fillStyle = `hsla(${c.hue}, 80%, 55%, ${ct * 0.9})`;
          ctx.beginPath();
          // Star shape
          ctx.save();
          ctx.translate(cpx, cpy);
          ctx.rotate(c.life * 3);
          const sr = c.size * ct;
          for (let si = 0; si < 5; si++) {
            const a = (si / 5) * Math.PI * 2 - Math.PI / 2;
            const ax = Math.cos(a) * sr;
            const ay = Math.sin(a) * sr;
            si === 0 ? ctx.moveTo(ax, ay) : ctx.lineTo(ax, ay);
            const ia = a + Math.PI / 5;
            ctx.lineTo(Math.cos(ia) * sr * 0.4, Math.sin(ia) * sr * 0.4);
          }
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      }

      // Bats - spawn occasionally, fly across the map
      if (Math.random() < 0.003 && batsRef.current.length < 3) {
        const batStartX = player.x + (Math.random() - 0.5) * viewW * 1.5;
        const batStartY = player.y - viewH * 0.4 - Math.random() * 200;
        batsRef.current.push({
          x: batStartX, y: batStartY,
          vx: (Math.random() - 0.5) * 3, vy: 0.5 + Math.random() * 1,
          wingPhase: Math.random() * Math.PI * 2, life: 0, maxLife: 4 + Math.random() * 3,
        });
      }
      for (let bi = batsRef.current.length - 1; bi >= 0; bi--) {
        const bat = batsRef.current[bi];
        bat.life += 1 / 60;
        bat.x += bat.vx;
        bat.y += bat.vy + Math.sin(bat.life * 3) * 0.5;
        bat.vx += (Math.random() - 0.5) * 0.1;
        bat.wingPhase += 0.25;
        if (bat.life >= bat.maxLife) { batsRef.current.splice(bi, 1); continue; }
        const bpx = bat.x - camX;
        const bpy = bat.y - camY;
        if (bpx > -40 && bpx < viewW + 40 && bpy > -40 && bpy < viewH + 40) {
          const batAlpha = Math.min(1, bat.life * 2) * Math.min(1, (bat.maxLife - bat.life) * 2);
          ctx.fillStyle = `rgba(30,20,40,${batAlpha * 0.6})`;
          // Body
          ctx.beginPath();
          ctx.ellipse(bpx, bpy, 3, 2, 0, 0, Math.PI * 2);
          ctx.fill();
          // Wings
          const wingY = Math.sin(bat.wingPhase) * 4;
          ctx.beginPath();
          ctx.moveTo(bpx - 2, bpy);
          ctx.quadraticCurveTo(bpx - 8, bpy - wingY, bpx - 12, bpy + wingY * 0.5);
          ctx.quadraticCurveTo(bpx - 8, bpy + 1, bpx - 2, bpy);
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(bpx + 2, bpy);
          ctx.quadraticCurveTo(bpx + 8, bpy - wingY, bpx + 12, bpy + wingY * 0.5);
          ctx.quadraticCurveTo(bpx + 8, bpy + 1, bpx + 2, bpy);
          ctx.fill();
        }
      }

      // Ethereal wisps floating through corridors
      if (Math.random() < 0.008 && wispsRef.current.length < 5) {
        const wspX = player.x + (Math.random() - 0.5) * viewW;
        const wspY = player.y + (Math.random() - 0.5) * viewH;
        const wspTX = Math.floor(wspX / TILE);
        const wspTY = Math.floor(wspY / TILE);
        if (wspTX >= 0 && wspTX < mapW && wspTY >= 0 && wspTY < mapH &&
            (map[wspTY][wspTX] === FLOOR || map[wspTY][wspTX] === CARPET)) {
          wispsRef.current.push({
            x: wspX, y: wspY, baseX: wspX, baseY: wspY,
            phase: Math.random() * Math.PI * 2,
            life: 0, maxLife: 5 + Math.random() * 5,
            hue: 200 + Math.random() * 60,
          });
        }
      }
      for (let wi = wispsRef.current.length - 1; wi >= 0; wi--) {
        const wisp = wispsRef.current[wi];
        wisp.life += 1 / 60;
        wisp.phase += 0.03;
        wisp.x = wisp.baseX + Math.sin(wisp.phase) * 30 + Math.sin(wisp.phase * 1.7) * 15;
        wisp.y = wisp.baseY + Math.cos(wisp.phase * 0.8) * 20 - wisp.life * 3;
        if (wisp.life >= wisp.maxLife) { wispsRef.current.splice(wi, 1); continue; }
        const wpx = wisp.x - camX;
        const wpy = wisp.y - camY;
        if (wpx > -20 && wpx < viewW + 20 && wpy > -20 && wpy < viewH + 20) {
          const wAlpha = Math.min(1, wisp.life * 1.5) * Math.min(1, (wisp.maxLife - wisp.life) * 0.5) * 0.2;
          const wGlow = ctx.createRadialGradient(wpx, wpy, 0, wpx, wpy, 12);
          wGlow.addColorStop(0, `hsla(${wisp.hue}, 50%, 70%, ${wAlpha})`);
          wGlow.addColorStop(0.5, `hsla(${wisp.hue}, 40%, 60%, ${wAlpha * 0.4})`);
          wGlow.addColorStop(1, `hsla(${wisp.hue}, 30%, 50%, 0)`);
          ctx.fillStyle = wGlow;
          ctx.beginPath();
          ctx.arc(wpx, wpy, 12, 0, Math.PI * 2);
          ctx.fill();
          // Core dot
          ctx.fillStyle = `hsla(${wisp.hue}, 60%, 80%, ${wAlpha * 2})`;
          ctx.beginPath();
          ctx.arc(wpx, wpy, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Water drips from ceiling in corridors
      if (Math.random() < 0.015 && waterDripsRef.current.length < 8) {
        // Pick a random corridor tile near the player
        const dripTX = Math.floor(player.x / TILE) + Math.floor(Math.random() * 10 - 5);
        const dripTY = Math.floor(player.y / TILE) + Math.floor(Math.random() * 8 - 4);
        if (dripTX >= 0 && dripTX < mapW && dripTY >= 0 && dripTY < mapH &&
            map[dripTY][dripTX] === FLOOR && tileRoomIdx[dripTY]?.[dripTX] === -1) {
          // Check if wall above (ceiling drip)
          if (dripTY > 0 && (map[dripTY - 1][dripTX] === WALL || map[dripTY - 1][dripTX] === TORCH)) {
            waterDripsRef.current.push({
              x: dripTX * TILE + TILE / 2 + (Math.random() - 0.5) * 10,
              y: dripTY * TILE, vy: 0, age: 0, splash: false,
            });
          }
        }
      }
      for (let di = waterDripsRef.current.length - 1; di >= 0; di--) {
        const drip = waterDripsRef.current[di];
        drip.age += 1 / 60;
        if (!drip.splash) {
          drip.vy += 0.15;
          drip.y += drip.vy;
          // Check if hit floor level
          if (drip.vy > 4) {
            drip.splash = true;
            drip.splashAge = 0;
          }
        } else {
          drip.splashAge += 1 / 60;
          if (drip.splashAge > 0.5) { waterDripsRef.current.splice(di, 1); continue; }
        }
        if (drip.age > 3) { waterDripsRef.current.splice(di, 1); continue; }
        const dpx = drip.x - camX;
        const dpy = drip.y - camY;
        if (dpx > -10 && dpx < viewW + 10 && dpy > -10 && dpy < viewH + 10) {
          if (!drip.splash) {
            // Falling droplet
            ctx.fillStyle = 'rgba(120,170,220,0.4)';
            ctx.beginPath();
            ctx.ellipse(dpx, dpy, 1, 2 + drip.vy * 0.3, 0, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Splash rings
            const splashR = drip.splashAge * 15;
            const splashA = 0.3 * (1 - drip.splashAge / 0.5);
            ctx.strokeStyle = `rgba(120,170,220,${splashA})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.ellipse(dpx, dpy, splashR, splashR * 0.4, 0, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      }

      // Sprint glow trail
      if (sprinting && isMoving) {
        sprintTrailRef.current.push({ x: player.x, y: player.y + 5, age: 0, hue: playerHue });
        if (sprintTrailRef.current.length > 30) sprintTrailRef.current.shift();
      }
      for (let si = sprintTrailRef.current.length - 1; si >= 0; si--) {
        const st = sprintTrailRef.current[si];
        st.age += 1 / 60;
        if (st.age > 0.5) { sprintTrailRef.current.splice(si, 1); continue; }
        const stx = st.x - camX;
        const sty = st.y - camY;
        if (stx > -20 && stx < viewW + 20 && sty > -20 && sty < viewH + 20) {
          const stAlpha = 0.2 * (1 - st.age / 0.5);
          const stR = 8 * (1 - st.age / 0.5);
          ctx.fillStyle = `hsla(${st.hue}, 60%, 60%, ${stAlpha})`;
          ctx.beginPath();
          ctx.arc(stx, sty, stR, 0, Math.PI * 2);
          ctx.fill();
        }
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

      // Update current room name + room entry pulse + discovery toast
      if (nearRoom) {
        if (lastRoomRef.current !== nearRoom.name) {
          lastRoomRef.current = nearRoom.name;
          roomZoomPulseRef.current = 0.12; // Trigger zoom pulse
          // Discovery toast on first visit
          if (!discoveredRoomsRef.current.has(nearRoom.name)) {
            discoveredRoomsRef.current.add(nearRoom.name);
            setToastMessage({ text: `Nieuwe kamer ontdekt: ${nearRoom.name}`, emoji: nearRoom.emoji });
            if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
            toastTimeoutRef.current = setTimeout(() => setToastMessage(null), 3000);
          }
          // Check for 100% mastery celebration
          const celebRP = roomPrinciplesMap[nearRoom.name] || [];
          if (celebRP.length > 0) {
            const celebAvg = celebRP.reduce((s, p) => s + (getPrincipleProgressRef.current(p.id)?.masteryPercentage || 0), 0) / celebRP.length;
            if (celebAvg >= 100) {
              for (let ci = 0; ci < 30; ci++) {
                celebrationParticlesRef.current.push({
                  x: nearRoom.centerX, y: nearRoom.centerY,
                  vx: (Math.random() - 0.5) * 6, vy: -2 - Math.random() * 4,
                  life: 0, maxLife: 1 + Math.random() * 1.5,
                  size: 2 + Math.random() * 3, hue: 40 + Math.random() * 20,
                });
              }
            }
          }
        }
        setCurrentRoomName(nearRoom.name);
      } else {
        lastRoomRef.current = null;
        // Check if player is in entreehal
        const ptx = Math.floor(player.x / TILE);
        const pty = Math.floor(player.y / TILE);
        if (ptx >= hallX && ptx < hallX + hallW && pty >= hallY && pty < hallY + hallH) {
          setCurrentRoomName('Entreehal');
        } else {
          setCurrentRoomName('Gang');
        }
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

      // Update minimap canvas (realtime player dot)
      if (minimapCanvasRef.current && minimapImageRef.current) {
        const mmScale = 3;
        const mmW2 = mapW * mmScale;
        const mmH2 = mapH * mmScale;
        const mCtx = minimapCanvasRef.current.getContext('2d');
        mCtx.clearRect(0, 0, mmW2, mmH2);
        mCtx.drawImage(minimapImageRef.current, 0, 0);
        // Room mastery tint + emojis
        const getProgressMM = getPrincipleProgressRef.current;
        for (const room of rooms) {
          const rp = roomPrinciplesMap[room.name] || [];
          const avg = rp.length > 0 ? rp.reduce((s, p) => s + (getProgressMM(p.id)?.masteryPercentage || 0), 0) / rp.length : 0;
          if (avg > 0) {
            const color = avg >= 100 ? 'rgba(201,136,15,0.35)' : `rgba(92,79,207,${0.1 + (avg / 100) * 0.25})`;
            mCtx.fillStyle = color;
            mCtx.fillRect(room.x * mmScale, room.y * mmScale, room.w * mmScale, room.h * mmScale);
          }
          mCtx.font = '7px sans-serif';
          mCtx.textAlign = 'center';
          mCtx.fillStyle = 'rgba(255,255,255,0.6)';
          mCtx.fillText(room.emoji, (room.x + room.w / 2) * mmScale, (room.y + room.h / 2) * mmScale + 3);
        }
        // Player dot
        const pTX = player.x / TILE * mmScale;
        const pTY = player.y / TILE * mmScale;
        mCtx.fillStyle = '#5c4fcf';
        mCtx.beginPath();
        mCtx.arc(pTX, pTY, 3, 0, Math.PI * 2);
        mCtx.fill();
        mCtx.strokeStyle = '#fff';
        mCtx.lineWidth = 1;
        mCtx.stroke();
        // Viewport rectangle
        const vpX = camX / TILE * mmScale;
        const vpY = camY / TILE * mmScale;
        const vpW = viewW / TILE * mmScale;
        const vpH = viewH / TILE * mmScale;
        mCtx.strokeStyle = 'rgba(255,255,255,0.3)';
        mCtx.lineWidth = 1;
        mCtx.strokeRect(vpX, vpY, vpW, vpH);
      }

      // End zoom transform
      ctx.restore();

      // Day/night cycle overlay (screen-space)
      const dayPhase = (time % DAY_CYCLE_DURATION) / DAY_CYCLE_DURATION;
      const nightIntensity = Math.max(0, Math.sin(dayPhase * Math.PI * 2 - Math.PI / 2)) * 0.15;
      if (nightIntensity > 0.01) {
        ctx.fillStyle = `rgba(10,8,30,${nightIntensity})`;
        ctx.fillRect(0, 0, w, h);
      }
      // Warm tint during "golden hour" (around transitions)
      const warmPhase = Math.max(0, Math.sin(dayPhase * Math.PI * 2)) * 0.06;
      if (warmPhase > 0.01) {
        ctx.fillStyle = `rgba(255,180,60,${warmPhase})`;
        ctx.fillRect(0, 0, w, h);
      }

      // Teleport arrival flash
      if (teleportFlashRef.current > 0) {
        ctx.fillStyle = `rgba(92,79,207,${teleportFlashRef.current})`;
        ctx.fillRect(0, 0, w, h);
        teleportFlashRef.current -= 0.03;
      }

      // Vignette overlay (screen-space, not zoomed)
      const vignetteGrad = ctx.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, h * 0.9);
      vignetteGrad.addColorStop(0, 'rgba(0,0,0,0)');
      vignetteGrad.addColorStop(1, `rgba(0,0,0,${0.3 + nightIntensity})`);
      ctx.fillStyle = vignetteGrad;
      ctx.fillRect(0, 0, w, h);

      // Compass: arrow pointing to nearest unread room
      const getProgressCompass = getPrincipleProgressRef.current;
      let nearestUnread = null;
      let nearestDist = Infinity;
      for (const room of rooms) {
        const rp = roomPrinciplesMap[room.name] || [];
        const readCount = rp.filter(p => getProgressCompass(p.id)?.activities?.read).length;
        if (readCount < rp.length && rp.length > 0) {
          const cdx = room.centerX - player.x;
          const cdy = room.centerY - player.y;
          const cd = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cd < nearestDist && cd > 100) {
            nearestDist = cd;
            nearestUnread = room;
          }
        }
      }
      if (nearestUnread) {
        const compassX = w - 60;
        const compassY = 70;
        const adx = nearestUnread.centerX - player.x;
        const ady = nearestUnread.centerY - player.y;
        const angle = Math.atan2(ady, adx);
        // Compass circle
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.beginPath();
        ctx.arc(compassX, compassY, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
        // Arrow
        ctx.save();
        ctx.translate(compassX, compassY);
        ctx.rotate(angle);
        ctx.fillStyle = '#5c4fcf';
        ctx.beginPath();
        ctx.moveTo(14, 0);
        ctx.lineTo(-6, -7);
        ctx.lineTo(-3, 0);
        ctx.lineTo(-6, 7);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        // Distance label
        const distLabel = nearestDist > 1000 ? `${(nearestDist / TILE).toFixed(0)}` : `${Math.round(nearestDist / TILE)}`;
        ctx.font = '500 8px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fillText(distLabel + ' tiles', compassX, compassY + 34);
      }

      animFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animFrameRef.current = requestAnimationFrame(gameLoop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [map, mapW, mapH, rooms, hallW, hallH, hallX, hallY, tileRoomIdx, userData?.name, roomPrinciplesMap]);

  // Minimap - canvas-based for showing corridors
  const minimapImageRef = useRef(null);
  const minimapCanvasRef = useRef(null);

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

  const handleMinimapClick = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const scale = 3;
    const clickX = (e.clientX - rect.left) / scale;
    const clickY = (e.clientY - rect.top) / scale;
    // Find closest room
    let bestRoom = null;
    let bestDist = Infinity;
    for (const room of rooms) {
      const rcx = room.x + room.w / 2;
      const rcy = room.y + room.h / 2;
      const dist = Math.sqrt((clickX - rcx) ** 2 + (clickY - rcy) ** 2);
      if (dist < bestDist && dist < room.w) {
        bestDist = dist;
        bestRoom = room;
      }
    }
    if (bestRoom) {
      teleportTargetRef.current = { x: bestRoom.centerX, y: bestRoom.centerY };
    }
  }, [rooms]);

  const renderMinimap = () => {
    if (!showMinimap) return null;
    const scale = 3;
    const mmW = mapW * scale;
    const mmH = mapH * scale;

    return (
      <div
        onClick={handleMinimapClick}
        style={{
          position: 'absolute',
          bottom: isMobile ? 180 : 16,
          right: isMobile ? 8 : 16,
          width: mmW, height: mmH,
          background: 'rgba(0,0,0,0.75)', borderRadius: 8,
          border: '1px solid rgba(255,255,255,0.2)',
          overflow: 'hidden', zIndex: 10,
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          cursor: 'pointer',
        }}
      >
        <canvas
          ref={minimapCanvasRef}
          width={mmW}
          height={mmH}
          style={{ width: mmW, height: mmH, pointerEvents: 'none' }}
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
                  onClick={() => {
                    sessionStorage.setItem('libraryPlayerPos', JSON.stringify({ x: playerRef.current.x, y: playerRef.current.y }));
                    navigate(`/principle/${p.id}`);
                  }}
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

      {/* Discovery toast */}
      {toastMessage && (
        <div style={{
          position: 'absolute', top: 70, left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.85)', color: '#fff',
          padding: '10px 20px', borderRadius: 12,
          fontSize: '0.9rem', fontWeight: 600, zIndex: 30,
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(92,79,207,0.4)',
          animation: 'slideDown 0.3s ease-out',
          pointerEvents: 'none', whiteSpace: 'nowrap',
        }}>
          <style>{`@keyframes slideDown { from { opacity: 0; transform: translateX(-50%) translateY(-10px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }`}</style>
          {toastMessage.emoji} {toastMessage.text}
        </div>
      )}

      {/* Controls hint + versienummer — desktop only */}
      {!isMobile && (
        <div style={{
          position: 'absolute', bottom: 16, left: 16,
          background: 'rgba(0,0,0,0.65)', color: 'rgba(255,255,255,0.8)',
          padding: '8px 14px', borderRadius: 8,
          fontSize: '0.75rem', lineHeight: 1.6,
          backdropFilter: 'blur(8px)', zIndex: 10,
        }}>
          <span style={{ fontWeight: 600, color: '#fff' }}>WASD</span> Bewegen &nbsp;
          <span style={{ fontWeight: 600, color: '#fff' }}>Shift</span> Sprint &nbsp;
          <span style={{ fontWeight: 600, color: '#fff' }}>E</span> Interactie &nbsp;
          <span style={{ fontWeight: 600, color: '#fff' }}>F</span> Zoeken &nbsp;
          <span style={{ fontWeight: 600, color: '#fff' }}>Q</span> Stats &nbsp;
          <span style={{ fontWeight: 600, color: '#fff' }}>M</span> Minimap &nbsp;
          <span style={{ fontWeight: 600, color: '#fff' }}>H</span> Entree &nbsp;
          <span style={{ fontWeight: 600, color: '#fff' }}>Scroll</span> Zoom
          <div style={{ marginTop: 4, fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)' }}>v0.9.0</div>
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

      {/* Versienummer — mobile */}
      {isMobile && (
        <div style={{
          position: 'absolute', bottom: 8, left: 8,
          fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)',
          zIndex: 10, pointerEvents: 'none',
        }}>v0.9.0</div>
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
        onClick={() => {
          sessionStorage.setItem('libraryPlayerPos', JSON.stringify({ x: playerRef.current.x, y: playerRef.current.y }));
          navigate('/home');
        }}
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

      {/* Stats overlay */}
      {showStats && (
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 55,
          }}
          onClick={() => setShowStats(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--color-surface, #fffef9)',
              borderRadius: 16, padding: 24, width: '90%', maxWidth: 480,
              maxHeight: '80vh', overflow: 'auto',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              border: '1px solid var(--color-border, #e5d9c8)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', color: 'var(--color-text, #1c1510)' }}>
                Statistieken
              </h2>
              <button onClick={() => setShowStats(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--color-text-muted, #8a7a66)' }}>✕</button>
            </div>
            {(() => {
              const all = allPrinciples || [];
              const totalRead = all.filter(p => getPrincipleProgress(p.id)?.activities?.read).length;
              const totalMastered = all.filter(p => (getPrincipleProgress(p.id)?.masteryPercentage || 0) >= 100).length;
              const avgMastery = all.length > 0 ? Math.round(all.reduce((s, p) => s + (getPrincipleProgress(p.id)?.masteryPercentage || 0), 0) / all.length) : 0;
              const topCats = categories
                .map(cat => {
                  const rp = roomPrinciplesMap[cat] || [];
                  const avg = rp.length > 0 ? Math.round(rp.reduce((s, p) => s + (getPrincipleProgress(p.id)?.masteryPercentage || 0), 0) / rp.length) : 0;
                  return { name: cat, emoji: CATEGORY_EMOJIS[cat] || '📚', count: rp.length, mastery: avg };
                })
                .sort((a, b) => b.mastery - a.mastery)
                .slice(0, 10);
              return (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 20 }}>
                    {[
                      { label: 'Gelezen', value: totalRead, total: all.length, color: '#5c4fcf' },
                      { label: 'Voltooid', value: totalMastered, total: all.length, color: '#c9880f' },
                      { label: 'Gem. Mastery', value: `${avgMastery}%`, total: null, color: '#059669' },
                    ].map(s => (
                      <div key={s.label} style={{ textAlign: 'center', padding: 12, borderRadius: 10, background: 'var(--color-bg-alt, #f1e9dc)' }}>
                        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: s.color }}>{s.value}</div>
                        {s.total !== null && <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>/ {s.total}</div>}
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary, #4a3d2e)', marginTop: 4 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 8, color: 'var(--color-text, #1c1510)' }}>Top categorieën</h3>
                  {topCats.map(c => (
                    <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: '1rem' }}>{c.emoji}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 500 }}>{c.name}</div>
                        <div style={{ height: 4, borderRadius: 2, background: 'var(--color-bg-alt, #f1e9dc)', overflow: 'hidden', marginTop: 2 }}>
                          <div style={{ height: '100%', width: `${c.mastery}%`, background: c.mastery >= 100 ? '#c9880f' : '#5c4fcf', borderRadius: 2 }} />
                        </div>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', minWidth: 32, textAlign: 'right' }}>{c.mastery}%</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 16, textAlign: 'center', fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
                    {categories.length} kamers · {all.length} principes · Druk Q om te sluiten
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Search overlay */}
      {showSearch && (
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            paddingTop: 80, zIndex: 60,
          }}
          onClick={() => { setShowSearch(false); setSearchQuery(''); }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--color-surface, #fffef9)',
              borderRadius: 16, padding: 20, width: '90%', maxWidth: 500,
              maxHeight: '70vh', display: 'flex', flexDirection: 'column',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              border: '1px solid var(--color-border, #e5d9c8)',
            }}
          >
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Zoek een kamer..."
              style={{
                width: '100%', padding: '10px 14px', borderRadius: 10,
                border: '2px solid var(--color-primary, #5c4fcf)',
                fontSize: '1rem', outline: 'none',
                background: 'var(--color-bg, #fffef9)',
                color: 'var(--color-text, #1c1510)',
                marginBottom: 12,
              }}
            />
            <div style={{ overflow: 'auto', flex: 1 }}>
              {rooms
                .filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .sort((a, b) => {
                  const aP = roomPrinciplesMap[a.name] || [];
                  const bP = roomPrinciplesMap[b.name] || [];
                  const aRead = aP.filter(p => getPrincipleProgress(p.id)?.activities?.read).length;
                  const bRead = bP.filter(p => getPrincipleProgress(p.id)?.activities?.read).length;
                  // Sort: partially read first, then unread, then empty
                  if (aRead > 0 && bRead === 0) return -1;
                  if (aRead === 0 && bRead > 0) return 1;
                  return bP.length - aP.length; // Then by size
                })
                .slice(0, 20)
                .map(r => {
                  const rp = roomPrinciplesMap[r.name] || [];
                  const readCount = rp.filter(p => getPrincipleProgress(p.id)?.activities?.read).length;
                  return (
                    <button
                      key={r.name}
                      onClick={() => {
                        teleportTargetRef.current = { x: r.centerX, y: r.centerY };
                        setShowSearch(false);
                        setSearchQuery('');
                      }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        width: '100%', padding: '10px 12px', borderRadius: 8,
                        border: '1px solid var(--color-border, #e5d9c8)',
                        background: 'var(--color-bg-alt, #f1e9dc)',
                        cursor: 'pointer', textAlign: 'left', marginBottom: 6,
                      }}
                    >
                      <span style={{ fontSize: '1.2rem' }}>{r.emoji}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text, #1c1510)' }}>
                          {r.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted, #8a7a66)' }}>
                          {rp.length} boeken · {readCount} gelezen
                        </div>
                      </div>
                    </button>
                  );
                })}
              {rooms.filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: 20 }}>
                  Geen kamers gevonden.
                </p>
              )}
            </div>
            <div style={{ marginTop: 8, fontSize: '0.7rem', color: 'var(--color-text-muted, #8a7a66)', textAlign: 'center' }}>
              Druk op Escape om te sluiten
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryPage;
