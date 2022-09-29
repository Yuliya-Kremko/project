"use strict";

// const result = confirm ( `Are you here? ` );
// console.log(result);

// const answer = prompt (` Вам есть 18 лет? ` , `18`);
// console.log( answer);

// const answers = [];

// answers[0] =  prompt (`Как Вас зовут?` , ``);
// answers[1] =  prompt (`Какая у Вас фамилия?` , ``);
// answers[2] =  prompt (`Сколько Вам лет?` , ``);

// document.write(answers);
// console.log( typeof(answers));

// let user;
// user = prompt (`Как Вас зовут?`, ``);
// alert (`Привет, ${user}`);

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

let numberOfFilms = +prompt (`Сколько фильмов вы уже посмотрели?` , ``);

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let NameFilm1 = prompt (`Один из последних просмотренных фильмов?`, ``);
let gradeFilms1 = prompt (`На сколько оцените его?` , ``);
let NameFilm2 = prompt (`Один из последних просмотренных фильмов?`, ``);
let gradeFilms2 = prompt (`На сколько оцените его?` , ``);

    personalMovieDB.movies[NameFilm1] = gradeFilms1;
    personalMovieDB.movies[NameFilm2] = gradeFilms2;

    console.log(personalMovieDB);