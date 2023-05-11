function crypto() {
  let textInput = document.getElementById("input-area").value;
  if(textInput == "") {
    alert("Digite algum texto!")
  } else {
    if(/[A-Z]/.test(textInput) && /[ÁáÀàÃãÂâÄäÉéÈèÊêËëÍíÌìÎîÏïÓóÒòÕõÔôÖöÚúÙùÛûÜü]/.test(textInput)) {
      alert("Não pode usar letras maiúsculas nem acentos.");
    } else {
      if(/[A-Z]/.test(textInput)) {
        alert("Não pode usar letras maiúsculas.");
      } else {
        if(/[ÁáÀàÃãÂâÄäÉéÈèÊêËëÍíÌìÎîÏïÓóÒòÕõÔôÖöÚúÙùÛûÜü]/.test(textInput)) {
          alert("Não pode usar acentos");
        } else {
          textInput = textInput.replaceAll("e","enter");
          textInput = textInput.replaceAll("i","imes");
          textInput = textInput.replaceAll("a","ai");
          textInput = textInput.replaceAll("o","ober");
          textInput = textInput.replaceAll("u","ufat");

          document.getElementById("no-message").style.display = "none";
          document.getElementById("copy").style.display = "initial";
          document.getElementById("output-area").value = textInput;
          document.getElementById("output-area").style.cursor = "text";
        }
      }
    }
  }
}

function decrypto() {
  let textInput = document.getElementById("input-area").value;
  if(textInput == "") {
    alert("Digite algum texto");
  } else {
    if(/[A-Z]/.test(textInput) && /[ÁáÀàÃãÂâÄäÉéÈèÊêËëÍíÌìÎîÏïÓóÒòÕõÔôÖöÚúÙùÛûÜü]/.test(textInput)) {
      alert("Não pode usar letras maiúsculas nem acentos.");
    } else {
      if(/[A-Z]/.test(textInput)) {
        alert("Não pode usar letras maiúsculas.");
      } else {
        if(/[ÁáÀàÃãÂâÄäÉéÈèÊêËëÍíÌìÎîÏïÓóÒòÕõÔôÖöÚúÙùÛûÜü]/.test(textInput)) {
          alert("Não pode usar acentos");
        } else {
          textInput = textInput.replaceAll("enter","e");
          textInput = textInput.replaceAll("imes","i");
          textInput = textInput.replaceAll("ai","a");
          textInput = textInput.replaceAll("ober","o");
          textInput = textInput.replaceAll("ufat","u");

          document.getElementById("no-message").style.display = "none";
          document.getElementById("copy").style.display = "initial";
          document.getElementById("output-area").value = textInput;
          document.getElementById("output-area").style.cursor = "text";
        }
      }  
    }
  }
}

function copy() {
  let copied = document.getElementById("output-area");
  copied.select();
  copied.setSelectionRange(0, 999999);
  document.execCommand("copy");
  document.getElementById("output-area").value = "";
  document.getElementById("no-message").style.display = "initial";
  document.getElementById("copy").style.display = "none";
  alert("Texto copiado para área de transferência.");
}