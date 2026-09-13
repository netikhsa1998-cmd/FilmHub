const movies = [
{
title: "Володар перснів",
year: 2001,
rating: 8.9,
category: "Пригоди",
genres: "Пригоди • Фентезі",
poster: "images/lord.jpg",
description: "Група героїв вирушає в небезпечну подорож, щоб знищити могутній перстень.",
video: "videos/lord.mp4"
},

```
{
    title: "Аватар",
    year: 2009,
    rating: 7.8,
    category: "Фантастика",
    genres: "Фантастика • Пригоди",
    poster: "images/avatar.jpg",
    description: "Людина потрапляє на далеку планету Пандора та стає частиною її дивовижного світу.",
    video: "videos/avatar.mp4"
},

{
    title: "Інтерстеллар",
    year: 2014,
    rating: 8.7,
    category: "Фантастика",
    genres: "Фантастика • Драма",
    poster: "images/interstellar.jpg",
    description: "Група астронавтів вирушає крізь космос у пошуках нового дому для людства.",
    video: "videos/interstellar.mp4"
},

{
    title: "Месники",
    year: 2012,
    rating: 8.0,
    category: "Бойовик",
    genres: "Бойовик • Фантастика",
    poster: "images/avengers.jpg",
    description: "Наймогутніші герої Землі об'єднуються, щоб врятувати планету.",
    video: "videos/avengers.mp4"
},

{
    title: "Воно",
    year: 2017,
    rating: 7.3,
    category: "Жахи",
    genres: "Жахи • Трилер",
    poster: "images/it.jpg",
    description: "Група дітей стикається зі страшною істотою, яка ховається під виглядом клоуна.",
    video: "videos/it.mp4"
},

{
    title: "Один вдома",
    year: 1990,
    rating: 7.7,
    category: "Комедія",
    genres: "Комедія • Сімейний",
    poster: "images/homealone.jpg",
    description: "Хлопчик залишається сам удома та захищає свій будинок від грабіжників.",
    video: "videos/homealone.mp4"
}
```

];

const moviesContainer = document.getElementById("movies");
const searchInput = document.getElementById("search");
const noResults = document.getElementById("noResults");

let currentCategory = "all";

function renderMovies() {

```
const searchText = searchInput.value.toLowerCase().trim();

const filteredMovies = movies.filter(movie => {

    const matchesSearch =
        movie.title.toLowerCase().includes(searchText);

    const matchesCategory =
        currentCategory === "all" ||
        movie.category === currentCategory;

    return matchesSearch && matchesCategory;
});


moviesContainer.innerHTML = "";


if (filteredMovies.length === 0) {
    noResults.style.display = "block";
    return;
}


noResults.style.display = "none";


filteredMovies.forEach(movie => {

    const card = document.createElement("div");

    card.className = "movie";

    card.innerHTML = `
        <img
            class="poster"
            src="${movie.poster}"
            alt="${movie.title}"
            onerror="this.src='https://via.placeholder.com/300x450/181818/ffffff?text=No+Poster'"
        >

        <div class="movie-info">

            <div class="movie-title">
                ${movie.title}
            </div>

            <div class="movie-meta">
                ${movie.year}
                •
                <span class="rating">⭐ ${movie.rating}</span>
                •
                ${movie.category}
            </div>

            <div class="description">
                ${movie.description}
            </div>

        </div>
    `;


    card.addEventListener("click", () => {
        openMovie(movie);
    });


    moviesContainer.appendChild(card);

});
```

}

function filterCategory(category, button) {

```
currentCategory = category;

document
    .querySelectorAll(".categories button")
    .forEach(btn => {
        btn.classList.remove("active");
    });

button.classList.add("active");

renderMovies();
```

}

searchInput.addEventListener("input", renderMovies);

function openMovie(movie) {

```
document.getElementById("modalTitle").textContent =
    movie.title;

document.getElementById("modalMeta").textContent =
    `${movie.year} • ⭐ ${movie.rating} • ${movie.genres}`;

document.getElementById("modalDescription").textContent =
    movie.description;


const videoSource =
    document.getElementById("videoSource");

videoSource.src = movie.video;


const video =
    document.getElementById("movieVideo");

video.load();


document.getElementById("videoContainer").style.display =
    "none";


document.getElementById("modal").style.display =
    "flex";
```

}

function closeMovie() {

```
const modal =
    document.getElementById("modal");

modal.style.display = "none";


const video =
    document.getElementById("movieVideo");

video.pause();
```

}

function watchMovie() {

```
const videoContainer =
    document.getElementById("videoContainer");

videoContainer.style.display = "block";


const video =
    document.getElementById("movieVideo");

video.play().catch(() => {});
```

}

document.getElementById("modal").addEventListener(
"click",
function(event) {

```
    if (event.target === this) {
        closeMovie();
    }

}
```

);

renderMovies();
