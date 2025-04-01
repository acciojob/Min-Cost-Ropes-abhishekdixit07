function mincost(arr)
{ 
let cost=0;	
let n=arr.length;
arr.sort;
arr.map((rope,i)=>{
	if((i+1)>n){
		break;
	}
	cost=arr[i]+arr[i+1];
	arr[i+1]=arr[i]+arr[i+1];
}
		return cost;
}

module.exports=mincost;
