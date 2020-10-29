const width = 400;
const heigh =400;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(heigh)
};

let $map = document.getElementById('map');
//pistas
let $distance = document.getElementById('distance');
//clicks del mouse
let clicks = 0;

$map.addEventListener('click', function(e){
    //contador de click
    clicks++;

    let distance = getDistance(e,target);
    
    let distanceHint = getDistanceHint(distance);
    
    //pista 
    $distance.innerHTML = `<h1>${distanceHint}</h1>`

    //usuario ganando
    if(distance < 20){
        alert(`Found the treasure in ${clicks} clicks!!/Encontraste el tesoro en ${clicks} clicks!!`)
        location.reload();
    }
})
