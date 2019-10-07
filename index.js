function produceDrivingRange(range) {
    return function (str1, str2) {
        let distance = Math.abs(parseInt(str2) - parseInt(str1));
        let difference = range - distance;
        if (difference > 0) {
            return `within range by ${difference}`
        } else {
            return `${Math.abs(difference)} blocks out of range`
        }
    }
}

function produceTipCalculator(total) {
    return function (percent) {
        return total * percent
    }
}

function createDriver() {
     let driverId = 0;
     // return the class
     return class {
       constructor(name) {
        this.name = name;
         this.id = ++driverId;
      }   
    };
}


   