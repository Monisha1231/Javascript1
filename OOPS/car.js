// ES6 - modules
export default class Car{
    drive(){
        console.log("driving");
    }
}

export function fillGas(){
    console.log("Filling gas");
}

export function repair(){
    console.log("repairing");
}

// export default Car  // one way of export using
// export {fillGas, repair}