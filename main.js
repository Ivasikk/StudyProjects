
const numberOfFilms = +prompt("Сколько фильмов ты посмотрел?");

let personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 3; i++) {
    let movieLast = prompt("Один из последних просмотренных фильмов?"),
        movieLastMark = prompt("На сколько его оцениваете?");
        if (movieLast != null && movieLastMark != null && // Для подстраховки (Нельзя иметь null и '' одновременно))
            movieLast != "" && movieLastMark != "" && movieLast.length < 50){
            personalMovieBD.movies[movieLast] = movieLastMark;
        } else { 
            i--;
        } 
}

console.log(personalMovieBD);

if (personalMovieBD.count < 10){
    console.log("Просмотрено мало фильмов");
} else if(personalMovieBD.count >= 10 && personalMovieBD.count < 30){
    console.log("Вы классический зритель");
} else{
    console.log("Вы Киноман");
}