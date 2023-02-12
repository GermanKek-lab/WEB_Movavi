function logger(){
    console.log("Всем ку, это я - old}");
}

logger();
logger();


function juiceMaker(apple, bob, abrikos=6){
    if (apple == undefined){
        apple = "без использования";
    }
    bob = bob || "без использования";
    const babudi = `тырыпыры ${apple} карабас ${bob} траливали ${abrikos}`;
    return babudi;
}

console.log(juiceMaker());

// function prt(uno, des){
//     if (uno > des){
//         console.log(`uno - ${uno}`);
//     }
//     else if (des > uno){
//         console.log(`des - ${des}`);
//     }
//     else {
//         console.log(`=`);
//     }
// }

// uno = parseInt(prompt('first num?'));
// des = Number(prompt('secound num?'));
// prt(uno, des);


// function SredTeam(bal1, bal2, bal3){
//     return (bal1 + bal2 + bal3) / 3;
// }


// function final(bal1_1, bal1_2, bal1_3, bal2_1, bal2_2, bal2_3){
//     first_team = SredTeam(bal1_1, bal1_2, bal1_3);
//     secound_team = SredTeam(bal2_1, bal2_2, bal2_3);

//     if (first_team > secound_team){
//         console.log(`first team win with ${first_team} score, secound team is loser with ${secound_team} score`)
//         console.log(`Второй тиме не зватило ${(first_team - secound_team) * 3 + 1} баллов`)
//     }
//     else if (first_team < secound_team){
//         console.log(`secound team win with ${secound_team} score, first team is loser with ${first_team} score`)
//         console.log(`Первой тиме не зватило ${(secound_team - first_team) * 3 + 1} баллов`)
//     }
//     else{
//         console.log(`оба равны`);
//     }

// }


// const bal1_11 = Number(prompt('Резы 1 игры 1 команды'));
// const bal1_21 = Number(prompt('Резы 2 игры 1 команды'));
// const bal1_31 = Number(prompt('Резы 3 игры 1 команды'));
// const bal2_11 = Number(prompt('Резы 1 игры 2 команды'));
// const bal2_21 = Number(prompt('Резы 2 игры 2 команды'));
// const bal2_31 = Number(prompt('Резы 3 игры 2 команды'));

// final(bal1_11, bal1_21, bal1_31, bal2_11, bal2_21, bal2_31)


const students = ["Lisa", "Michal", "Efrim", "Bob", "Elianora"];

console.log(students);
for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}
