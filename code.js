const toClose = document.getElementById("close");
const toActive= document.getElementById("active");
// const form = document.querySelector(".formulario");
// const nombre = document.getElementById("nombre");
// const email = document.getElementById("email");
// const numero = document.getElementById("numero");
// const mensage = document.getElementById("mensage");
const cielo = document.getElementById("cielo");
const mon = document.getElementById("mon");
const arbol = document.getElementById("arbol");
const elpendejo = document.getElementById("elpendejo");
const fondo = document.getElementById("fondo");

toClose.addEventListener("click",()=>document.querySelector(".navigation-container").classList.remove("open"));
toActive.addEventListener("click",()=>document.querySelector(".navigation-container").classList.add("open"));

// // typing
const typed = new Typed(".typing",{
    strings: ["Javascript","Full Stack MERN","Frontend....","Backend....",""],
    typeSpeed: 100,
    startDelay: 500,
    backDelay: 500,
    cursorChar: '_',
    backSpeed: 0,
    loop: true
});

// //formulario

// const boton_enviar = document.getElementById("boton-enviar");

window.addEventListener("scroll",()=>{
    let height = innerHeight;
    let value = window.scrollY;
    let scale=4;

    if(window.innerWidth<=700) scale=3;
    else scale=4;
  console.log(cielo)
    // if(value>height){
    //   fondo.style.position="absolute";
    //   fondo.style.top=height+"px";
    // }else{
    //   fondo.style.position="fixed";
    //   fondo.style.top="0";
    // }
    cielo.style.transform= `scale(${mapear(value,0,height,scale,1)})`;


    if(value>=height*.3){
       mon.style.bottom =`${mapear(value,height*.3,height*.8,-100,0)}%`;
    }else{
      mon.style.bottom =`-100%`;
    }

    if(value>= height*.6){
      arbol.style.left =`${mapear(value,height*.6,height,-70,0)}%`;
    }

    if(value>=height*.98){
      if(window.innerWidth>=2030){
        elpendejo.style.height="150%";
      }else {
        elpendejo.style.height="100vh";
      }
      elpendejo.style.bottom="0%";
    }
    else
      elpendejo.style.bottom="-50%";
});

function mapear(valor, valorMinimo1, valorMaximo1, valorMinimo2, valorMaximo2) {
    // Asegurarse de que el valor esté dentro del rango

    if (valor < valorMinimo1) {
      valor = valorMinimo1;
    }
    if (valor > valorMaximo1) {
      valor = valorMaximo1;
    }
  
    // Realizar el mapeo lineal
    const porcentaje = (valor - valorMinimo1) / (valorMaximo1 - valorMinimo1);
    const valorMapeado = (porcentaje * (valorMaximo2 - valorMinimo2)) + valorMinimo2;

    return valorMapeado;
  }