// ejercicio1 

var n1=prompt ("ingresar numero 1");
var n2=prompt ("ingresar numero 2");
document.write ("cual es el resultado de esta suma es " + (parseInt(n1)+ parseInt (n2)));

// ejercicio 2 
function temperatura(){
    var tgcelcius= prompt("ingrese la temperatura en grados celcius:");
    return (parseInt (tgcelcius) * 1.8)+ 32
}
console.log(temperatura());


var tgcelcius= prompt("ingrese la temperatura en grados celcius:");
document.write("la temperatura en fahrenheit es :"+ ( (parseInt(tgcelcius) * 1.8)+32 ));

// ejercicio 3 

var nu=prompt("ingresar numero");
document.write("la division da:" + (parseInt(nu)/10));

var nu = +prompt("ingresar numero");
document.write("la division da:" + (nu/10));

// ejercicio 4 

var a= [1,2,3]
typeof a;
alert("es de tipo :"  + typeof a )






