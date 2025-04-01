function mincost(arr) {
    let cost = 0;
    arr.sort((a, b) => a - b);
    while (arr.length > 1) {
        let a = arr.shift();
        let b = arr.shift();
        cost += a + b;
        let i = arr.findIndex(x => x >= a + b);
        arr.splice(i === -1 ? arr.length : i, 0, a + b);
    }
    return cost;
}

module.exports=mincost;
