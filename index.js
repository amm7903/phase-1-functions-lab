// Code your solution in this file!
function distanceFromHqInBlocks(someValue)  {
    return Math.abs(someValue-42);
}
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264
}



function distanceTravelledInFeet(num1,num2) {
   let distance = Math.abs(num1 - num2);
   return distance * 264
   }
   
function calculatesFarePrice(start,destination) {

    if (distanceTravelledInFeet(start,destination) <= 400) {
    return distanceTravelledInFeet(start,destination) * 0
}
    else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start,destination) <= 2000) {
    return (distanceTravelledInFeet(start,destination) * .02 -8) 
}
    else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500) {
        return 25
    }
    else {
        return "cannot travel that far";
    }

}
