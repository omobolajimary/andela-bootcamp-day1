module.exports    =    {
aritGeo: function(arr){
    if(arr.length === 0){
      return 0
  }
    var arith_check =0
    var geo_check = 0
    var common_diff = arr[1] - arr[0]
    var ratio = arr[1] / arr[0]
for(var count = 2; count< arr.length;count++){
    if(arr[count] !== (arr[0] + (count*common_diff))){
      arith_check += 1;
           }
    if(arr[count] !== arr[0]*(Math.pow(ratio, (count)))){
     geo_check +=1;
            }
}
    if(arith_check === 0){
        return 'Arithmetic'
}
    else if (geo_check === 0){
        return 'Geometric'
}
    else{
        return -1
}
}
}
