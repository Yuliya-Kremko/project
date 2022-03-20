// "use strict";

// let i = 1;

// let cycle,
//     ok;

// do {
//     cycle = prompt(`Придумай пример цикла ${i}`, ``);

//     do {
//         ok = prompt(`Вердикт Андрея : Да или нет`, ``).toLocaleLowerCase();
//         if (ok != `да` && ok != `нет`) {
//             alert(`Да или нет`);
//         }
//     } while (ok != `да` && ok != `нет`);

//     if (ok == `нет`) {
//         alert(`Давай еще раз`);
//     } else if (ok == `да`) {
//         i++;
//     }
// }
// while (ok !== `да` || i < 4);

// let i= 1,
//     cycle,
//     ok;
// while ( true ) {
//     cycle = prompt(`Придумай пример цикла ${i}`, ``);
//       while (true) {
//           ok = prompt(`Вердикт Андрея : Да или нет`, ``).toLocaleLowerCase();
//           if (ok != `нет` && ok != `да`) {
//               alert (`Error`);
//           } else { break; 
//           }
//          }
//     if (ok == `нет`) {
//         alert(`Давай еще раз`);
//     } else if (ok == `да`) {
//         i++;
//     } else if (i == 3 ) { break; 
//     } 
// }

let cycle;

for (let i = 1; i < 4;) {
    cycle = prompt(`Придумай пример цикла ${i}`, ``);
    let ok;
    for (; ok != `да` && ok != `нет`;) {
        ok = prompt(`Вердикт Андрея : Да или нет`, ``).toLocaleLowerCase();
        if (ok != `нет` && ok != `да`) {
            alert(`Error`);
        } 
    }
    if (ok == `нет`) {
        alert(`Давай еще раз`);
    } else if (ok == `да`) {
        alert(`Хорошо`);
        i++;
    } else if (i == 3) {
        break;
    }
}
