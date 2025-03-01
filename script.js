function mincost(arr)
{ 
//write your code here
// return the min cost
let cost=0;
arr.sort();
arr.map((item,i)=>{
	if(i==arr.length){
		return;
	}
	cost=cost+arr[i]+arr[i+1];
	arr[i+1]=arr[i]+arr[i+1];
	
	return cost;
})
  
}

module.exports=mincost;
