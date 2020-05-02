// Адаптивное меню

document.getElementById("burger-menu").onclick = function() {open()};

function open() {
    document.getElementById("adaptive-menu").classList.toggle("menu");
}

// Функция для смены цвета фона при клике на кнопки

function changeBg() {
    document.querySelector(".lamp").style.background = "#FF9500";
};

function changeBg2() {
    document.querySelector(".lamp").style.background = "#c97940";
};
