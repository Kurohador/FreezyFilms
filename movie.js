function renderMovies(movieList) {

    if (!moviesGrid) return;

    moviesGrid.innerHTML = "";

    movieList.forEach(movie => {

        const card = document.createElement("a");

        card.className = "catalog-card";
        card.href = `film.html?id=${movie.id}`;

        card.innerHTML = `
            <img
                class="catalog-card__image"
                src="${movie.poster}"
                alt="${movie.title}"
            >

            <div class="catalog-card__content">

                <h3 class="catalog-card__title">
                    ${movie.title}
                </h3>

                <p>
                    <strong>Жанр:</strong>
                    ${movie.genre}
                </p>

                <p>
                    <strong>Год:</strong>
                    ${movie.year}
                </p>

                <p>
                    <strong>Рейтинг:</strong>
                    ${movie.rating}
                </p>

            </div>
        `;

        moviesGrid.appendChild(card);

    });

}
const moviesGrid = document.getElementById("moviesGrid");

if (moviesGrid && typeof movies !== "undefined") {
    renderMovies(movies);
}
const searchInput =
document.getElementById("searchInput");

const headerSearchInput =
document.getElementById("headerSearchInput");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        if (headerSearchInput) {
            headerSearchInput.value = searchInput.value;
        }

        renderMovies(getFilteredMovies());

    });

}

if (headerSearchInput) {

    headerSearchInput.addEventListener("input", () => {

        if (searchInput) {
            searchInput.value = headerSearchInput.value;
        }

        renderMovies(getFilteredMovies());

    });

}
function getFilteredMovies() {

    let filteredMovies = [...movies];

    const query =
        (searchInput?.value ||
         headerSearchInput?.value ||
         "")
         .toLowerCase();

    const selectedGenres =
        [...document.querySelectorAll(
            '[data-filter="includeGenres"] input:checked'
        )].map(el => el.value);

    const excludedGenres =
        [...document.querySelectorAll(
            '[data-filter="excludeGenres"] input:checked'
        )].map(el => el.value);

    const status =
        document.getElementById("statusFilter")?.value;

    const yearFrom =
        document.getElementById("yearFrom")?.value;

    const yearTo =
        document.getElementById("yearTo")?.value;

    const sort =
        document.getElementById("sortFilter")?.value;


    // ПОИСК

    if (query) {

        filteredMovies = filteredMovies.filter(movie =>
            movie.title.toLowerCase().includes(query)
        );

    }

    if (selectedGenres.length) {

        filteredMovies = filteredMovies.filter(movie =>
            selectedGenres.some(genre =>
                movie.genre.includes(genre)
            )
        );

    }

    if (excludedGenres.length) {

        filteredMovies = filteredMovies.filter(movie =>
            !excludedGenres.some(genre =>
                movie.genre.includes(genre)
            )
        );

    }

    if (status) {

        filteredMovies = filteredMovies.filter(movie =>
            movie.status === status
        );

    }

    if (yearFrom) {

        filteredMovies = filteredMovies.filter(movie =>
            movie.year >= Number(yearFrom)
        );

    }

    if (yearTo) {

        filteredMovies = filteredMovies.filter(movie =>
            movie.year <= Number(yearTo)
        );

    }

    switch (sort) {

        case "title":

            filteredMovies.sort((a, b) =>
                a.title.localeCompare(b.title)
            );

            break;

        case "year":

            filteredMovies.sort((a, b) =>
                b.year - a.year
            );

            break;

        case "rating":

            filteredMovies.sort((a, b) =>
                Number(b.rating) - Number(a.rating)
            );

            break;

    }

    return filteredMovies;

}
