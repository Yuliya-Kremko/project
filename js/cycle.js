"use strict";

let i = 1;

let cycle,
    ok;

do {
    cycle = prompt(`Придумай пример цикла ${i}`, ``);

    do {
        ok = prompt(`Вердикт Андрея : Да или нет`, ``).toLocaleLowerCase();
        if (ok != `да` && ok != `нет`) {
            alert(`Да или нет`);
        }
    } while (ok != `да` && ok != `нет`);

    if (ok == `нет`) {
        alert(`Давай еще раз`);
    } else if (ok == `да`) {
        i++;
    }
}
while (ok !== `да` || i < 4);