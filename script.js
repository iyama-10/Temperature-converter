
    var fahrenheit  = document.querySelector("#fahrenheit")
    var celsius = document.querySelector("#celsius");

function convertFahrenheit(){

     var fahrenheitResult = (1.8 * celsius.value) + 32;

    fahrenheit.value = '= ' + fahrenheitResult + ' F'

}


function convertCelsius(){

    var celsiusResult = (fahrenheit.value - 32) / 1.8;

    celsius.value = '= ' + celsiusResult + ' celsius'
}

function reset(){
    document.querySelector("#celsius").value = " "
    document.querySelector("#fahrenheit").value = " "
    
}
