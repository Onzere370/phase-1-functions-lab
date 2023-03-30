// Code your solution in this file!
const feetPerBlock=264; 

function distanceFromHqInBlocks(distance) { 
    
       return Math.abs(distance-42)
       
      
}
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block)*feetPerBlock
}
function distanceTravelledInFeet(startBlock,destinationBlock) {
 return Math.abs((startBlock-destinationBlock)*feetPerBlock)
}
function calculatesFarePrice(startBlock,destinationBlock) {
  const distanceInFeet=distanceTravelledInFeet(startBlock,destinationBlock)
  if(distanceInFeet<=400) {return 0;}
  else if(distanceInFeet<2000) {return (distanceInFeet-400)*0.02;}
  else if(distanceInFeet<2500) {return 25;}
  else{return "cannot travel that far";}
}
   