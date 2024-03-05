const posicaoSuperioInicial =50,
      posicaoEsquerdaInicial = 50,
      posicaoSuperioFinal = 50,
      posicaoEsquerdaFinal = 50,
      imgAvatar = document.getElementById('imgAvatar'),
      styleAvatar = window.getComputedStyle(imgAvatar);

var posicaoSuperior = 50,
    posicaoEsquerda = 50,
    topAvatar,
    leftAvatar;

imgAvatar,style.position = "absolute";
imgAvatar,style.top = posicaoSuperior + "px";
imgAvatar,style.left = posicaoEsquerda + "px";

function getTopStyle(elementToGet){
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(stleElement.getPropertyValue('top').replace("px",''));
}

function getLeftStyle(elementToGet){
    let styleElement = window.getComputedStyle(element);
    return parseInt(styleElement.getPropertyValue('left').replace("px",''));
}

function moverParaEsquerda(){
    console.clear();
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar > posicaoEsquerdaInicial) {
        posicaoEsquerda -= parseInt(txtPixel.value)
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para esquerda.Tente outro botão.");
    }
    console.log("Posição do avatar á esquerda:", imgAvatar.style.left);
}