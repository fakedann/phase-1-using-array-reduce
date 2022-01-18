const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = (prevValue, currentValue) => prevValue+currentValue;
const batteries = () => batteryBatches.reduce(reducer);
let totalBatteries = batteries();