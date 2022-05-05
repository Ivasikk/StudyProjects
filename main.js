let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
    }
}
/*
Преобразует в true тодько NaN и string(лучше смотреть документацию, очень много исключений)

Пример почему использование isNaN не всегда уместно
isNaN("blabla")    true: "blabla" преобразовано в число.
                   При парсинге преобразуется в число при неудаче 
*/

start();

let personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 3; i++) {
        let movieLast = prompt("Один из последних просмотренных фильмов?"),
            movieLastMark = prompt("На сколько его оцениваете?");
        if (movieLast != null && movieLastMark != null && // null - это отмена ввода '' - пустой Ок)
            movieLast != "" && movieLastMark != "" && movieLast.length < 50) {
            personalMovieBD.movies[movieLast] = movieLastMark;
        } else {
            i--;
        }
    }
}

console.log(personalMovieBD);

function detectPersonalLevel() {
    if (personalMovieBD.count < 10) {
        console.log("Просмотрено мало фильмов");
    } else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
        console.log("Вы классический зритель");
    } else {
        console.log("Вы Киноман");
    }
}
