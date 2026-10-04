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

function loadFavorites() {
    try {
        const saved = JSON.parse(
            localStorage.getItem("myMusicFavorites") || "[]"
        );
        return Array.isArray(saved) ? saved : [];
    } catch (error) {
        return [];
    }
}


let favorites = loadFavorites();

function saveFavorites() {
    localStorage.setItem(
        "myMusicFavorites",
        JSON.stringify(favorites)
    );
}

let currentSong = null;
async function playSong(id) {
    const song = songs.find(item => item.id === id);
    if (!song || !audioPlayer) return;

    if (
        currentSong &&
        currentSong.id === id &&
        !audioPlayer.paused
    ) {
        audioPlayer.pause();
        return;
    }

    currentSong = song;


    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;
    playerStatus.textContent = "Memuat lagu...";


    if (audioPlayer.src !== new URL(song.audio, window.location.href).href) {
        audioPlayer.src = song.audio;
    }


    try {
        await audioPlayer.play();
    } catch (error) {
        playerStatus.textContent =
            "File MP3 belum tersedia atau tidak dapat diputar";
        playToggle.textContent = "▶";
    }

}

function createSongCard(song) {
    const isFavorite = favorites.includes(song.id);
    const card = document.createElement("article");
    card.className = "song-card";

    const cover = document.createElement("div");
    cover.className = "song-cover";


    const image = document.createElement("img");
    image.src = song.cover;
    image.alt = `Sampul lagu ${song.title}`;


    image.onerror = () => {
        image.remove();
        cover.textContent = "♫";
    };


    cover.appendChild(image);


    const details = document.createElement("div");
    details.className = "song-details";


    const title = document.createElement("h3");
    title.textContent = song.title;


    const artist = document.createElement("p");
    artist.textContent = song.artist;


    const meta = document.createElement("div");
    meta.className = "song-meta";


    const genre = document.createElement("span");
    genre.className = "genre-tag";
    genre.textContent = song.genre;


    const actions = document.createElement("div");
    actions.className = "song-actions";


    const playButton = document.createElement("button");
    playButton.type = "button";
    playButton.textContent = "▶";
    playButton.title = `Putar ${song.title}`;

    playButton.setAttribute(
        "aria-label",
        `Putar ${song.title}`
    );

    playButton.dataset.action = "play";

    playButton.dataset.id = song.id;


    const favoriteButton = document.createElement("button");

    favoriteButton.type = "button";

    favoriteButton.className =
        `favorite-btn${isFavorite ? " is-favorite" : ""}`;

    favoriteButton.textContent =
        isFavorite ? "♥" : "♡";

    favoriteButton.title =
        isFavorite
            ? "Hapus dari favorit"
            : "Tambah ke favorit";

    favoriteButton.setAttribute(
        "aria-label",
        favoriteButton.title
    );

    favoriteButton.dataset.action = "favorite";
    favoriteButton.dataset.id = song.id;

    actions.append(
        playButton,
        favoriteButton
    );

    meta.append(
        genre,
        actions
    );

    details.append(
        title,
        artist,
        meta
    );

    card.append(
        cover,
        details
    );
    return card;
}

function renderList(element, songsToShow) {
    if (!element) return;
    element.replaceChildren(
        ...songsToShow.map(createSongCard)
    );
}

function renderHome() {
    if (!homeList) return;
    renderList(
        homeList,
        songs.slice(0, 4)
    );
}

function renderLibrary() {
    if (!libraryList) return;
    let result = [...songs];

    const keyword =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";


    const selectedGenre =
        genreFilter
            ? genreFilter.value
            : "all";


    const selectedSort =
        sortSelect
            ? sortSelect.value
            : "default";


    result = result.filter(song =>
        song.title
            .toLowerCase()
            .includes(keyword)
        ||
        song.artist
            .toLowerCase()
            .includes(keyword)
    );

    if (selectedGenre !== "all") {
        result = result.filter(
            song => song.genre === selectedGenre
        );
    }

    if (selectedSort === "title") {
        result.sort(
            (a, b) =>
                a.title.localeCompare(b.title)
        );
    }


    if (selectedSort === "artist") {
        result.sort(
            (a, b) =>
                a.artist.localeCompare(b.artist)
        );
    }

    renderList(
        libraryList,
        result
    );

    if (libraryEmpty) {
        libraryEmpty.hidden =
            result.length > 0;
    }


    if (songCount) {
        songCount.textContent =
            `${result.length} lagu`;
    }
}

function renderFavorites() {
    if (!favoriteList) return;
    const result = songs.filter(
        song => favorites.includes(song.id)
    );

    renderList(
        favoriteList,
        result
    );

    if (favoriteEmpty) {
        favoriteEmpty.hidden =
            result.length > 0;
    }
    if (favoriteCount) {
        favoriteCount.textContent =
            `${result.length} lagu`;
    }
}

function renderAll() {
    renderHome();
    renderLibrary();
    renderFavorites();
}

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(
            favoriteId => favoriteId !== id
        );
    } else {
        favorites.push(id);
    }
    saveFavorites();
    renderAll();
}
