function mincost(arr)
{ 
 // Create a min-heap from the array elements
  let heap = new MinHeap();
  for(let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
  }
  
  let cost = 0;
  
  while (heap.size() > 1) {
    // Extract the two smallest elements
    let first = heap.extractMin();
    let second = heap.extractMin();
    
    // Add the extracted elements to the total cost
    cost += first + second;
    
    // Push the sum of the extracted elements back to the heap
    heap.insert(first + second);
  }
  
  return cost;
  
}

module.exports=mincost;
