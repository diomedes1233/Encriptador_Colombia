const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

//esta función tine un array de elementos que se recorren con un for y
//al encontrar los indices ceros los renplaza por los indices uno Y
//con la funcion toLowerCase() solo se permite ingresar letras minusculas.

function encriptar(stringEncriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptar = stringEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptar.includes(matrizCodigo[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
    }
    return stringEncriptar;

}

//al oprimir este boton evalua las letras que encuentra y al encontrar el idice cero 
//dependiendo de la letra la tranforma con la letras a encriptar.
function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    document.querySelector(".imgPersonajes").style.visibility = "hidden";
    document.querySelector(".btnCopiar").style.visibility = "visible";
    inputTexto.value = ""

}

//esta función tine un array de elementos que se recorren con un for y
//al encontrar los indices uno los renplaza por los indices ceros Y
//con la funcion toLowerCase() solo se permite ingresar letras minusculas.
function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],
    ["u", "ufat"]];

    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],
                matrizCodigo[i][0]);

        }
    }
    return stringDesencriptar;

}

//al oprimir este boton evalua las letras que encuentra y al encontrar el idice cero 
//dependiendo de la letra la tranforma con la letras a encriptar.
function btnDesencriptar() {
    const textoDesencriptar = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptar;
    inputTexto.value = ""

}

function copiar() {
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Texto copiado")
}
