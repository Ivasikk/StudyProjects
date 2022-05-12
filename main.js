/*
function start() {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
    
        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
        }
    }
Преобразует в true тодько NaN и string(лучше смотреть документацию, очень много исключений)

Пример почему использование isNaN не всегда уместно
isNaN("blabla")    true: "blabla" преобразовано в число.
                   При парсинге преобразуется в число при неудаче 
*/


let personalMovieBD = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieBD.count = +prompt("Сколько фильмов вы посмотрели?");
    
        while (personalMovieBD.count == "" || personalMovieBD.count == null || isNaN(personalMovieBD.count)) {
            personalMovieBD.count = +prompt("Сколько фильмов вы посмотрели?");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieBD.count < 10) {
            console.log("Просмотрено мало фильмов");
        } else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
            console.log("Вы классический зритель");
        } else {
            console.log("Вы Киноман");
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let a = i;
            while (personalMovieBD.genres== "" || personalMovieBD.genres == null) {
                personalMovieBD.genres[i] = prompt(`Ваш любимый жанр №${++a}?`);
            }
            personalMovieBD.genres.forEach((item, index, array) => {
                console.log(`${item} имеет позицию ${index} в ${array}`);
              });
        }
    },
    showMyBd: function() {
        if (personalMovieBD.privat == false) {
            console.log(personalMovieBD);
        }
    },
    toggleVisibleMyBD: function(){
        if (personalMovieBD.privat){
            personalMovieBD.privat=false;
        } else{
            personalMovieBD.privat= true;
        }
    }
};