let color = prompt("Какой твой любимый цвет?")
alert(`Input - ${ color }`)

let a = 0;
let points = 30;

$('#pointsplus').click(function(){
    if(points != 0){
        a += 1;
        points -= 1;
    }
    $('#strength').val(a)
    $('#point').text(points)
})

$('#points-').click(function(){
    if(a > 0){
        a -= 1;
        points += 1;
    }
    $('#strength').val(a)
    $('#point').text(points)
})

