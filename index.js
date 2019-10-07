function produceDrivingRange(range){
    return function(block1, block2){
        b1 = parseInt(block1);
        b2 = parseInt(block2);
        if (Math.abs(b1-b2) <= range){
            return `within range by ${Math.abs(range - (Math.abs(b1-b2)))}`;
        } else {
            return `${Math.abs(range -(Math.abs(b1-b2)))} blocks out of range`;
        }
    }
}

function produceTipCalculator(tip_percentage){
    return function(price){return price * tip_percentage};
}

function createDriver() {
    let DriverId = 0;
     return class {
      constructor(name) {
        this.name = name;
        this.id = ++DriverId;
      }
    };
  }
   
