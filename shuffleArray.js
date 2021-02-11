var shuffle = function(nums, n) {

    // split into 2 array
    
    const splitArrayX = nums.slice(0,n)
    const splitArrayY = nums.slice(n)
    let newArray = []


    // add into array alternating

    for(let i = 0; i<splitArrayX.length;i++){
      newArray.push(splitArrayX[i])
      newArray.push(splitArrayY[i])
    }

    return newArray


};

console.log(shuffle([1,2,3,4,4,3,2,1], 4))