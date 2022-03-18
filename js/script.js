 "use strict";

 let NumberOfFilms;
 do { NumberOfFilms = +prompt (`Сколько фильмов вы уже посмотрели?`, ``);
     if ( NumberOfFilms == []) {
         alert (`Введите количество просмотренных фильмов`);
     } else if (NumberOfFilms <= 0) {
         alert (`Введите корректное число`);
    } 
 } 
 while (NumberOfFilms == [] , NumberOfFilms <= `0`); 

 const personalMoviDB = {
     count: NumberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
 };
if (personalMoviDB.count < 10) {
    alert (`Просмотрено довольно мало фильмов`);
} else if (personalMoviDB.count >=10 && personalMoviDB.count<= 30) {
    alert (`Вы классический зритель`); 
} else if (personalMoviDB.count > 30){
    alert (`Вы киноман`);
} else if (personalMoviDB.count == ``) {
    alert (`Произошла ошибка`);
}


 let NameFilms , 
     GradeFilms,
     i = 1;
 do { 
      do { NameFilms= prompt (`Один из последних просмотренных фильмов?` , ``);
       if (NameFilms == []){
           alert(`Строка ответа не заполнена`);
          }
     }
     while (NameFilms == []);

      do {  GradeFilms = +prompt (`На сколько оцените его?` , ``);
       if (GradeFilms>10) {
           alert(`Введите оценку от 1 до 10`);
       } else if (GradeFilms<0){
           alert(`Введите оценку от 1 до 10`);
       } 
     } 
      while (GradeFilms > 10 || GradeFilms < 1 );
 i++; }
 while (i<3);

personalMoviDB.movies[NameFilms] = GradeFilms;

console.log(personalMoviDB);