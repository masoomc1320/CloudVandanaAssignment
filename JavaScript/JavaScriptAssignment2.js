arr = [1, 2, 3, 4, 5]

function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        let swapped = false
        for (let j = arr.length; j > 0 ; j--){
            if (arr[j] > arr[j-1]){
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
                swapped = true
            }
        }
        if(!swapped) break;
    }
    return arr
}

console.log("Original Array: ", arr)
console.log("Sorted Array in Decending Order: ", bubbleSort(arr))