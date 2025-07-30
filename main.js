// --- Ensure DOM is loaded before accessing audio element ---
const audio = document.getElementById("audio");
// --- UI 클릭 사운드 로드 ---
const noteSpeedFactor = 0.5; // or your desired speed multiplier
const uiClickSound = new Audio("songs/tap-notification-180637.mp3");
uiClickSound.volume = 0.5;

const countdownSound = new Audio("songs/female-vocal-321-countdown-240912.mp3");
countdownSound.volume = 0.3;

function playUISound() {
  uiClickSound.currentTime = 0;
  uiClickSound.play();
}
// --- 로딩 게이지 ---
const loadingDiv = document.getElementById('loading');
const loadingBar = document.getElementById('loading-bar');
const loadingText = document.getElementById('loading-text');
const songSelectV = document.getElementById('song-select-v');
const gameDiv = document.getElementById('game');
const lanesDiv = document.getElementById('lanes');
const bgm = document.getElementById('bgm');
const scoreSpan = document.getElementById('score');
const comboSpan = document.getElementById('combo');
const hpSpan = document.getElementById('hp');
const progressBar = document.getElementById('progress');
const judgementDiv = document.getElementById('judgement');
const touchKeys = document.querySelectorAll('.touch-key');
let selectedIdx = 0;

// --- 대시 6 초 자르기 대시곡 대시6초 ---
if (window.songList && Array.isArray(window.songList)) {
  const dashSong = window.songList.find(s => s.title === "Dash");
  if (dashSong && Array.isArray(dashSong.notes) && dashSong.notes.length > 0) {
    // Find max time
    const maxTime = Math.max(...dashSong.notes.map(n => n.time));
    const cutoff = maxTime - 6000;
    dashSong.notes = dashSong.notes.filter(n => n.time < cutoff);
  }
}

const preloadList = [
  ...window.songList.map(s=>s.audioFile),
  ...window.songList.map(s=>s.albumCover)
];
let loadedCount = 0;
function updateLoadingBar() {
  let percent = Math.round((loadedCount/preloadList.length)*100);
  loadingBar.style.width = percent + '%';
  loadingText.textContent = percent + '%';
  if (loadedCount >= preloadList.length) {
    setTimeout(()=>{
      loadingDiv.style.display = 'none';
      songSelectV.style.display = 'flex';
      renderSongCards();
      spawnBackgroundParticles();
    }, 400);
  }
}//여기까지6초 자른거

preloadList.forEach(src => {
  let ext = src.split('.').pop();
  if (ext === 'mp3' || ext === 'wav' || ext === 'ogg') {
    let audio = new Audio();
    audio.src = src;
    audio.oncanplaythrough = () => { loadedCount++; updateLoadingBar(); };
    audio.onerror = () => { loadedCount++; updateLoadingBar(); };
  } else {
    let img = new Image();
    img.src = src;
    img.onload = () => { loadedCount++; updateLoadingBar(); };
    img.onerror = () => { loadedCount++; updateLoadingBar(); };
  }
});
songSelectV.style.display = 'none';
gameDiv.style.display = 'none';

// --- 곡 선택 카드 렌더링 ---

const JUDGE_OFFSET = -40; // ms, 보정값 (조절 가능)
const NOTE_FALL_TIME = 1200; // ms, 노트 낙하 시간
const songListDiv = document.getElementById('song-list');
function renderSongCards() {
  songListDiv.innerHTML = '';
  window.songList.forEach((song, idx) => {
    const card = document.createElement('div');
    card.className = 'song-card-v' + (idx === selectedIdx ? ' selected' : '');
    card.style.top = `calc(50% + ${(idx-selectedIdx)*60}px)`;
    card.style.opacity = idx === selectedIdx ? 1 : 0.18;
    card.innerHTML = `
      <img src="${song.albumCover}" class="cover">
      <div class="info">
        <div class="title">${song.title}</div>
        <div class="artist">${song.artist}</div>
        <div class="difficulty ${song.difficulty}">${song.difficulty.toUpperCase()}</div>
      </div>
      <button class="preview-btn">미리듣기</button>
    `;
    card.querySelector('.preview-btn').onclick = (e) => {
      e.stopPropagation();
      playUISound("click");
      playPreview(idx);
    };
    card.onclick = () => {
      if (idx !== selectedIdx) {
        playUISound("click");
        moveTo(idx);
      }
    };
    songListDiv.appendChild(card);
  });
}
// (중복 정의 제거: moveTo 함수는 아래에서 한 번만 정의)
document.getElementById('prev-btn').onclick = () => { playUISound("click"); moveTo(selectedIdx-1);}
document.getElementById('next-btn').onclick = () => { playUISound("click"); moveTo(selectedIdx+1);}
let startY = null;
songListDiv.addEventListener('touchstart', e => { startY = e.touches[0].clientY; });
songListDiv.addEventListener('touchend', e => {
  if (startY === null) return;
  let dy = e.changedTouches[0].clientY - startY;
  if (dy > 40) moveTo(selectedIdx-1);
  else if (dy < -40) moveTo(selectedIdx+1);
  startY = null;
});
document.getElementById('start-btn').onclick = () => {
  playUISound("click");
  songSelectV.style.display = 'none';
  gameDiv.style.display = 'block';
  showCountdown(() => {
    startGame();
  });
};
// 전역에서 한 번만 선언
let previewAudio = new Audio();

