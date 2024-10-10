// map, filter and arrow functions

//arrow function 
const sum = (a,b)=>{
    return a+b;
}



// mutiply array by 2 using mapping
  
 function transform(i){
    return i*2;
 }
const input = [1, 2, 3, 4, 5];
 const ans  = input.map(transform);
 console.log(ans);


// filtering

const arr = [1,2,3,4,5]
function filterLogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}

const anss = arr.filter(filterLogic);
console.log(anss)
