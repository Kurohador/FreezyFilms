const floatingHeader = document.getElementById("floatingHeader");
const filterToggle = document.getElementById("filterToggle");
const filterPanel = document.getElementById("filterPanel");
const filterReset = document.getElementById("filterReset");
const filterApply = document.getElementById("filterApply");

function handleScroll() {
  if (!floatingHeader) return;

  if (window.scrollY > 180) {
    floatingHeader.classList.add("is-visible");
  } else {
    floatingHeader.classList.remove("is-visible");
  }
}

function toggleFilterPanel() {
  if (!filterPanel) return;
  filterPanel.classList.toggle("is-open");
}

function closeFilterPanel() {
  if (!filterPanel) return;
  filterPanel.classList.remove("is-open");
}

function updateMultiSelectText(multiSelect) {
  const checked = [...multiSelect.querySelectorAll('input[type="checkbox"]:checked')];
  const textNode = multiSelect.querySelector(".multi-select__text");

  if (!checked.length) {
    if (multiSelect.dataset.filter === "includeGenres") {
      textNode.textContent = "По каким жанрам искать";
    } else {
      textNode.textContent = "Какие жанры исключить";
    }
    return;
  }

  textNode.textContent = `Выбрано: ${checked.length}`;
}

function resetFilters() {
  document.querySelectorAll('.multi-select input[type="checkbox"]').forEach(input => {
    input.checked = false;
  });

  const typeFilter = document.getElementById("typeFilter");
  const statusFilter = document.getElementById("statusFilter");
  const yearFrom = document.getElementById("yearFrom");
  const yearTo = document.getElementById("yearTo");
  const sortFilter = document.getElementById("sortFilter");

  if (typeFilter) typeFilter.value = "";
  if (statusFilter) statusFilter.value = "";
  if (yearFrom) yearFrom.value = "";
  if (yearTo) yearTo.value = "";
  if (sortFilter) sortFilter.value = "relevance";

  document.querySelectorAll(".multi-select").forEach(updateMultiSelectText);
if (searchInput) {
    searchInput.value = "";
}

if (headerSearchInput) {
    headerSearchInput.value = "";
}
renderMovies(getFilteredMovies());
}

function applyFilters() {

    let filteredMovies = [...movies];

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
    renderMovies(getFilteredMovies());

    closeFilterPanel();

}

window.addEventListener("scroll", handleScroll);

window.addEventListener("load", () => {
  handleScroll();

  document.querySelectorAll(".multi-select").forEach(multiSelect => {
    const trigger = multiSelect.querySelector(".multi-select__trigger");
    const checkboxes = multiSelect.querySelectorAll('input[type="checkbox"]');

    if (trigger) {
      trigger.addEventListener("click", () => {
        multiSelect.classList.toggle("is-open");
      });
    }

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", () => {
        updateMultiSelectText(multiSelect);
      });
    });

    updateMultiSelectText(multiSelect);
  });
});

if (filterToggle) filterToggle.addEventListener("click", toggleFilterPanel);
if (filterReset) filterReset.addEventListener("click", resetFilters);
if (filterApply) filterApply.addEventListener("click", applyFilters);

document.addEventListener("click", (event) => {
  if (filterPanel && filterToggle) {
    const insideFilter = filterPanel.contains(event.target) || filterToggle.contains(event.target);
    if (!insideFilter) {
      filterPanel.classList.remove("is-open");
    }
  }

  document.querySelectorAll(".multi-select").forEach(multiSelect => {
    if (!multiSelect.contains(event.target)) {
      multiSelect.classList.remove("is-open");
    }
  });
});

const heroTrack =
document.getElementById("heroTrack");

if (heroTrack && typeof movies !== "undefined") {

    heroTrack.innerHTML =
    movies.slice(0,6)
    .map(movie => `
    <a class="hero-card"
       href="film.html?id=${movie.id}">

        <img
            class="hero-card__image"
            src="${movie.poster}"
            alt="${movie.title}"
        >

        <div class="hero-card__overlay">

            <h3 class="hero-card__title">
                ${movie.title}
            </h3>

        </div>

    </a>
    `).join("");
}
function openRandomMovie(event) {

    event.preventDefault();

    const currentId = Number(
        new URLSearchParams(window.location.search)
            .get("id")
    );

    let randomMovie;

    do {

        randomMovie =
            movies[Math.floor(
                Math.random() * movies.length
            )];

    } while (
        currentId &&
        randomMovie.id === currentId
    );

    window.location.href =
        `film.html?id=${randomMovie.id}`;

}
const randomBtn =
document.getElementById("randomMovieBtn");

const randomBtnFloat =
document.getElementById("randomMovieBtnFloat");

if (randomBtn) {
    randomBtn.addEventListener(
        "click",
        openRandomMovie
    );
}

if (randomBtnFloat) {
    randomBtnFloat.addEventListener(
        "click",
        openRandomMovie
    );
}