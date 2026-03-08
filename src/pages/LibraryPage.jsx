import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { allPrinciples, getCategories, getPrinciplesByCategory } from '../data/principles';

// ── Constanten ──
const TILE = 40;
const PLAYER_SPEED = 5;
const PLAYER_SPRINT = 10;
const INTERACTION_DIST = 50;
const CAMERA_LERP = 0.15; // Smooth camera follow speed (snappier)
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

// ── Bibliotheek layout genereren (grid-placed, no overlaps, fully connected) ──
function generateLibrary(categories) {
  const seed = categories.length * 7 + 42;
  const margin = 4;        // border around entire map
  const corrW = 3;         // corridor width (tiles)
  const halfC = Math.floor(corrW / 2);
  const spacing = 6;       // space between rooms for corridors

  // --- Room definitions with varied sizes ---
  const roomDefs = categories.map((cat, i) => ({
    cat, origIdx: i,
    w: 9 + Math.floor(seededRandom(i, 0, seed + 1) * 4),   // 9-12
    h: 7 + Math.floor(seededRandom(i, 1, seed + 2) * 3),   // 7-9
    catHue: cat.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 360,
  }));

  // Shuffle for random-looking placement
  const shuffled = [...roomDefs];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(i, 0, seed + 10) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // --- Arrange rooms in a grid pattern (rows x cols) ---
  const cols = Math.ceil(Math.sqrt(shuffled.length));
  const rowCount = Math.ceil(shuffled.length / cols);
  const rows = [];
  for (let ri = 0; ri < rowCount; ri++) {
    rows.push(shuffled.slice(ri * cols, (ri + 1) * cols));
  }

  // Compute column widths (max room width in each column) and row heights
  const colWidths = [];
  for (let ci = 0; ci < cols; ci++) {
    let maxW = 0;
    for (const row of rows) {
      if (ci < row.length) maxW = Math.max(maxW, row[ci].w);
    }
    colWidths.push(maxW);
  }
  const rowHeights = rows.map(row => Math.max(...row.map(r => r.h)));

  // Compute positions: absolute x,y for each room
  const placed = []; // all placed rooms with x, y, w, h, etc.
  const colX = []; // x start of each column cell
  const rowY = []; // y start of each row cell

  let cx = margin;
  for (let ci = 0; ci < cols; ci++) {
    colX.push(cx);
    cx += colWidths[ci] + spacing;
  }
  let cy = margin;
  for (let ri = 0; ri < rows.length; ri++) {
    rowY.push(cy);
    cy += rowHeights[ri] + spacing;
  }

  for (let ri = 0; ri < rows.length; ri++) {
    const row = rows[ri];
    for (let ci = 0; ci < row.length; ci++) {
      const r = row[ci];
      // Center room within its grid cell, plus small jitter
      const cellCX = colX[ci] + Math.floor((colWidths[ci] - r.w) / 2);
      const cellCY = rowY[ri] + Math.floor((rowHeights[ri] - r.h) / 2);
      const jx = Math.floor(seededRandom(ci, ri, seed + 30) * 3) - 1;
      const jy = Math.floor(seededRandom(ri, ci, seed + 31) * 3) - 1;
      placed.push({
        ...r,
        x: cellCX + jx,
        y: cellCY + jy,
        rowIdx: ri,
        colIdx: ci,
      });
    }
  }

  // --- Entrance hall below all rooms ---
  const hallW = 12, hallH = 8;
  const totalWidth = cx - spacing + margin;
  const hallX = Math.max(margin, Math.floor(totalWidth / 2) - Math.floor(hallW / 2));
  const hallY = cy + 2;

  // --- Compute map dimensions ---
  let mapW = Math.max(hallX + hallW + margin + 2, totalWidth + 2);
  let mapH = hallY + hallH + margin + 2;
  for (const r of placed) {
    mapW = Math.max(mapW, r.x + r.w + margin + 2);
    mapH = Math.max(mapH, r.y + r.h + margin + 2);
  }

  const map = Array.from({ length: mapH }, () => Array(mapW).fill(EMPTY));
  const tileRoomIdx = Array.from({ length: mapH }, () => Array(mapW).fill(-1));

  // --- Corridor carving helpers (overwrite EMPTY and WALL) ---
  const isCarveTarget = (tile) => tile === EMPTY || tile === WALL;
  const carveH = (y, x1, x2) => {
    const mn = Math.min(x1, x2), mx = Math.max(x1, x2);
    for (let px = mn; px <= mx; px++) {
      for (let dy = -halfC; dy <= halfC; dy++) {
        const py = y + dy;
        if (px >= 0 && px < mapW && py >= 0 && py < mapH && isCarveTarget(map[py][px])) {
          map[py][px] = FLOOR;
        }
      }
    }
  };
  const carveV = (x, y1, y2) => {
    const mn = Math.min(y1, y2), mx = Math.max(y1, y2);
    for (let py = mn; py <= mx; py++) {
      for (let dx = -halfC; dx <= halfC; dx++) {
        const px = x + dx;
        if (px >= 0 && px < mapW && py >= 0 && py < mapH && isCarveTarget(map[py][px])) {
          map[py][px] = FLOOR;
        }
      }
    }
  };
  const carveL = (x1, y1, x2, y2) => {
    carveH(y1, x1, x2);
    carveV(x2, y1, y2);
  };

  // --- STEP 1: Draw all rooms (walls, floor, furniture) ---
  const sortedPlaced = [...placed].sort((a, b) => a.origIdx - b.origIdx);
  const rooms = [];

  sortedPlaced.forEach((r, sortIdx) => {
    // Floor and walls
    fillRect(map, r.x, r.y, r.w, r.h, FLOOR);
    addWalls(map, r.x, r.y, r.w, r.h);

    // Room ownership
    for (let dy = 0; dy < r.h; dy++) {
      for (let dx = 0; dx < r.w; dx++) {
        if (r.y + dy < mapH && r.x + dx < mapW) tileRoomIdx[r.y + dy][r.x + dx] = sortIdx;
      }
    }

    // Bookshelves along inside of top wall and sides
    for (let bx = r.x + 1; bx < r.x + r.w - 1; bx++) {
      map[r.y + 1][bx] = BOOKSHELF;
    }
    const shelfLen = Math.min(r.h - 4, 2 + Math.floor(seededRandom(r.origIdx, 0, seed + 60) * 3));
    for (let sy = r.y + 2; sy < r.y + 2 + shelfLen; sy++) {
      if (sy < r.y + r.h - 1) {
        map[sy][r.x + 1] = BOOKSHELF;
        map[sy][r.x + r.w - 2] = BOOKSHELF;
      }
    }

    // Pillar
    const pillarX = r.x + 3 + Math.floor(seededRandom(r.origIdx, 2, seed + 70) * Math.max(1, r.w - 6));
    const pillarY = r.y + 3 + Math.floor(seededRandom(r.origIdx, 3, seed + 71) * Math.max(1, r.h - 5));
    if (pillarX > r.x + 1 && pillarX < r.x + r.w - 2 && pillarY > r.y + 1 && pillarY < r.y + r.h - 2 && map[pillarY][pillarX] === FLOOR) {
      map[pillarY][pillarX] = PILLAR;
    }

    // Table
    const tableX = r.x + 3 + Math.floor(seededRandom(r.origIdx, 4, seed + 72) * Math.max(1, r.w - 6));
    const tableY = r.y + r.h - 3;
    if (tableY > r.y + 1 && tableY < r.y + r.h - 1 && tableX > r.x + 1 && tableX < r.x + r.w - 2 && map[tableY][tableX] === FLOOR) {
      map[tableY][tableX] = TABLE;
    }

    // Plant in bigger rooms
    if (r.w >= 10 && r.h >= 8) {
      const px = r.x + r.w - 2, py = r.y + r.h - 2;
      if (map[py][px] === FLOOR) map[py][px] = PLANT;
    }

    rooms.push({
      name: r.cat,
      emoji: CATEGORY_EMOJIS[r.cat] || '📚',
      x: r.x, y: r.y, w: r.w, h: r.h,
      centerX: (r.x + r.w / 2) * TILE,
      centerY: (r.y + r.h / 2) * TILE,
      catHue: r.catHue,
    });
  });

  // Draw entrance hall
  fillRect(map, hallX, hallY, hallW, hallH, FLOOR);
  addWalls(map, hallX, hallY, hallW, hallH);
  fillRect(map, hallX + 2, hallY + 2, hallW - 4, hallH - 4, CARPET);
  map[hallY + 1][hallX + 1] = PLANT;
  map[hallY + 1][hallX + hallW - 2] = PLANT;
  if (hallH >= 6) {
    map[hallY + hallH - 2][hallX + 1] = PLANT;
    map[hallY + hallH - 2][hallX + hallW - 2] = PLANT;
  }

  // --- STEP 2: Carve corridors AFTER rooms are drawn ---
  // This ensures corridors punch through room walls properly.

  // Helper: open a doorway in a room wall (clear wall + adjacent bookshelves)
  const openDoor = (x, y, dir) => {
    // dir: 'left', 'right', 'top', 'bottom' — which wall of the room
    for (let d = -halfC; d <= halfC; d++) {
      let px, py;
      if (dir === 'left' || dir === 'right') {
        px = x; py = y + d;
      } else {
        px = x + d; py = y;
      }
      if (px >= 0 && px < mapW && py >= 0 && py < mapH) {
        const t = map[py][px];
        if (t === WALL || t === BOOKSHELF) map[py][px] = DOOR;
      }
    }
  };

  // Connect rooms within each row (horizontal corridors)
  for (const row of rows) {
    for (let ci = 0; ci < row.length - 1; ci++) {
      const a = placed.find(p => p.origIdx === row[ci].origIdx);
      const b = placed.find(p => p.origIdx === row[ci + 1].origIdx);
      // Corridor y: midpoint of vertical overlap between rooms
      const overlapTop = Math.max(a.y, b.y);
      const overlapBot = Math.min(a.y + a.h, b.y + b.h);
      const corrY = Math.floor((overlapTop + overlapBot) / 2);
      // Carve from right wall of a to left wall of b
      carveH(corrY, a.x + a.w - 1, b.x);
      // Open doorways
      openDoor(a.x + a.w - 1, corrY, 'right');
      openDoor(b.x, corrY, 'left');
      // Also clear bookshelves on the inside of the walls we just opened
      for (let d = -halfC; d <= halfC; d++) {
        const py = corrY + d;
        if (py >= 0 && py < mapH) {
          if (a.x + a.w - 2 >= 0 && map[py][a.x + a.w - 2] === BOOKSHELF) map[py][a.x + a.w - 2] = FLOOR;
          if (b.x + 1 < mapW && map[py][b.x + 1] === BOOKSHELF) map[py][b.x + 1] = FLOOR;
        }
      }
    }
  }

  // Connect rows vertically (one or two connections per row pair)
  for (let ri = 0; ri < rows.length - 1; ri++) {
    const topRow = rows[ri];
    const botRow = rows[ri + 1];

    // Primary connection: middle column
    const midCI = Math.min(Math.floor(topRow.length / 2), botRow.length - 1);
    const topRoom = placed.find(p => p.origIdx === topRow[Math.min(midCI, topRow.length - 1)].origIdx);
    const botRoom = placed.find(p => p.origIdx === botRow[midCI].origIdx);
    const tCX = Math.floor(topRoom.x + topRoom.w / 2);
    const bCX = Math.floor(botRoom.x + botRoom.w / 2);
    carveL(tCX, topRoom.y + topRoom.h - 1, bCX, botRoom.y);
    openDoor(tCX, topRoom.y + topRoom.h - 1, 'bottom');
    openDoor(bCX, botRoom.y, 'top');
    // Clear bookshelves near opened top wall
    for (let d = -halfC; d <= halfC; d++) {
      const px = bCX + d;
      if (px >= 0 && px < mapW && botRoom.y + 1 < mapH && map[botRoom.y + 1][px] === BOOKSHELF) {
        map[botRoom.y + 1][px] = FLOOR;
      }
    }

    // Secondary connection for wider grids
    if (topRow.length >= 3 && botRow.length >= 2) {
      const secCI = topRow.length - 1;
      const secBCI = Math.min(secCI, botRow.length - 1);
      const tR = placed.find(p => p.origIdx === topRow[secCI].origIdx);
      const bR = placed.find(p => p.origIdx === botRow[secBCI].origIdx);
      const tX = Math.floor(tR.x + tR.w / 2);
      const bX = Math.floor(bR.x + bR.w / 2);
      carveL(tX, tR.y + tR.h - 1, bX, bR.y);
      openDoor(tX, tR.y + tR.h - 1, 'bottom');
      openDoor(bX, bR.y, 'top');
      for (let d = -halfC; d <= halfC; d++) {
        const px = bX + d;
        if (px >= 0 && px < mapW && bR.y + 1 < mapH && map[bR.y + 1][px] === BOOKSHELF) {
          map[bR.y + 1][px] = FLOOR;
        }
      }
    }
  }

  // Connect last row to entrance hall
  if (rows.length > 0) {
    const lastRow = rows[rows.length - 1];
    const connRoom = placed.find(p => p.origIdx === lastRow[Math.floor(lastRow.length / 2)].origIdx);
    const roomCX = Math.floor(connRoom.x + connRoom.w / 2);
    const hallCX = Math.floor(hallX + hallW / 2);
    carveL(roomCX, connRoom.y + connRoom.h - 1, hallCX, hallY);
    openDoor(roomCX, connRoom.y + connRoom.h - 1, 'bottom');
    // Open hall top wall
    for (let d = -halfC; d <= halfC; d++) {
      const px = hallCX + d;
      if (px >= 0 && px < mapW && map[hallY][px] === WALL) map[hallY][px] = DOOR;
    }
  }

  // --- STEP 3: Add corridor decoration ---
  // Torches on corridor edges
  for (let y = 1; y < mapH - 1; y++) {
    for (let x = 1; x < mapW - 1; x++) {
      if (map[y][x] !== FLOOR || tileRoomIdx[y][x] >= 0) continue;
      const adjEmpty = (map[y-1][x] === EMPTY ? 1 : 0) + (map[y+1][x] === EMPTY ? 1 : 0) +
                       (map[y][x-1] === EMPTY ? 1 : 0) + (map[y][x+1] === EMPTY ? 1 : 0);
      if (adjEmpty >= 1 && seededRandom(x, y, seed + 80) < 0.07) {
        map[y][x] = TORCH;
      }
    }
  }

  // Carpet on corridor center tiles
  for (let y = 1; y < mapH - 1; y++) {
    for (let x = 1; x < mapW - 1; x++) {
      if (map[y][x] !== FLOOR || tileRoomIdx[y][x] >= 0) continue;
      const walkN = [FLOOR, CARPET, DOOR];
      const adj = (walkN.includes(map[y-1]?.[x]) ? 1 : 0) + (walkN.includes(map[y+1]?.[x]) ? 1 : 0) +
                  (walkN.includes(map[y][x-1]) ? 1 : 0) + (walkN.includes(map[y][x+1]) ? 1 : 0);
      if (adj >= 3 && seededRandom(x, y, seed + 90) < 0.45) {
        map[y][x] = CARPET;
      }
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
  const miceRef = useRef([]); // { x, y, tx, ty, speed, life, maxLife, dir }
  const fallingLeavesRef = useRef([]); // { x, y, vx, vy, rot, rotSpeed, age, hue }
  const emotionRef = useRef({ emoji: null, age: 0 }); // Current emotion bubble
  const shootingStarsRef = useRef([]); // { x, y, vx, vy, life, length }
  const mothsRef = useRef([]); // { x, y, baseX, baseY, phase, speed, life }
  const firefliesRef = useRef([]); // { x, y, baseX, baseY, phase, hue, life }
  const echoRipplesRef = useRef([]); // { x, y, radius, maxRadius, age }
  const bookDustRef = useRef([]); // { x, y, vx, vy, age, size }
  const loosePageRef = useRef([]); // { x, y, vx, vy, rot, rotSpeed, age }
  const rainRef = useRef({ active: false, intensity: 0, drops: [] }); // Weather system
  const snowRef = useRef({ active: false, intensity: 0, flakes: [] }); // Snow weather
  const libraryCatRef = useRef(null); // { x, y, tx, ty, state, stateTime, dir }
  const ghostRef = useRef(null); // { x, y, tx, ty, alpha, phase, life }
  const quillTrailRef = useRef([]); // { x, y, age, angle }
  const doorCreakRef = useRef([]); // { x, y, age }
  const puddleRippleRef = useRef([]); // { x, y, age, maxAge }
  const auroraRef = useRef({ active: false, phase: 0, intensity: 0 }); // Aurora borealis
  const constellationRef = useRef([]); // pre-computed constellation lines
  const dustBunniesRef = useRef([]); // { x, y, vx, rot, age, size }
  const spiderRef = useRef([]); // { x, y, targetY, age, swingPhase }
  const musicalNotesRef = useRef([]); // { x, y, note, age, vx, vy }
  const thunderRef = useRef(0); // Flash intensity for thunder
  const owlRef = useRef(null); // { x, y, blinkPhase, headAngle }
  const corridorFogRef = useRef([]); // { x, y, size, alpha, speed }
  const fogOfWarRef = useRef(null); // 2D boolean array: true = revealed
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

  const SAVE_VERSION = 3; // Bump this when layout/map generation changes

  // Save game state to localStorage
  const saveGameState = useCallback(() => {
    try {
      const state = {
        version: SAVE_VERSION,
        playerX: playerRef.current.x,
        playerY: playerRef.current.y,
        fogOfWar: fogOfWarRef.current ? Array.from({ length: mapH }, (_, y) =>
          Array.from(fogOfWarRef.current[y] || [])
        ) : null,
        discoveredRooms: Array.from(discoveredRoomsRef.current),
        timestamp: Date.now(),
      };
      localStorage.setItem('libraryGameSave', JSON.stringify(state));
      return true;
    } catch { return false; }
  }, [mapH]);

  // Load game state from localStorage
  const loadGameState = useCallback(() => {
    try {
      const raw = localStorage.getItem('libraryGameSave');
      if (!raw) return null;
      const data = JSON.parse(raw);
      // Invalidate saves from older versions
      if (data.version !== SAVE_VERSION) {
        localStorage.removeItem('libraryGameSave');
        sessionStorage.removeItem('libraryPlayerPos');
        return null;
      }
      return data;
    } catch { return null; }
  }, []);

  // Init player positie (herstel uit save)
  useEffect(() => {
    // Find a guaranteed walkable spawn point where the player can also move
    const canMoveFrom = (px, py) => {
      // Check that at least one cardinal direction is also walkable
      const step = TILE * 0.5;
      return isWalkable(map, px + step, py, mapW, mapH) ||
             isWalkable(map, px - step, py, mapW, mapH) ||
             isWalkable(map, px, py + step, mapW, mapH) ||
             isWalkable(map, px, py - step, mapW, mapH);
    };
    const findSafeSpawn = () => {
      // Spiral outward from hall center to find a walkable tile with room to move
      const cx = hallX + Math.floor(hallW / 2);
      const cy = hallY + Math.floor(hallH / 2);
      const maxR = Math.max(mapW, mapH);
      for (let r = 0; r < maxR; r++) {
        for (let dy = -r; dy <= r; dy++) {
          for (let dx = -r; dx <= r; dx++) {
            if (Math.abs(dx) !== r && Math.abs(dy) !== r) continue;
            const tx = cx + dx, ty = cy + dy;
            if (tx < 0 || tx >= mapW || ty < 0 || ty >= mapH) continue;
            const tile = map[ty][tx];
            if (tile === FLOOR || tile === CARPET || tile === DOOR) {
              const px = tx * TILE + TILE / 2;
              const py = ty * TILE + TILE / 2;
              if (isWalkable(map, px, py, mapW, mapH) && canMoveFrom(px, py)) {
                return { x: px, y: py };
              }
            }
          }
        }
      }
      // Should never reach here, but just in case
      return { x: (cx + 0.5) * TILE, y: (cy + 0.5) * TILE };
    };

    const safeSpawn = findSafeSpawn();

    const savedGame = loadGameState();
    const savedSession = sessionStorage.getItem('libraryPlayerPos');
    let startX, startY;

    if (savedGame) {
      startX = savedGame.playerX;
      startY = savedGame.playerY;
      // Restore fog of war only if dimensions match current map
      if (savedGame.fogOfWar && savedGame.fogOfWar.length === mapH &&
          savedGame.fogOfWar[0]?.length === mapW) {
        fogOfWarRef.current = savedGame.fogOfWar.map(row => new Float32Array(row));
      }
      if (savedGame.discoveredRooms) {
        discoveredRoomsRef.current = new Set(savedGame.discoveredRooms);
      }
    } else if (savedSession) {
      try {
        const pos = JSON.parse(savedSession);
        startX = pos.x;
        startY = pos.y;
      } catch {
        startX = safeSpawn.x;
        startY = safeSpawn.y;
      }
    } else {
      startX = safeSpawn.x;
      startY = safeSpawn.y;
    }

    // Validate position: must be walkable AND have room to move, otherwise use safe spawn
    if (!isWalkable(map, startX, startY, mapW, mapH) || !canMoveFrom(startX, startY)) {
      startX = safeSpawn.x;
      startY = safeSpawn.y;
      // Clear stale save data since position was invalid
      fogOfWarRef.current = null;
      discoveredRoomsRef.current = new Set();
      localStorage.removeItem('libraryGameSave');
      sessionStorage.removeItem('libraryPlayerPos');
    }

    playerRef.current = { x: startX, y: startY, dirX: 0, dirY: 1, bobTime: 0, moving: false };
    cameraRef.current = { x: startX, y: startY };
  }, [hallX, hallY, hallW, hallH, map, mapW, mapH]);

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


    let lastFrameTime = performance.now();
    let cachedW = 0, cachedH = 0, cachedDpr = 0;
    const gameLoop = (now) => {
      const rawDt = (now - lastFrameTime) / 1000;
      const dt = Math.min(rawDt, 0.05); // Cap at 50ms to prevent jumps
      lastFrameTime = now;
      gameTimeRef.current += dt;
      const time = gameTimeRef.current;

      // Retina/HiDPI support (only resize when needed)
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (w !== cachedW || h !== cachedH || dpr !== cachedDpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        cachedW = w; cachedH = h; cachedDpr = dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Player movement (keyboard + virtual joystick) — delta-time based
      const keys = keysRef.current;
      const sprinting = keys.has('shift');
      const baseSpeed = sprinting ? PLAYER_SPRINT : PLAYER_SPEED;
      const speed = baseSpeed * 60; // Convert to pixels/second
      let dx = 0, dy = 0;
      if (keys.has('w') || keys.has('arrowup')) dy -= 1;
      if (keys.has('s') || keys.has('arrowdown')) dy += 1;
      if (keys.has('a') || keys.has('arrowleft')) dx -= 1;
      if (keys.has('d') || keys.has('arrowright')) dx += 1;

      // Virtual joystick input
      const joy = joystickRef.current;
      if (joy.dx !== 0 || joy.dy !== 0) {
        dx += joy.dx;
        dy += joy.dy;
      }

      // Normalize diagonal and apply speed * dt
      const mag = Math.sqrt(dx * dx + dy * dy);
      if (mag > 0) {
        dx = (dx / mag) * speed * dt;
        dy = (dy / mag) * speed * dt;
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

      // Update fog of war - reveal tiles around player
      if (!fogOfWarRef.current) {
        fogOfWarRef.current = Array.from({ length: mapH }, () => new Float32Array(mapW));
        // Reveal starting area (entrance hall)
        for (let fy = hallY - 1; fy < hallY + hallH + 1; fy++) {
          for (let fx = hallX - 1; fx < hallX + hallW + 1; fx++) {
            if (fy >= 0 && fy < mapH && fx >= 0 && fx < mapW) {
              fogOfWarRef.current[fy][fx] = 1;
            }
          }
        }
      }
      const fowRadius = 3;
      const fowPTX = Math.floor(player.x / TILE);
      const fowPTY = Math.floor(player.y / TILE);
      for (let fy = fowPTY - fowRadius; fy <= fowPTY + fowRadius; fy++) {
        for (let fx = fowPTX - fowRadius; fx <= fowPTX + fowRadius; fx++) {
          if (fy >= 0 && fy < mapH && fx >= 0 && fx < mapW) {
            const fdx = fx - fowPTX;
            const fdy = fy - fowPTY;
            const fdist = Math.sqrt(fdx * fdx + fdy * fdy);
            if (fdist <= fowRadius + 0.5) {
              // Gradually reveal: closer tiles reveal faster
              const revealAmount = fdist <= fowRadius - 0.5 ? 1 : 0.7;
              fogOfWarRef.current[fy][fx] = Math.min(1, Math.max(fogOfWarRef.current[fy][fx], revealAmount));
            }
          }
        }
      }

      // Auto-save every 10 seconds
      if (Math.floor(time) % 10 === 0 && Math.floor(time) !== Math.floor(time - dt)) {
        saveGameState();
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

      // Constellation patterns connecting bright stars
      if (constellationRef.current.length === 0) {
        // Generate constellations once from bright stars
        const brightStars = stars.filter(s => s.alpha > 0.5 && s.size > 1.5);
        for (let ci = 0; ci < brightStars.length - 1; ci++) {
          const s1 = brightStars[ci];
          const s2 = brightStars[ci + 1];
          const cdist = Math.sqrt((s1.x - s2.x) ** 2 + (s1.y - s2.y) ** 2);
          if (cdist < 600 && cdist > 100) {
            constellationRef.current.push({ x1: s1.x, y1: s1.y, x2: s2.x, y2: s2.y });
          }
        }
      }
      const constellAlpha = 0.015 + Math.sin(time * 0.2) * 0.005;
      ctx.strokeStyle = `rgba(180,200,255,${constellAlpha})`;
      ctx.lineWidth = 0.3;
      for (const cl of constellationRef.current) {
        const parallax = 0.15;
        const cx1 = ((cl.x1 - camX * parallax) % w + w) % w;
        const cy1 = ((cl.y1 - camY * parallax) % h + h) % h;
        const cx2 = ((cl.x2 - camX * parallax) % w + w) % w;
        const cy2 = ((cl.y2 - camY * parallax) % h + h) % h;
        // Don't draw lines that wrap around screen
        if (Math.abs(cx1 - cx2) < w * 0.4 && Math.abs(cy1 - cy2) < h * 0.4) {
          ctx.beginPath();
          ctx.moveTo(cx1, cy1);
          ctx.lineTo(cx2, cy2);
          ctx.stroke();
        }
      }

      // Aurora borealis (rare, beautiful sky effect)
      const aurora = auroraRef.current;
      if (!aurora.active && Math.random() < 0.00008) {
        aurora.active = true;
        aurora.intensity = 0;
        aurora.phase = 0;
      }
      if (aurora.active) {
        aurora.phase += 0.005;
        aurora.intensity = Math.min(1, aurora.intensity + 0.003);
        const aH = h * 0.4;
        for (let ab = 0; ab < 3; ab++) {
          const bandY = 20 + ab * 35;
          const bandAlpha = aurora.intensity * 0.04 * (1 - ab * 0.25);
          ctx.beginPath();
          ctx.moveTo(0, bandY);
          for (let ax = 0; ax <= w; ax += 20) {
            const wave = Math.sin(ax * 0.008 + aurora.phase * 2 + ab * 1.2) * 25
              + Math.sin(ax * 0.015 + aurora.phase * 3) * 12;
            ctx.lineTo(ax, bandY + wave);
          }
          ctx.lineTo(w, bandY + aH);
          ctx.lineTo(0, bandY + aH);
          ctx.closePath();
          const aGrad = ctx.createLinearGradient(0, bandY, 0, bandY + aH);
          const hue1 = 120 + ab * 40 + Math.sin(aurora.phase) * 20;
          const hue2 = 160 + ab * 30;
          aGrad.addColorStop(0, `hsla(${hue1}, 60%, 50%, ${bandAlpha})`);
          aGrad.addColorStop(0.3, `hsla(${hue2}, 50%, 40%, ${bandAlpha * 0.5})`);
          aGrad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = aGrad;
          ctx.fill();
        }
        if (Math.random() < 0.0003) aurora.active = false;
      } else {
        aurora.intensity = Math.max(0, aurora.intensity - 0.005);
      }

      // Shooting stars (rare, screen-space)
      if (Math.random() < 0.002 && shootingStarsRef.current.length < 2) {
        const ssX = Math.random() * w;
        const ssAngle = Math.PI * 0.6 + Math.random() * 0.4;
        shootingStarsRef.current.push({
          x: ssX, y: -10, vx: Math.cos(ssAngle) * 6, vy: Math.sin(ssAngle) * 6,
          life: 0, maxLife: 0.8 + Math.random() * 0.6, length: 30 + Math.random() * 40,
        });
      }
      for (let ssi = shootingStarsRef.current.length - 1; ssi >= 0; ssi--) {
        const ss = shootingStarsRef.current[ssi];
        ss.life += 1 / 60;
        ss.x += ss.vx;
        ss.y += ss.vy;
        if (ss.life >= ss.maxLife) { shootingStarsRef.current.splice(ssi, 1); continue; }
        const ssAlpha = Math.min(1, ss.life * 4) * Math.min(1, (ss.maxLife - ss.life) * 3);
        const tailX = ss.x - (ss.vx / 6) * ss.length;
        const tailY = ss.y - (ss.vy / 6) * ss.length;
        const ssGrad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        ssGrad.addColorStop(0, `rgba(255,255,255,0)`);
        ssGrad.addColorStop(0.7, `rgba(255,255,200,${ssAlpha * 0.3})`);
        ssGrad.addColorStop(1, `rgba(255,255,255,${ssAlpha * 0.8})`);
        ctx.strokeStyle = ssGrad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.stroke();
        // Head glow
        ctx.fillStyle = `rgba(255,255,255,${ssAlpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
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
            // Cobblestone variation (subtle circular stone pattern)
            if (seededRandom(tx, ty, 400) > 0.7) {
              ctx.strokeStyle = 'rgba(0,0,0,0.03)';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.arc(sx + TILE * seededRandom(tx, ty, 401), sy + TILE * seededRandom(tx, ty, 402),
                3 + seededRandom(tx, ty, 403) * 4, 0, Math.PI * 2);
              ctx.stroke();
            }
            // Ancient scroll/map on floor (very rare)
            if (seededRandom(tx, ty, 410) > 0.97 && tileRoomIdx[ty]?.[tx] >= 0) {
              ctx.fillStyle = 'rgba(210,190,140,0.2)';
              ctx.beginPath();
              ctx.roundRect(sx + 8, sy + 10, TILE - 16, TILE - 20, 2);
              ctx.fill();
              // Scroll curl edges
              ctx.strokeStyle = 'rgba(160,140,100,0.15)';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.arc(sx + 8, sy + TILE / 2, 3, -Math.PI / 2, Math.PI / 2);
              ctx.stroke();
              ctx.beginPath();
              ctx.arc(sx + TILE - 8, sy + TILE / 2, 3, Math.PI / 2, -Math.PI / 2);
              ctx.stroke();
              // Text lines
              ctx.fillStyle = 'rgba(80,60,40,0.08)';
              for (let tl = 0; tl < 3; tl++) {
                ctx.fillRect(sx + 12, sy + 14 + tl * 5, TILE - 24 - seededRandom(tx, ty, 411 + tl) * 8, 1.5);
              }
            }
            // Floor mosaic in entrance hall
            if (tx >= hallX + 2 && tx < hallX + hallW - 2 && ty >= hallY + 2 && ty < hallY + hallH - 2) {
              const mosaicDist = Math.sqrt((tx - hallX - hallW / 2) ** 2 + (ty - hallY - hallH / 2) ** 2);
              if (mosaicDist < Math.min(hallW, hallH) / 3) {
                const mAngle = Math.atan2(ty - hallY - hallH / 2, tx - hallX - hallW / 2);
                const mSector = Math.floor((mAngle + Math.PI) / (Math.PI / 4)) % 8;
                const mHue = mSector * 45;
                ctx.fillStyle = `hsla(${mHue}, 25%, 55%, 0.06)`;
                ctx.fillRect(sx + 2, sy + 2, TILE - 4, TILE - 4);
                // Diamond pattern overlay
                if ((tx + ty) % 3 === 0) {
                  ctx.strokeStyle = 'rgba(180,160,120,0.05)';
                  ctx.lineWidth = 0.5;
                  ctx.beginPath();
                  ctx.moveTo(sx + TILE / 2, sy);
                  ctx.lineTo(sx + TILE, sy + TILE / 2);
                  ctx.lineTo(sx + TILE / 2, sy + TILE);
                  ctx.lineTo(sx, sy + TILE / 2);
                  ctx.closePath();
                  ctx.stroke();
                }
              }
            }
            // Water puddle (rare, with subtle reflection)
            if (seededRandom(tx, ty, 420) > 0.95) {
              const pudW = 6 + seededRandom(tx, ty, 421) * 8;
              const pudH = 4 + seededRandom(tx, ty, 422) * 5;
              const pudX = sx + TILE / 2 - pudW / 2 + (seededRandom(tx, ty, 423) - 0.5) * 8;
              const pudY = sy + TILE / 2 - pudH / 2 + (seededRandom(tx, ty, 424) - 0.5) * 6;
              // Puddle base
              ctx.fillStyle = 'rgba(80,100,130,0.1)';
              ctx.beginPath();
              ctx.ellipse(pudX + pudW / 2, pudY + pudH / 2, pudW / 2, pudH / 2, 0, 0, Math.PI * 2);
              ctx.fill();
              // Shimmer reflection
              const shimmer = Math.sin(time * 2 + tx * 3 + ty) * 0.03;
              ctx.fillStyle = `rgba(200,220,255,${0.05 + shimmer})`;
              ctx.beginPath();
              ctx.ellipse(pudX + pudW / 2 - 1, pudY + pudH / 2 - 1, pudW / 3, pudH / 3, 0, 0, Math.PI * 2);
              ctx.fill();
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
            // Wall-mounted paintings (rare, on walls adjacent to rooms)
            const paintRoomIdx = tileRoomIdx[ty]?.[tx] ?? -1;
            if (paintRoomIdx >= 0 && seededRandom(tx, ty, 330) > 0.88) {
              const paintHue = rooms[paintRoomIdx] ? rooms[paintRoomIdx].catHue : 0;
              // Frame
              ctx.fillStyle = '#5a4020';
              ctx.fillRect(sx + 6, sy + 8, TILE - 12, TILE - 18);
              // Canvas
              ctx.fillStyle = `hsla(${paintHue}, 30%, 65%, 0.8)`;
              ctx.fillRect(sx + 8, sy + 10, TILE - 16, TILE - 22);
              // Abstract art (circle + line pattern)
              ctx.fillStyle = `hsla(${paintHue + 60}, 40%, 50%, 0.5)`;
              ctx.beginPath();
              ctx.arc(sx + TILE / 2, sy + TILE / 2 - 2, 5, 0, Math.PI * 2);
              ctx.fill();
              ctx.strokeStyle = `hsla(${paintHue + 120}, 35%, 55%, 0.3)`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(sx + 10, sy + TILE - 12);
              ctx.lineTo(sx + TILE / 2, sy + 14);
              ctx.lineTo(sx + TILE - 10, sy + TILE - 12);
              ctx.stroke();
              // Frame highlight
              ctx.fillStyle = 'rgba(255,255,255,0.08)';
              ctx.fillRect(sx + 6, sy + 8, TILE - 12, 2);
            }
            // Cobwebs in corners (wall next to another wall = corner)
            const hasWallRight = tx < mapW - 1 && map[ty][tx + 1] === WALL;
            const hasWallBelow = ty < mapH - 1 && map[ty + 1][tx] === WALL;
            if (hasWallRight && hasWallBelow && seededRandom(tx, ty, 430) > 0.7) {
              ctx.strokeStyle = 'rgba(200,200,200,0.06)';
              ctx.lineWidth = 0.3;
              // Web strands from corner
              const cwx = sx + TILE;
              const cwy = sy + TILE;
              for (let ws = 0; ws < 4; ws++) {
                const angle = -Math.PI / 2 + (ws / 3) * (-Math.PI / 2);
                ctx.beginPath();
                ctx.moveTo(cwx, cwy);
                ctx.quadraticCurveTo(
                  cwx + Math.cos(angle) * 8 + Math.sin(time * 0.3) * 0.5,
                  cwy + Math.sin(angle) * 8,
                  cwx + Math.cos(angle) * 16,
                  cwy + Math.sin(angle) * 16
                );
                ctx.stroke();
              }
              // Cross-threads
              ctx.beginPath();
              for (let ct = 0; ct < 3; ct++) {
                const ctR = 5 + ct * 4;
                ctx.arc(cwx, cwy, ctR, -Math.PI, -Math.PI / 2, false);
              }
              ctx.stroke();
            }
            // Glowing eyes in dark wall areas (very rare, spooky)
            if (seededRandom(tx, ty, 440) > 0.97) {
              const eyeAlpha = 0.08 + Math.sin(time * 0.8 + tx * 5) * 0.04;
              const eyeY = sy + TILE * 0.45;
              const eyeX1 = sx + TILE * 0.35;
              const eyeX2 = sx + TILE * 0.65;
              const blinkPhase = Math.sin(time * 0.3 + tx * 7);
              if (blinkPhase > -0.95) { // Occasional blink
                ctx.fillStyle = `rgba(180,255,100,${eyeAlpha})`;
                ctx.beginPath();
                ctx.ellipse(eyeX1, eyeY, 2, 1.2, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(eyeX2, eyeY, 2, 1.2, 0, 0, Math.PI * 2);
                ctx.fill();
                // Tiny pupil
                ctx.fillStyle = `rgba(0,0,0,${eyeAlpha * 1.5})`;
                ctx.beginPath();
                ctx.arc(eyeX1 + 0.5, eyeY, 0.7, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(eyeX2 + 0.5, eyeY, 0.7, 0, Math.PI * 2);
                ctx.fill();
              }
            }
            // Wall sconce bracket (on walls adjacent to torch tiles)
            const hasAdjacentTorch = (tx > 0 && map[ty][tx - 1] === TORCH) ||
              (tx < mapW - 1 && map[ty][tx + 1] === TORCH) ||
              (ty > 0 && map[ty - 1][tx] === TORCH) ||
              (ty < mapH - 1 && map[ty + 1][tx] === TORCH);
            if (hasAdjacentTorch && seededRandom(tx, ty, 450) > 0.5) {
              ctx.fillStyle = 'rgba(100,80,50,0.2)';
              ctx.fillRect(sx + TILE / 2 - 3, sy + TILE * 0.6, 6, 3);
              ctx.fillStyle = 'rgba(80,60,40,0.15)';
              ctx.beginPath();
              ctx.arc(sx + TILE / 2, sy + TILE * 0.55, 4, Math.PI, 0);
              ctx.fill();
            }
            // Hanging chains (very rare)
            if (seededRandom(tx, ty, 460) > 0.96) {
              ctx.strokeStyle = 'rgba(120,110,100,0.12)';
              ctx.lineWidth = 1;
              const chainX = sx + TILE * (0.3 + seededRandom(tx, ty, 461) * 0.4);
              const chainLen = TILE * 0.5 + seededRandom(tx, ty, 462) * TILE * 0.3;
              // Chain links
              for (let cl = 0; cl < 4; cl++) {
                const clY = sy + TILE * 0.2 + cl * (chainLen / 4);
                const swing = Math.sin(time * 0.5 + tx + cl * 0.5) * 1;
                ctx.beginPath();
                ctx.ellipse(chainX + swing, clY, 2, 3, 0, 0, Math.PI * 2);
                ctx.stroke();
              }
            }
            // Glowing mushrooms in dark wall corners (very rare)
            if (seededRandom(tx, ty, 560) > 0.95) {
              const mushX = sx + seededRandom(tx, ty, 561) * TILE * 0.5 + TILE * 0.25;
              const mushY = sy + TILE * 0.65 + seededRandom(tx, ty, 562) * TILE * 0.2;
              const mushHue2 = 80 + seededRandom(tx, ty, 563) * 60; // green-cyan
              const mushGlow = 0.08 + Math.sin(time * 1.5 + tx * 3) * 0.03;
              // Glow
              const mGlow = ctx.createRadialGradient(mushX, mushY, 0, mushX, mushY, 8);
              mGlow.addColorStop(0, `hsla(${mushHue2}, 60%, 60%, ${mushGlow})`);
              mGlow.addColorStop(1, 'rgba(0,0,0,0)');
              ctx.fillStyle = mGlow;
              ctx.fillRect(mushX - 8, mushY - 8, 16, 16);
              // Stem
              ctx.fillStyle = `hsla(${mushHue2}, 20%, 70%, 0.2)`;
              ctx.fillRect(mushX - 1, mushY, 2, 4);
              // Cap
              ctx.fillStyle = `hsla(${mushHue2}, 50%, 55%, 0.25)`;
              ctx.beginPath();
              ctx.ellipse(mushX, mushY, 4, 2.5, 0, Math.PI, 0);
              ctx.fill();
              // Spots
              ctx.fillStyle = `hsla(${mushHue2}, 30%, 75%, 0.15)`;
              ctx.beginPath();
              ctx.arc(mushX - 1, mushY - 1, 0.8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(mushX + 2, mushY - 0.5, 0.6, 0, Math.PI * 2);
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
            // Bookworm peeking from shelves (rare)
            if (seededRandom(tx, ty, 530) > 0.9) {
              const wormX = sx + seededRandom(tx, ty, 531) * (TILE - 10) + 5;
              const wormY = sy + TILE * 0.35 + seededRandom(tx, ty, 532) * 6;
              const wormPeek = Math.sin(time * 1.5 + tx * 3) * 0.5 + 0.5;
              ctx.fillStyle = 'rgba(180,220,120,0.35)';
              // Body segment peeking out
              ctx.beginPath();
              ctx.arc(wormX, wormY + (1 - wormPeek) * 3, 2, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(wormX, wormY - 2 + (1 - wormPeek) * 3, 1.8, 0, Math.PI * 2);
              ctx.fill();
              // Tiny eyes
              if (wormPeek > 0.3) {
                ctx.fillStyle = 'rgba(0,0,0,0.3)';
                ctx.beginPath();
                ctx.arc(wormX - 1, wormY - 2.5 + (1 - wormPeek) * 3, 0.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(wormX + 1, wormY - 2.5 + (1 - wormPeek) * 3, 0.5, 0, Math.PI * 2);
                ctx.fill();
              }
            }
            // Potion bottles on shelves (rare)
            if (seededRandom(tx, ty, 540) > 0.88) {
              const potX = sx + TILE - 8 - seededRandom(tx, ty, 541) * 6;
              const potY = sy + 6 + seededRandom(tx, ty, 542) * 8;
              const potHue = seededRandom(tx, ty, 543) * 360;
              // Bottle shape
              ctx.fillStyle = `hsla(${potHue}, 50%, 40%, 0.2)`;
              ctx.fillRect(potX - 2, potY, 4, 7);
              // Neck
              ctx.fillRect(potX - 1, potY - 2, 2, 3);
              // Cork
              ctx.fillStyle = 'rgba(160,130,80,0.2)';
              ctx.fillRect(potX - 1.5, potY - 3, 3, 2);
              // Liquid glow
              const potGlow = Math.sin(time * 1.2 + tx * 5 + potHue) * 0.02;
              ctx.fillStyle = `hsla(${potHue}, 60%, 50%, ${0.03 + potGlow})`;
              ctx.beginPath();
              ctx.arc(potX, potY + 4, 4, 0, Math.PI * 2);
              ctx.fill();
            }
            // Bookshelf ladder (rare, deterministic)
            if (seededRandom(tx, ty, 700) > 0.85) {
              ctx.fillStyle = '#7a5a2a';
              // Rails
              ctx.fillRect(sx + TILE - 8, sy + 2, 2, TILE - 4);
              ctx.fillRect(sx + TILE - 3, sy + 2, 2, TILE - 4);
              // Rungs
              for (let ri = 0; ri < 4; ri++) {
                ctx.fillRect(sx + TILE - 8, sy + 6 + ri * 8, 7, 2);
              }
            }
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
            // Mastery glow aura on completed bookshelves
            if (sparkRoomIdx >= 0 && rooms[sparkRoomIdx]) {
              const glowRoom = rooms[sparkRoomIdx];
              const glowRP = roomPrinciplesMap[glowRoom.name] || [];
              if (glowRP.length > 0) {
                const avgMastery = glowRP.reduce((s, p) => s + (getPrincipleProgressRef.current(p.id)?.masteryPercentage || 0), 0) / glowRP.length;
                if (avgMastery >= 80) {
                  const glowAlpha = (avgMastery / 100) * 0.06 * (0.8 + Math.sin(time * 1.5 + tx) * 0.2);
                  const glowHue = avgMastery >= 100 ? 45 : glowRoom.catHue;
                  const bsGlow = ctx.createRadialGradient(sx + TILE / 2, sy + TILE / 2, 0, sx + TILE / 2, sy + TILE / 2, TILE);
                  bsGlow.addColorStop(0, `hsla(${glowHue}, 60%, 65%, ${glowAlpha})`);
                  bsGlow.addColorStop(1, 'rgba(0,0,0,0)');
                  ctx.fillStyle = bsGlow;
                  ctx.fillRect(sx - TILE / 2, sy - TILE / 2, TILE * 2, TILE * 2);
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
            // Welcome mat below door
            const doorRIdx = tileRoomIdx[ty]?.[tx] ?? -1;
            const matHue = doorRIdx >= 0 && rooms[doorRIdx] ? rooms[doorRIdx].catHue : 30;
            ctx.fillStyle = `hsla(${matHue}, 30%, 35%, 0.25)`;
            ctx.beginPath();
            ctx.roundRect(sx - 2, sy + TILE - 3, TILE + 4, 6, 2);
            ctx.fill();
            ctx.strokeStyle = `hsla(${matHue}, 25%, 50%, 0.15)`;
            ctx.lineWidth = 0.5;
            ctx.strokeRect(sx, sy + TILE - 2, TILE, 4);
            // Floating rune symbol above door
            const runeFloat = Math.sin(time * 1.2 + tx * 5) * 3;
            const runeAlpha2 = 0.08 + Math.sin(time * 2 + tx * 3) * 0.03;
            const doorRIdx2 = tileRoomIdx[ty]?.[tx] ?? -1;
            const runeHue = doorRIdx2 >= 0 && rooms[doorRIdx2] ? rooms[doorRIdx2].catHue : 200;
            ctx.fillStyle = `hsla(${runeHue}, 50%, 65%, ${runeAlpha2})`;
            ctx.font = '10px serif';
            ctx.textAlign = 'center';
            const runeChars = ['☽', '✦', '⚝', '◈', '❋', '✧'];
            const runeChar = runeChars[Math.floor(seededRandom(tx, ty, 550) * runeChars.length)];
            ctx.fillText(runeChar, sx + TILE / 2, sy - 4 + runeFloat);
            // Engraved room name on floor near door
            if (doorRIdx2 >= 0 && rooms[doorRIdx2]) {
              const engRoom = rooms[doorRIdx2];
              ctx.fillStyle = 'rgba(160,140,100,0.05)';
              ctx.font = '500 5px Inter, sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(engRoom.name, sx + TILE / 2, sy + TILE + 8);
            }
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
            // Carpet tassels at corner edges
            const leftCarpet = tx > 0 && map[ty][tx - 1] === CARPET;
            const rightCarpet = tx < mapW - 1 && map[ty][tx + 1] === CARPET;
            if (!leftCarpet && !aboveCarpet) {
              // Top-left corner tassel
              for (let ts = 0; ts < 3; ts++) {
                const tsSwing = Math.sin(time * 1.5 + ts) * 1;
                ctx.strokeStyle = 'rgba(180,140,60,0.15)';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(sx, sy + ts * 2);
                ctx.lineTo(sx - 3 + tsSwing, sy + ts * 2 + 4);
                ctx.stroke();
              }
            }
            if (!rightCarpet && !aboveCarpet) {
              for (let ts = 0; ts < 3; ts++) {
                const tsSwing = Math.sin(time * 1.5 + ts + 1) * 1;
                ctx.strokeStyle = 'rgba(180,140,60,0.15)';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(sx + TILE, sy + ts * 2);
                ctx.lineTo(sx + TILE + 3 + tsSwing, sy + ts * 2 + 4);
                ctx.stroke();
              }
            }
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
            // Glowing rune circle around pillar base
            const pillarRoomIdx = tileRoomIdx[ty]?.[tx] ?? -1;
            const pillarHue = pillarRoomIdx >= 0 && rooms[pillarRoomIdx] ? rooms[pillarRoomIdx].catHue : 200;
            const runeAlpha = 0.06 + Math.sin(time * 1.2 + tx + ty) * 0.03;
            ctx.strokeStyle = `hsla(${pillarHue}, 50%, 60%, ${runeAlpha})`;
            ctx.lineWidth = 0.5;
            // Outer rune ring
            ctx.beginPath();
            ctx.arc(sx + TILE / 2, sy + TILE / 2, TILE * 0.45, 0, Math.PI * 2);
            ctx.stroke();
            // Rotating rune marks
            for (let rm = 0; rm < 6; rm++) {
              const rAngle = (rm / 6) * Math.PI * 2 + time * 0.2;
              const rr = TILE * 0.45;
              const rmx = sx + TILE / 2 + Math.cos(rAngle) * rr;
              const rmy = sy + TILE / 2 + Math.sin(rAngle) * rr;
              ctx.fillStyle = `hsla(${pillarHue}, 50%, 65%, ${runeAlpha * 1.5})`;
              ctx.beginPath();
              ctx.arc(rmx, rmy, 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
            // Gargoyle face detail on some pillars
            if (seededRandom(tx, ty, 490) > 0.75) {
              const gpx = sx + TILE / 2;
              const gpy = sy + TILE / 3;
              ctx.fillStyle = 'rgba(80,70,60,0.15)';
              // Horns
              ctx.beginPath();
              ctx.moveTo(gpx - 5, gpy - 1);
              ctx.lineTo(gpx - 7, gpy - 5);
              ctx.lineTo(gpx - 4, gpy - 2);
              ctx.fill();
              ctx.beginPath();
              ctx.moveTo(gpx + 5, gpy - 1);
              ctx.lineTo(gpx + 7, gpy - 5);
              ctx.lineTo(gpx + 4, gpy - 2);
              ctx.fill();
              // Eyes
              ctx.fillStyle = 'rgba(180,150,80,0.1)';
              ctx.beginPath();
              ctx.arc(gpx - 3, gpy, 1.5, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(gpx + 3, gpy, 1.5, 0, Math.PI * 2);
              ctx.fill();
              // Mouth
              ctx.strokeStyle = 'rgba(60,50,40,0.1)';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.arc(gpx, gpy + 3, 3, 0, Math.PI);
              ctx.stroke();
            }
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
            // Candle on table
            const candleX = sx + TILE / 2 + 10;
            const candleY = sy + TILE / 2 - 2;
            // Candle body
            ctx.fillStyle = '#e8d8b0';
            ctx.fillRect(candleX - 2, candleY - 6, 4, 8);
            // Candle flame
            const cFlicker = Math.sin(time * 10 + tx * 7) * 1.5;
            const cFlameGrad = ctx.createRadialGradient(
              candleX + cFlicker * 0.3, candleY - 9, 0,
              candleX, candleY - 8, 5
            );
            cFlameGrad.addColorStop(0, 'rgba(255,240,180,0.9)');
            cFlameGrad.addColorStop(0.5, 'rgba(255,180,60,0.5)');
            cFlameGrad.addColorStop(1, 'rgba(255,100,20,0)');
            ctx.fillStyle = cFlameGrad;
            ctx.beginPath();
            ctx.ellipse(candleX + cFlicker * 0.3, candleY - 9, 3 + cFlicker * 0.2, 4, 0, 0, Math.PI * 2);
            ctx.fill();
            // Candle light glow on table
            ctx.fillStyle = `rgba(255,200,100,${0.04 + Math.sin(time * 8 + tx) * 0.02})`;
            ctx.beginPath();
            ctx.arc(candleX, candleY, TILE * 0.6, 0, Math.PI * 2);
            ctx.fill();
            // Ink splatter stains near some tables
            if (seededRandom(tx, ty, 470) > 0.6) {
              const inkX = sx + seededRandom(tx, ty, 471) * 12 + 4;
              const inkY = sy + TILE / 2 + seededRandom(tx, ty, 472) * 8;
              ctx.fillStyle = 'rgba(20,15,40,0.08)';
              ctx.beginPath();
              ctx.ellipse(inkX, inkY, 2 + seededRandom(tx, ty, 473) * 3, 1.5 + seededRandom(tx, ty, 474) * 2, seededRandom(tx, ty, 475) * Math.PI, 0, Math.PI * 2);
              ctx.fill();
              // Ink droplets
              if (seededRandom(tx, ty, 476) > 0.5) {
                ctx.beginPath();
                ctx.arc(inkX + 4, inkY + 2, 1, 0, Math.PI * 2);
                ctx.fill();
              }
            }
            // Spinning globe on some tables
            if (seededRandom(tx, ty, 480) > 0.8) {
              const gx = sx + 8;
              const gy = sy + TILE / 2 - 2;
              // Stand
              ctx.fillStyle = 'rgba(100,80,50,0.3)';
              ctx.fillRect(gx - 1, gy + 4, 2, 4);
              // Globe
              ctx.strokeStyle = 'rgba(60,100,150,0.2)';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.arc(gx, gy, 5, 0, Math.PI * 2);
              ctx.stroke();
              // Continents (rotating lines)
              const globeRot = time * 0.3 + tx;
              ctx.strokeStyle = 'rgba(80,140,80,0.15)';
              ctx.beginPath();
              ctx.ellipse(gx, gy, 5, 3, 0, 0, Math.PI * 2);
              ctx.stroke();
              ctx.beginPath();
              ctx.ellipse(gx + Math.sin(globeRot) * 2, gy, 3, 5, 0, 0, Math.PI * 2);
              ctx.stroke();
              // Axis tilt
              ctx.strokeStyle = 'rgba(100,80,50,0.15)';
              ctx.beginPath();
              ctx.moveTo(gx, gy - 6);
              ctx.lineTo(gx, gy + 6);
              ctx.stroke();
            }
            // Animated hourglass on some tables
            if (seededRandom(tx, ty, 500) > 0.85 && seededRandom(tx, ty, 480) <= 0.8) {
              const hgx = sx + TILE / 2 - 14;
              const hgy = sy + TILE / 2 - 6;
              // Frame
              ctx.strokeStyle = 'rgba(180,150,80,0.3)';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(hgx - 3, hgy);
              ctx.lineTo(hgx + 3, hgy);
              ctx.moveTo(hgx - 3, hgy + 10);
              ctx.lineTo(hgx + 3, hgy + 10);
              ctx.stroke();
              // Glass shape
              ctx.strokeStyle = 'rgba(200,220,240,0.2)';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(hgx - 2.5, hgy + 1);
              ctx.quadraticCurveTo(hgx, hgy + 5, hgx + 2.5, hgy + 1);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(hgx - 2.5, hgy + 9);
              ctx.quadraticCurveTo(hgx, hgy + 5, hgx + 2.5, hgy + 9);
              ctx.stroke();
              // Sand falling
              const sandPhase = (time * 0.3 + tx) % 2;
              const sandTop = Math.max(0, 1 - sandPhase);
              const sandBot = Math.min(1, sandPhase);
              ctx.fillStyle = 'rgba(220,190,120,0.25)';
              ctx.fillRect(hgx - 2, hgy + 1, 4, sandTop * 3);
              ctx.fillRect(hgx - 2, hgy + 9 - sandBot * 3, 4, sandBot * 3);
              // Falling stream
              if (sandPhase < 1.8) {
                ctx.fillRect(hgx - 0.3, hgy + 4, 0.6, 2);
              }
            }
            // Crystal ball on some tables
            if (seededRandom(tx, ty, 510) > 0.9 && seededRandom(tx, ty, 480) <= 0.8 && seededRandom(tx, ty, 500) <= 0.85) {
              const cbx = sx + 8;
              const cby = sy + TILE / 2 - 1;
              // Base
              ctx.fillStyle = 'rgba(80,60,40,0.2)';
              ctx.fillRect(cbx - 4, cby + 4, 8, 3);
              // Ball
              const cbGrad = ctx.createRadialGradient(cbx - 1, cby - 1, 0, cbx, cby, 5);
              cbGrad.addColorStop(0, `rgba(180,160,255,${0.12 + Math.sin(time * 1.5 + tx) * 0.04})`);
              cbGrad.addColorStop(0.5, 'rgba(120,100,200,0.08)');
              cbGrad.addColorStop(1, 'rgba(60,40,120,0.04)');
              ctx.fillStyle = cbGrad;
              ctx.beginPath();
              ctx.arc(cbx, cby, 5, 0, Math.PI * 2);
              ctx.fill();
              // Highlight
              ctx.fillStyle = 'rgba(255,255,255,0.1)';
              ctx.beginPath();
              ctx.arc(cbx - 2, cby - 2, 1.5, 0, Math.PI * 2);
              ctx.fill();
              // Swirling inner mist
              const mist1 = Math.sin(time * 2 + tx) * 2;
              ctx.strokeStyle = `rgba(200,180,255,${0.06 + Math.sin(time + tx) * 0.02})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.arc(cbx + mist1 * 0.3, cby, 3, 0, Math.PI);
              ctx.stroke();
            }
            // Telescope on rare tables
            if (seededRandom(tx, ty, 520) > 0.92 && seededRandom(tx, ty, 510) <= 0.9) {
              const tsx2 = sx + TILE - 14;
              const tsy2 = sy + TILE / 2 - 4;
              // Tripod legs
              ctx.strokeStyle = 'rgba(100,80,50,0.2)';
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(tsx2, tsy2 + 6);
              ctx.lineTo(tsx2 - 3, tsy2 + 10);
              ctx.moveTo(tsx2, tsy2 + 6);
              ctx.lineTo(tsx2 + 3, tsy2 + 10);
              ctx.moveTo(tsx2, tsy2 + 6);
              ctx.lineTo(tsx2 + 1, tsy2 + 10);
              ctx.stroke();
              // Telescope tube
              ctx.fillStyle = 'rgba(140,120,80,0.25)';
              ctx.save();
              ctx.translate(tsx2, tsy2 + 4);
              ctx.rotate(-0.4);
              ctx.fillRect(-1.5, -8, 3, 10);
              // Lens
              ctx.fillStyle = 'rgba(150,200,255,0.15)';
              ctx.beginPath();
              ctx.arc(0, -8, 2, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            }
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
            // Torch smoke wisps rising above flame
            for (let sw = 0; sw < 3; sw++) {
              const smokeAge = (time * 0.5 + sw * 0.3 + tx * 0.7) % 1;
              const smokeY = tipY - smokeAge * 18;
              const smokeX = sx + TILE / 2 + Math.sin(time * 2 + sw * 2 + tx) * 3;
              const smokeA = (1 - smokeAge) * 0.04;
              const smokeSize = 2 + smokeAge * 4;
              ctx.fillStyle = `rgba(100,100,110,${smokeA})`;
              ctx.beginPath();
              ctx.arc(smokeX, smokeY, smokeSize, 0, Math.PI * 2);
              ctx.fill();
            }
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

      // Window light beams in rooms (diagonal light shafts)
      for (const room of rooms) {
        const wlx = room.x * TILE - camX;
        const wly = room.y * TILE - camY;
        if (wlx > -room.w * TILE && wlx < viewW + 50 && wly > -room.h * TILE && wly < viewH + 50) {
          // One light beam per room from top-right corner area
          const beamX = (room.x + room.w - 2) * TILE - camX;
          const beamY = (room.y + 1) * TILE - camY;
          const beamAlpha = 0.015 + Math.sin(time * 0.5 + room.x) * 0.005;
          ctx.save();
          ctx.globalAlpha = beamAlpha;
          ctx.fillStyle = 'rgba(255,240,200,1)';
          ctx.beginPath();
          ctx.moveTo(beamX, beamY);
          ctx.lineTo(beamX - TILE * 3, beamY + TILE * (room.h - 2));
          ctx.lineTo(beamX - TILE * 1.5, beamY + TILE * (room.h - 2));
          ctx.closePath();
          ctx.fill();
          ctx.globalAlpha = 1;
          ctx.restore();
        }
      }

      // Stained glass window effect + ceiling beams + crown + sound waves + golden dust in rooms
      for (const room of rooms) {
        const rwx = room.x * TILE - camX;
        const rwy = room.y * TILE - camY;
        if (rwx > -room.w * TILE && rwx < viewW + 50 && rwy > -room.h * TILE && rwy < viewH + 50) {
          // Stained glass window effect (colored light on wall)
          const sgx = (room.x + 1) * TILE - camX;
          const sgy = (room.y) * TILE + TILE / 2 - camY;
          const sgW = TILE * 1.2;
          const sgH = TILE * 0.7;
          // Window frame
          ctx.strokeStyle = 'rgba(100,80,50,0.08)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(sgx, sgy - sgH / 2, sgW, sgH, 4);
          ctx.stroke();
          // Colored glass panes
          const sgHue = room.catHue;
          const glassAlpha = 0.03 + Math.sin(time * 0.3 + room.x) * 0.01;
          ctx.fillStyle = `hsla(${sgHue}, 40%, 60%, ${glassAlpha})`;
          ctx.fillRect(sgx + 2, sgy - sgH / 2 + 2, sgW / 2 - 3, sgH - 4);
          ctx.fillStyle = `hsla(${sgHue + 60}, 40%, 55%, ${glassAlpha})`;
          ctx.fillRect(sgx + sgW / 2 + 1, sgy - sgH / 2 + 2, sgW / 2 - 3, sgH - 4);
          // Cross divider
          ctx.strokeStyle = 'rgba(80,60,40,0.06)';
          ctx.beginPath();
          ctx.moveTo(sgx + sgW / 2, sgy - sgH / 2);
          ctx.lineTo(sgx + sgW / 2, sgy + sgH / 2);
          ctx.moveTo(sgx, sgy);
          ctx.lineTo(sgx + sgW, sgy);
          ctx.stroke();
          // Arch top
          ctx.beginPath();
          ctx.arc(sgx + sgW / 2, sgy - sgH / 2 + 4, sgW / 2, Math.PI, 0);
          ctx.strokeStyle = 'rgba(100,80,50,0.05)';
          ctx.stroke();

          // Wooden ceiling beams across the room
          const beamCount = Math.min(3, Math.floor(room.h / 3));
          for (let cb = 0; cb < beamCount; cb++) {
            const beamY2 = (room.y + 1 + cb * Math.floor(room.h / (beamCount + 1))) * TILE - camY;
            const beamX1 = room.x * TILE - camX;
            const beamX2 = (room.x + room.w) * TILE - camX;
            ctx.fillStyle = 'rgba(90,70,45,0.04)';
            ctx.fillRect(beamX1, beamY2 - 2, beamX2 - beamX1, 4);
            ctx.fillStyle = 'rgba(255,255,255,0.015)';
            ctx.fillRect(beamX1, beamY2 - 2, beamX2 - beamX1, 1);
          }

          // Floating crown above 100% mastered rooms
          const crownRP = roomPrinciplesMap[room.name] || [];
          if (crownRP.length > 0) {
            const crownAvg = crownRP.reduce((s, p) => s + (getPrincipleProgressRef.current(p.id)?.masteryPercentage || 0), 0) / crownRP.length;
            if (crownAvg >= 100) {
              const crownX = room.centerX - camX;
              const crownY = room.y * TILE - camY - 5 + Math.sin(time * 1.5) * 3;
              const crownAlpha = 0.5 + Math.sin(time * 2) * 0.15;
              ctx.globalAlpha = crownAlpha;
              ctx.font = '16px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('👑', crownX, crownY);
              ctx.globalAlpha = 1;
              // Gold glow
              const crGlow = ctx.createRadialGradient(crownX, crownY, 0, crownX, crownY, 15);
              crGlow.addColorStop(0, 'rgba(255,200,50,0.08)');
              crGlow.addColorStop(1, 'rgba(0,0,0,0)');
              ctx.fillStyle = crGlow;
              ctx.beginPath();
              ctx.arc(crownX, crownY, 15, 0, Math.PI * 2);
              ctx.fill();
            }
          }

          // Sound wave visual indicator (subtle pulse rings from room center)
          const swx = room.centerX - camX;
          const swy = room.centerY - camY;
          const swPhase = (time * 0.8 + room.x * 0.5) % 3;
          if (swPhase < 2) {
            const swRadius = swPhase * TILE * 1.5;
            const swAlpha = (1 - swPhase / 2) * 0.015;
            ctx.strokeStyle = `hsla(${room.catHue}, 30%, 60%, ${swAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.arc(swx, swy, swRadius, 0, Math.PI * 2);
            ctx.stroke();
          }

          // Golden dust motes floating in light beams
          for (let gd = 0; gd < 2; gd++) {
            const gdPhase = time * 0.4 + gd * 1.5 + room.x * 0.3;
            const gdx = room.centerX + Math.sin(gdPhase) * TILE * 2 - camX;
            const gdy = room.centerY + Math.cos(gdPhase * 0.7) * TILE * 1.5 - camY;
            const gdAlpha = 0.08 + Math.sin(gdPhase * 2) * 0.04;
            ctx.fillStyle = `rgba(255,220,120,${gdAlpha})`;
            ctx.beginPath();
            ctx.arc(gdx, gdy, 1 + Math.sin(gdPhase * 3) * 0.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Corridor floor compass rose (once, at first corridor intersection)
      if (rooms.length > 0) {
        const croseX = Math.floor(mapW / 2) * TILE + TILE / 2 - camX;
        const croseY = (rooms[0].y + rooms[0].h + 1) * TILE - camY;
        if (croseX > -60 && croseX < viewW + 60 && croseY > -60 && croseY < viewH + 60) {
          const crAlpha = 0.07;
          ctx.save();
          ctx.translate(croseX, croseY);
          // Outer circle
          ctx.strokeStyle = `rgba(200,180,140,${crAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(0, 0, 18, 0, Math.PI * 2);
          ctx.stroke();
          // Cardinal points
          ctx.fillStyle = `rgba(200,180,140,${crAlpha * 1.5})`;
          for (let cp = 0; cp < 4; cp++) {
            const cpAngle = (cp / 4) * Math.PI * 2 - Math.PI / 2;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(cpAngle - 0.15) * 6, Math.sin(cpAngle - 0.15) * 6);
            ctx.lineTo(Math.cos(cpAngle) * 18, Math.sin(cpAngle) * 18);
            ctx.lineTo(Math.cos(cpAngle + 0.15) * 6, Math.sin(cpAngle + 0.15) * 6);
            ctx.closePath();
            ctx.fill();
          }
          // Sub-cardinal lines
          ctx.strokeStyle = `rgba(200,180,140,${crAlpha * 0.6})`;
          for (let sc = 0; sc < 4; sc++) {
            const scAngle = (sc / 4) * Math.PI * 2 - Math.PI / 4;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(scAngle) * 12, Math.sin(scAngle) * 12);
            ctx.stroke();
          }
          // N marker
          ctx.font = '500 6px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = `rgba(200,180,140,${crAlpha * 2})`;
          ctx.fillText('N', 0, -22);
          ctx.restore();
        }
      }

      // Hall banner/tapestry decorations
      const bannerPositions = [
        { bx: hallX + 2, by: hallY + 1 },
        { bx: hallX + hallW - 3, by: hallY + 1 },
      ];
      for (const bp of bannerPositions) {
        const bsx = bp.bx * TILE - camX;
        const bsy = bp.by * TILE - camY;
        if (bsx > -60 && bsx < viewW + 60 && bsy > -60 && bsy < viewH + 60) {
          // Banner pole
          ctx.fillStyle = '#8a7040';
          ctx.fillRect(bsx + TILE / 2 - 12, bsy - 2, 24, 3);
          // Fabric (gentle wave)
          const wave = Math.sin(time * 0.7 + bp.bx) * 2;
          ctx.fillStyle = 'rgba(120,40,50,0.4)';
          ctx.beginPath();
          ctx.moveTo(bsx + TILE / 2 - 10, bsy);
          ctx.lineTo(bsx + TILE / 2 + 10, bsy);
          ctx.lineTo(bsx + TILE / 2 + 8 + wave, bsy + TILE * 1.2);
          ctx.lineTo(bsx + TILE / 2 + wave * 0.5, bsy + TILE * 1.4);
          ctx.lineTo(bsx + TILE / 2 - 8 + wave, bsy + TILE * 1.2);
          ctx.closePath();
          ctx.fill();
          // Gold trim
          ctx.strokeStyle = 'rgba(200,170,80,0.25)';
          ctx.lineWidth = 1;
          ctx.stroke();
          // Emblem (circle)
          ctx.fillStyle = 'rgba(200,170,80,0.2)';
          ctx.beginPath();
          ctx.arc(bsx + TILE / 2 + wave * 0.3, bsy + TILE * 0.5, 5, 0, Math.PI * 2);
          ctx.fill();
          // Gold fringe at bottom
          for (let fr = 0; fr < 5; fr++) {
            const fringeX = bsx + TILE / 2 - 7 + fr * 3.5 + wave;
            ctx.strokeStyle = 'rgba(200,170,80,0.15)';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(fringeX, bsy + TILE * 1.35);
            ctx.lineTo(fringeX + Math.sin(time + fr) * 0.5, bsy + TILE * 1.5);
            ctx.stroke();
          }
        }
      }

      // Entrance hall chandelier
      const chX = (hallX + hallW / 2) * TILE + TILE / 2 - camX;
      const chY = hallY * TILE + TILE - camY;
      if (chX > -80 && chX < viewW + 80 && chY > -80 && chY < viewH + 80) {
        // Chain
        ctx.strokeStyle = 'rgba(100,90,70,0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(chX, chY - 15);
        ctx.lineTo(chX, chY);
        ctx.stroke();
        // Chandelier body
        ctx.fillStyle = 'rgba(140,120,80,0.5)';
        ctx.beginPath();
        ctx.moveTo(chX - 20, chY + 4);
        ctx.lineTo(chX + 20, chY + 4);
        ctx.lineTo(chX + 15, chY);
        ctx.lineTo(chX - 15, chY);
        ctx.closePath();
        ctx.fill();
        // Candle flames on chandelier
        for (let cf = 0; cf < 5; cf++) {
          const cfx = chX - 16 + cf * 8;
          const cfy = chY - 2;
          // Candle stubs
          ctx.fillStyle = '#e8d8b0';
          ctx.fillRect(cfx - 1, cfy, 2, 4);
          // Tiny flames
          const cfFlicker = Math.sin(time * 9 + cf * 2.5) * 1;
          ctx.fillStyle = `rgba(255,220,100,${0.6 + Math.sin(time * 7 + cf) * 0.2})`;
          ctx.beginPath();
          ctx.ellipse(cfx + cfFlicker * 0.3, cfy - 2, 2, 3 + cfFlicker * 0.3, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        // Chandelier warm glow
        const chGlow = ctx.createRadialGradient(chX, chY, 0, chX, chY, TILE * 2.5);
        chGlow.addColorStop(0, 'rgba(255,200,100,0.06)');
        chGlow.addColorStop(0.5, 'rgba(255,180,60,0.02)');
        chGlow.addColorStop(1, 'rgba(255,160,40,0)');
        ctx.fillStyle = chGlow;
        ctx.fillRect(chX - TILE * 2.5, chY - TILE * 2.5, TILE * 5, TILE * 5);
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

      // Mice scurrying along walls
      if (Math.random() < 0.002 && miceRef.current.length < 3) {
        // Find a wall-adjacent floor tile near the player
        const mtx = Math.floor(player.x / TILE) + Math.floor(Math.random() * 16 - 8);
        const mty = Math.floor(player.y / TILE) + Math.floor(Math.random() * 12 - 6);
        if (mtx > 1 && mtx < mapW - 1 && mty > 1 && mty < mapH - 1 &&
            map[mty][mtx] === FLOOR &&
            (map[mty - 1][mtx] === WALL || map[mty + 1][mtx] === WALL ||
             map[mty][mtx - 1] === WALL || map[mty][mtx + 1] === WALL)) {
          miceRef.current.push({
            x: mtx * TILE + TILE / 2, y: mty * TILE + TILE / 2,
            tx: mtx * TILE + TILE / 2 + (Math.random() - 0.5) * TILE * 4,
            ty: mty * TILE + TILE / 2,
            speed: 2 + Math.random() * 2,
            life: 0, maxLife: 2 + Math.random() * 2,
            dir: Math.random() > 0.5 ? 1 : -1,
          });
        }
      }
      for (let mi = miceRef.current.length - 1; mi >= 0; mi--) {
        const mouse = miceRef.current[mi];
        mouse.life += 1 / 60;
        const mdx = mouse.tx - mouse.x;
        const mdy = mouse.ty - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist > 2) {
          mouse.x += (mdx / mDist) * mouse.speed;
          mouse.y += (mdy / mDist) * mouse.speed;
        }
        if (mouse.life >= mouse.maxLife) { miceRef.current.splice(mi, 1); continue; }
        const mx = mouse.x - camX;
        const my = mouse.y - camY;
        if (mx > -20 && mx < viewW + 20 && my > -20 && my < viewH + 20) {
          const mAlpha = Math.min(1, mouse.life * 3) * Math.min(1, (mouse.maxLife - mouse.life) * 3);
          ctx.fillStyle = `rgba(80,60,50,${mAlpha * 0.6})`;
          // Body
          ctx.beginPath();
          ctx.ellipse(mx, my, 4, 2.5, 0, 0, Math.PI * 2);
          ctx.fill();
          // Tail
          ctx.strokeStyle = `rgba(80,60,50,${mAlpha * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(mx - 4 * mouse.dir, my);
          ctx.quadraticCurveTo(mx - 8 * mouse.dir, my - 3, mx - 10 * mouse.dir, my + 1);
          ctx.stroke();
          // Ears
          ctx.fillStyle = `rgba(120,90,70,${mAlpha * 0.5})`;
          ctx.beginPath();
          ctx.arc(mx + 3 * mouse.dir, my - 2, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Falling leaves from nearby plants (check only near player, not full viewport)
      const plTx = Math.floor(player.x / TILE);
      const plTy = Math.floor(player.y / TILE);
      for (let ty3 = Math.max(0, plTy - 5); ty3 < Math.min(mapH, plTy + 5); ty3++) {
        for (let tx3 = Math.max(0, plTx - 5); tx3 < Math.min(mapW, plTx + 5); tx3++) {
          if (map[ty3][tx3] === PLANT && Math.random() < 0.003) {
            fallingLeavesRef.current.push({
              x: tx3 * TILE + TILE / 2 + (Math.random() - 0.5) * 10,
              y: ty3 * TILE + TILE * 0.3,
              vx: (Math.random() - 0.5) * 0.5,
              vy: 0.3 + Math.random() * 0.3,
              rot: Math.random() * Math.PI * 2,
              rotSpeed: (Math.random() - 0.5) * 0.1,
              age: 0, hue: 100 + Math.random() * 40,
            });
          }
        }
      }
      for (let li = fallingLeavesRef.current.length - 1; li >= 0; li--) {
        const leaf = fallingLeavesRef.current[li];
        leaf.age += 1 / 60;
        leaf.x += leaf.vx + Math.sin(leaf.age * 3) * 0.3;
        leaf.y += leaf.vy;
        leaf.rot += leaf.rotSpeed;
        if (leaf.age > 3) { fallingLeavesRef.current.splice(li, 1); continue; }
        const lx = leaf.x - camX;
        const ly = leaf.y - camY;
        if (lx > -10 && lx < viewW + 10 && ly > -10 && ly < viewH + 10) {
          const lAlpha = Math.min(1, leaf.age * 2) * Math.max(0, 1 - leaf.age / 3);
          ctx.save();
          ctx.translate(lx, ly);
          ctx.rotate(leaf.rot);
          ctx.fillStyle = `hsla(${leaf.hue}, 50%, 40%, ${lAlpha * 0.5})`;
          ctx.beginPath();
          ctx.ellipse(0, 0, 3, 1.5, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      if (fallingLeavesRef.current.length > 40) fallingLeavesRef.current.splice(0, fallingLeavesRef.current.length - 40);

      // Floating dust swirls near player
      const dsx = player.x - camX;
      const dsy = player.y - camY;
      if (player.moving) {
        for (let ds = 0; ds < 3; ds++) {
          const dsAngle = time * 1.5 + ds * 2.09;
          const dsR = 25 + Math.sin(time * 2 + ds) * 8;
          const dspx = dsx + Math.cos(dsAngle) * dsR;
          const dspy = dsy + Math.sin(dsAngle) * dsR * 0.6;
          const dsAlpha = 0.06 + Math.sin(time * 3 + ds * 1.5) * 0.03;
          ctx.fillStyle = `rgba(200,180,150,${dsAlpha})`;
          ctx.beginPath();
          ctx.arc(dspx, dspy, 1.5 + Math.sin(time * 2 + ds) * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Pillar ambient light reflection (only near player)
      for (let ty5 = Math.max(0, plTy - 6); ty5 < Math.min(mapH, plTy + 6); ty5++) {
        for (let tx5 = Math.max(0, plTx - 8); tx5 < Math.min(mapW, plTx + 8); tx5++) {
          if (map[ty5][tx5] === PILLAR) {
            const plx = tx5 * TILE + TILE / 2 - camX;
            const ply = ty5 * TILE + TILE / 2 - camY;
            // Subtle light reflection pool around pillar
            const plRoomIdx = tileRoomIdx[ty5]?.[tx5] ?? -1;
            const plHue = plRoomIdx >= 0 && rooms[plRoomIdx] ? rooms[plRoomIdx].catHue : 40;
            const plGlow = ctx.createRadialGradient(plx - 3, ply - 3, 0, plx, ply, TILE * 0.7);
            plGlow.addColorStop(0, `hsla(${plHue}, 20%, 70%, 0.04)`);
            plGlow.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = plGlow;
            ctx.fillRect(plx - TILE, ply - TILE, TILE * 2, TILE * 2);
            // Polished floor mirror reflection (player reflection near pillars)
            const plPDist = Math.sqrt((player.x - (tx5 * TILE + TILE / 2)) ** 2 + (player.y - (ty5 * TILE + TILE / 2)) ** 2);
            if (plPDist < TILE * 3) {
              const refAlpha = Math.max(0, 0.04 - plPDist / (TILE * 80));
              const refX = px + (plx - px) * 0.3;
              const refY = ply + (ply - py) * 0.15 + 5;
              ctx.globalAlpha = refAlpha;
              ctx.fillStyle = 'rgba(92,79,207,0.5)';
              ctx.beginPath();
              ctx.ellipse(refX, refY, 6, 3, 0, 0, Math.PI * 2);
              ctx.fill();
              ctx.globalAlpha = 1;
            }
          }
        }
      }

      // Moths fluttering near torches
      if (Math.random() < 0.005 && mothsRef.current.length < 6) {
        // Find a visible torch tile
        for (let mty = startTY; mty < endTY && mothsRef.current.length < 6; mty++) {
          for (let mtx = startTX; mtx < endTX; mtx++) {
            if (map[mty][mtx] === TORCH && Math.random() < 0.01) {
              mothsRef.current.push({
                x: mtx * TILE + TILE / 2, y: mty * TILE + TILE * 0.2,
                baseX: mtx * TILE + TILE / 2, baseY: mty * TILE + TILE * 0.2,
                phase: Math.random() * Math.PI * 2,
                speed: 1 + Math.random() * 2,
                life: 0, maxLife: 3 + Math.random() * 3,
              });
              break;
            }
          }
        }
      }
      for (let moi = mothsRef.current.length - 1; moi >= 0; moi--) {
        const moth = mothsRef.current[moi];
        moth.life += 1 / 60;
        moth.phase += moth.speed * 0.1;
        moth.x = moth.baseX + Math.cos(moth.phase) * 12 + Math.sin(moth.phase * 1.7) * 5;
        moth.y = moth.baseY + Math.sin(moth.phase * 0.8) * 8 - 5;
        if (moth.life >= moth.maxLife) { mothsRef.current.splice(moi, 1); continue; }
        const mox = moth.x - camX;
        const moy = moth.y - camY;
        if (mox > -10 && mox < viewW + 10 && moy > -10 && moy < viewH + 10) {
          const moAlpha = Math.min(1, moth.life * 3) * Math.min(1, (moth.maxLife - moth.life) * 3);
          ctx.fillStyle = `rgba(200,190,170,${moAlpha * 0.5})`;
          // Wings (flapping)
          const wingAngle = Math.sin(moth.phase * 6) * 0.5;
          ctx.save();
          ctx.translate(mox, moy);
          ctx.rotate(Math.atan2(Math.cos(moth.phase * 1.7), -Math.sin(moth.phase)));
          ctx.beginPath();
          ctx.ellipse(-2, 0, 3, 1.5 * Math.abs(Math.cos(wingAngle)), wingAngle, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(2, 0, 3, 1.5 * Math.abs(Math.cos(wingAngle)), -wingAngle, 0, Math.PI * 2);
          ctx.fill();
          // Body
          ctx.fillStyle = `rgba(100,80,60,${moAlpha * 0.6})`;
          ctx.beginPath();
          ctx.ellipse(0, 0, 1.5, 1, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      // Fireflies near plants (only near player)
      for (let ty6 = Math.max(0, plTy - 6); ty6 < Math.min(mapH, plTy + 6); ty6++) {
        for (let tx6 = Math.max(0, plTx - 8); tx6 < Math.min(mapW, plTx + 8); tx6++) {
          if (map[ty6][tx6] === PLANT && Math.random() < 0.002 && firefliesRef.current.length < 15) {
            firefliesRef.current.push({
              x: tx6 * TILE + TILE / 2, y: ty6 * TILE + TILE / 2,
              baseX: tx6 * TILE + TILE / 2, baseY: ty6 * TILE + TILE / 2,
              phase: Math.random() * Math.PI * 2,
              hue: 50 + Math.random() * 30, // yellow-green
              life: 0, maxLife: 2 + Math.random() * 4,
            });
          }
        }
      }
      for (let fi = firefliesRef.current.length - 1; fi >= 0; fi--) {
        const ff = firefliesRef.current[fi];
        ff.life += 1 / 60;
        ff.phase += 0.03;
        ff.x = ff.baseX + Math.sin(ff.phase) * 20 + Math.cos(ff.phase * 0.7) * 10;
        ff.y = ff.baseY + Math.cos(ff.phase * 1.2) * 15 - 10;
        if (ff.life >= ff.maxLife) { firefliesRef.current.splice(fi, 1); continue; }
        const ffx = ff.x - camX;
        const ffy = ff.y - camY;
        if (ffx > -10 && ffx < viewW + 10 && ffy > -10 && ffy < viewH + 10) {
          const ffAlpha = Math.min(1, ff.life * 2) * Math.min(1, (ff.maxLife - ff.life) * 2);
          const pulse = 0.3 + 0.7 * Math.max(0, Math.sin(ff.phase * 3));
          // Glow
          const ffGlow = ctx.createRadialGradient(ffx, ffy, 0, ffx, ffy, 8);
          ffGlow.addColorStop(0, `hsla(${ff.hue}, 80%, 70%, ${ffAlpha * pulse * 0.15})`);
          ffGlow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = ffGlow;
          ctx.fillRect(ffx - 8, ffy - 8, 16, 16);
          // Dot
          ctx.fillStyle = `hsla(${ff.hue}, 80%, 80%, ${ffAlpha * pulse * 0.8})`;
          ctx.beginPath();
          ctx.arc(ffx, ffy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Echo ripples on room entry
      for (let eri = echoRipplesRef.current.length - 1; eri >= 0; eri--) {
        const rip = echoRipplesRef.current[eri];
        rip.age += 1 / 60;
        rip.radius += (rip.maxRadius - rip.radius) * 0.05;
        if (rip.age > 1.5) { echoRipplesRef.current.splice(eri, 1); continue; }
        const rpx = rip.x - camX;
        const rpy = rip.y - camY;
        const ripAlpha = (1 - rip.age / 1.5) * 0.08;
        ctx.strokeStyle = `rgba(200,180,255,${ripAlpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(rpx, rpy, rip.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Bookshelf dust puff when player passes close
      const bkdx = Math.floor(player.x / TILE);
      const bkdy = Math.floor(player.y / TILE);
      if (player.moving) {
        for (let bdy = bkdy - 1; bdy <= bkdy + 1; bdy++) {
          for (let bdx = bkdx - 1; bdx <= bkdx + 1; bdx++) {
            if (bdy >= 0 && bdy < mapH && bdx >= 0 && bdx < mapW && map[bdy][bdx] === BOOKSHELF) {
              if (Math.random() < 0.02) {
                bookDustRef.current.push({
                  x: bdx * TILE + TILE / 2, y: bdy * TILE + TILE / 2,
                  vx: (Math.random() - 0.5) * 0.8, vy: -0.3 - Math.random() * 0.5,
                  age: 0, size: 1 + Math.random() * 2,
                });
              }
            }
          }
        }
      }
      for (let bdi = bookDustRef.current.length - 1; bdi >= 0; bdi--) {
        const bd = bookDustRef.current[bdi];
        bd.age += 1 / 60;
        bd.x += bd.vx;
        bd.y += bd.vy;
        bd.vy *= 0.98;
        if (bd.age > 2) { bookDustRef.current.splice(bdi, 1); continue; }
        const bdpx = bd.x - camX;
        const bdpy = bd.y - camY;
        const bdAlpha = (1 - bd.age / 2) * 0.15;
        ctx.fillStyle = `rgba(180,160,130,${bdAlpha})`;
        ctx.beginPath();
        ctx.arc(bdpx, bdpy, bd.size + bd.age, 0, Math.PI * 2);
        ctx.fill();
      }
      if (bookDustRef.current.length > 30) bookDustRef.current.splice(0, bookDustRef.current.length - 30);

      // Floating loose book pages in corridors
      if (Math.random() < 0.003 && loosePageRef.current.length < 5) {
        const lpx = player.x + (Math.random() - 0.5) * viewW * 0.8;
        const lpy = player.y + (Math.random() - 0.5) * viewH * 0.8;
        const lptx = Math.floor(lpx / TILE);
        const lpty = Math.floor(lpy / TILE);
        if (lptx >= 0 && lptx < mapW && lpty >= 0 && lpty < mapH &&
            (map[lpty][lptx] === FLOOR || map[lpty][lptx] === CARPET)) {
          loosePageRef.current.push({
            x: lpx, y: lpy,
            vx: (Math.random() - 0.5) * 0.3, vy: -0.1 - Math.random() * 0.2,
            rot: Math.random() * Math.PI * 2, rotSpeed: (Math.random() - 0.5) * 0.04,
            age: 0,
          });
        }
      }
      for (let lpi = loosePageRef.current.length - 1; lpi >= 0; lpi--) {
        const lp = loosePageRef.current[lpi];
        lp.age += 1 / 60;
        lp.x += lp.vx + Math.sin(lp.age * 1.5) * 0.2;
        lp.y += lp.vy + Math.sin(lp.age * 2) * 0.1;
        lp.rot += lp.rotSpeed;
        if (lp.age > 5) { loosePageRef.current.splice(lpi, 1); continue; }
        const lpsx = lp.x - camX;
        const lpsy = lp.y - camY;
        if (lpsx > -20 && lpsx < viewW + 20 && lpsy > -20 && lpsy < viewH + 20) {
          const lpAlpha = Math.min(1, lp.age * 2) * Math.max(0, 1 - lp.age / 5);
          ctx.save();
          ctx.translate(lpsx, lpsy);
          ctx.rotate(lp.rot);
          ctx.globalAlpha = lpAlpha * 0.3;
          // Page
          ctx.fillStyle = '#f0e8d8';
          ctx.fillRect(-5, -4, 10, 8);
          // Text lines
          ctx.fillStyle = 'rgba(80,60,40,0.2)';
          ctx.fillRect(-3, -2, 6, 1);
          ctx.fillRect(-3, 0, 5, 1);
          ctx.fillRect(-3, 2, 4, 1);
          ctx.globalAlpha = 1;
          ctx.restore();
        }
      }

      // Dynamic player shadow from nearest light source
      let nearestTorchDist = Infinity;
      let nearestTorchX = 0;
      let nearestTorchY = 0;
      for (let sty = Math.max(0, bkdy - 6); sty < Math.min(mapH, bkdy + 6); sty++) {
        for (let stx = Math.max(0, bkdx - 6); stx < Math.min(mapW, bkdx + 6); stx++) {
          if (map[sty][stx] === TORCH) {
            const stdx = player.x - (stx * TILE + TILE / 2);
            const stdy = player.y - (sty * TILE + TILE / 2);
            const std = Math.sqrt(stdx * stdx + stdy * stdy);
            if (std < nearestTorchDist) {
              nearestTorchDist = std;
              nearestTorchX = stx * TILE + TILE / 2;
              nearestTorchY = sty * TILE + TILE / 2;
            }
          }
        }
      }
      if (nearestTorchDist < TILE * 5) {
        const shAngle = Math.atan2(player.y - nearestTorchY, player.x - nearestTorchX);
        const shLen = Math.min(20, 8 + (nearestTorchDist / TILE) * 2);
        const shAlpha = Math.max(0.02, 0.08 - nearestTorchDist / (TILE * 80));
        const shx = px + Math.cos(shAngle) * shLen;
        const shy = py + Math.sin(shAngle) * shLen;
        ctx.fillStyle = `rgba(0,0,0,${shAlpha})`;
        ctx.beginPath();
        ctx.ellipse(shx, shy, 8, 4, shAngle, 0, Math.PI * 2);
        ctx.fill();
      }

      // Library cat NPC wandering
      const cat = libraryCatRef.current;
      if (!cat) {
        // Spawn cat in entrance hall
        libraryCatRef.current = {
          x: (hallX + hallW / 2) * TILE, y: (hallY + hallH / 2 + 2) * TILE,
          tx: 0, ty: 0, state: 'idle', stateTime: 0, dir: 1, purr: 0,
        };
      } else {
        cat.stateTime += 1 / 60;
        if (cat.state === 'idle' && cat.stateTime > 3 + Math.random() * 4) {
          // Pick new target
          cat.tx = cat.x + (Math.random() - 0.5) * TILE * 6;
          cat.ty = cat.y + (Math.random() - 0.5) * TILE * 4;
          cat.state = 'walking';
          cat.stateTime = 0;
        } else if (cat.state === 'walking') {
          const cdx = cat.tx - cat.x;
          const cdy = cat.ty - cat.y;
          const cDist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cDist > 3) {
            cat.x += (cdx / cDist) * 1.2;
            cat.y += (cdy / cDist) * 1.2;
            cat.dir = cdx > 0 ? 1 : -1;
          } else {
            cat.state = 'idle';
            cat.stateTime = 0;
          }
          if (cat.stateTime > 5) { cat.state = 'idle'; cat.stateTime = 0; }
        }
        // Purr near player
        const catPDist = Math.sqrt((cat.x - player.x) ** 2 + (cat.y - player.y) ** 2);
        cat.purr = catPDist < TILE * 2 ? Math.min(1, cat.purr + 0.02) : Math.max(0, cat.purr - 0.01);

        const catSX = cat.x - camX;
        const catSY = cat.y - camY;
        if (catSX > -30 && catSX < viewW + 30 && catSY > -30 && catSY < viewH + 30) {
          // Cat body
          ctx.fillStyle = 'rgba(60,50,40,0.5)';
          ctx.beginPath();
          ctx.ellipse(catSX, catSY, 8, 5, 0, 0, Math.PI * 2);
          ctx.fill();
          // Head
          ctx.beginPath();
          ctx.arc(catSX + 7 * cat.dir, catSY - 2, 4.5, 0, Math.PI * 2);
          ctx.fill();
          // Ears
          ctx.beginPath();
          ctx.moveTo(catSX + 5 * cat.dir, catSY - 5);
          ctx.lineTo(catSX + 4 * cat.dir, catSY - 9);
          ctx.lineTo(catSX + 8 * cat.dir, catSY - 5);
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(catSX + 9 * cat.dir, catSY - 4);
          ctx.lineTo(catSX + 9 * cat.dir, catSY - 8);
          ctx.lineTo(catSX + 12 * cat.dir, catSY - 3);
          ctx.fill();
          // Eyes
          ctx.fillStyle = 'rgba(180,200,80,0.5)';
          ctx.beginPath();
          ctx.ellipse(catSX + 6 * cat.dir, catSY - 3, 1.5, 1, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(catSX + 10 * cat.dir, catSY - 3, 1.5, 1, 0, 0, Math.PI * 2);
          ctx.fill();
          // Tail
          ctx.strokeStyle = 'rgba(60,50,40,0.4)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(catSX - 8 * cat.dir, catSY);
          ctx.quadraticCurveTo(catSX - 14 * cat.dir, catSY - 5, catSX - 16 * cat.dir, catSY - 10 + Math.sin(time * 2) * 3);
          ctx.stroke();
          // Walking legs
          if (cat.state === 'walking') {
            ctx.fillStyle = 'rgba(60,50,40,0.4)';
            for (let leg = 0; leg < 4; leg++) {
              const legX = catSX + (leg < 2 ? -4 : 4) * cat.dir;
              const legY = catSY + 4 + Math.sin(time * 8 + leg * Math.PI / 2) * 2;
              ctx.fillRect(legX - 1, catSY + 3, 2, legY - catSY - 1);
            }
          }
          // Purr hearts
          if (cat.purr > 0.5) {
            ctx.globalAlpha = (cat.purr - 0.5) * 0.6;
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('💛', catSX + 2 * cat.dir, catSY - 14 + Math.sin(time * 3) * 2);
            ctx.globalAlpha = 1;
          }
        }
      }

      // Ghost scholar (rare, transparent wanderer)
      const ghost = ghostRef.current;
      if (!ghost && Math.random() < 0.0003 && rooms.length > 0) {
        const gRoom = rooms[Math.floor(Math.random() * rooms.length)];
        ghostRef.current = {
          x: gRoom.centerX, y: gRoom.centerY,
          tx: gRoom.centerX + (Math.random() - 0.5) * TILE * 4,
          ty: gRoom.centerY + (Math.random() - 0.5) * TILE * 3,
          alpha: 0, phase: 0, life: 0, maxLife: 8 + Math.random() * 5,
        };
      }
      if (ghost) {
        ghost.life += 1 / 60;
        ghost.phase += 0.03;
        const gdx2 = ghost.tx - ghost.x;
        const gdy2 = ghost.ty - ghost.y;
        const gDist2 = Math.sqrt(gdx2 * gdx2 + gdy2 * gdy2);
        if (gDist2 > 3) {
          ghost.x += (gdx2 / gDist2) * 0.5;
          ghost.y += (gdy2 / gDist2) * 0.5;
        } else {
          ghost.tx = ghost.x + (Math.random() - 0.5) * TILE * 5;
          ghost.ty = ghost.y + (Math.random() - 0.5) * TILE * 3;
        }
        ghost.alpha = Math.min(0.15, ghost.life * 0.05) * Math.min(1, (ghost.maxLife - ghost.life) * 0.5);
        if (ghost.life >= ghost.maxLife) { ghostRef.current = null; }
        else {
          const gsx = ghost.x - camX;
          const gsy = ghost.y - camY + Math.sin(ghost.phase) * 3;
          if (gsx > -30 && gsx < viewW + 30 && gsy > -30 && gsy < viewH + 30) {
            ctx.globalAlpha = ghost.alpha;
            // Ghostly robe
            ctx.fillStyle = 'rgba(180,200,220,0.5)';
            ctx.beginPath();
            ctx.moveTo(gsx - 8, gsy + 15);
            ctx.quadraticCurveTo(gsx - 10, gsy, gsx - 5, gsy - 10);
            ctx.quadraticCurveTo(gsx, gsy - 15, gsx + 5, gsy - 10);
            ctx.quadraticCurveTo(gsx + 10, gsy, gsx + 8, gsy + 15);
            ctx.closePath();
            ctx.fill();
            // Head
            ctx.beginPath();
            ctx.arc(gsx, gsy - 12, 6, 0, Math.PI * 2);
            ctx.fill();
            // Glowing eyes
            ctx.fillStyle = 'rgba(150,200,255,0.8)';
            ctx.beginPath();
            ctx.arc(gsx - 2.5, gsy - 13, 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(gsx + 2.5, gsy - 13, 1.5, 0, Math.PI * 2);
            ctx.fill();
            // Book in hands
            ctx.fillStyle = 'rgba(160,140,100,0.4)';
            ctx.fillRect(gsx - 4, gsy - 2, 8, 6);
            // Ethereal trail
            ctx.strokeStyle = 'rgba(180,200,220,0.2)';
            ctx.lineWidth = 1;
            for (let gt = 0; gt < 3; gt++) {
              const gtx = gsx - (gdx2 / (gDist2 || 1)) * (gt + 1) * 8;
              const gty = gsy + Math.sin(ghost.phase + gt) * 2;
              ctx.globalAlpha = ghost.alpha * (0.5 - gt * 0.15);
              ctx.beginPath();
              ctx.arc(gtx, gty, 3 - gt * 0.5, 0, Math.PI * 2);
              ctx.stroke();
            }
            ctx.globalAlpha = 1;
          }
        }
      }

      // Quill pen trail when sprinting
      const isSprinting = keysRef.current.has('shift');
      if (isSprinting && player.moving) {
        quillTrailRef.current.push({
          x: player.x, y: player.y + 5,
          age: 0, angle: Math.atan2(player.dirY, player.dirX),
        });
      }
      for (let qi = quillTrailRef.current.length - 1; qi >= 0; qi--) {
        const q = quillTrailRef.current[qi];
        q.age += 1 / 60;
        if (q.age > 0.8) { quillTrailRef.current.splice(qi, 1); continue; }
        const qx = q.x - camX;
        const qy = q.y - camY;
        const qAlpha = (1 - q.age / 0.8) * 0.2;
        // Ink stroke
        ctx.strokeStyle = `rgba(30,20,60,${qAlpha})`;
        ctx.lineWidth = 1 + (1 - q.age / 0.8);
        ctx.beginPath();
        ctx.moveTo(qx, qy);
        ctx.lineTo(qx - Math.cos(q.angle) * 8, qy - Math.sin(q.angle) * 8);
        ctx.stroke();
      }
      if (quillTrailRef.current.length > 30) quillTrailRef.current.splice(0, quillTrailRef.current.length - 30);

      // Door creak visual (wobble lines when passing through doors)
      const ptx2 = Math.floor(player.x / TILE);
      const pty2 = Math.floor(player.y / TILE);
      if (player.moving && ptx2 >= 0 && ptx2 < mapW && pty2 >= 0 && pty2 < mapH && map[pty2][ptx2] === DOOR) {
        if (Math.random() < 0.1) {
          doorCreakRef.current.push({ x: ptx2 * TILE + TILE / 2, y: pty2 * TILE, age: 0 });
        }
      }
      for (let dci = doorCreakRef.current.length - 1; dci >= 0; dci--) {
        const dc = doorCreakRef.current[dci];
        dc.age += 1 / 60;
        if (dc.age > 0.6) { doorCreakRef.current.splice(dci, 1); continue; }
        const dcx = dc.x - camX;
        const dcy = dc.y - camY;
        const dcAlpha = (1 - dc.age / 0.6) * 0.15;
        // Wobble lines radiating from door
        ctx.strokeStyle = `rgba(160,140,100,${dcAlpha})`;
        ctx.lineWidth = 0.5;
        for (let dcl = 0; dcl < 3; dcl++) {
          const dclR = 5 + dc.age * 20 + dcl * 6;
          const dclAngle = dcl * 0.8 - 0.8;
          ctx.beginPath();
          ctx.arc(dcx, dcy + TILE / 2, dclR, dclAngle - 0.3, dclAngle + 0.3);
          ctx.stroke();
        }
      }

      // Puddle ripples when walking over water puddles
      if (player.moving && ptx2 >= 0 && ptx2 < mapW && pty2 >= 0 && pty2 < mapH) {
        if (map[pty2][ptx2] === FLOOR && seededRandom(ptx2, pty2, 420) > 0.95) {
          if (Math.random() < 0.05) {
            puddleRippleRef.current.push({ x: player.x, y: player.y, age: 0, maxAge: 0.8 });
          }
        }
      }
      for (let pri2 = puddleRippleRef.current.length - 1; pri2 >= 0; pri2--) {
        const pr2 = puddleRippleRef.current[pri2];
        pr2.age += 1 / 60;
        if (pr2.age > pr2.maxAge) { puddleRippleRef.current.splice(pri2, 1); continue; }
        const prx = pr2.x - camX;
        const pry = pr2.y - camY;
        const prAlpha = (1 - pr2.age / pr2.maxAge) * 0.1;
        const prR = pr2.age / pr2.maxAge * 10;
        ctx.strokeStyle = `rgba(150,180,220,${prAlpha})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(prx, pry, prR, 0, Math.PI * 2);
        ctx.stroke();
        // Inner ripple
        if (prR > 3) {
          ctx.beginPath();
          ctx.arc(prx, pry, prR * 0.5, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Owl perched on a bookshelf (one global owl)
      if (!owlRef.current && rooms.length > 0) {
        // Find a bookshelf tile to perch on
        for (let oty = startTY; oty < endTY && !owlRef.current; oty++) {
          for (let otx = startTX; otx < endTX; otx++) {
            if (map[oty][otx] === BOOKSHELF && seededRandom(otx, oty, 570) > 0.98) {
              owlRef.current = { x: otx * TILE + TILE / 2, y: oty * TILE - 5, blinkPhase: 0, headAngle: 0 };
              break;
            }
          }
        }
      }
      if (owlRef.current) {
        const owl = owlRef.current;
        owl.blinkPhase += 1 / 60;
        // Head tracks player
        const owlDx = player.x - owl.x;
        const owlDy = player.y - owl.y;
        owl.headAngle += (Math.atan2(owlDy, owlDx) - owl.headAngle) * 0.03;
        const owlSX = owl.x - camX;
        const owlSY = owl.y - camY;
        if (owlSX > -30 && owlSX < viewW + 30 && owlSY > -30 && owlSY < viewH + 30) {
          // Body
          ctx.fillStyle = 'rgba(100,80,50,0.4)';
          ctx.beginPath();
          ctx.ellipse(owlSX, owlSY + 5, 6, 8, 0, 0, Math.PI * 2);
          ctx.fill();
          // Head (follows player)
          ctx.save();
          ctx.translate(owlSX, owlSY - 3);
          const headTilt = Math.sin(owl.headAngle) * 0.15;
          ctx.rotate(headTilt);
          ctx.fillStyle = 'rgba(120,100,60,0.45)';
          ctx.beginPath();
          ctx.arc(0, 0, 5, 0, Math.PI * 2);
          ctx.fill();
          // Ear tufts
          ctx.fillStyle = 'rgba(100,80,50,0.35)';
          ctx.beginPath();
          ctx.moveTo(-3, -4);
          ctx.lineTo(-5, -8);
          ctx.lineTo(-1, -5);
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(3, -4);
          ctx.lineTo(5, -8);
          ctx.lineTo(1, -5);
          ctx.fill();
          // Eyes (blink occasionally)
          const owlBlink = Math.sin(owl.blinkPhase * 0.5);
          const eyeH = owlBlink > 0.97 ? 0.3 : 1.8;
          ctx.fillStyle = 'rgba(255,200,50,0.5)';
          ctx.beginPath();
          ctx.ellipse(-2, 0, 1.8, eyeH, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(2, 0, 1.8, eyeH, 0, 0, Math.PI * 2);
          ctx.fill();
          // Pupils
          if (eyeH > 0.5) {
            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            ctx.beginPath();
            ctx.arc(-2, 0, 0.8, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(2, 0, 0.8, 0, Math.PI * 2);
            ctx.fill();
          }
          // Beak
          ctx.fillStyle = 'rgba(200,180,80,0.3)';
          ctx.beginPath();
          ctx.moveTo(0, 1);
          ctx.lineTo(-1.5, 3);
          ctx.lineTo(1.5, 3);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      }

      // Corridor fog/mist rolling
      if (corridorFogRef.current.length < 12 && Math.random() < 0.005) {
        const fogTx = Math.floor(player.x / TILE) + Math.floor(Math.random() * 20 - 10);
        const fogTy = Math.floor(player.y / TILE) + Math.floor(Math.random() * 14 - 7);
        if (fogTx > 0 && fogTx < mapW && fogTy > 0 && fogTy < mapH &&
            (map[fogTy][fogTx] === FLOOR || map[fogTy][fogTx] === CARPET)) {
          corridorFogRef.current.push({
            x: fogTx * TILE + Math.random() * TILE, y: fogTy * TILE + Math.random() * TILE,
            size: 20 + Math.random() * 30, alpha: 0, speed: 0.1 + Math.random() * 0.15,
            life: 0, maxLife: 4 + Math.random() * 4,
          });
        }
      }
      for (let fgi = corridorFogRef.current.length - 1; fgi >= 0; fgi--) {
        const fg = corridorFogRef.current[fgi];
        fg.life += 1 / 60;
        fg.x += fg.speed;
        fg.alpha = Math.min(0.04, fg.life * 0.02) * Math.min(1, (fg.maxLife - fg.life) * 0.5);
        if (fg.life >= fg.maxLife) { corridorFogRef.current.splice(fgi, 1); continue; }
        const fgx = fg.x - camX;
        const fgy = fg.y - camY;
        if (fgx > -fg.size && fgx < viewW + fg.size && fgy > -fg.size && fgy < viewH + fg.size) {
          const fogGrad = ctx.createRadialGradient(fgx, fgy, 0, fgx, fgy, fg.size);
          fogGrad.addColorStop(0, `rgba(180,170,160,${fg.alpha})`);
          fogGrad.addColorStop(1, 'rgba(180,170,160,0)');
          ctx.fillStyle = fogGrad;
          ctx.beginPath();
          ctx.arc(fgx, fgy, fg.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Dust bunnies tumbling across floors
      if (Math.random() < 0.003 && dustBunniesRef.current.length < 4) {
        const dbx = player.x + (Math.random() - 0.5) * viewW;
        const dby = player.y + (Math.random() - 0.5) * viewH * 0.5;
        const dbtx = Math.floor(dbx / TILE);
        const dbty = Math.floor(dby / TILE);
        if (dbtx > 0 && dbtx < mapW && dbty > 0 && dbty < mapH && map[dbty][dbtx] === FLOOR) {
          dustBunniesRef.current.push({
            x: dbx, y: dby, vx: (Math.random() > 0.5 ? 1 : -1) * (0.5 + Math.random()),
            rot: 0, age: 0, size: 3 + Math.random() * 3,
          });
        }
      }
      for (let dbi = dustBunniesRef.current.length - 1; dbi >= 0; dbi--) {
        const db = dustBunniesRef.current[dbi];
        db.age += 1 / 60;
        db.x += db.vx;
        db.rot += db.vx * 0.1;
        if (db.age > 4) { dustBunniesRef.current.splice(dbi, 1); continue; }
        const dbsx = db.x - camX;
        const dbsy = db.y - camY;
        const dbAlpha = Math.min(1, db.age * 2) * Math.max(0, 1 - db.age / 4) * 0.2;
        ctx.save();
        ctx.translate(dbsx, dbsy);
        ctx.rotate(db.rot);
        ctx.fillStyle = `rgba(180,160,130,${dbAlpha})`;
        ctx.beginPath();
        ctx.arc(0, 0, db.size, 0, Math.PI * 2);
        ctx.fill();
        // Fuzzy edges
        ctx.strokeStyle = `rgba(160,140,110,${dbAlpha * 0.5})`;
        ctx.lineWidth = 0.5;
        for (let fz = 0; fz < 5; fz++) {
          const fzAngle = (fz / 5) * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(Math.cos(fzAngle) * db.size, Math.sin(fzAngle) * db.size);
          ctx.lineTo(Math.cos(fzAngle) * (db.size + 2), Math.sin(fzAngle) * (db.size + 2));
          ctx.stroke();
        }
        ctx.restore();
      }

      // Spider descending from ceiling near cobwebs
      if (Math.random() < 0.001 && spiderRef.current.length < 2) {
        for (let spy2 = startTY; spy2 < endTY && spiderRef.current.length < 2; spy2++) {
          for (let spx2 = startTX; spx2 < endTX; spx2++) {
            if (map[spy2][spx2] === WALL && spx2 < mapW - 1 && map[spy2][spx2 + 1] === WALL &&
                spy2 < mapH - 1 && map[spy2 + 1][spx2] === WALL && seededRandom(spx2, spy2, 430) > 0.7 && Math.random() < 0.01) {
              spiderRef.current.push({
                x: (spx2 + 1) * TILE, y: spy2 * TILE + TILE,
                targetY: spy2 * TILE + TILE + TILE * (1 + Math.random() * 2),
                age: 0, swingPhase: Math.random() * Math.PI * 2,
              });
              break;
            }
          }
        }
      }
      for (let spi = spiderRef.current.length - 1; spi >= 0; spi--) {
        const sp = spiderRef.current[spi];
        sp.age += 1 / 60;
        sp.swingPhase += 0.05;
        const spProgress = Math.min(1, sp.age * 0.3);
        const spCurY = sp.y + (sp.targetY - sp.y) * spProgress;
        const spSwing = Math.sin(sp.swingPhase) * 3;
        if (sp.age > 5) { spiderRef.current.splice(spi, 1); continue; }
        const spSX = sp.x + spSwing - camX;
        const spSY = spCurY - camY;
        const spAlpha = Math.min(1, sp.age * 2) * Math.min(1, (5 - sp.age) * 0.5);
        // Thread
        ctx.strokeStyle = `rgba(200,200,200,${spAlpha * 0.1})`;
        ctx.lineWidth = 0.3;
        ctx.beginPath();
        ctx.moveTo(sp.x - camX, sp.y - camY);
        ctx.lineTo(spSX, spSY);
        ctx.stroke();
        // Spider body
        ctx.fillStyle = `rgba(40,30,20,${spAlpha * 0.35})`;
        ctx.beginPath();
        ctx.arc(spSX, spSY, 2, 0, Math.PI * 2);
        ctx.fill();
        // Legs (4 pairs)
        ctx.strokeStyle = `rgba(40,30,20,${spAlpha * 0.25})`;
        ctx.lineWidth = 0.3;
        for (let sl = 0; sl < 4; sl++) {
          const slAngle = (sl / 4) * Math.PI - Math.PI / 4 + Math.sin(sp.swingPhase * 2 + sl) * 0.2;
          ctx.beginPath();
          ctx.moveTo(spSX, spSY);
          ctx.lineTo(spSX + Math.cos(slAngle) * 5, spSY + Math.sin(slAngle) * 4);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(spSX, spSY);
          ctx.lineTo(spSX - Math.cos(slAngle) * 5, spSY + Math.sin(slAngle) * 4);
          ctx.stroke();
        }
      }

      // Musical notes floating from rooms with high mastery
      for (const room of rooms) {
        const mnRP = roomPrinciplesMap[room.name] || [];
        if (mnRP.length > 0) {
          const mnAvg = mnRP.reduce((s, p) => s + (getPrincipleProgressRef.current(p.id)?.masteryPercentage || 0), 0) / mnRP.length;
          if (mnAvg > 50 && Math.random() < 0.002) {
            musicalNotesRef.current.push({
              x: room.centerX + (Math.random() - 0.5) * TILE * 2,
              y: room.centerY,
              note: ['♪', '♫', '♬', '♩'][Math.floor(Math.random() * 4)],
              age: 0, vx: (Math.random() - 0.5) * 0.5, vy: -0.5 - Math.random() * 0.3,
            });
          }
        }
      }
      for (let mni = musicalNotesRef.current.length - 1; mni >= 0; mni--) {
        const mn = musicalNotesRef.current[mni];
        mn.age += 1 / 60;
        mn.x += mn.vx + Math.sin(mn.age * 2) * 0.3;
        mn.y += mn.vy;
        if (mn.age > 3) { musicalNotesRef.current.splice(mni, 1); continue; }
        const mnx = mn.x - camX;
        const mny = mn.y - camY;
        const mnAlpha = Math.min(1, mn.age * 3) * Math.max(0, 1 - mn.age / 3) * 0.25;
        ctx.fillStyle = `rgba(200,170,100,${mnAlpha})`;
        ctx.font = '12px serif';
        ctx.textAlign = 'center';
        ctx.fillText(mn.note, mnx, mny);
      }
      if (musicalNotesRef.current.length > 20) musicalNotesRef.current.splice(0, musicalNotesRef.current.length - 20);

      // Candelabra in room centers
      for (const room of rooms) {
        const cndX = room.centerX - camX;
        const cndY = (room.y + 2) * TILE - camY;
        if (cndX > -40 && cndX < viewW + 40 && cndY > -40 && cndY < viewH + 40) {
          // Base stand
          ctx.fillStyle = 'rgba(120,100,60,0.15)';
          ctx.fillRect(cndX - 1, cndY + 5, 2, 10);
          ctx.fillRect(cndX - 4, cndY + 14, 8, 2);
          // Arms (3 candles)
          const armPositions = [-10, 0, 10];
          for (const armX of armPositions) {
            // Arm
            if (armX !== 0) {
              ctx.strokeStyle = 'rgba(120,100,60,0.12)';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(cndX, cndY + 7);
              ctx.quadraticCurveTo(cndX + armX * 0.5, cndY + 3, cndX + armX, cndY + 2);
              ctx.stroke();
            }
            // Candle stub
            ctx.fillStyle = 'rgba(230,220,190,0.2)';
            ctx.fillRect(cndX + armX - 1, cndY, 2, 3);
            // Tiny flame
            const cfFlick = Math.sin(time * 10 + armX + room.x) * 0.8;
            ctx.fillStyle = `rgba(255,200,80,${0.15 + Math.sin(time * 7 + armX) * 0.05})`;
            ctx.beginPath();
            ctx.ellipse(cndX + armX + cfFlick * 0.2, cndY - 2, 1.5, 2.5, 0, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Arrow path markings on corridor floors (pointing toward nearest room)
      for (let aty = startTY; aty < endTY; aty += 4) {
        for (let atx = startTX; atx < endTX; atx += 4) {
          if (map[aty]?.[atx] === FLOOR && tileRoomIdx[aty]?.[atx] < 0 && seededRandom(atx, aty, 580) > 0.85) {
            // Find nearest room
            let nearestR = null;
            let nearDist2 = Infinity;
            for (const r of rooms) {
              const ard = Math.abs(atx - r.x - r.w / 2) + Math.abs(aty - r.y - r.h / 2);
              if (ard < nearDist2) { nearDist2 = ard; nearestR = r; }
            }
            if (nearestR) {
              const arrSX = atx * TILE + TILE / 2 - camX;
              const arrSY = aty * TILE + TILE / 2 - camY;
              const arrAngle = Math.atan2(nearestR.centerY - aty * TILE, nearestR.centerX - atx * TILE);
              ctx.save();
              ctx.translate(arrSX, arrSY);
              ctx.rotate(arrAngle);
              ctx.fillStyle = 'rgba(160,140,100,0.03)';
              ctx.beginPath();
              ctx.moveTo(6, 0);
              ctx.lineTo(-3, -3);
              ctx.lineTo(-1, 0);
              ctx.lineTo(-3, 3);
              ctx.closePath();
              ctx.fill();
              ctx.restore();
            }
          }
        }
      }

      // Mastery-based player aura glow
      const getProgressAura = getPrincipleProgressRef.current;
      const totalPrinciples2 = allPrinciples.length;
      let totalMastery = 0;
      for (const p of allPrinciples) {
        totalMastery += (getProgressAura(p.id)?.masteryPercentage || 0);
      }
      const avgMastery2 = totalPrinciples2 > 0 ? totalMastery / totalPrinciples2 : 0;
      if (avgMastery2 > 10) {
        const auraRadius = 15 + (avgMastery2 / 100) * 20;
        const auraHue = avgMastery2 >= 80 ? 45 : 260; // Gold or purple
        const auraAlpha = (avgMastery2 / 100) * 0.06;
        const auraGrad = ctx.createRadialGradient(px, py, 5, px, py, auraRadius);
        auraGrad.addColorStop(0, `hsla(${auraHue}, 60%, 60%, ${auraAlpha})`);
        auraGrad.addColorStop(0.7, `hsla(${auraHue}, 50%, 50%, ${auraAlpha * 0.3})`);
        auraGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(px, py, auraRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Player emotion bubbles (thinking when idle)
      const emo = emotionRef.current;
      if (emo.age > 3) { emo.emoji = null; emo.age = 0; }
      emo.age += 1 / 60;
      if (!player.moving && emo.emoji === null && gameTimeRef.current > 2) {
        if (Math.random() < 0.001) {
          emo.emoji = '💭';
          emo.age = 0;
        }
      }
      if (player.moving && emo.emoji === '💭') { emo.emoji = null; }
      if (emo.emoji) {
        const emAlpha = Math.min(1, emo.age * 3) * Math.max(0, 1 - emo.age / 3);
        const emY = py - 28 - Math.sin(emo.age * 2) * 3;
        ctx.globalAlpha = emAlpha * 0.7;
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(emo.emoji, px, emY);
        ctx.globalAlpha = 1;
      }

      // Room guardian NPCs - themed characters at each room
      const NPC_THEMES = {
        'Logica': { body: '#4a6fa5', robe: '#3a5a90', hat: 'pointy', accessory: '📐' },
        'Epistemologie': { body: '#7a5aa5', robe: '#6a4a95', hat: 'hood', accessory: '🔮' },
        'Psychologie': { body: '#5a8a6a', robe: '#4a7a5a', hat: 'glasses', accessory: '🧠' },
        'Behavioral Economics': { body: '#8a7a3a', robe: '#7a6a2a', hat: 'crown', accessory: '💰' },
        'Retorica': { body: '#a55a5a', robe: '#954a4a', hat: 'feather', accessory: '🎭' },
        'Speltheorie': { body: '#5a5a8a', robe: '#4a4a7a', hat: 'pointy', accessory: '♟️' },
        'Statistiek': { body: '#5a7a7a', robe: '#4a6a6a', hat: 'glasses', accessory: '📊' },
        'Besliskunde': { body: '#6a6a5a', robe: '#5a5a4a', hat: 'hood', accessory: '⚖️' },
      };
      const defaultNPC = { body: '#6a5a7a', robe: '#5a4a6a', hat: 'hood', accessory: '📚' };

      for (const room of rooms) {
        const npcTheme = NPC_THEMES[room.name] || defaultNPC;
        // NPC stands near the center of the room
        const npcX = room.centerX + TILE * 1.5;
        const npcY = room.centerY;
        const npcSX = npcX - camX;
        const npcSY = npcY - camY;

        if (npcSX < -40 || npcSX > viewW + 40 || npcSY < -40 || npcSY > viewH + 40) continue;

        // Check if tile is revealed (fog of war)
        const npcTX = Math.floor(npcX / TILE);
        const npcTY = Math.floor(npcY / TILE);
        if (fogOfWarRef.current && npcTX >= 0 && npcTX < mapW && npcTY >= 0 && npcTY < mapH) {
          if ((fogOfWarRef.current[npcTY]?.[npcTX] ?? 0) < 0.5) continue;
        }

        const npcDist = Math.sqrt((player.x - npcX) ** 2 + (player.y - npcY) ** 2);
        const npcFacing = player.x < npcX ? -1 : 1;
        const npcBob = Math.sin(time * 1.5 + room.x) * 1.5;

        // Robe/body
        ctx.fillStyle = npcTheme.robe;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.moveTo(npcSX - 8, npcSY + 16);
        ctx.quadraticCurveTo(npcSX - 10, npcSY - 2, npcSX - 5, npcSY - 10 + npcBob);
        ctx.quadraticCurveTo(npcSX, npcSY - 14 + npcBob, npcSX + 5, npcSY - 10 + npcBob);
        ctx.quadraticCurveTo(npcSX + 10, npcSY - 2, npcSX + 8, npcSY + 16);
        ctx.closePath();
        ctx.fill();

        // Head
        ctx.fillStyle = npcTheme.body;
        ctx.beginPath();
        ctx.arc(npcSX, npcSY - 14 + npcBob, 7, 0, Math.PI * 2);
        ctx.fill();

        // Eyes (look at player when close)
        const eyeLook = npcDist < TILE * 4 ? npcFacing * 1.5 : 0;
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.beginPath();
        ctx.arc(npcSX - 2.5 + eyeLook * 0.3, npcSY - 15 + npcBob, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(npcSX + 2.5 + eyeLook * 0.3, npcSY - 15 + npcBob, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.beginPath();
        ctx.arc(npcSX - 2.5 + eyeLook, npcSY - 15 + npcBob, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(npcSX + 2.5 + eyeLook, npcSY - 15 + npcBob, 1, 0, Math.PI * 2);
        ctx.fill();

        // Hat/accessory based on theme
        if (npcTheme.hat === 'pointy') {
          ctx.fillStyle = npcTheme.robe;
          ctx.beginPath();
          ctx.moveTo(npcSX - 7, npcSY - 19 + npcBob);
          ctx.lineTo(npcSX, npcSY - 30 + npcBob);
          ctx.lineTo(npcSX + 7, npcSY - 19 + npcBob);
          ctx.closePath();
          ctx.fill();
          // Star on hat tip
          ctx.fillStyle = 'rgba(255,220,100,0.5)';
          ctx.beginPath();
          ctx.arc(npcSX, npcSY - 30 + npcBob, 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (npcTheme.hat === 'hood') {
          ctx.fillStyle = npcTheme.robe;
          ctx.beginPath();
          ctx.arc(npcSX, npcSY - 15 + npcBob, 9, Math.PI, 0);
          ctx.fill();
        } else if (npcTheme.hat === 'glasses') {
          ctx.strokeStyle = 'rgba(200,200,200,0.5)';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(npcSX - 3, npcSY - 15 + npcBob, 2.5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(npcSX + 3, npcSY - 15 + npcBob, 2.5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(npcSX - 0.5, npcSY - 15 + npcBob);
          ctx.lineTo(npcSX + 0.5, npcSY - 15 + npcBob);
          ctx.stroke();
        } else if (npcTheme.hat === 'crown') {
          ctx.fillStyle = 'rgba(200,170,50,0.5)';
          ctx.beginPath();
          ctx.moveTo(npcSX - 6, npcSY - 20 + npcBob);
          ctx.lineTo(npcSX - 4, npcSY - 24 + npcBob);
          ctx.lineTo(npcSX - 2, npcSY - 20 + npcBob);
          ctx.lineTo(npcSX, npcSY - 25 + npcBob);
          ctx.lineTo(npcSX + 2, npcSY - 20 + npcBob);
          ctx.lineTo(npcSX + 4, npcSY - 24 + npcBob);
          ctx.lineTo(npcSX + 6, npcSY - 20 + npcBob);
          ctx.closePath();
          ctx.fill();
        } else if (npcTheme.hat === 'feather') {
          ctx.fillStyle = npcTheme.robe;
          ctx.beginPath();
          ctx.ellipse(npcSX, npcSY - 20 + npcBob, 8, 3, 0, Math.PI, 0);
          ctx.fill();
          // Feather
          ctx.strokeStyle = 'rgba(255,100,100,0.4)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(npcSX + 5, npcSY - 21 + npcBob);
          ctx.quadraticCurveTo(npcSX + 12, npcSY - 30 + npcBob + Math.sin(time * 2) * 2, npcSX + 8, npcSY - 35 + npcBob);
          ctx.stroke();
        }

        // Accessory item floating next to NPC
        ctx.globalAlpha = 0.4 + Math.sin(time * 2 + room.x) * 0.1;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(npcTheme.accessory, npcSX + 12, npcSY - 8 + npcBob + Math.sin(time * 1.5 + room.x) * 2);
        ctx.globalAlpha = 1;

        // Speech bubble when player is close
        if (npcDist < TILE * 3) {
          const roomPrinciples = roomPrinciplesMap[room.name] || [];
          const unreadPrinciples = roomPrinciples.filter(p => !getPrincipleProgressRef.current(p.id)?.activities?.read);
          let speechText;
          if (unreadPrinciples.length > 0) {
            const suggest = unreadPrinciples[Math.floor(seededRandom(room.x, room.y, 600 + Math.floor(time / 10)) * unreadPrinciples.length)];
            speechText = `Lees "${suggest.title}"!`;
          } else if (roomPrinciples.length > 0) {
            speechText = 'Je hebt alles gelezen! ⭐';
          } else {
            speechText = `Welkom in ${room.name}!`;
          }

          const bubbleAlpha = Math.min(1, (TILE * 3 - npcDist) / TILE);
          ctx.globalAlpha = bubbleAlpha * 0.9;

          // Speech bubble
          ctx.font = '600 10px Inter, sans-serif';
          ctx.textAlign = 'center';
          const tw2 = ctx.measureText(speechText).width;
          const bubbleW = tw2 + 16;
          const bubbleH = 22;
          const bubbleX = npcSX - bubbleW / 2;
          const bubbleY = npcSY - 42 + npcBob;

          // Bubble background
          ctx.fillStyle = 'rgba(255,255,255,0.92)';
          ctx.beginPath();
          ctx.roundRect(bubbleX, bubbleY, bubbleW, bubbleH, 8);
          ctx.fill();
          // Bubble pointer
          ctx.beginPath();
          ctx.moveTo(npcSX - 4, bubbleY + bubbleH);
          ctx.lineTo(npcSX, bubbleY + bubbleH + 6);
          ctx.lineTo(npcSX + 4, bubbleY + bubbleH);
          ctx.closePath();
          ctx.fill();
          // Border
          ctx.strokeStyle = `hsla(${room.catHue}, 40%, 50%, 0.3)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(bubbleX, bubbleY, bubbleW, bubbleH, 8);
          ctx.stroke();
          // Text
          ctx.fillStyle = '#333';
          ctx.fillText(speechText, npcSX, bubbleY + 15);
          ctx.globalAlpha = 1;
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
          // Echo ripple on room entry
          echoRipplesRef.current.push({
            x: player.x, y: player.y, radius: 5, maxRadius: TILE * 3, age: 0,
          });
          // Discovery toast on first visit
          if (!discoveredRoomsRef.current.has(nearRoom.name)) {
            discoveredRoomsRef.current.add(nearRoom.name);
            setToastMessage({ text: `Nieuwe kamer ontdekt: ${nearRoom.name}`, emoji: nearRoom.emoji });
            emotionRef.current = { emoji: '✨', age: 0 };
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
        // Fog of war on minimap
        if (fogOfWarRef.current) {
          const fowMM = fogOfWarRef.current;
          for (let mmy = 0; mmy < mapH; mmy++) {
            for (let mmx = 0; mmx < mapW; mmx++) {
              const mmRevealed = fowMM[mmy]?.[mmx] ?? 0;
              if (mmRevealed < 1) {
                mCtx.fillStyle = `rgba(0,0,0,${1 - mmRevealed})`;
                mCtx.fillRect(mmx * mmScale, mmy * mmScale, mmScale, mmScale);
              }
            }
          }
        }
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

      // Fog of war overlay - black on unrevealed tiles, soft edge on partially revealed
      if (fogOfWarRef.current) {
        const fow = fogOfWarRef.current;
        for (let fty = startTY; fty < endTY; fty++) {
          for (let ftx = startTX; ftx < endTX; ftx++) {
            const revealed = fow[fty]?.[ftx] ?? 0;
            if (revealed >= 1) continue; // Fully revealed, skip
            const fsx = ftx * TILE - camX;
            const fsy = fty * TILE - camY;
            if (revealed <= 0) {
              // Fully hidden - solid black
              ctx.fillStyle = 'rgba(0,0,0,1)';
              ctx.fillRect(fsx - 0.5, fsy - 0.5, TILE + 1, TILE + 1);
            } else {
              // Partially revealed - soft edge fade
              ctx.fillStyle = `rgba(0,0,0,${1 - revealed})`;
              ctx.fillRect(fsx - 0.5, fsy - 0.5, TILE + 1, TILE + 1);
            }
          }
        }
        // Smooth circle of light around current player position
        const fowCX = player.x - camX;
        const fowCY = player.y - camY;
        const fowPixelR = (fowRadius + 1) * TILE;
        const fowGrad = ctx.createRadialGradient(fowCX, fowCY, fowPixelR * 0.5, fowCX, fowCY, fowPixelR);
        fowGrad.addColorStop(0, 'rgba(0,0,0,0)');
        fowGrad.addColorStop(0.7, 'rgba(0,0,0,0)');
        fowGrad.addColorStop(1, 'rgba(0,0,0,0.15)');
        ctx.fillStyle = fowGrad;
        ctx.beginPath();
        ctx.arc(fowCX, fowCY, fowPixelR, 0, Math.PI * 2);
        ctx.fill();
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

      // Ambient rain weather (rare, screen-space)
      const rain = rainRef.current;
      if (!rain.active && Math.random() < 0.0002) {
        rain.active = true;
        rain.intensity = 0;
      }
      if (rain.active) {
        rain.intensity = Math.min(1, rain.intensity + 0.002);
        // Spawn rain drops
        const dropCount = Math.floor(rain.intensity * 4);
        for (let rd = 0; rd < dropCount; rd++) {
          rain.drops.push({
            x: Math.random() * w,
            y: -5,
            speed: 4 + Math.random() * 3,
            len: 6 + Math.random() * 8,
          });
        }
        // Update and draw drops
        ctx.strokeStyle = `rgba(150,170,200,${rain.intensity * 0.06})`;
        ctx.lineWidth = 0.5;
        for (let rdi = rain.drops.length - 1; rdi >= 0; rdi--) {
          const rd = rain.drops[rdi];
          rd.y += rd.speed;
          if (rd.y > h + 10) { rain.drops.splice(rdi, 1); continue; }
          ctx.beginPath();
          ctx.moveTo(rd.x, rd.y);
          ctx.lineTo(rd.x - 1, rd.y - rd.len);
          ctx.stroke();
        }
        // Limit drops & auto-stop
        if (rain.drops.length > 200) rain.drops.splice(0, rain.drops.length - 200);
        // Thunder flash during rain
        if (rain.intensity > 0.5 && Math.random() < 0.001) {
          thunderRef.current = 0.3 + Math.random() * 0.2;
        }
        if (Math.random() < 0.0005) {
          rain.active = false;
        }
      } else if (rain.drops.length > 0) {
        // Fade out remaining drops
        ctx.strokeStyle = 'rgba(150,170,200,0.03)';
        ctx.lineWidth = 0.5;
        for (let rdi = rain.drops.length - 1; rdi >= 0; rdi--) {
          const rd = rain.drops[rdi];
          rd.y += rd.speed;
          if (rd.y > h + 10) { rain.drops.splice(rdi, 1); continue; }
          ctx.beginPath();
          ctx.moveTo(rd.x, rd.y);
          ctx.lineTo(rd.x - 1, rd.y - rd.len);
          ctx.stroke();
        }
        rain.intensity = Math.max(0, rain.intensity - 0.005);
      }

      // Snow weather (rare, screen-space, alternate to rain)
      const snow = snowRef.current;
      if (!snow.active && !rainRef.current.active && Math.random() < 0.0001) {
        snow.active = true;
        snow.intensity = 0;
      }
      if (snow.active) {
        snow.intensity = Math.min(1, snow.intensity + 0.001);
        const flakeCount = Math.floor(snow.intensity * 3);
        for (let sf = 0; sf < flakeCount; sf++) {
          snow.flakes.push({
            x: Math.random() * w,
            y: -5,
            speed: 0.8 + Math.random() * 1.2,
            size: 1 + Math.random() * 2.5,
            drift: (Math.random() - 0.5) * 0.5,
            wobble: Math.random() * Math.PI * 2,
          });
        }
        for (let sfi = snow.flakes.length - 1; sfi >= 0; sfi--) {
          const sf2 = snow.flakes[sfi];
          sf2.y += sf2.speed;
          sf2.x += sf2.drift + Math.sin(sf2.wobble + time * 2) * 0.3;
          sf2.wobble += 0.02;
          if (sf2.y > h + 10) { snow.flakes.splice(sfi, 1); continue; }
          ctx.fillStyle = `rgba(230,235,245,${snow.intensity * 0.12})`;
          ctx.beginPath();
          ctx.arc(sf2.x, sf2.y, sf2.size, 0, Math.PI * 2);
          ctx.fill();
        }
        if (snow.flakes.length > 300) snow.flakes.splice(0, snow.flakes.length - 300);
        if (Math.random() < 0.0003) snow.active = false;
      } else if (snow.flakes.length > 0) {
        for (let sfi2 = snow.flakes.length - 1; sfi2 >= 0; sfi2--) {
          const sf3 = snow.flakes[sfi2];
          sf3.y += sf3.speed;
          sf3.x += sf3.drift + Math.sin(sf3.wobble + time * 2) * 0.3;
          if (sf3.y > h + 10) { snow.flakes.splice(sfi2, 1); continue; }
          ctx.fillStyle = 'rgba(230,235,245,0.06)';
          ctx.beginPath();
          ctx.arc(sf3.x, sf3.y, sf3.size, 0, Math.PI * 2);
          ctx.fill();
        }
        snow.intensity = Math.max(0, snow.intensity - 0.003);
      }

      // Thunder flash (screen-space)
      if (thunderRef.current > 0) {
        ctx.fillStyle = `rgba(220,220,255,${thunderRef.current})`;
        ctx.fillRect(0, 0, w, h);
        thunderRef.current -= 0.02;
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
                    saveGameState();
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
          <div style={{ marginTop: 4, fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)' }}>v1.8.0</div>
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
        }}>v1.8.0</div>
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
                    saveGameState();
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

      {/* Save/Load buttons */}
      <div style={{
        position: 'absolute', top: 16, right: isMobile ? 16 : 140,
        display: 'flex', gap: 6, zIndex: 10,
      }}>
        <button
          onClick={() => {
            if (saveGameState()) {
              setToastMessage({ text: 'Spel opgeslagen!', emoji: '💾' });
              if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
              toastTimeoutRef.current = setTimeout(() => setToastMessage(null), 2000);
            }
          }}
          style={{
            background: 'rgba(0,0,0,0.7)', color: '#fff',
            border: 'none', padding: '8px 12px', borderRadius: 10,
            cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600,
            backdropFilter: 'blur(8px)',
          }}
        >
          💾 Opslaan
        </button>
        <button
          onClick={() => {
            const state = loadGameState();
            if (state) {
              playerRef.current.x = state.playerX;
              playerRef.current.y = state.playerY;
              if (state.fogOfWar) {
                fogOfWarRef.current = state.fogOfWar.map(row => new Float32Array(row));
              }
              if (state.discoveredRooms) {
                discoveredRoomsRef.current = new Set(state.discoveredRooms);
              }
              setToastMessage({ text: 'Spel geladen!', emoji: '📂' });
              if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
              toastTimeoutRef.current = setTimeout(() => setToastMessage(null), 2000);
            } else {
              setToastMessage({ text: 'Geen opgeslagen spel gevonden', emoji: '❌' });
              if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
              toastTimeoutRef.current = setTimeout(() => setToastMessage(null), 2000);
            }
          }}
          style={{
            background: 'rgba(0,0,0,0.7)', color: '#fff',
            border: 'none', padding: '8px 12px', borderRadius: 10,
            cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600,
            backdropFilter: 'blur(8px)',
          }}
        >
          📂 Laden
        </button>
      </div>

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