// 미리듣기(프리뷰) 함수 - 반드시 한 번만 정의!
function playPreview(idx) {
  try {
    previewAudio.pause();
    previewAudio.currentTime = 0;
  } catch(e){}
  previewAudio = new Audio(window.songList[idx].audioFile);
  previewAudio.currentTime = 0;
  previewAudio.volume = 0.8;
  previewAudio.play().catch(err => {
    if (err.name !== "AbortError") console.error(err);
    // AbortError는 무시
  });
}


function moveTo(newIdx) {
  if (newIdx < 0 || newIdx >= window.songList.length) return;
  selectedIdx = newIdx;
  renderSongCards();
  spawnCardParticle();
  playPreview(selectedIdx); // 이동할 때마다 자동 재생
}
document.getElementById('start-btn').onclick = () => {
  playUISound("click");
  previewAudio.pause(); // 게임 시작하면 미리듣기 자동 정지!
  songSelectV.style.display = 'none';
  gameDiv.style.display = 'block';
  showCountdown(() => {
    startGame();
  });
};
document.getElementById('retry-btn').onclick = () => {
  playUISound("click");
  bgm.pause(); previewAudio.pause();
  document.getElementById('result-modal').classList.add('hide');
  setTimeout(()=>{
    document.getElementById('result-modal').style.display='none';
    gameDiv.style.display = 'block';
    showCountdown(() => {
      startGame();
    });
  }, 500);
};
document.getElementById('select-btn').onclick = () => {
  playUISound("click");
  bgm.pause(); previewAudio.pause();
  document.getElementById('result-modal').classList.add('hide');
  setTimeout(()=>{
    document.getElementById('result-modal').style.display='none';
    gameDiv.style.display = 'none'; // 게임 화면 숨기기 추가
    songSelectV.style.display = 'flex';
    renderSongCards();
  }, 500);
};


// --- 배경 파티클 ---
function spawnBackgroundParticles() {
  const bg = document.getElementById('bg-particles');
  for (let i=0; i<16; i++) {
    let p = document.createElement('div');
    p.className = 'bg-particle';
    p.style.position = 'absolute';
    p.style.left = Math.random()*100+'vw';
    p.style.top = Math.random()*100+'vh';
    p.style.width = p.style.height = (30+Math.random()*60)+'px';
    p.style.background = 'radial-gradient(circle,#0ff8 0%,#ff00e6 80%,transparent 100%)';
    p.style.opacity = 0.15+Math.random()*0.12;
    p.style.animationDuration = (5+Math.random()*6)+'s';
    bg.appendChild(p);
  }
}
function spawnCardParticle() {
  const bg = document.getElementById('bg-particles');
  for (let i=0; i<8; i++) {
    let p = document.createElement('div');
    p.className = 'bg-particle';
    p.style.position = 'absolute';
    p.style.left = (45+Math.random()*10)+'vw';
    p.style.top = (38+Math.random()*10)+'vh';
    p.style.width = p.style.height = (14+Math.random()*18)+'px';
    p.style.borderRadius = '50%';
    p.style.background = 'radial-gradient(circle,#fff 0%,#0ff 60%,#ff00e6 100%,transparent 100%)';
    p.style.opacity = 0.30+Math.random()*0.20;
    p.style.zIndex = 6;
    p.style.pointerEvents = 'none';
    p.style.animation = `particle-burst 0.7s forwards`;
    bg.appendChild(p);
    setTimeout(()=>p.remove(), 800);
  }
}

