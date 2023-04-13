const bt3 = document.getElementById("bt3");
const divBtn = document.getElementById("divBtn");
const textoEnc = document.getElementById("textoEnc");
const textIng = document.getElementById("textoIng");

const textInput = document.getElementById("textoIng");
const msj = document.getElementById("imga")
const long = textIng.value;
console.log(textIng.value);
console.log(long.length);
//

function encriptar() {

    if (textIng.value.length == 0) {
        msj.style.display = "block";
        
    } else {
        msj.style.display = "none";
        textoEnc.innerHTML = text.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        //divBtn.style.display= "block";
    }
    //console.log(textoEnc.id)
    console.log(textInput);
    console.log(bt3);
    //divBtn.style.display= "block";
    //const msj = document.getElementById("imga"); 
    const text = textInput.value; 
    console.log(text);
    console.log(msj);
    

    

    console.log(textoEnc.innerHTML);
    console.log(textoEnc.innerHTML.length);
   
    
    //let bt3 = document.getElementById("bt3");
    
    
 
  }