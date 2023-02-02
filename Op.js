
let botonarea= document.getElementById("Btnarea");
botonarea.addEventListener("click",areacua);

function areacua(){
    let l1;
    let l2;
    l1 =Number(document.getElementById("numero1").value);
    l2 =Number(document.getElementById("numero2").value);
    if(l1==l2){
        let=operacion= l1*l2;
    let mostrar = document.getElementById("result_area");
    mostrar.innerText=operacion;
    }else{
        let mostrar = document.getElementById("result_area");
        mostrar.innerText=("Esos lados no corresponden a un cuadrado");
    }
    
}

let botontriangulo= document.getElementById("Btntriangulo");
botontriangulo.addEventListener("click", triangulo);

function triangulo(){
    let al;
    let base;
    let operacion;
    al=Number(document.getElementById("numero3").value);
    base= Number(document.getElementById("numero4").value);
    operacion= (base*al)/2;
    let mostrar=document.getElementById("result_trinagulo");
    mostrar.innerText=operacion;
}

let botondescuento=document.getElementById("Btnmultiplicar");
botondescuento.addEventListener("click",descuento);

function descuento(){
    let al=Number(document.getElementById("numero5").value);
    if (al>1000){
       let operacion=al-(al*.30);
       let mostrar=document.getElementById("result_multi");
       mostrar.innerText=operacion;
    }else{
        let operacion=al-(al*.10);
       let mostrar=document.getElementById("result_multi");
       mostrar.innerText=operacion;
    }
}
let botonpar=document.getElementById("Btnpar");
botonpar.addEventListener("click",par);

function par(){
    let num=Number(document.getElementById("numero7").value);
    if(num%2==0){
        let mostrar=document.getElementById("result_par");
       mostrar.innerText=("El número "+num+" es par");
        
    
    }else{
        let mostrar=document.getElementById("result_par");
       mostrar.innerText=("El número "+num+" es impar");
    }
}

let botonas=document.getElementById("Btnnumeros");
botonas.addEventListener("click",asenso);

function asenso(){
    const imprimirnumeros = document.getElementById("resultnum");
    imprimirnumeros.innerHTML = " ";

    for(let x=100; x>=1; x--){

    const lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = `${x}`;
    imprimirnumeros.appendChild(lista);
    }
}