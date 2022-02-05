const removeFromArray = function(list, ...num) {
    let lst =[]
    for (const ls of list) {
        if (num.includes(ls)) {
            continue;
        } else {
            lst.push(ls);
        }
    }
    return lst;
};

// Do not edit below this line
module.exports = removeFromArray;
