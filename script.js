function changeMode(){
   changeClasses();
}

function changeClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-tittle');
const body = document.getElementsByTagName('body')[0];//ele retorna um array então preciso dizer que quero o primeiro elemento [0]
const footer = document.getElementsByTagName('body')[0];//mesma coisa


button.addEventListener('click',changeMode);