// --- 카운트다운 ---
function showCountdown(callback) {
  const countdownDiv = document.getElementById('countdown');
  const numSpan = document.getElementById('countdown-num');
  countdownDiv.style.display = 'flex';

  // Replace with new 3-2-1-START! file
  const fullCountdownAudio = new Audio("songs/female-vocal-321-countdown-240912.mp3");
  fullCountdownAudio.volume = 0.8;
  setTimeout(() => fullCountdownAudio.play(), 400);

  const countdownSequence = ['3', '2', '1', 'START!'];
  let index = 0;

  function showNextNumber() {
    if (index < countdownSequence.length) {
      numSpan.textContent = countdownSequence[index];
      numSpan.style.animation = 'none';
      void numSpan.offsetWidth;
      numSpan.style.animation = '';
      if (countdownSequence[index] === 'START!') {
        numSpan.style.color = '#fff';
      }
      index++;
      setTimeout(showNextNumber, 700);
    } else {
      countdownDiv.style.display = 'none';
      numSpan.style.color = '#0ff';
      callback && callback();
    }
  }

  showNextNumber();
}
// --- 게임 시작 및 상태 초기화 ---
let gameState = {};

// --- TEST HOLD NOTE INJECTION (only once) ---
let testHoldNoteInjected = false;

function injectTestHoldNoteOnce() {
  if (testHoldNoteInjected) return;
  // Ensure scheduledNotes exists (for legacy support, but we use gameState.notes)
  // We'll inject to gameState.notes after it's created in startGame
  testHoldNoteInjected = true;
}

function startGame() {
  // 미리듣기(프리뷰) 정지
  if (typeof previewAudio !== 'undefined' && previewAudio && !previewAudio.paused) {
    previewAudio.pause();
    previewAudio.currentTime = 0;
  }
  const song = window.songList[selectedIdx];
  // Set game background image based on song.background (or fallback)
  const bgPath = song.background || "assets/backgrounds/bg_default.jpg";
  document.getElementById("game-background").style.backgroundImage = `url('${bgPath}')`;

  // --- 배경 동영상 처리 ---
  const bgVideo = document.getElementById("background-video");
  if (bgVideo) {
    bgVideo.src = song.videoBackground || "videos/default.mp4";
    bgVideo.loop = false;
    bgVideo.onloadedmetadata = () => {
      const duration = bgVideo.duration;
      const audioDuration = bgm.duration || 0;
      if (duration < audioDuration) {
        bgVideo.loop = true;
      }
    };
  }


  bgm.src = song.audioFile;
  if (bgVideo) bgVideo.currentTime = 0.0;
  bgm.currentTime = 0.0;
  bgm.volume = 1.0;
  bgm.load();
  scoreSpan.textContent = '점수: 0';
  comboSpan.textContent = '콤보: 0';
  hpSpan.textContent = '체력: 100';
  progressBar.style.width = '0%';
  judgementDiv.textContent = '';
  judgementDiv.classList.remove('show');
  for (let lane = 0; lane < lanesDiv.children.length; lane++) {
    lanesDiv.children[lane].innerHTML = '';
    lanesDiv.children[lane].classList.add(`lane-${lane}`);
    // 버튼이 레인 위에 겹치지 않도록 z-index 조정
    const laneBtn = document.querySelector(`.touch-key[data-lane="${lane}"]`);
    if (laneBtn) laneBtn.style.zIndex = "1"; // 버튼을 아래로
  }

  gameState = {
    notes: song.notes.map(n => ({...n, hit: false})),
    startTime: null,
    score: 0,
    combo: 0,
    hp: 100,
    finished: false,
    totalNotes: song.notes.length,
    perfect: 0, great: 0, good: 0, miss: 0, maxCombo: 0
  };
  // Hide combo character image on game start if it exists
  const comboChar = document.getElementById("combo-character");
  if (comboChar) comboChar.style.display = "none";

  bgm.oncanplaythrough = () => {
    setTimeout(() => {
      bgm.play();
      if (bgVideo) {
        // bgVideo.currentTime already set above
        bgVideo.play();
      }
    }, 20); // 비디오를 0.2초 늦게 재생
  };
  bgm.onplay = () => {
    gameState.startTime = performance.now();
    requestAnimationFrame(gameLoop);
  };
}

// --- 판정 기준 ---
const JUDGE = [
  { name: "Perfect", window: 50, score: 1000, color: "#0ff" },
  { name: "Great", window: 100, score: 600, color: "#0f8" },
  { name: "Good", window: 150, score: 300, color: "#ff0" }
];

