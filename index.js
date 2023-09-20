// Code your solution in this file!
//write a function
//takes pick up location of a passanger
//returns number of blocks from 42st
//if location is 50 return 8
function distanceFromHqInBlocks(pickAt){
    const Hq = 42;

    let distance = Math.abs(pickAt - Hq);
    return distance
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(pickAt){
   const blockFeet=264
   let distanceFeet= distanceFromHqInBlocks(pickAt)*blockFeet
   return distanceFeet;
}
distanceFromHqInFeet(28)
function distanceTravelledInFeet(start,end){
    let diff =  Math.abs(end - start);
    let distanceInFeet = diff * 264
    return distanceInFeet
}
function calculatesFarePrice(start, end){
    let x=distanceTravelledInFeet(start,end)
    if(x<=400){
        return 0
    }else if(x>400 && x<=2000){
        let price =(x-400)* 0.02
        return parseFloat(price.toFixed(2));
       // return `Price is ${price}`
    }else if(x>2000 && x<2500){
        return 25

    }else{
        return 'cannot travel that far'
    }
}
