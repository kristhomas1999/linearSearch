let numbers = [3, 8, 5, 2];

function searchHighest(arr, x){
  x = arr[0];
  for(let i=0; i<arr.length; i++){
    if(arr[i] > x){
      x = arr[i];
      return x;
    } else {
      x = arr[0];
    }
  }
  return x;
}

function searchLowest(arr, x){
  x = arr[0];
  for(let i=0; i < arr.length; i++){
    if(arr[i] < x){
      x = arr[i];
      return x;
    } else {
      x = arr[0];
    }
  }
  return x;
}

searchHighest(numbers)
searchLowest(numbers)