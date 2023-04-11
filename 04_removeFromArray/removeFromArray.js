const removeFromArray = function(array, ...TheArgs) {

    for (const arg of TheArgs){
        array = array.filter(elem => (elem !== arg))
    } 
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
