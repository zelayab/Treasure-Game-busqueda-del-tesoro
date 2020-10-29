let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

//teorema de pitagoras entre los dos puntos
let getDistance = (e, target) => {
    let diffx = e.offsetX - target.x;
    let diffy = e.offsetY - target.y;
    return Math.sqrt((diffx * diffx) + (diffy * diffy));
}

// pista al usuario
let getDistanceHint = distance => {
    if(distance < 30){
        return "Boiling Hot!/Hirviendo"
    }else if(distance < 40){
        return "Really Hot/Muy caliente"
    }else if(distance < 60){
        return "Hot/Caliente"
    }else if(distance <100){
        return "Warm/Calido"
    }else if(distance <180){
        return "Cold/Frio"
    }else if(distance <360){
        return "Really Cold/Muy Frio"
    }else{
        return "Freezing/Congelado";
    }
}