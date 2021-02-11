M=require('./maths')
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomArbitrarySum(min1, max1, min2,max2) {
    let a= Math.floor(Math.random() * (max1 - min1) + min1);
    let b= Math.floor(Math.random() * (max2 - min2) + min2);
    return M.sum(a,b);
}

module.exports.random=getRandomArbitrary;
module.exports.randomSum=getRandomArbitrarySum;
