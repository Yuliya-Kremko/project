 "use strict";

 const NumberOfFilms = +prompt (`Сколько фильмов вы уже посмотрели?`, ``);
    
 const personalMoviDB = {
     count: NumberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
 };

 const NameFilms = prompt (`Один из последних просмотренных фильмов?` , ``),
       GradeFilms = +prompt (`На сколько оцените его?` , ``),
       NameFilms2 = prompt (`Один из последних просмотренных фильмов?` , ``),
       GradeFilms2 = +prompt (`На сколько оцените его?` , ``);

personalMoviDB.movies[NameFilms] = GradeFilms;
personalMoviDB.movies[NameFilms2] = GradeFilms2;

console.log(personalMoviDB);


