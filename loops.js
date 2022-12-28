for (let i = 0; i < 10 ; i++) {
    console.log(i+1)
}

var array=[1,2,3,4]
for(let i=0; i<array.length; i++){
    console.log(array[i])
}

// for... of loops
for(const i of array){
    console.log(i)
}

// for .. in loop
var obj={name:"saranya", age:"30"}
for(const i in  obj){
    console.log(obj[i])
}

//while loop
var i=0;
while (i<10) {
    console.log(i+1);
    i++;
}

var a1=[10,20,30,40,50,60]
var x=0;
while (x<a1.length) {
    console.log(a1[x]);
    x++;
}

//do while
var j=0;
do {
    j++;
    console.log(j);
} while (j<10);

var arr1=[24,87,43,55]
var n=0;
do {
    console.log(arr1[n])
    n++;
} while (n<arr1.length);

//sample code