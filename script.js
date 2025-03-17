function mincost(arr)
{ 
//write your code here
// return the min cost
var cost=0;
arr.sort();
arr.reduce((t=0,i)=>{
	cost=cost+i;
}
		  return cost;);
	
  
}

module.exports=mincost;
