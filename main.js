class rectangulo{
    constructor(largo,ancho){
        this.largo= largo;
        this.ancho=ancho;
    }
    calculararea(){
        return this.largo*this.ancho;
    }
}
function saludar(){
    alert ("buenos dias papi");
}
function area(){
    var ancho = document.getElementById("ancho").value;
    var largo = document.getElementById("largo").value;
    let rectangulo1 = new rectangulo(ancho,largo);
    alert(rectangulo1.calculararea());
}
var elemento = document.getElementById("1s");
elemento.innerHTML="<b>PedroUwU</b>";

alert("adios");

let swlocation = "sw.js";

if(navigator.serviceWorker){
    if(window.location.href.includes("localhost"))
        swlocation="js/sw.js";
    navigator.serviceWorker.register(swlocation);
}