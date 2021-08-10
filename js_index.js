/* Agregamos el ancla al final y dentro del body del html con
la tag script */

//alert("I love pizza");

//console.log("Welcome to the console");

/* VARIABLES */

//var age = 27;
/*debemos ir a nuestro navegador, click derecho en la ventana,
"inspeccionar elemento" y luego ir a la pestaña "Console"
*/
//console.log("Age is:", age);
/* Las variables funcionan igual que python. Las variables pueden ser
de tipo const(constatnes) o let(cambio de valor temporal de 
una variable)*/

/* ARICMÉTICA */
/* 
age=age**0; //para elevar a la potencia
age=age%2; //para obtener el resto de una división
age+=26; //para agregar valor a la variable como python
 */

/* USER INPUT */
//el window prompt sirve para poner un input en la ventana emergente
//del navegador. Es molesto y poco recomendado
//var myname=window.prompt("whats your name?")

//agrego una casilla y un boton en la pagina
//luego agrego document. Cuando una página se abre y se carga, esta misma
//crea un objeto "document" represententando el html



document.getElementById("buttontext").onclick = function(){
    var myname=document.getElementById("textname").value;
    console.log("Hello",myname);
}
