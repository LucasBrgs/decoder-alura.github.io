function criptografar() {
    let texto = document.getElementById("entrada").value;
    if(/[A-Z]/.test(texto) && /[áàãâäéèêëíìîïóòõôöúùûü]/.test(texto)) {
        alert("Não pode usar letras maiúsculas, nem usar acentos!")
    } else {
        if(/[A-Z]/.test(texto)) {
            alert("Não pode usar letras maiúsculas!");
        } else {
            if(/[áàãâäéèêëíìîïóòõôöúùûü]/.test(texto)) {
                alert("Não pode usar acentos!");
            } else {
                if(texto == "") {
                    document.getElementById("caixade-saida").style.visibility = "hidden";
                } else {    
                        texto = texto.replaceAll("e", "enter");
                        texto = texto.replaceAll("i", "imes");
                        texto = texto.replaceAll("a", "ai");
                        texto = texto.replaceAll("o", "ober");
                        texto = texto.replaceAll("u", "ufat");     
                    document.getElementById("caixade-saida").style.visibility = "visible";
                    document.getElementById("saida").value = texto;
                }
            }
        }
    }
}

function descriptografar() {
    let texto = document.getElementById("entrada").value;  
    if(/[A-Z]/.test(texto) && /[áàãâäéèêëíìîïóòõôöúùûü]/.test(texto)) {
        alert("Não pode usar letras maiúsculas, nem usar acentos!")
    } else {
        if(/[A-Z]/.test(texto)) {
            alert("Não pode usar letras maiúsculas!");
        } else {
            if(/[áàãâäéèêëíìîïóòõôöúùûü]/.test(texto)) {
                alert("Não pode usar acentos!");
            } else {
                if(texto == "") {
                    document.getElementById("caixade-saida").style.visibility = "hidden";
                } else {
                        texto = texto.replaceAll("enter", "e");
                        texto = texto.replaceAll("imes", "i");
                        texto = texto.replaceAll("ai", "a");
                        texto = texto.replaceAll("ober", "o");
                        texto = texto.replaceAll("ufat", "u");
                    document.getElementById("caixade-saida").style.visibility = "visible";
                    document.getElementById("saida").value = texto;
                }
            }
        }
    }
}

function copiar() {
    let textoCopiado = document.getElementById("saida");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("entrada").value = "";
    document.getElementById("caixade-saida").style.visibility = "hidden";
}