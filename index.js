// Code your solution in this file!
// Assumes that the HQ is on 42nd street
function distanceFromHqInBlocks(blockNumber) {
  return Math.abs(blockNumber - 42);
}

function distanceFromHqInFeet(blockNumber) {
  const blocks = distanceFromHqInBlocks(blockNumber);
  return blocks * 264; // as one block is approximately 264 feet
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
