const hamburgerButton = document.getElementById("hamburger-menu-picture");
const dropMenu = document.getElementsByTagName("ul");

const toggleMenuOn = function () {
  hamburgerButton.addEventListener("mouseover", function () {
    dropMenu[0].classList.toggle("hideMenu");
  });
};

//const toggleMenuOff = function () {
//  hamburgerButton.addEventListener("mouseleave", function () {
//    dropMenu[0].classList.toggle("hideMenu");
//  });
//};

toggleMenuOn();
//toggleMenuOff();

/*
const bodyBackground = document.getElementById('body');

const goHomeButton = document.getElementsByClassName("homeButton");
const orangeButton = document.getElementsByClassName("buttonOrange");
const greenButton = document.getElementsByClassName("buttonGreen");
const lilacButton = document.getElementsByClassName("buttonLilac");

const changeBackgroundPlain = function () {
  bodyBackground.classList.add("backgroundPlain");
  bodyBackground.classList.remove("backgroundOrange");
  bodyBackground.classList.remove("backgroundGreen");
  bodyBackground.classList.remove("backgroundLilac");
  dropMenu[0].classList.toggle("hideMenu");
}

const changeBackgroundOrange = function () {
  bodyBackground.classList.remove("backgroundPlain");
  bodyBackground.classList.add("backgroundOrange");
  bodyBackground.classList.remove("backgroundGreen");
  bodyBackground.classList.remove("backgroundLilac");
  dropMenu[0].classList.toggle("hideMenu");
}

const changeBackgroundGreen = function () {
  bodyBackground.classList.remove("backgroundPlain");
  bodyBackground.classList.remove("backgroundOrange");
  bodyBackground.classList.add("backgroundGreen");
  bodyBackground.classList.remove("backgroundLilac");
  dropMenu[0].classList.toggle("hideMenu");
}

const changeBackgroundLilac = function () {
  bodyBackground.classList.remove("backgroundPlain");
  bodyBackground.classList.remove("backgroundOrange");
  bodyBackground.classList.remove("backgroundGreen");
  bodyBackground.classList.add("backgroundLilac");
  dropMenu[0].classList.toggle("hideMenu");
}

goHomeButton[0].addEventListener("click", changeBackgroundPlain);
orangeButton[0].addEventListener("click", changeBackgroundOrange);
greenButton[0].addEventListener("click", changeBackgroundGreen);
lilacButton[0].addEventListener("click", changeBackgroundLilac);
*/

const bodyBackground = document.body;

const clickButtonHome = function () {
  const goHomeButton = document.getElementsByClassName("homeButton");
  goHomeButton[0].addEventListener("click", function () {
    toggleBackgroundPlain();
    dropMenu[0].classList.toggle("hideMenu");
  })
};

const toggleBackgroundPlain = function () {
  bodyBackground.classList.add("backgroundPlain");
  bodyBackground.classList.remove("backgroundOrange");
  bodyBackground.classList.remove("backgroundGreen");
  bodyBackground.classList.remove("backgroundLilac");
};

const clickButtonOrange = function () {
  const orangeButton = document.getElementsByClassName("buttonOrange");
  orangeButton[0].addEventListener("click", function () {
    toggleBackgroundOrange();
    dropMenu[0].classList.toggle("hideMenu");
  })
};

const toggleBackgroundOrange = function () {
  bodyBackground.classList.remove("backgroundPlain");
  bodyBackground.classList.add("backgroundOrange");
  bodyBackground.classList.remove("backgroundGreen");
  bodyBackground.classList.remove("backgroundLilac");
};

const clickButtonGreen = function () {
  const orangeButton = document.getElementsByClassName("buttonGreen");
  orangeButton[0].addEventListener("click", function () {
    toggleBackgroundGreen();
    dropMenu[0].classList.toggle("hideMenu");
  })
};

const toggleBackgroundGreen = function () {
  bodyBackground.classList.remove("backgroundPlain");
  bodyBackground.classList.remove("backgroundOrange");
  bodyBackground.classList.add("backgroundGreen");
  bodyBackground.classList.remove("backgroundLilac");
};

const clickButtonLilac = function () {
  const lilacButton = document.getElementsByClassName("buttonLilac");
  lilacButton[0].addEventListener("click", function () {
    toggleBackgroundLilac();
    dropMenu[0].classList.toggle("hideMenu");
  })
};

const toggleBackgroundLilac = function () {
  bodyBackground.classList.remove("backgroundPlain");
  bodyBackground.classList.remove("backgroundOrange");
  bodyBackground.classList.remove("backgroundGreen");
  bodyBackground.classList.add("backgroundLilac");
};

clickButtonHome();
clickButtonOrange();
clickButtonGreen();
clickButtonLilac();