// --- 입력 처리 (롱노트/hold 제거) ---
function handleInput(lane) {
  if (gameState.finished) return;
  const now = performance.now() - gameState.startTime;
  const adjustedNow = now + JUDGE_OFFSET;
  // Logic: 판정할 노트 찾기
  let nearest = null, minDiff = 9999, idx = -1;
  gameState.notes.forEach((n, i) => {
    // Skip slide notes for input handling
    if (n.type === "slide") return;
    if (n.lane === lane && !n.hit) {
      let diff = Math.abs(adjustedNow - n.time);
      if (diff < minDiff) { minDiff = diff; nearest = n; idx = i; }
    }
  });
  // Logic: Miss 판정 (노트가 없거나 판정 범위 벗어난 경우)
  if (!nearest || minDiff > 200) {
    // 노트가 화면의 하단에서 60% 이상 내려온 경우에만 Miss 처리
    const nowY = getNoteY(performance.now() - gameState.startTime + JUDGE_OFFSET, performance.now() - gameState.startTime);
    const thresholdY = lanesDiv.offsetHeight * 0.6;
    if (nowY !== null && nowY > thresholdY) {
      showJudge("Miss", "#f44");
      gameState.combo = 0;
      gameState.hp -= 10;
      gameState.miss++;
      updateUI();
      checkGameOver();
    }
    // Styling trigger: lane active-lane class (누르면 항상 반응)
    const laneDiv = document.querySelector(`.lane[data-lane="${lane}"]`);
    if (laneDiv) {
      laneDiv.classList.add('active-lane');
      setTimeout(() => laneDiv.classList.remove('active-lane'), 120);
    }
    return;
  }
  // Logic: 판정 처리
  let judge = JUDGE.find(j => minDiff <= j.window) || { name: "Good", score: 300, color: "#ff0" };
  showJudge(judge.name, judge.color);
  gameState.score += judge.score;
  if (judge.name === "Perfect") { gameState.hp = Math.min(100, gameState.hp + 2); gameState.perfect++; }
  else if (judge.name === "Great") { gameState.great++; }
  else if (judge.name === "Good") { gameState.hp = Math.max(0, gameState.hp - 2); gameState.good++; }
  gameState.combo++;
  if (gameState.combo > gameState.maxCombo) gameState.maxCombo = gameState.combo;

  // Logic: 노트 히트 처리 (롱노트 없음)
  gameState.notes[idx].hit = true;

  updateUI();
  spawnParticle(lane);
  // Styling trigger: lane active-lane class
  const laneDiv = document.querySelector(`.lane[data-lane="${lane}"]`);
  if (laneDiv) {
    laneDiv.classList.add('active-lane');
    setTimeout(() => laneDiv.classList.remove('active-lane'), 120);
  }
}

function releaseHold(lane) {
  // No-op: hold note logic removed
}

// --- UI 갱신 ---
function updateUI() {
  scoreSpan.textContent = `점수: ${gameState.score}`;
  comboSpan.textContent = `콤보: ${gameState.combo}`;
  hpSpan.textContent = `체력: ${gameState.hp}`;

  // --- Combo Character Effect ---
  const song = window.songList[selectedIdx];
  const existingCharacter = document.getElementById("combo-character");

  // 조건에 맞지 않으면 제거
  if (existingCharacter && (gameState.combo < 10 || song.title !== "Why?")) {
    existingCharacter.remove();
  }

  // 조건이 충족되면 추가
  if (gameState.combo >= 10 && song.title === "Why?") {
    if (!existingCharacter) {
      const bgDiv = document.getElementById("game-background");
      const characterImg = document.createElement("img");
      characterImg.src = "ch/eunho.PNG";
      characterImg.id = "combo-character";
      characterImg.alt = "Combo Character";
      characterImg.style.position = "absolute";
      characterImg.style.bottom = "140px";
      characterImg.style.left = "20px";
      characterImg.style.width = "180px";
      characterImg.style.zIndex = "9999";
      characterImg.style.pointerEvents = "none";
      characterImg.style.animation = "char-slide-left 0.7s ease-out forwards";
      bgDiv.appendChild(characterImg);

      const sfx = new Audio("songs/eunho.mp3");
      sfx.play();
    }
  }
}

// --- Combo Character CSS (ensure not overwritten) ---
const comboCharStyle = document.createElement('style');
comboCharStyle.innerHTML = `
#combo-character {
  position: absolute;
  bottom: 50%;
  left: auto;
  right: 20px;
  transform: translateY(50%);
  width: 180px;
  z-index: 10000; /* ensure it's above all other game elements */
  pointer-events: none;
  animation: char-slide-left 0.7s ease-out forwards;
}
@keyframes char-slide-left {
  from { transform: translateX(100%) translateY(50%); opacity: 0; }
  to { transform: translateX(0) translateY(50%); opacity: 1; }
}
`;
document.head.appendChild(comboCharStyle);

