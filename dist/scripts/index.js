
// _____script for ___galery___
var mainContainer = document.querySelectorAll('.main-container')[0];

var arrowLeft = document.createElement('div');
arrowLeft.className = "arrow-left";
var arrowRight = document.createElement('div');
arrowRight.className = "arrow-right";


mainContainer.insertAdjacentElement('afterbegin', arrowLeft);
mainContainer.insertAdjacentElement('beforeend', arrowRight);

var currentItemIndex = 0;

arrowLeft.addEventListener('click', prev);
arrowRight.addEventListener('click', next);

var item = document.getElementsByClassName('main-container-image');

function prev() {
    currentItemIndex--;
    console.log(currentItemIndex);
	if (currentItemIndex < 0) {
        currentItemIndex = item.length -1;
    }
    for (i = 0; i < item.length; i++) {
        item[i].classList.remove("visible");
    }
    render();
}

function next() {
    currentItemIndex++;
    console.log(currentItemIndex);
	if (currentItemIndex > item.length -1) {
		currentItemIndex = 0;
    }
    for (i = 0; i < item.length; i++) {
        item[i].classList.remove("visible");
    }
    render();
}

function render() {
    item[currentItemIndex].classList.add("visible");
}
render();
