/* Description: Write a function that calculates the average of the numbers in a given list. */

function myFindAverage(array) {
    // Intuitively, I'm gonna use iteration.
    // Sum -> divide
    // There is an edge case when the array is empty
    // The below code is mine
    if (array.length==0) {return 0;}
    else {
        let sum = 0;
        for(let i=0;i<array.length;i++) {
            sum += array[i];
        }
        return sum/array.length;
    }
}

function bestFindAverage(array) {
    return array.length==0 ? 0 : array.reduce((acc,ind)=>acc+ind,0)/array.length;
    // This function uses array.reduce() & arrow function.
}
