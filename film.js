const params = new URLSearchParams(window.location.search);

const movieId = Number(params.get("id"));

const movie = movies.find(
    item => item.id === movieId
);

if (!movie) {

    document.body.innerHTML = `
        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            color:white;
            font-family:Arial;
        ">
            Фильм не найден
        </div>
    `;

} else {

    document.title =
        `Freezy Films — ${movie.title}`;

    const title =
        document.getElementById("filmTitle");

    const poster =
        document.getElementById("filmPoster");
const trailer = document.getElementById("filmTrailer");

if(trailer){
    trailer.src = movie.trailer;
}
    const year =
        document.getElementById("filmYear");

    const genre =
        document.getElementById("filmGenre");

    const rating =
        document.getElementById("filmRating");
    const status =
        document.getElementById("filmStatus");
    const description =
        document.getElementById("filmDescription");

    if (title)
        title.textContent = movie.title;

    if (poster) {
        poster.src = movie.poster;
        poster.alt = movie.title;
    }

    if (year)
        year.textContent = movie.year;

    if (genre)
        genre.textContent = movie.genre;

    if (rating)
        rating.textContent = movie.rating;
    if (status)
        status.textContent = movie.status;
    if (description)
        description.textContent = movie.description;

const watchBtn = document.getElementById("watchBtn");
const playerSection = document.getElementById("playerSection");

if (watchBtn && trailer && playerSection) {

    watchBtn.addEventListener("click", () => {

        playerSection.classList.add("active");

        watchBtn.style.display = "none";

        playerSection.scrollIntoView({
            behavior: "smooth"
        });

        trailer.play();

    });

}
}
const similarMoviesContainer =
document.getElementById("similarMovies");

if (
    movie &&
    similarMoviesContainer
) {

    const currentGenres =
    movie.genre
        .split(",")
        .map(g => g.trim());

const similarMovies =
    movies
        .filter(item => item.id !== movie.id)
        .map(item => {

            const genres =
                item.genre
                    .split(",")
                    .map(g => g.trim());

            const matches =
                genres.filter(g =>
                    currentGenres.includes(g)
                ).length;

            return {
                ...item,
                matches
            };

        })
        .filter(item => item.matches > 0)
        .sort((a, b) => b.matches - a.matches)

    similarMoviesContainer.innerHTML =
    similarMovies.map(item => `
    
        <a
            class="similar-card"
            href="film.html?id=${item.id}"
        >

            <img
                src="${item.poster}"
                alt="${item.title}"
            >

            <div class="similar-card__content">

                <h3 class="similar-card__title">
                    ${item.title}
                </h3>

                <div class="similar-card__meta">
                    ${item.year}
                </div>

            </div>

        </a>

    `).join("");
}