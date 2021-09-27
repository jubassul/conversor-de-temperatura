//fahrenheit to celsius 
const convertToCelsius = () => {
 let celsius = parseFloat(document.getElementById("celsius").value)
  let celsiusFormula = (celsius-32) * 5/9
 let celsiusToFixed = celsiusFormula.toFixed()
 console.log(celsiusToFixed)
 alert(` A Temperatura em celsius é ${celsiusToFixed}`)
}
//celsius to fahrenheit

const convertToFahrenheit = () => {
  let fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
    let fahrenheitFormula = fahrenheit * 9/5 + 32
    let fahrenheitToFixed = fahrenheitFormula.toFixed()
    console.log( fahrenheitToFixed)
  alert(` A Temperatura em celsius é ${fahrenheitToFixed}`)
}