// --- 게임 루프 ---
function gameLoop() {
  if (gameState.finished) return;
  const now = performance.now() - gameState.startTime;

  // 노트 위치 갱신 및 렌더링
  for (let lane = 0; lane < 4; lane++) {
    let laneDiv = lanesDiv.children[lane];
    console.log("Rendering lane", lane, "at", now);
    laneDiv.innerHTML = ''; // 노트 초기화

    // 단타만 렌더링 (슬라이드/롱노트 제외)
    gameState.notes.forEach(n => {
      if (n.type === "slide") return; // Skip slide notes for rendering
      if (n.lane === lane && !n.hit) {
        if (n.type === "tap") {
          renderTapNote(n, now, laneDiv);
        }
      }
    });
  }

  // 슬라이드 노트는 렌더링하지 않음 (비활성화)
  // renderSlideNotes(gameState.notes.filter(n => n.type === "slide" && !n.hit), now, lanesDiv);

  // 진행도 바
  let song = window.songList[selectedIdx];
  let durationMs = isNaN(bgm.duration) ? (song.notes[song.notes.length - 1].time + 2000) : bgm.duration * 1000;
  let prog = Math.min(1, now / durationMs);
  progressBar.style.width = `${prog*100}%`;

  // Miss 판정: 지나간 노트 미입력
  gameState.notes.forEach((n, i) => {
    if (n.type === "slide") return; // Skip slide notes for miss logic
    if (!n.hit && now - n.time > 200) {
      n.hit = true;
      gameState.combo = 0;
      gameState.hp -= 10;
      gameState.miss++;
      showJudge("Miss", "#f44");
      updateUI();
      checkGameOver();
    }
  });
  // 게임 종료(클리어/실패) 처리
  checkGameOver();

// 결과창에서 다시 시작/곡 선택 시에도 음악 멈춤 추가
document.getElementById('retry-btn').onclick = () => {
  playUISound("click");
  bgm.pause(); previewAudio.pause();
  document.getElementById('result-modal').classList.add('hide');
  setTimeout(()=>{
    document.getElementById('result-modal').style.display='none';
    gameDiv.style.display = 'block';
    showCountdown(() => {
      startGame();
    });
  }, 500);
};
document.getElementById('select-btn').onclick = () => {
  playUISound("click");
  bgm.pause();
  previewAudio.pause();
  document.getElementById('result-modal').classList.add('hide');
  setTimeout(() => {
    document.getElementById('result-modal').style.display = 'none';
    gameDiv.style.display = 'none'; // Hide game screen
    songSelectV.style.display = 'flex'; // Show song select screen
    renderSongCards(); // Re-render song cards
  }, 500);
};


  requestAnimationFrame(gameLoop);
}

// --- 단타 노트 렌더링 ---
function renderTapNote(note, now, laneDiv) {
  let noteDiv = document.createElement('div');
  noteDiv.className = 'note';
  noteDiv.classList.add(`lane-${note.lane}`); // assign lane color class
  const y = getNoteY(note.time, now);
  if (y === null) return;
  noteDiv.style.top = `${y - 20}px`;
  noteDiv.style.zIndex = "1000"; // Ensure note is on top
  laneDiv.appendChild(noteDiv);
}

function getYForTime(time) {
  if (!audio || typeof gameState.startTime !== 'number' || isNaN(audio.currentTime)) {
    return null;
  }
  const currentTime = audio.currentTime * 1000;
  const delta = time - currentTime;
  return delta * noteSpeedFactor;
}

// --- 슬라이드 노트 렌더링 (비활성화) ---
// function renderSlideNotes(slideNotes, now, lanesArea) {
//   // Disabled: Slide note rendering is removed.
// }

// --- 좌표 계산 헬퍼 ---
function getNoteY(time, now) {
  // Legacy function for note position (used by tap/hold render)
  const dist = time - now + JUDGE_OFFSET;
  const ratio = 1 - (dist / NOTE_FALL_TIME);
  if (ratio < 0 || ratio > 1) return null;
  return lanesDiv.offsetHeight * (0.1 + 0.8 * ratio);
}

// --- Prevent null y for hold notes except when far in the past ---
// Used for improved hold note rendering
function getYPosition(noteTime) {
  const timeDiff = noteTime - currentTime;
  if (timeDiff < -2000) return null; // Too far in the past, skip rendering
  const y = canvasHeight - timeDiff * noteSpeedFactor;
  return isNaN(y) ? null : y; // Prevent null return
}
function getLaneCenterX(lane) {
  const laneDiv = lanesDiv.children[lane];
  const rect = laneDiv.getBoundingClientRect();
  return rect.left + rect.width / 2 - lanesDiv.getBoundingClientRect().left;
}

// --- 판정 피드백 ---
function showJudge(txt, color) {
  judgementDiv.textContent = txt;
  judgementDiv.style.color = color;
  judgementDiv.classList.remove('show'); // Reset animation
  void judgementDiv.offsetWidth; // Force reflow for animation
  judgementDiv.classList.add('show'); // Trigger animation
  const displayTime = (txt === "Game Over" || txt === "Finish!") ? 4000 : 1300;
  setTimeout(() => {
    judgementDiv.classList.remove('show'); // Hide again
  }, displayTime);
}

