let listaPalabra = [];
let listaPalabraCorregida = [];
let campoTexto = document.getElementById("campoTexto");
let areaTexto = document.getElementById("areaTexto");
let botonCopiar = document.getElementById("copiar");
let imagen = document.getElementById("vacio");

function dividirPalabra() {
    listaPalabra = [];
    listaPalabraCorregida = [];
    let palabra = campoTexto.value;
    for (let i = 0; i < palabra.length; i++) {
        listaPalabra[i] = palabra[i].toLowerCase();
    }
}

function encriptarTexto() {
    dividirPalabra();
    console.log(campoTexto.value.length);
    if (campoTexto.value.length >= 1) {
        for (let i = 0; i < listaPalabra.length; i++) {
            switch (listaPalabra[i]) {
                case "a":
                    listaPalabra[i] = "ai";
                    break;
            
                case "e":
                    listaPalabra[i] = "enter";
                    break;
                
                case "i":
                    listaPalabra[i] = "imes";
                    break;
    
                case "o":
                    listaPalabra[i] = "ober";
                    break;
    
                case "u":
                    listaPalabra[i] = "ufat";
                    break;
    
            }
        } 
        escribirTexto(listaPalabra);
    }
}

function desencriptarTexto() {
    dividirPalabra();
    if (campoTexto.value.length >= 1) {
        let palabra = campoTexto.value;
        let contador = 0;

        for (let i = 0; i < palabra.length; i++) {
            switch (palabra[i]) {
                case "a":
                    listaPalabraCorregida[contador] = "a"
                    contador++;
                    i+=1;
                    break;
            
                case "e":
                    listaPalabraCorregida[contador] = "e"
                    contador++;
                    i+=4;
                    break;
                
                case "i":
                    listaPalabraCorregida[contador] = "i"
                    contador++;
                    i+=3;
                    break;

                case "o":
                    listaPalabraCorregida[contador] = "o"
                    contador++;
                    i+=3;
                    break;

                case "u":
                    listaPalabraCorregida[contador] = "u"
                    contador++;
                    i+=3;
                    break;

                default:
                    listaPalabraCorregida[contador] = palabra[i];
                    contador++;
                    break;
            }
        }
    escribirTexto(listaPalabraCorregida);
    }
}

function escribirTexto(arreglo) {
    let texto ="";
    for (let i = 0; i < arreglo.length; i++) {
        texto += arreglo[i];
    }
    areaTexto.value = texto;
    areaTexto.style.visibility = "visible";
    botonCopiar.style.visibility = "visible";
    botonCopiar.innerHTML = "Copiar Texto";
    imagen.style.display = "none";
}

function copiar() {
    areaTexto.select();
    areaTexto.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(areaTexto.value);
    botonCopiar.innerHTML = "Texto Copiado!"
  }

function estado() {
    botonCopiar.innerHTML = "Copiar Texto"
}