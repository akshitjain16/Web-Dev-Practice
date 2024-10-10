//array of objects
const allusers = [{
    fname : "akshit",
    gender: "male"
},{
    fname:"tanvi",
    gender: "female"
}]

//iterating and checking the cond if true then print name
for(i=0; i<allusers.length ; i++){
    if(allusers[i]["gender"]=="male"){
        console.log(allusers[i]["fname"])
    }
}