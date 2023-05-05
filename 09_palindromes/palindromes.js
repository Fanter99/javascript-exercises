const palindromes = function (s) {
    let new_s = s.replaceAll(' ','').replaceAll(',', '').replaceAll('!', '').replaceAll('.', '').toLowerCase();
    let reverse_new_s = new_s.split("").reverse().join("");
    return new_s === reverse_new_s

};

// Do not edit below this line
module.exports = palindromes;
