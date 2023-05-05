const findTheOldest = function(a) {
    initValue = a.pop()

    return a.reduce((accumulator, current) => {
        if (current.yearOfDeath == undefined){
            let date = new Date()
            if (accumulator.yearOfDeath - accumulator.yearOfBirth <= date.getFullYear() - current.yearOfBirth){
                return current
            }
            else {
                return accumulator
            }
        }
        else{
        if (accumulator.yearOfDeath - accumulator.yearOfBirth < current.yearOfDeath - current.yearOfBirth){
            return current
        }
        else {
            return accumulator
        }
    }   
    }
    , initValue)
};

// Do not edit below this line
module.exports = findTheOldest;
