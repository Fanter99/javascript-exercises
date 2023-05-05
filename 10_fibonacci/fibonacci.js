const fibonacci = function(a) {
    if (a < 0){
        return 'OOPS'
    }
    else {
        let farr = []
        for (let i = 0; i < a; i++){
            if (i==0 || i==1){
                farr[i]=1
            }
            else{
                farr[i]= farr[i-1] + farr[i-2]
            }
        }
        return farr.pop()
    }
};

// Do not edit below this line
module.exports = fibonacci;
