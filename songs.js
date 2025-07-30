// songs.js
// 네온 리듬게임용 곡 데이터 예시
// 각 곡은 id, title, artist, difficulty, bpm, audioFile, albumCover, notes(배열)로 구성
// notes 배열에는 tap, hold(롱노트), slide(슬라이드) 타입 모두 지원

window.songList = [
  {
    id: "why?",
    title: "Why?",
    artist: "PLAVE",
    difficulty: "easy",
    bpm: 100,
    audioFile: "why.mp3",  
    videoBackground: "why.mp4",     // 배경 영상 파일 경로
    albumCover: "why.png",      // 앨범 커버 이미지 경로
    "notes": [
    {
      "time": 742,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 1401,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 2786,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 3683,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 5153,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 6147,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 7711,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 8580,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 9559,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 10457,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 10756,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 11345,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 11978,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 12886,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 13205,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 13795,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 14419,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 15271,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 15521,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 16178,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 16776,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 17654,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 17880,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 18142,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 18290,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 18558,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 18716,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 19106,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 19387,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 19767,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 19781,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 20365,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 20377,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 20967,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 21285,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 21585,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 22147,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 22147,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 22745,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 22795,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 23393,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 23693,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 23984,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 24564,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 24856,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 25148,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 25503,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 25809,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 26375,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 26662,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 27270,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 27280,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 27838,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 27854,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 28453,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 28743,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 29097,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 29381,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 29387,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 29971,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 29984,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 30565,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 30826,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 31143,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 31727,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 31737,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 32298,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 32308,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 32927,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 33224,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 33546,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 34163,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 34477,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 34782,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 35036,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 35380,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 35941,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 36257,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 36876,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 37462,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 38074,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 39254,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 39600,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 39907,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 40171,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 40482,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 40802,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 41087,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 41386,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 41666,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 42595,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 42888,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 43187,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 44076,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 44368,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 44731,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 45036,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 45381,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 45647,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 45951,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 46219,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 46508,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 47353,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 47691,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 48007,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 48862,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 49179,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 49487,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 49784,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 50013,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 50346,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 50378,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 50659,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 50674,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 51295,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 51581,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 51877,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 52154,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 52470,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 52764,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 53378,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 53698,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 54041,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 54577,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 55181,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 55749,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 56063,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 56364,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 56932,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 57575,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 57582,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 58161,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 58466,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 58771,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 59053,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 59383,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 59672,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 60009,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 60241,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 60554,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 61418,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 62328,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 62979,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 63271,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 63548,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 63876,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 64175,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 64477,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 64754,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 65076,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 65389,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 66305,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 66909,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 67212,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 67472,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 67786,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 67810,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 68368,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 68391,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 68923,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 69225,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 69527,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 70118,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 70136,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 70771,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 70795,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 71377,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 71656,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 71936,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 72551,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 72882,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 73171,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 73472,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 73755,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 74397,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 74663,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 75272,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 75913,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 76470,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 76747,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 77034,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 77351,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 77948,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 78554,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 78847,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 79134,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 79758,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 80372,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 80975,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 81295,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 81568,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 82124,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 82459,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 82729,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 83054,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 83399,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 83985,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 84261,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 84879,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 85467,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 86072,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 87016,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 88178,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 89378,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 90569,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 91776,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 92902,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 93871,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 94496,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 95015,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 95565,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 96521,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 97090,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 97754,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 99311,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 99604,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 100175,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 100786,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 101372,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 101695,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 101977,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 102316,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 102628,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 102906,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 103200,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 103496,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 104097,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 104641,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 105213,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 105521,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 105837,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 106157,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 106190,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 106742,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 106775,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 107355,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 107635,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 107941,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 108508,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 108530,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 109112,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 109150,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 109721,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 110041,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 110346,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 110940,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 111264,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 111570,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 111866,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 112197,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 112803,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 113098,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 113730,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 114307,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 114840,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 115155,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 115468,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 115756,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 115780,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 116337,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 116374,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 116918,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 117177,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 117468,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 118130,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 118171,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 118687,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 118722,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 119337,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 119632,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 119935,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 120527,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 120880,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 121171,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 121458,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 121793,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 122368,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 122671,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 123274,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 123838,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 124434,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 125689,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 126280,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 126863,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 127154,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 127456,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 128086,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 128660,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 129230,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 129516,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 129834,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 130479,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 131047,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 131639,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 131929,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 132225,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 132842,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 133409,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 134044,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 134381,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 134991,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 135577,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 136480,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 136750,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 137058,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 137678,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 138306,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 138879,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 139180,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 139469,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 140099,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 140687,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 141241,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 141541,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 141865,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 142466,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 143067,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 143620,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 143890,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 144194,
      "lane": 0,
      "type": "tap"
    }
  ]
},
{
    id: "WAY 4 LUV",
    title: "WAY 4 LUV",
    artist: "PLAVE",
    difficulty: "normal",
    bpm: 127,
    videoBackground: "way4luv.mp4",
    audioFile: "웨이포럽.mp3",
    albumCover: "WAY 4 LUV.png",
    "notes": [
    {
      "time": 1399,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 2184,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 3249,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 3707,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 4166,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 4954,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 5344,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 5791,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 6944,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 7453,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 7948,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 8750,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 9176,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 9616,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 10715,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 11750,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 13080,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 13080,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 13559,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 13563,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 14072,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 14076,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 14561,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 15014,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 15453,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 16235,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 16712,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 17176,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 17585,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 18365,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 18813,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 19245,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 20039,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 20515,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 20973,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 21396,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 22184,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 22667,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 22852,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 23137,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 23554,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 23797,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 24296,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 24711,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 25982,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 26220,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 26483,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 26722,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 27018,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 27397,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 27591,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 28274,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 28599,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 28856,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 29069,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 29288,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 29498,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 30000,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 31166,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 31916,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 32145,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 32387,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 32621,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 32863,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 33070,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 33327,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 34047,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 34992,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 35708,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 35989,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 36187,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 36463,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 36673,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 36901,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 37110,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 37863,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 38764,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 39503,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 39787,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 39993,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 40216,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 40434,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 40655,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 40903,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 41617,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 41877,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 42568,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 43261,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 43397,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 43546,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 43758,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 43879,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 44142,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 44360,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 44650,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 44844,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 44971,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 45691,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 46038,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 46322,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 46553,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 46866,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 47189,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 47468,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 47613,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 47871,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 48121,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 48266,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 48500,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 48740,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 49177,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 49631,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 49783,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 50016,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 50241,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 50431,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 50553,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 51022,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 51268,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 51420,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 51564,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 51788,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 51890,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 52148,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 52344,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 52459,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 53213,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 53449,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 53682,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 53774,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 54042,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 54296,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 54398,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 54850,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 55513,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 56024,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 56269,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 56534,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 56760,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 56960,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 57402,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 57705,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 57943,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 58398,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 58885,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 59352,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 59735,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 60026,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 60967,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 61950,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 62191,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 62404,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 62671,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 62939,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 63401,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 63860,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 64786,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 65824,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 66037,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 66278,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 66527,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 66733,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 67199,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 67645,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 67895,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 68129,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 68356,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 68573,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 68837,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 69093,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 69577,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 69816,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 70059,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 70314,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 70505,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 70792,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 71000,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 71467,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 71728,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 71949,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 72175,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 72425,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 72694,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 72976,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 73473,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 73667,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 73861,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 74042,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 74223,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 74403,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 74630,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 75144,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 75626,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 76095,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 76796,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 77312,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 77784,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 78253,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 78981,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 79458,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 79907,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 80625,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 81116,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 81568,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 82023,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 82722,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 82936,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 83152,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 83394,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 83646,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 84120,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 84340,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 84850,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 85301,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 86459,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 86728,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 86969,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 87224,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 87454,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 87918,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 88091,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 88638,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 89124,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 90268,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 90287,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 90730,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 91221,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 91667,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 91926,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 92444,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 92907,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 93392,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 94120,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 94307,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 94548,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 94754,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 94965,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 95468,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 95715,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 96242,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 96687,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 97157,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 97906,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 98126,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 98353,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 98603,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 98812,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 99277,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 99518,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 100042,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 100479,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 101652,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 101880,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 102126,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 102361,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 102611,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 103077,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 103323,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 103779,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 104255,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 105367,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 105564,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 105731,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 105988,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 106116,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 106345,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 106687,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 107285,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 107469,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 107673,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 107959,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 108074,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 108307,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 108733,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 108752,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 109233,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 109350,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 109557,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 109924,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 110050,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 110218,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 110540,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 111066,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 111337,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 111449,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 111676,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 111777,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 112024,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 112530,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 112749,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 112971,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 113324,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 113710,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 114432,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 114678,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 114871,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 115223,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 115237,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 115555,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 116249,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 116467,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 116962,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 117183,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 117445,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 117909,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 118135,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 118369,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 118827,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 119077,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 119545,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 120025,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 120498,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 121441,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 122379,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 122690,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 122925,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 123130,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 123333,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 123827,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 124294,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 125269,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 126220,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 126429,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 126646,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 126913,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 127119,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 127578,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 128019,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 128255,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 128525,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 128750,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 128973,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 129219,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 129443,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 129875,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 130124,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 130436,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 130688,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 130946,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 131146,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 131407,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 131875,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 132110,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 132331,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 132552,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 132788,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 133000,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 133225,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 133747,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 134002,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 134162,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 134445,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 134658,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 134922,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 135146,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 135586,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 136094,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 136561,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 137312,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 137780,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 138200,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 138669,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 139427,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 139877,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 140330,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 141106,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 141130,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 141615,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 142066,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 142506,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 143194,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 143453,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 143749,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 143976,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 144220,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 144664,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 144882,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 145317,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 145762,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 146940,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 147169,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 147433,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 147628,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 147917,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 148363,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 148653,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 149104,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 149615,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 150766,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 150800,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 151009,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 151034,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 151231,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 151421,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 151914,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 152142,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 152413,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 152932,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 153160,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 153472,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 154048,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 154280,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 155021,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 155525,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 155761,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 155976,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 156245,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 156871,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 157105,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 157837,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 158045,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 158590,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 159283,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 159502,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 159749,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 159989,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 160458,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 160716,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 160957,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 161621,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 161838,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 162339,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 163498,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 163549,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 163746,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 163779,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 164215,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 164253,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 164682,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 165185,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 165846,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 166338,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 166814,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 167288,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 167732,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 168233,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 168690,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 170306,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 171541,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 171580,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 172050,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 172540,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 173264,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 173736,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 174207,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 175335,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 175556,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 175775,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 176024,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 176340,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 176780,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 177030,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 177521,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 177995,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 179088,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 179346,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 179582,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 179827,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 180052,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 180608,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 180844,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 181277,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 181341,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 181715,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 181779,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 182847,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 182878,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 183359,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 183378,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 183806,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 184284,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 184515,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 185030,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 185510,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 185974,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 186659,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 186919,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 187177,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 187397,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 187651,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 188075,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 188298,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 188784,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 189262,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 189696,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 189965,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 190215,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 190483,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 190683,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 190931,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 191183,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 191442,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 191899,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 192146,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 192571,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 193036,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 194219,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 194463,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 194681,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 194891,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 195165,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 195636,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 195714,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 195885,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 195944,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 196384,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 196845,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 197366,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 197550,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 197826,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 198004,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 198494,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 199426,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 200375,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 201314,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 202267,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 203183,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 204160,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 205149,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 206066,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 206981,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 207995,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 208867,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 209786,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 210751,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 211666,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 212385,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 212454,
      "lane": 1,
      "type": "tap"
    }
  ]
},
  {
    id: "육여름",
    title: "The 6th Summer",
    artist: "PLAVE",
    difficulty: "hard",
    bpm: 180,
    audioFile: "육여름.mp3",
    videoBackground: "육여름.mp4",
    albumCover: "The_6th_Summer.png",
   "notes": [
    {
      "time": 1715,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 2323,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 2772,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 3502,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 3817,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 4515,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 5515,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 6233,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 6553,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 7671,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 8092,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 8294,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 8619,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 8901,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 9265,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 9625,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 9983,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 10338,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 10664,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 11016,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 11177,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 11940,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 13021,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 13351,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 13645,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 13954,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 14287,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 14592,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 14919,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 15306,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 15453,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 15599,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 15781,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 16108,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 16418,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 17232,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 17359,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 17542,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 17898,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 18676,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 18827,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 18970,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 19280,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 19993,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 20122,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 20325,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 20647,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 20992,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 21117,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 21468,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 21781,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 22592,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 22610,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 22985,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 23373,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 23652,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 23796,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 24182,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 24457,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 24999,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 25153,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 25677,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 26044,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 26378,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 26524,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 26861,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 27119,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 28055,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 28357,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 28710,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 29045,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 29405,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 29722,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 30645,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 30780,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 31364,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 31996,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 32308,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 33320,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 33693,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 34012,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 34336,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 34678,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 35026,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 36015,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 36162,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 36719,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 37404,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 37536,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 37730,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 37998,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 38364,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 38687,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 39008,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 39368,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 39713,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 40020,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 40318,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 40967,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 41302,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 41652,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 42358,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 42373,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 42697,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 42966,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 43603,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 43620,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 43935,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 44259,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 44616,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 44997,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 45332,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 45680,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 46329,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 46635,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 46960,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 47309,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 47328,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 47629,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 47649,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 47972,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 48004,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 48296,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 48319,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 48674,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 48752,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 49355,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 49518,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 49695,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 49834,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 50000,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 50159,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 50334,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 50654,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 51032,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 51162,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 51350,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 51867,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 52206,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 52669,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 52831,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 52996,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 53649,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 53792,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 53953,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 54516,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 54846,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 55341,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 55363,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 55674,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 55790,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 56134,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 56470,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 56819,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 57203,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 57538,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 57862,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 57873,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 58642,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 59264,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 59427,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 59881,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 60196,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 60335,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 60483,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 60636,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 61186,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 61533,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 61651,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 61834,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 61974,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 62317,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 62460,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 62844,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 63210,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 63710,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 63864,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 64018,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 64163,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 64362,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 64692,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 65003,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 65152,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 65498,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 65973,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 66338,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 66513,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 66816,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 67163,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 67509,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 67830,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 68148,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 68487,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 68625,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 69351,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 70036,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 70339,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 70687,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 71031,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 71538,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 71693,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 71879,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 72020,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 72338,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 72474,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 72667,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 72816,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 73026,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 73370,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 74182,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 74195,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 74399,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 74533,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 74686,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 75056,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 75191,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 75369,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 75563,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 75746,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 76043,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 76905,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 7701
     }
  ]
},
{
    id: "카쿠렌보",
    title: "かくれんぼ",
    artist: "PLAVE",
    difficulty: "easy",
    bpm:92,
    videoBackground: "카쿠렌보.mp4",
    audioFile: "카쿠렌보.mp3",
    albumCover: "카쿠렌보.png",
    "notes": [
    {
      "time": 8668,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 9918,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 10877,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 11493,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 12769,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 13526,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 14119,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 15138,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 16026,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 16610,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 17175,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 17832,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 18522,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 19193,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 19823,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 20444,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 21075,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 21744,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 21757,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 22380,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 22384,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 23067,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 23695,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 24386,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 24398,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 25008,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 25019,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 25656,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 26322,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 26974,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 27642,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 28284,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 28941,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 29580,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 30270,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 30910,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 31561,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 32223,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 32836,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 33505,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 34155,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 34830,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 35493,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 36101,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 36743,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 37403,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 38050,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 38721,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 39380,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 40024,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 41271,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 42639,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 43205,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 44525,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 45868,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 47185,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 48540,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 49791,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 51099,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 52441,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 53720,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 53729,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 55032,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 55043,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 56350,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 57616,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 58882,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 60250,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 61523,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 62826,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 64151,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 65445,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 66103,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 66103,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 66729,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 66740,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 67360,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 68053,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 68707,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 69389,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 70031,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 70704,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 71977,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 73339,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 74639,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 75280,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 75907,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 75914,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 76584,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 76903,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 77826,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 78532,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 79168,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 79781,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 80426,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 81142,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 81796,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 82397,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 83032,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 83737,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 84373,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 84984,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 85678,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 86345,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 86958,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 88261,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 89607,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 90442,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 90604,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 90781,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 91892,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 92179,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 92315,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 92498,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 93465,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 93796,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 94838,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 96163,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 96749,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 97363,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 97872,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 98371,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 98922,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 99354,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 99735,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 100011,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 100658,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 101299,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 101317,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 102026,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 102656,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 103290,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 103942,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 104588,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 105261,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 105868,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 106532,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 107163,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 107840,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 108479,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 108496,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 109110,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 109815,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 110462,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 111113,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 111772,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 112392,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 113091,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 113380,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 114363,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 114685,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 116315,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 117599,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 118237,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 118745,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 119251,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 119792,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 120219,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 120843,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 121545,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 122205,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 122806,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 123576,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 124862,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 126148,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 127405,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 128720,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 129421,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 130020,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 130670,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 131335,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 131982,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 132633,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 133266,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 133277,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 134594,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 135875,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 137218,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 138523,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 139832,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 141154,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 142401,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 142414,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 143697,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 145032,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 145054,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 145715,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 145730,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 146371,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 146387,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 146979,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 146991,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 147597,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 147609,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 148245,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 148255,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 148938,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 149578,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 150214,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 150822,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 152171,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 152844,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 153496,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 153507,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 154076,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 154785,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 155460,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 156106,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 156766,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 157399,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 158040,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 158703,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 159358,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 160014,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 160657,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 161353,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 161962,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 162621,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 163893,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 164587,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 164600,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 165240,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 165543,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 165884,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 166569,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 166917,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 167252,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 167843,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 168507,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 169131,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 169772,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 170450,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 170928,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 171490,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 171976,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 172419,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 172762,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 173083,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 173722,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 174383,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 174990,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 175009,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 175653,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 176279,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 177000,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 177662,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 178295,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 178905,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 178919,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 179562,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 179587,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 180264,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 180903,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 181515,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 182213,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 182852,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 183534,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 184185,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 184829,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 185425,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 186090,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 186442,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 186792,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 187410,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 187758,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 188098,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 188753,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 189384,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 190015,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 190687,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 191256,
      "lane": 2,
      "type": "tap"
    },
     {
      "time": 191337,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 191788,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 192255,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 192835,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 193220,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 193922,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 194584,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 195275,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 195948,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 196615,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 196760,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 197366,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 198753,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 198879,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 199003,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 199320,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 199714,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 200174,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 200272,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 201889,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 202162,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 202610,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 202974,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 203116,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 204194,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 204401,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 204563,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 204756,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 204943,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 205522,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 205977,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 206169,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 206777,
      "lane": 3,
      "type": "tap"
    }
  ]
},
{
  id: "기다릴게",
  title: "기다릴게",
  artist: "PLAVE",
  difficulty: "normal",
  bpm: 98,
  videoBackground: "기다릴게.mp4",
  audioFile: "기다릴게.mp3",
  albumCover: "기다릴게.png",
  "notes": [
    {
      "time": 254,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 550,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 786,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 1030,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 1320,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 1621,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 1962,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 2292,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 2642,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 2955,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 3238,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 3580,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 3916,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 4161,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 4465,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 4796,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 5105,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 5434,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 5742,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 6088,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 6398,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 6694,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 7024,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 7375,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 7670,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 8001,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 8310,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 8602,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 8906,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 9213,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 9497,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 9818,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 10191,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 10502,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 10827,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 11129,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 11466,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 11767,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 12112,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 12416,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 12726,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 13022,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 13328,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 13627,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 13982,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 14282,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 14607,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 14824,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 15216,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 15568,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 15956,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 16224,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 16527,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 16794,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 17113,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 17407,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 17762,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 18048,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 18333,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 18604,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 18934,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 18944,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 19615,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 19626,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 20248,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 20874,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 21162,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 21839,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 22505,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 23452,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 23462,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 24105,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 24711,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 25362,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 25952,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 26246,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 26876,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 27511,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 28547,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 29100,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 29723,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 30365,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 30536,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 30848,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 31191,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 31504,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 32296,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 32633,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 32924,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 33081,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 33415,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 33767,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 34090,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 34790,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 35142,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 35465,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 35478,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 36114,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 36727,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 36742,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 37356,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 38007,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 38609,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 39626,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 39883,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 40057,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 40350,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 41111,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 41121,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 41760,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 42369,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 43026,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 43662,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 43677,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 44270,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 44874,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 45524,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 46163,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 46807,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 47464,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 48080,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 48709,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 48726,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 49364,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 49940,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 50289,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 50465,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 51287,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 51933,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 51952,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 52555,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 53146,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 53750,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 53767,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 54388,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 55056,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 55653,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 56266,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 56916,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 57571,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 58179,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 58815,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 59472,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 60123,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 60741,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 60754,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 61386,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 62001,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 62603,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 63291,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 63903,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 64470,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 65081,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 65683,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 65700,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 66334,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 67034,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 67673,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 67692,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 68304,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 68928,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 69545,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 70229,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 70867,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 71204,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 71348,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 71632,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 71943,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 72316,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 72715,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 72730,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 73369,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 73979,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 74003,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 74650,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 75237,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 75868,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 76511,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 77106,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 77121,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 77731,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 78371,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 78988,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 79983,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 80301,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 80450,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 80763,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 81551,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 81879,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 82008,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 82438,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 82680,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 83261,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 83425,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 83591,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 83913,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 84238,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 84521,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 84808,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 84962,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 85270,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 85539,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 85854,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 86585,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 86933,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 87060,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 87388,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 87665,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 88464,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 88613,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 89001,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 89310,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 89630,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 89976,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 90288,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 91054,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 91277,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 91482,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 91828,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 92158,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 92913,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 93262,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 93548,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 93700,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 94042,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 94338,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 94643,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 95431,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 95793,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 96093,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 96713,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 96727,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 97374,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 97984,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 98620,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 99208,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 99887,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 100503,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 100521,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 101145,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 101738,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 102053,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 102675,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 103312,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 103663,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 104324,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 104336,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 104961,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 105567,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 106194,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 106816,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 107096,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 107759,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 109320,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 109914,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 110561,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 111231,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 111398,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 111729,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 112034,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 112386,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 113144,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 113466,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 113764,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 113854,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 114217,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 114539,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 114866,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 115577,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 115964,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 116298,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 116930,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 116939,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 117536,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 118200,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 118791,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 119436,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 120445,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 120735,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 120890,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 121184,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 121981,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 122621,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 123213,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 123875,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 124514,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 125129,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 125743,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 126375,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 127020,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 127696,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 128329,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 128979,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 129547,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 130166,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 130182,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 130832,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 131465,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 132086,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 132673,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 133310,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 133932,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 134544,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 135192,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 135217,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 135835,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 136468,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 136491,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 137103,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 137776,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 138400,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 138993,
      "lane": 1,
      "type": "tap"
    },
     {
      "time": 140686,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 140997,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 141122,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 141416,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 142196,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 142529,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 142669,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 142999,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 143336,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 144027,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 144153,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 144328,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 144588,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 144944,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 145244,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 145621,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 145776,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 146037,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 146201,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 146543,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 147615,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 147797,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 148136,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 148411,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 149099,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 149259,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 149620,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 149957,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 150278,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 150583,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 150928,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 151664,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 151821,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 152192,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 152540,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 152847,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 153577,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 153901,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 154212,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 154355,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 154711,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 155027,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 155355,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 156146,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 156476,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 156818,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 157392,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 157970,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 158300,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 158616,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 158917,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 159251,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 159929,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 161125,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 161134,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 162433,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 163734,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 164978,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 166213,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 167484,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 167495,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 168727,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 168733,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 170005,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 171243,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 172546,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 173774,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 175049,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 176326,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 176900,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 177225,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 177540,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 177899,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 178515,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 178819,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 179179,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 180720,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 180730,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 181316,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 181327,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 181933,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 181971,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 182559,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 182565,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 183161,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 183175,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 183520,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 183888,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 184073,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 184422,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 185160,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 185495,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 185641,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 186007,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 186315,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 187005,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 187146,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 187316,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 187628,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 187958,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 188236,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 188546,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 188725,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 188957,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 189119,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 189420,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 190531,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 190669,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 191033,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 191354,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 192068,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 192238,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 192620,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 192896,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 193240,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 193550,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 193834,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 194574,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 194761,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 195106,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 195465,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 195804,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 196555,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 196851,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 197188,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 197329,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 197639,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 197963,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 198315,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 199065,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 199374,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 199707,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 200287,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 200298,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 200903,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 201601,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 201616,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 202224,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 202224,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 202870,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 203451,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 204080,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 204734,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 205064,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 205360,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 205686,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 205965,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 206247,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 206610,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 206939,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 207243,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 207570,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 207857,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 208208,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 208522,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 208851,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 209153,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 209458,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 209811,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 210109,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 210432,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 210761,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 211066,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 211389,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 211698,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 212021,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 212346,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 212651,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 212972,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 213285,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 213566,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 213872,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 214190,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 214493,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 214809,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 214989,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 215305,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 215650,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 215959,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 216721,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 217053,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 217362,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 217494,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 217840,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 218175,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 218489,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 219233,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 219560,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 219931,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 219933,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 220534,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 221200,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 221811,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 221820,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 222452,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 223060,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 224060,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 224327,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 224528,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 224821,
      "lane": 2,
      "type": "tap"
    }
  ]
},
{
    id: "대시",
    title: "Dash",
    artist: "PLAVE",
    difficulty: "normal",
    bpm: 103,
    videoBackground: "대시.mp4",
    audioFile: "대시.mp3",
    albumCover: "대시.Png",
   "notes": [
    {
      "time": 2272,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 2846,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 3448,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 4040,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 4671,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 5213,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 5747,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 6315,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 6907,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 7438,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 7998,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 8524,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 9043,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 9650,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 10192,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 10748,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 11337,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 12247,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 12832,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 13485,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 14030,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 15193,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 15757,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 16371,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 17560,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 18159,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 18681,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 19886,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 20448,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 20972,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 20977,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 22180,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 22786,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 23320,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 24520,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 25079,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 25679,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 26850,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 27422,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 28007,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 29114,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 29710,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 30326,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 31492,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 32640,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 33832,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 34981,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 36125,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 37246,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 38403,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 39847,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 41186,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 41692,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 42183,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 42511,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 42758,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 43078,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 43348,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 43702,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 44305,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 45460,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 45471,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 46646,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 47762,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 47771,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 48945,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 48955,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 50119,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 51280,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 52465,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 53578,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 53596,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 54183,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 55385,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 56532,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 56537,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 57719,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 58300,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 58875,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 60023,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 61171,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 62320,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 63511,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 64091,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 64725,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 65287,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 65857,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 66444,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 66968,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 67591,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 68207,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 68761,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 69319,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 69937,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 70540,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 70554,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 70817,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 71693,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 72241,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 73423,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 74002,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 74591,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 75788,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 76333,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 76921,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 78111,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 78646,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 79259,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 79831,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 80458,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 81009,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 81017,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 81584,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 82803,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 83933,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 85097,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 86224,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 87390,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 88507,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 88526,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 89754,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 90923,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 92106,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 93357,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 94085,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 94400,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 95556,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 96720,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 96734,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 97882,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 99048,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 99056,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 100197,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 101383,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 101398,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 102588,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 103738,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 104281,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 104862,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 105411,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 105981,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 106612,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 107214,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 107804,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 108404,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 108963,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 109537,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 110116,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 110696,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 111293,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 111855,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 111865,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 112427,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 112451,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 113013,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 113619,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 114196,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 115346,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 116565,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 117723,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 118894,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 120043,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 121187,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 122366,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 123534,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 124650,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 125822,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 127007,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 128203,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 129314,
      "lane": 0,
      "type": "tap"
    },
     {
      "time": 133539, //둔둔둔
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 133541,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 133740,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 133761,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 134014,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 134048,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 134295,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 134308,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 135459,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 135465,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 136610,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 136613,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 137812,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 138991,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 140150,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 140152,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 140757,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 140761,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 141337,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 142470,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 143641,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 144812,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 144815,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 145351,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 145356,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 146545,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 147089,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 148315,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 148866,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 149472,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 150620,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 150627,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 151785,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 151790,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 152938,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 154079,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 154696,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 155272,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 155855,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 156473,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 157028,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 157618,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 158171,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 158767,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 159372,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 159980,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 160533,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 161107,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 161685,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 162275,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 162865,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 163444,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 163450,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 163986,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 164576,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 164583,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 165184,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 165743,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 165743,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 166357,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 166933,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 166940,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 167513,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 168058,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 168690,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 169286,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 169840,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 170426,
      "lane": 1,
      "type": "tap"
    },
    {
      "time": 170996,
      "lane": 2,
      "type": "tap"
    },
    {
      "time": 171604,
      "lane": 0,
      "type": "tap"
    },
    {
      "time": 171615,
      "lane": 3,
      "type": "tap"
    },
    {
      "time": 172183,
      "lane": 1,
      "type": "tap"
    },
       {
      "time": 172187,
      "lane": 2,
      "type": "tap"
     }
  ]
},
];
