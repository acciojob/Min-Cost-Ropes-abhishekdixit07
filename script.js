function mincost(arr)
{ 
let cost=0;	
let n=arr.length;
arr.sort((a,b)=>a-b);
while (arr.length > 1) {
        // Remove the first two ropes
        let a = arr.shift();
        let b = arr.shift();
        // Add their lengths to cost
        cost += a + b;
        // Insert a + b back into arr in its proper position
        // You can use a function like Array.prototype.splice() for this
        // ...
    }
    return cost;
}

module.exports=mincost;
