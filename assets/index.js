const conteinerInputs = document.getElementById("controles");
const cssText = document.querySelector(".css");
const botao = document.querySelector(".btn");

const handleStyle = {
    element: botao,
    height(value) {
        this.element.style.height = value + "px";
    },
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    width(value) {
        this.element.style.width = value + "px";
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + "px";
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + "px";
    },
    texto(value) {
        this.element.innerText = value;
    },
};

function pegarEstilos(event) {
    const nomeEvento = event.target.name;
    const valor = event.target.value;

    handleStyle[nomeEvento](valor);
    saveValues(nomeEvento, valor);
    showCssStyle();
}
conteinerInputs.addEventListener("input", pegarEstilos);

// Vai armazernar os valores no localStorege, com o nome e o valor.
function saveValues(nome, valor){
    localStorage[nome] = valor
}

function setValues() {
    const properts = Object.keys(localStorage);
    properts.forEach((propertie) => {
        handleStyle[propertie](localStorage[propertie])
        conteinerInputs.elements[propertie].value = localStorage[propertie];
    })

    showCssStyle();
}
setValues();

function showCssStyle() {
    cssText.innerHTML =
        "<span>" + botao.style.cssText.split("; ").join(";</span><span>");
}
