function vermais(){
    let pontos = document.getElementById("pontos");
    let maisTexto = document.getElementById("mais");
    let btnVermais = document.getElementById("btnVermais");

    if(pontos.style.display == "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnVermais.innerHTML = "Ver mais"
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnVermais.innerHTML = "Ver menos"
    }
};

document.addEventListener("DOMContentLoaded", function() {
    var textoEsconder = document.getElementById("textoEsconder");
    var btn = document.getElementById("btn");
  
    btn.addEventListener("click", function() {
      if (textoEsconder.style.display === "none") {
        textoEsconder.style.display = "block";
      } else {
        textoEsconder.style.display = "none";
      }
    });
  });
  
var btn = document.querySelector("#btn");

btn.addEventListener('click', function() {
    btn.style.display = 'none';
});