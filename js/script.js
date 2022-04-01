 "use strict";

 let NumberOfFilms;

 function start () {
    NumberOfFilms = +prompt (`Сколько фильмов вы уже посмотрели?`, ``);

    while (NumberOfFilms == `` || NumberOfFilms == null || isNaN(NumberOfFilms)) {
        NumberOfFilms = +prompt (`Сколько фильмов вы уже посмотрели?`, ``);
    }
 } 

start();

 let personalMoviDB = {
     count: NumberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false,
     showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMoviDB);
        }
      }
    
 };

 personalMoviDB = {
   toggleVisibleMyDB: function () {
    if (personalMoviDB.privat == true) {
        personalMoviDB.privat = false;
    } else {
        personalMoviDB.privat = true;
    }
  }
};  

 personalMoviDB = {
    detectPersonalLevel() {
    if (personalMoviDB.count < 10) {
        alert (`Просмотрено довольно мало фильмов`);
    } else if (personalMoviDB.count >=10 && personalMoviDB.count< 30) {
        alert (`Вы классический зритель`); 
    } else if (personalMoviDB.count >= 30){
        alert (`Вы киноман`);
    } else  {
        alert (`Произошла ошибка`);
    }

  }
};

  personalMoviDB = {
  rememberMyFilms: function (detectPersonalLevel, callback) {
    for (let i=0; i<2; i++ ) {
         const NameFilms= prompt (`Один из последних просмотренных фильмов?` , ``),
               GradeFilms = +prompt (`На сколько оцените его?` , ``);
        if (NameFilms != null && GradeFilms != null && NameFilms !== '' && GradeFilms !== '' && NameFilms.length<50 ) {
            personalMoviDB.movies[NameFilms] = GradeFilms;
        } else {
            i--;
        }
    }
  },
  writeYourGenres: function () {
    for (let i=0; i<3;i++) {
         personalMoviDB.genres [i] = prompt (`Ваш любимый жанр под номером ${i+1}` , ``);
         if (personalMoviDB.genres == ``) {
             i--;
         }
    }
  }
};