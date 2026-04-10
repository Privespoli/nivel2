// --- NIVEL 1 ---
function saludoMagico() {
    let nombre = document.getElementById("nombreUsuario").value;
    document.getElementById("resSaludo").innerText = `¡Bienvenido al reino de ${nombre}!`;
}

function calcularEdadPerruna() {
    let edad = Number(document.getElementById("edadPerro").value);
    document.getElementById("resPerro").innerText = `El perrito tiene ${edad * 7} años humanos.`;
}

function controlSemaforo() {
    let color = document.getElementById("colorSemaforo").value.toLowerCase();
    let res = (color === "rojo") ? "PARAR" : (color === "amarillo") ? "ESPERAR" : (color === "verde") ? "PASAR" : "Color inválido";
    document.getElementById("resSemaforo").innerText = res;
}

function adivinarNumero() {
    const secreto = 7;
    let intento = Number(document.getElementById("intentoNumero").value);
    document.getElementById("resSecreto").innerText = (intento === secreto) ? "¡Ganaste!" : "Sigue intentando...";
}

function repetirDeseo() {
    let deseo = document.getElementById("deseoTexto").value;
    let veces = Number(document.getElementById("deseoCantidad").value);
    document.getElementById("resDeseos").innerText = (deseo + " *** ").repeat(veces);
}

// --- NIVEL 2 ---
let listaS = ["Cookies", "Feijoada", "Frutas"];
function agregarProducto() {
    let p = document.getElementById("productoInput").value;
    if(p) { listaS.push(p); document.getElementById("resultadoLista").innerText = listaS.join(", "); }
}

function generarTabla() {
    let n = Number(document.getElementById("numeroTabla").value);
    for(let i=1; i<=10; i++) console.log(`${n} x ${i} = ${n*i}`);
}

function contarAs() {
    let t = document.getElementById("palabraInput").value.toLowerCase();
    let c = t.split("").filter(letra => letra === 'a').length;
    document.getElementById("resultadoVocales").innerText = `Tiene ${c} letras 'a'`;
}

function filtrarEdades() {
    let edades = [12, 18, 25, 10, 30];
    document.getElementById("resultadoFiltro").innerText = `Mayores: ${edades.filter(e => e >= 18)}`;
}

function convertirClima() {
    let c = Number(document.getElementById("celsiusInput").value);
    document.getElementById("resultadoClima").innerText = `${(c * 1.8) + 32} °F`;
}

// --- NIVEL 3 ---
const coche = { marca: "Tesla", encendido: false, arrancar() { this.encendido = true; } };
function probarCoche() { coche.arrancar(); document.getElementById("estadoCoche").innerText = "Estado: Encendido"; }

function generarUser() {
    let c = document.getElementById("nombreCompleto").value.toLowerCase().split(" ");
    if(c.length > 1) document.getElementById("resUsuario").innerText = `${c[0][0]}${c[1]}_dev`;
}

function ejecutarFizzBuzz() {
    for(let i=1; i<=50; i++) {
        let out = (i%15==0)?"FizzBuzz":(i%3==0)?"Fizz":(i%5==0)?"Buzz":i;
        console.log(out);
    }
}

function calcularCarrito() {
    let items = [{p:20}, {p:40}, {p:15}];
    document.getElementById("resCarrito").innerText = `Total: $${items.reduce((a, b) => a + b.p, 0)}`;
}

function validarPass() {
    let p = document.getElementById("passInput").value;
    let valid = p.length >= 8 && p.toLowerCase().includes("a");
    document.getElementById("resPass").innerText = valid ? "Seguro" : "Inseguro";
}

// --- NIVEL 4 ---
class Libro { constructor(t){this.t=t; this.d=true;} }
let l1 = new Libro("El Quijote");
function gestionarPrestamo() {
    if(l1.d){ l1.d=false; document.getElementById("resLibro").innerText="¡Prestado!"; }
    else document.getElementById("resLibro").innerText="No disponible";
}

let nSec = Math.floor(Math.random()*100)+1; let ints = 5;
function jugarAdivinaPro() {
    let i = Number(document.getElementById("inputPro").value);
    ints--;
    let m = (i===nSec)?"¡Ganaste!":(i<nSec)?"Más alto":"Más bajo";
    document.getElementById("resPistas").innerText = `${m} (Intentos: ${ints})`;
}

function verificarPalindromo() {
    let f = document.getElementById("fraseInput").value.toLowerCase().replace(/\s/g, "");
    let r = f.split("").reverse().join("");
    document.getElementById("resPalindromo").innerText = (f===r && f!=="")?"Es palíndromo":"No lo es";
}

function retirarDinero() {
    let m = Number(document.getElementById("montoCajero").value);
    let b50 = Math.floor(m/50); m %= 50;
    let b20 = Math.floor(m/20); m %= 20;
    let b10 = Math.floor(m/10);
    document.getElementById("resCajero").innerText = `50€:${b50}, 20€:${b20}, 10€:${b10}`;
}

function ordenarEstudiantes() {
    let e = [{n:"Ana", g:8}, {n:"Juan", g:10}, {n:"Pepe", g:5}].sort((a,b)=>b.g - a.g);
    document.getElementById("resNotas").innerText = e.map(x => `${x.n}: ${x.g}`).join(" | ");
}