// --- 판정선 도달 시 헤드/테일 pop, 파티클, 사운드 ---
// (No-op: hold/long note visuals removed)

// --- UI 갱신 ---
function updateUI() {
  scoreSpan.textContent = `점수: ${gameState.score}`;
  comboSpan.textContent = `콤보: ${gameState.combo}`;
  hpSpan.textContent = `체력: ${gameState.hp}`;
}

// --- 게임 종료 체크 ---
function checkGameOver() {
  const song = window.songList[selectedIdx];
  const now = performance.now() - gameState.startTime;
  const lastNoteTime = song.notes[song.notes.length - 1]?.time || 0;
  const audioDuration = bgm.duration * 1000;

  // Always wait until the audio is done playing before ending the game
  const threshold = Math.max(audioDuration, lastNoteTime + 3000);

  if (gameState.hp <= 0 || now > threshold) {
    gameState.finished = true;
    bgm.pause();
    bgm.currentTime = 0;

    if (gameState.hp <= 0) {
      const gameOverSfx = new Audio("songs/game-over-kid-voice-clip-352738.mp3");
      gameOverSfx.volume = 0.3;
      gameOverSfx.play();
    }

    judgementDiv.style.display = 'block';
    showResult();
  }
}

function showResult() {
  const song = window.songList[selectedIdx];
  const resultText = gameState.hp <= 0 ? "Game Over" : "Finish!";

  // 판정 텍스트 표시
  judgementDiv.textContent = resultText;
  judgementDiv.style.color = "#fff";
  judgementDiv.classList.add('show');
  judgementDiv.style.display = 'block';

  // 결과창 띄우기 전에 텍스트를 잠깐 보여줌
  setTimeout(() => {
    // Play tada sound before showing the result modal
    const tadaSound = new Audio("songs/winning-218995.mp3");
    tadaSound.volume = 0.4;
    tadaSound.play();

    showResultModal(song, gameState.score, getRank(gameState), {
      perfect: gameState.perfect,
      great: gameState.great,
      good: gameState.good,
      miss: gameState.miss,
      combo: gameState.maxCombo
    });
    judgementDiv.classList.remove('show');
    judgementDiv.style.display = 'none';
  }, 2000);
}

// --- 랭크 계산 ---
function getRank(g) {
  if (g.hp <= 0) return "b";
  let rate = (g.perfect + g.great * 0.7 + g.good * 0.4) / (g.totalNotes || 1);
  if (rate > 0.98 && g.miss === 0) return "sss";
  if (rate > 0.95) return "ss";
  if (rate > 0.90) return "s";
  if (rate > 0.80) return "a";
  return "b";
}
// --- 입력 이벤트 연결 (단타/홀드만 지원, 슬라이드 제외) ---
// Use pointerdown/pointerup/pointerleave for proper active class handling
document.querySelectorAll('.touch-key').forEach((key) => {
  key.addEventListener('pointerdown', (e) => {
    key.classList.add('active');
    // Only handle input if game is running and the button is in the game area
    if (typeof key.dataset.lane !== "undefined") {
      handleInput(Number(key.dataset.lane));
    }
    // e.preventDefault(); // Optionally prevent default
  });
  key.addEventListener('pointerup', (e) => {
    key.classList.remove('active');
    if (typeof key.dataset.lane !== "undefined") {
      releaseHold(Number(key.dataset.lane));
    }
  });
  key.addEventListener('pointerleave', (e) => {
    key.classList.remove('active');
    if (typeof key.dataset.lane !== "undefined") {
      releaseHold(Number(key.dataset.lane));
    }
  });
});
document.addEventListener('keydown', e => {
  if (gameDiv.style.display !== 'block') return;
  let keyMap = { 'd':0, 'f':1, 'j':2, 'k':3 };
  let lane = keyMap[e.key.toLowerCase()];
  if (lane !== undefined) {
    touchKeys[lane].classList.add('active');
    handleInput(lane);
    // playKeySound(lane); // Removed note press sound effect
  }
});
document.addEventListener('keyup', e => {
  let keyMap = { 'd':0, 'f':1, 'j':2, 'k':3 };
  let lane = keyMap[e.key.toLowerCase()];
  if (lane !== undefined) {
    touchKeys[lane].classList.remove('active');
    releaseHold(lane);
  }
});

