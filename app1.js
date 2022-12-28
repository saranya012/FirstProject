console.log("vamos argentina")

//? function
function factorial(number){
    let factorialValue = number*9*8*7*6*5*4*3*2*1
    console.log(factorialValue)
}

factorial(10)

function toFahrenheit(c){
    let f = (c*1.8)+32
    console.log('Fahrenheit value = ',f)
}
toFahrenheit(37)

function toCelsius(f){
    let c = (f-32)*.5556
    console.log('Celsius value = ',c)
}
toCelsius(98.6)