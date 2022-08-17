//Atividade dark-mode/light-mode
function chamaTemaEscuro(){

    document.getElementsByTagName('h1 footer button body').toggle("dark-mode");
    var mudaTexto = "Dark mode ON";
    document.getElementsByTagName('button').innerHTML = mudaTexto;

}