// --- 효과음 (Web Audio API) ---
function playKeySound(lane) {
  try {
    let ctx = playKeySound.ctx || (playKeySound.ctx = new (window.AudioContext || window.webkitAudioContext)());
    let o = ctx.createOscillator();
    let g = ctx.createGain();
    o.type = 'sine';
    o.frequency.value = 300 + lane*100;
    g.gain.value = 0.12;
    o.connect(g); g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime+0.15);
  } catch(e){}
}
// playUISound는 위에서 새로 정의됨

// 모든 버튼에 UI 클릭 사운드 적용
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => playUISound());
    btn.addEventListener('touchstart', () => playUISound());
  });
});

// --- 레인 강조 스타일 동적 추가 ---
const extraStyle = document.createElement('style');
extraStyle.innerHTML = `
.lane {
  position: relative !important;
  overflow: hidden !important;
  background: transparent !important;
}
.lane-0, .lane-1, .lane-2, .lane-3 {
  border: none !important;
  background: transparent !important;
}
#lanes {
  display: flex;
  background: linear-gradient(to right, rgba(0,160,255,0.05), rgba(150,0,255,0.05), rgba(255,80,200,0.05), rgba(255,50,50,0.05));
  border-radius: 8px;
  overflow: hidden;
}
.active-lane {
  transition: all 0.1s ease !important;
}
.lane-0.active-lane {
  background-color: rgba(0, 160, 255, 0.4);
  box-shadow: 0 0 32px 18px rgba(0, 160, 255, 0.95) !important;
}
.lane-1.active-lane {
  background-color: rgba(150, 0, 255, 0.4);
  box-shadow: 0 0 32px 18px rgba(150, 0, 255, 0.95) !important;
}
.lane-2.active-lane {
  background-color: rgba(255, 80, 200, 0.4);
  box-shadow: 0 0 32px 18px rgba(255, 80, 200, 0.95) !important;
}
.lane-3.active-lane {
  background-color: rgba(255, 50, 50, 0.4);
  box-shadow: 0 0 32px 18px rgba(255, 50, 50, 0.95) !important;
}
`;
document.head.appendChild(extraStyle);

// --- 판정 파티클 ---
function spawnParticle(lane) {
  const laneDiv = document.querySelector(`.lane[data-lane="${lane}"]`);
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = '50%';
  p.style.top = 'calc(100% - 30px)';
  if (laneDiv) {
    laneDiv.appendChild(p);
    setTimeout(()=>p.remove(), 520);
  }
}

// --- 결과창/랭크/카운트업/공유 ---
function animateScore(finalScore, rank, detail) {
  const scoreNum = document.getElementById('score-num');
  let cur = 0, step = Math.max(1, Math.floor(finalScore/60));
  function tick() {
    if (cur < finalScore) {
      cur += step;
      if (cur > finalScore) cur = finalScore;
      scoreNum.textContent = cur.toLocaleString();
      scoreNum.style.animation = 'score-pop 0.7s';
      setTimeout(()=>scoreNum.style.animation='', 700);
      requestAnimationFrame(tick);
    } else {
      scoreNum.textContent = finalScore.toLocaleString();
      playRankEffect(rank);
    }
  }
  tick();
  ['perfect','great','good','miss','combo'].forEach(key=>{
    let el = document.getElementById(key+'-num');
    let val = detail[key]||0, c=0, s=Math.max(1,Math.floor(val/20));
    function t2() {
      if (c<val) { c+=s; if(c>val)c=val; el.textContent=c; el.style.animation='detail-pop 0.7s'; setTimeout(()=>el.style.animation='',700); requestAnimationFrame(t2);}
      else el.textContent=val;
    } t2();
  });
  const rankDiv = document.getElementById('result-rank');
  rankDiv.textContent = rank.toUpperCase();
  rankDiv.className = 'result-rank ' + rank.toLowerCase();
}
function playRankEffect(rank) {
  playUISound(rank);
  const card = document.getElementById('result-card');
  for(let i=0;i<18;i++){
    let p=document.createElement('div');
    p.className='bg-particle';
    p.style.position='absolute';
    p.style.left=(40+Math.random()*20)+'%';
    p.style.top=(40+Math.random()*20)+'%';
    p.style.width=p.style.height=(18+Math.random()*20)+'px';
    p.style.background=
      rank==='sss'?'radial-gradient(circle,#fff 0%,#f9f871 80%,transparent 100%)':
      rank==='ss'?'radial-gradient(circle,#ff00e6 0%,#fff 80%,transparent 100%)':
      rank==='s'?'radial-gradient(circle,#0ff 0%,#fff 80%,transparent 100%)':
      'radial-gradient(circle,#0ff8 0%,#ff00e6 80%,transparent 100%)';
    p.style.opacity=0.33+Math.random()*0.18;
    p.style.zIndex=9;
    p.style.pointerEvents='none';
    p.style.animation='particle-burst 0.7s forwards';
    card.appendChild(p);
    setTimeout(()=>p.remove(),800);
  }
}
function showResultModal(song, score, rank, detail) {
  document.getElementById('result-cover').src = song.albumCover;
  document.querySelector('.result-title').textContent = song.title;
  document.querySelector('.result-artist').textContent = song.artist;
  document.getElementById('result-modal').style.display = 'flex';
  animateScore(score, rank, detail);
}
document.getElementById('retry-btn').onclick = () => {
  playUISound("click");
  document.getElementById('result-modal').classList.add('hide');
  setTimeout(()=>{
    document.getElementById('result-modal').style.display='none';
    gameDiv.style.display = 'block';
    showCountdown(() => {
      startGame();
    });
  }, 500);
};
document.getElementById('select-btn').onclick = () => {
  playUISound("click");
  document.getElementById('result-modal').classList.add('hide');
  setTimeout(()=>{
    document.getElementById('result-modal').style.display='none';
    songSelectV.style.display = 'flex';
    renderSongCards();
  }, 500);
};
document.getElementById('share-btn').onclick = () => {
  playUISound("click");
  const card = document.getElementById('result-card');
  html2canvas(card).then(canvas => {
    canvas.toBlob(blob => {
      const file = new File([blob], "result.png", {type:"image/png"});
      // Web Share API 지원 시(이미지 공유)
      if (navigator.canShare && navigator.canShare({files: [file]})) {
        navigator.share({
          files: [file],
          title: "My Rhythm Game Result!",
          text: "내 리듬게임 점수! #plave_RhythmGame @dolphamini"
        });
      } else {
        // 트위터 공유 링크 생성
        const tweetText = encodeURIComponent("내 리듬게임 점수! #RhythmGame");
        window.open(`https://twitter.com/intent/tweet?text=${tweetText}`);
      }
    });
  });
};

