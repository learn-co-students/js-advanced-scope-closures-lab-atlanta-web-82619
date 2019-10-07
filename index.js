function produceDrivingRange(num) {
    return function(loc1, loc2) {
        let num1 = parseInt(loc1);
        let num2 = parseInt(loc2);
        let diff = Math.abs(num1 - num2);

        if (diff > num) {
            return `${diff - num} blocks out of range`;
        }
        else {
            return `within range by ${diff}`;
        }
    }
}

function produceTipCalculator(proportion) {
    return function(cost) {
        return cost * proportion;
    }
}

function createDriver() {
    let DriverId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++DriverId;
        }
    }
}