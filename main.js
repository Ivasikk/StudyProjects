
const numberOfFilms = +prompt("Сколько фильмов ты посмотрел?");

let personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





const movieLast = prompt("Один из последних просмотренных фильмов?");
const movieLastMark = prompt("На сколько его оцениваете?");
personalMovieBD.movies[movieLast] = movieLastMark;
console.log(personalMovieBD);
/*
let movie = {
    movieLast: movieLastMark,
};

console.log(movie);
*/
