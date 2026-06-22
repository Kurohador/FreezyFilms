const movies = [

{
    id: 1,
    title: "1+1",
    year: 2011,
    rating: 8.8,
    genre: "Драма, Комедия",
    status: "Вышел",
    poster: "posters/1.jpg",
    trailer: "https://rutube.ru/video/ef82e51fad7c2e57cfbe134fcd44e301/",
    description: "История дружбы богатого аристократа и молодого помощника из неблагополучного района."
},

{
    id: 2,
    title: "Живая сталь",
    year: 2011,
    rating: 7.6,
    genre: "Фантастика, Боевик",
    status: "Вышел",
    poster: "posters/2.jpg",
    trailer: "https://rutube.ru/video/bc7454c98f876b7e519ae2f6ca693719/",
    description: "Бывший боксер и его сын участвуют в боях гигантских роботов."
},

{
    id: 3,
    title: "Аватар: Путь воды",
    year: 2022,
    rating: 7.8,
    genre: "Фантастика, Приключения",
    status: "Вышел",
    poster: "posters/3.jpg",
    trailer: "https://rutube.ru/video/fe7091148b2ff0d71e77474ab00edeec/",
    description: "Продолжение истории Джейка Салли и народа На'ви."
},

{
    id: 4,
    title: "Аватар: Пламя и Пепел",
    year: 2025,
    rating: "Ожидается",
    genre: "Фантастика, Приключения",
    status: "Анонс",
    poster: "posters/4.jpg",
    trailer: "https://rutube.ru/video/b8eb936c319a4511634ee316c6598ff4/",
    description: "Новая глава вселенной Аватара с неизвестными племенами Пандоры."
},

{
    id: 5,
    title: "Темный рыцарь",
    year: 2008,
    rating: 9.0,
    genre: "Боевик, Криминал",
    status: "Вышел",
    poster: "posters/5.jpg",
    trailer: "https://rutube.ru/video/74fb252e6f3a0e6eaedb0909dc6eaf29/",
    description: "Бэтмен сталкивается со своим главным врагом — Джокером."
},

{
    id: 6,
    title: "Дэдпул и Росомаха",
    year: 2024,
    rating: 8.0,
    genre: "Боевик, Комедия",
    status: "Вышел",
    poster: "posters/6.jpg",
    trailer: "https://rutube.ru/video/f893c0764662db0b17b277d15d6e0871/",
    description: "Самый безумный дуэт Marvel отправляется спасать мультивселенную."
},

{
    id: 7,
    title: "Формула 1",
    year: 2025,
    rating: "Ожидается",
    genre: "Спорт, Драма",
    status: "Анонс",
    poster: "posters/7.jpg",
    trailer: "https://rutube.ru/video/b1b4e04d3ddac97959e7766d47f1b7fb/",
    description: "Фильм о мире королевских гонок Формулы-1."
},

{
    id: 8,
    title: "Ярость",
    year: 2014,
    rating: 7.7,
    genre: "Военный, Боевик",
    status: "Вышел",
    poster: "posters/8.jpg",
    trailer: "trailers/8.mp4",
    description: "Экипаж американского танка выполняет опасную миссию в конце Второй мировой войны."
},

{
    id: 9,
    title: "Ford против Ferrari",
    year: 2019,
    rating: 8.1,
    genre: "Драма, Спорт",
    status: "Вышел",
    poster: "posters/9.jpg",
    trailer: "trailers/9.mp4",
    description: "Легендарное противостояние Ford и Ferrari на гонке Ле-Ман."
},

{
    id: 10,
    title: "Годзилла и Конг: Новая Империя",
    year: 2024,
    rating: 6.7,
    genre: "Фантастика, Боевик",
    status: "Вышел",
    poster: "posters/10.jpg",
    trailer: "trailers/10.mp4",
    description: "Годзилла и Конг объединяются против новой угрозы."
},

{
    id: 11,
    title: "Зеленая миля",
    year: 1999,
    rating: 9.1,
    genre: "Драма, Фэнтези",
    status: "Вышел",
    poster: "posters/11.jpg",
    trailer: "trailers/11.mp4",
    description: "История надзирателя тюрьмы и заключенного с необычным даром."
},

{
    id: 12,
    title: "Интерстеллар",
    year: 2014,
    rating: 8.7,
    genre: "Фантастика, Драма",
    status: "Вышел",
    poster: "posters/12.jpg",
    trailer: "trailers/12.mp4",
    description: "Команда исследователей отправляется через червоточину в поисках нового дома для человечества."
},

{
    id: 13,
    title: "Оно",
    year: 2017,
    rating: 7.3,
    genre: "Ужасы, Триллер",
    status: "Вышел",
    poster: "posters/13.jpg",
    trailer: "trailers/13.mp4",
    description: "Группа подростков сталкивается с древним злом, скрывающимся под обликом клоуна."
},

{
    id: 14,
    title: "Джанго освобожденный",
    year: 2012,
    rating: 8.4,
    genre: "Вестерн, Драма",
    status: "Вышел",
    poster: "posters/14.jpg",
    trailer: "trailers/14.mp4",
    description: "Бывший раб отправляется спасать свою жену."
},

{
    id: 15,
    title: "Джон Уик 3",
    year: 2019,
    rating: 7.5,
    genre: "Боевик, Криминал",
    status: "Вышел",
    poster: "posters/15.jpg",
    trailer: "trailers/15.mp4",
    description: "Легендарный киллер становится целью для всего преступного мира."
},

{
    id: 16,
    title: "Мир Юрского периода: Возрождение",
    year: 2025,
    rating: "Ожидается",
    genre: "Приключения, Фантастика",
    status: "Анонс",
    poster: "posters/16.jpg",
    trailer: "https://rutube.ru/video/2a383da742d48178bef6300d22e370df/",
    description: "Новая история во вселенной динозавров."
},

{
    id: 17,
    title: "Мальчишник в Вегасе 2",
    year: 2011,
    rating: 6.5,
    genre: "Комедия",
    status: "Вышел",
    poster: "posters/17.jpg",
    trailer: "trailers/17.mp4",
    description: "Новые безумные приключения друзей после очередной вечеринки."
},

{
    id: 18,
    title: "Мандалорец и Грогу",
    year: 2026,
    rating: "Ожидается",
    genre: "Фантастика, Приключения",
    status: "Анонс",
    poster: "posters/18.jpg",
    trailer: "https://rutube.ru/video/1d24b6dbc7c0eb18e2e3245135ce3b9d/",
    description: "Полнометражное приключение героев вселенной Звездных войн."
},

{
    id: 19,
    title: "Доктор Дум",
    year: 2026,
    rating: "Ожидается",
    genre: "Фантастика, Боевик",
    status: "Анонс",
    poster: "posters/19.jpg",
    trailer: "https://rutube.ru/video/8a301ed4dafec595bc4d9e691f08462c/",
    description: "История одного из самых опасных злодеев Marvel."
},

{
    id: 20,
    title: "Моана",
    year: 2026,
    rating: "Ожидается",
    genre: "Приключения, Семейный",
    status: "Анонс",
    poster: "posters/20.jpg",
    trailer: "https://rutube.ru/video/310421aa8a60ad4a8be507336697169b/",
    description: "Игровая адаптация знаменитого мультфильма Disney."
},

{
    id: 21,
    title: "Обратный отсчет",
    year: 2025,
    rating: "Ожидается",
    genre: "Триллер",
    status: "Анонс",
    poster: "posters/21.jpg",
    trailer: "https://rutube.ru/video/9d10c08cec737e0e8e4afd8e7d069bdc/",
    description: "Напряженная история о времени, которого остается все меньше."
},

{
    id: 22,
    title: "По соображениям совести",
    year: 2016,
    rating: 8.1,
    genre: "Военный, Драма",
    status: "Вышел",
    poster: "posters/22.jpg",
    trailer: "trailers/22.mp4",
    description: "История военного медика, отказавшегося брать оружие."
},

{
    id: 23,
    title: "Хищник: Планета смерти",
    year: 2025,
    rating: "Ожидается",
    genre: "Фантастика, Ужасы",
    status: "Анонс",
    poster: "posters/23.jpg",
    trailer: "https://rutube.ru/video/ffc10d0931c45bfdf766d9e013d379a9/",
    description: "Новая охота легендарного Хищника."
},

{
    id: 24,
    title: "Проект Конец Света",
    year: 2026,
    rating: "Ожидается",
    genre: "Фантастика",
    status: "Анонс",
    poster: "posters/24.jpg",
    trailer: "https://rutube.ru/video/516cf6f25f65121ccde92ef30cd9b164/",
    description: "Ученые пытаются предотвратить глобальную катастрофу."
},

{
    id: 25,
    title: "Тихоокеанский рубеж",
    year: 2013,
    rating: 6.9,
    genre: "Фантастика, Боевик",
    status: "Вышел",
    poster: "posters/25.jpg",
    trailer: "trailers/25.mp4",
    description: "Гигантские роботы сражаются против чудовищ из океана."
},

{
    id: 26,
    title: "Человек-паук: Новый день",
    year: 2026,
    rating: "Ожидается",
    genre: "Фантастика, Боевик",
    status: "Анонс",
    poster: "posters/26.jpg",
    trailer: "https://rutube.ru/video/f1726ef2aa94ab9cdf5bcb41c727975a/",
    description: "Новая глава истории Питера Паркера."
},

{
    id: 27,
    title: "Т-34",
    year: 2018,
    rating: 6.8,
    genre: "Военный, Боевик",
    status: "Вышел",
    poster: "posters/27.jpg",
    trailer: "trailers/27.mp4",
    description: "Советские танкисты готовят дерзкий побег из немецкого плена."
},

{
    id: 28,
    title: "Твое сердце будет разбито",
    year: 2025,
    rating: "Ожидается",
    genre: "Мелодрама",
    status: "Анонс",
    poster: "posters/28.jpg",
    trailer: "https://rutube.ru/video/a70a230d17028ca4562fefa1237cb003/",
    description: "Романтическая история о любви и сложном выборе."
},

{
    id: 29,
    title: "Warcraft",
    year: 2016,
    rating: 7.0,
    genre: "Фэнтези, Боевик",
    status: "Вышел",
    poster: "posters/29.jpg",
    trailer: "trailers/29.mp4",
    description: "Люди и орки сталкиваются в борьбе за судьбу Азерота."
},

{
    id: 30,
    title: "Вонка",
    year: 2023,
    rating: 7.2,
    genre: "Фэнтези, Семейный",
    status: "Вышел",
    poster: "posters/30.jpg",
    trailer: "trailers/30.mp4",
    description: "История молодого Вилли Вонки до открытия знаменитой шоколадной фабрики."
}

];
