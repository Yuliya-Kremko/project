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

    const numberOfFilms = +prompt (`Сколько фильмов вы уже посмотрели?` , ``);


const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10){
    alert(`Просмотрено довольно мало фильмов`);
} else if (10 <= personalMovieDB.count <= 30 ){
    alert ( `Вы классический зритель` );
} else if ( personalMovieDB.count > 30 ){
    alert( `Вы киноман` );
} else {
    alert ( `Произошла ошибка`);
}
//     console.log(personalMovieDB);



// for (let i = 0; i < 2; i++) {
//     const a = prompt (`Один из последних просмотренных фильмов?`, ``),
//           b = prompt (`На сколько оцените его?` , ``);

//     if (a != `` && b != `` && a != null && b != null && a.length < 50 ) {
//         personalMovieDB.movies[a] = b;
//         console.log(`done`);
//     } else {
//         console.log(`error`);
//         i--;
//     }
// }

let i = 0;
const a = prompt (`Один из последних просмотренных фильмов?`, ``),
          b = prompt (`На сколько оцените его?` , ``);
while ( i < 2) {
    if (a != `` && b != `` && a != null && b != null && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log(`done`);
        i++;
    } else {
        console.log(`error`);
        i--;
    }
}



    // let num = 50;

    // while (num <= 55){
    //     console.log(num);
    //     num++;
    // }

    // do {
    //     console.log(num);
    //     num++;
    // }
    // while (num < 55);

    // for ( let i = 1; i < 8; i++) {
    //     if ( i === 6) {
    //     //    break;
    //     continue;
    //     }
    //     console.log(i);
    // }

    // let result = '';
    // const lenght = 7;

    // for ( let i = 1; i < lenght ; i++){
    //     for ( let j = 0; j < i; j++){
    //         result += '*';
    //     }

    //     result += '\n';
    // }

    // console.log(result);
    
    // first: for ( let i = 0; i < 3; i++) {
    //     console.log( `First level: ${i}`);
    //     for ( let j = 0; j < 3; j++) {
    //         console.log( `Second level: ${j}`);
    //         for ( let k = 0; k < 3; k++){
    //             if( k === 2) continue first; 
    //             console.log( `Third level: ${k}`);
    //         }
    //     }
    // }
