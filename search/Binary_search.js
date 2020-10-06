'use strict'

const array = [1,2,3,4,5,6,7,8,9,10]

function my_binary_search(arr, item){
    let low = 0, hight = arr.length, middle = Math.floor(hight/2)

    while(item!=arr[middle]){

        if(arr[middle]>item){
            hight = middle
            middle = Math.floor((hight-low)/2)
        }
        else if(arr[middle]<item){
            low = middle
            middle += Math.floor((hight-low)/2)
        }
        if(item < arr[arr[0]] || item > arr[arr.length-1]) return null
    }
    return middle
}




