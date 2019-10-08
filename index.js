function produceDrivingRange(blockRange) {
    return function(starting, ending) {
        let distance = Math.abs(parseInt(ending) - parseInt(starting))
        let difference = (blockRange - distance)
        if ( difference > 0){
            return `within range by ${difference}`
        }
        else {
            return `${Math.abs(difference)} blocks out of range`
        }
    }
}

function produceTipCalculator(percent) {
    return function(cost) {
        return (cost * percent)
    }
}

function createDriver() {
    let driverId = 0
    return class {
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }
    }
}