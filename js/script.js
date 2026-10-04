const songs = [
    {
        id: 1,
        title: "What If I Call",
        artist: "Alex Crichton",
        genre: "Pop",
        cover: "assets/images/What If I Call.jpg",
        audio: "assets/audio/What If I Call.mp3"
    },
    {
        id: 2,
        title: "La La Lost You - Acoustic Version",
        artist: "NIKI",
        genre: "Pop",
        cover: "assets/images/La La Lost You.jpg",
        audio: "assets/audio/La La Lost You Acoustic.mp3"
    },
    {
        id: 3,
        title: "Iqro",
        artist: "Raim Laode",
        genre: "Pop",
        cover: "assets/images/Iqro.jpg",
        audio: "assets/audio/Iqro.mp3"
    },
    {
        id: 4,
        title: "Payphone",
        artist: "Maroon 5",
        genre: "Pop",
        cover: "assets/images/Payphone.jpg",
        audio: "assets/audio/Payphone.mp3"
    },
    {
        id: 5,
        title: "Gone Gone Gone",
        artist: "Phillip Philips",
        genre: "Pop",
        cover: "assets/images/Gone Gone Gone.jpg",
        audio: "assets/audio/Gone Gone Gone.mp3"
    },
    {
        id: 6,
        title: "To The Bone",
        artist: "Pamungkas",
        genre: "Indie",
        cover: "assets/images/To the Bone.jpg",
        audio: "assets/audio/To The Bone.mp3"
    },
    {
        id: 7,
        title: "Merry Christmas, Please Don't Call",
        artist: "Bleachers",
        genre: "Pop",
        cover: "assets/images/Merry Christmas, Please Don't Call.jpg",
        audio: "assets/audio/Merry Christmas, Please Don't Call.mp3"
    },
    {
        id: 8,
        title: "Those Eyes",
        artist: "New West",
        genre: "Indie",
        cover: "assets/images/Those Eyes.jpg",
        audio: "assets/audio/Those Eyes.mp3"
    },
    {
        id: 9,
        title: "Bertaut",
        artist: "Nadin Amizah",
        genre: "Indie",
        cover: "assets/images/Bertaut.jpg",
        audio: "assets/audio/Bertaut.mp3"
    },
    {
        id: 10,
        title: "Jakarta Hari Ini",
        artist: "For Revenge - Stereo Wall",
        genre: "Indie",
        cover: "assets/images/Jakarta Hari Ini.jpg",
        audio: "assets/audio/Jakarta Hari Ini.mp3"
    },
    {
        id: 11,
        title: "I Miss You Every Brand New Day",
        artist: "For Revenge",
        genre: "Rock",
        cover: "assets/images/I Miss You Every Brand New Day.jpg",
        audio: "assets/audio/I Miss You Every Brand New Day.mp3"
    },
    {
        id: 12,
        title: "Iris",
        artist: "Goo Goo Dolls",
        genre: "Rock",
        cover: "assets/images/Iris.jpg",
        audio: "assets/audio/Iris.mp3"
    },
    {
        id: 13,
        title: "Best Part",
        artist: "Daniel Caesar (feat. H.E.R.)",
        genre: "R&B",
        cover: "assets/images/Best Part.jpg",
        audio: "assets/audio/Best Part.mp3"
    },
    {
        id: 14,
        title: "Die For You(Remix)",
        artist: "The Weeknd, Ariana Grande",
        genre: "R&B",
        cover: "assets/images/Die For You.jpg",
        audio: "assets/audio/Die For You.mp3"
    },
    {
        id: 15,
        title: "Tetap Dalam Jiwa",
        artist: "Isyana Sarasvati",
        genre: "R&B",
        cover: "assets/images/Tetap Dalam Jiwa.jpg",
        audio: "assets/audio/Tetap Dalam Jiwa.mp3"
    },
    {
        id: 16,
        title: "Somebody's Pleasure",
        artist: "Aziz Hendra",
        genre: "R&B",
        cover: "assets/images/Somebody Pleasure.jpg",
        audio: "assets/audio/Somebody's Pleasure.mp3"
    }
];

const audioPlayer = document.querySelector("#audio-player");
const playerTitle = document.querySelector("#player-title");
const playerArtist = document.querySelector("#player-artist");
const playerStatus = document.querySelector("#player-status");
const playToggle = document.querySelector("#play-toggle");

const searchInput = document.querySelector("#search-input");
const genreFilter = document.querySelector("#genre-filter");
const sortSelect = document.querySelector("#sort-select");

const homeList = document.querySelector("#home-song-list");
const libraryList = document.querySelector("#library-song-list");
const favoriteList = document.querySelector("#favorite-song-list");

const libraryEmpty = document.querySelector("#library-empty-message");
const favoriteEmpty = document.querySelector("#favorite-empty-message");

const songCount = document.querySelector("#song-count");
const favoriteCount = document.querySelector("#favorite-count");