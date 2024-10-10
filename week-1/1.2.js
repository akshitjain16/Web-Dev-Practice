// callbacks - fn calling another fn
function calarithmatic(a,b,fnToCall){
   ans= fnToCall(a,b)
   return ans;
}

function sum(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

ans  = calarithmatic(3,4,minus)
console.log(ans)