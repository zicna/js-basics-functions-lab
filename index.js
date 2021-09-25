// Code your solution in this file!


const distanceFromHqInBlocks = (distance)=> {
    const blocks = distance - 42
    if(blocks < 0) return blocks *(-1)
    else return blocks
}

const distanceFromHqInFeet = (end, start=42) => {
    const distance = (start - end) * 264 
    if (distance < 0) return distance * (-1)
    else return distance
}

const distanceTravelledInFeet = (start, end) => {
    return distanceFromHqInFeet(start, end)
}

const calculatesFarePrice = (start, end) => {
    const distance = distanceFromHqInFeet(start, end)
    if (distance < 401) return 0
    else if(distance > 400 && distance <= 2000) return (distance -400) * 0.02
    else if(distance > 2000 && distance < 2500) return 25
    else return 'cannot travel that far'
}