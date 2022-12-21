let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/xy-and-women.jpg') {
      myImage.setAttribute('src', 'images/xy-and-zzw.jpg');
    } else {
      myImage.setAttribute('src', 'images/xy-and-women.jpg');
    }
}

document.querySelector('h1').onclick = function() {
    alert('别戳我，我怕疼。');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    if(myName !== null) {
        myHeading.textContent = 'Welcome to Suichuan,' + myName + '!';
    } else {
        myHeading.textContent = 'Welcome to Suichuan!';
    }
}

/*
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to Suichuan,' + myName + '!';
    }
}
*/

myButton.onclick = function() {
    setUserName();
}