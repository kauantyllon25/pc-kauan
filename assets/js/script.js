let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');
let description = document.querySelector('.description');
let carInfo = document.querySelector('.car-information');
let h2 = document.querySelector('h2');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

prevButton.onclick = () => {
    list.style.setProperty('--calculation', active === 0 ? '-1' : '-1');
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider();
    items[active].classList.add('active');
};

nextButton.onclick = () => {
    list.style.setProperty('--calculation', active === lastPosition ? '1' : '1');
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
    items[active].classList.add('active');
};

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    let dotsOld = indicator.querySelector('ul li.active');
    dotsOld.classList.remove('active');
    dots[active].classList.add('active');

    let cor1 = '#00FF00'; // Verde
    let cor2 = '#800080'; // Roxo
    let cor3 = '#FFFFFF'; // Branco
    let cor4 = '#A52A2A'; // Vinho
    let cor5 = '#000000'; // Preto
    let cor6 = '#00FF00'; // Verde 

    let activeItem = items[active];
    let activeDescription = activeItem.querySelector('.description');
    let activeCarInfo = activeItem.querySelector('.car-information');
    let activeH2 = activeItem.querySelector('h2');

    let activeLi = indicator.querySelectorAll('ul li')[active];
    indicator.querySelectorAll('ul li').forEach((li) => {
        li.style.backgroundColor = ''; 
    });

    if (active === 0) {
        container.style.backgroundImage = 'radial-gradient(circle, #cccccc, #000000)';
        activeDescription.style.color = cor6; // Texto em verde claro
        activeCarInfo.style.color = cor6; // Texto em verde claro
        activeH2.style.color = cor6; // Texto em verde claro
        activeLi.style.backgroundColor = cor5;
    } else if (active === 1) {
        container.style.backgroundImage = 'radial-gradient(circle, #ff6347, #8b0000)';
        activeDescription.style.color = cor5; // Texto em preto
        activeCarInfo.style.color = cor5; // Texto em preto
        activeH2.style.color = cor5; // Texto em preto
        activeLi.style.backgroundColor = cor5; // Barra em preto
    } else if (active === 2) {
        container.style.backgroundImage = 'radial-gradient(circle, #191970, #4b0082)';
        activeDescription.style.color = cor3;
        activeCarInfo.style.color = cor3;
        activeH2.style.color = cor3;
        activeLi.style.backgroundColor = cor5;
    }

    items[active].classList.add('active');
}

// Inicializa o primeiro item como ativo
setSlider();