// --- 파티클 keyframes 동적 추가 ---
const style = document.createElement('style');
style.innerHTML = `
.bg-particle { animation: particle-burst 0.7s forwards; }
@keyframes particle-burst {
  0% { transform: scale(0.7) translateY(0);}
  100% { transform: scale(2.2) translateY(-40px); opacity: 0;}
}
`;
document.head.appendChild(style);




// --- Lane colored note styles (hold/long note styles removed) ---
const noteStyle = document.createElement('style');
noteStyle.innerHTML = `
.note.lane-0 {
  background: linear-gradient(135deg, #00f0ff, #006aff);
  box-shadow: 0 0 24px #00cfff, 0 0 8px #00f0ff;
  animation: flash-blue 0.8s infinite alternate;
}
.note.lane-1 {
  background: linear-gradient(135deg, #d000ff, #6a00ff);
  box-shadow: 0 0 24px #c000ff, 0 0 8px #e300ff;
  animation: flash-purple 0.8s infinite alternate;
}
.note.lane-2 {
  background: linear-gradient(135deg, #ff44aa, #ff0077);
  box-shadow: 0 0 24px #ff66cc, 0 0 8px #ff99dd;
  animation: flash-pink 0.8s infinite alternate;
}
.note.lane-3 {
  background: linear-gradient(135deg, #ff4444, #cc0000);
  box-shadow: 0 0 24px #ff6666, 0 0 8px #ff9999;
  animation: flash-red 0.8s infinite alternate;
}
@keyframes flash-blue {
  from { filter: brightness(1); }
  to { filter: brightness(1.6); }
}
@keyframes flash-purple {
  from { filter: brightness(1); }
  to { filter: brightness(1.6); }
}
@keyframes flash-pink {
  from { filter: brightness(1); }
  to { filter: brightness(1.6); }
}
@keyframes flash-red {
  from { filter: brightness(1); }
  to { filter: brightness(1.6); }
}
`;
document.head.appendChild(noteStyle);
// --- 결과 화면에서 "곡 선택" 버튼 처리 ---
// 아래 코드는 결과 화면의 "곡 선택" 버튼(#selectSongButton)을 누르면 결과 화면을 숨기고 곡 선택 화면(#songSelectScreen)을 보여줍니다.
document.addEventListener('DOMContentLoaded', () => {
  const selectSongBtn = document.querySelector("#selectSongButton");
  if (selectSongBtn) {
    selectSongBtn.addEventListener("click", () => {
      const resultScreen = document.querySelector("#resultScreen");
      const songSelectScreen = document.querySelector("#songSelectScreen");
      if (resultScreen && songSelectScreen) {
        resultScreen.style.display = "none";
        songSelectScreen.style.display = "block";
        // Reset any game-related states if necessary
      }
    });
  }
});