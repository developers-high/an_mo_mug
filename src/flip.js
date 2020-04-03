const flipButton = document.querySelector(".flip");
const context = document.querySelector(".div-context");
const mediaQuery = window.matchMedia("(max-width: 599px)");

function flip() {
    if (context.classList.contains('context-hidden')) {
        context.classList.add('context-transition');
        context.clientWidth;
        context.classList.remove('context-hidden');
        flipButton.classList.remove('flip-hidden');
    }
    else {
        context.classList.add('context-hidden');
        flipButton.classList.add('flip-hidden');
    }
}

function init() {
    context.classList.remove('context-init');
}

// 사용하지 않는 함수
function autoFlip() {
    if (mediaQuery.matches) {
        if (!context.classList.contains('context-hidden')) flip();
    }
}

flipButton.addEventListener("click", flip);

context.addEventListener("transitionend", function () {
    context.classList.remove('context-transition');
})

window.onload = function () {
    this.init();
}
