var icon = document.querySelector('#icon');
var main = document.querySelector('#main');
icon.addEventListener('click', function () {
    main.style.display = 'flex';
    icon.style.display = 'none';
});

var h1 = document.querySelector('h1');
var h2 = document.querySelector('#display h2');

var op = 100;
var fs = 40;
var s1, s2;
function calcAnimation() {
    if (op >= 0) {
        s1 = setInterval(function () {
            op--;
            h1.style.opacity = `${op}%`;
        }, 5);
        s2 = setInterval(function () {
            fs--;
            h1.style.fontSize = `${fs}px`;
        }, 12);
        setTimeout(function () {
            clearInterval(s1);
            clearInterval(s2);
            h1.style.display = 'none';
        }, 430);
    }
    else {
        fs = 0;
        op = 0;
    }
}

var result = document.querySelector('#display h3');

var fsr = 30;
var y = 0;
var opr = 50;
var sr1, sr2, sr3;
var flag777 = 0;
function resultAnimation() {
    // result.textContent = eval(h2.textContent);
    if (flag777 === 0) {
        sr1 = setInterval(function () {
            y--;
            result.style.transform = `translateY(${y}%)`;
            result.style.opacity = `${y}%`;
        }, 5);
        sr2 = setInterval(function () {
            fsr++;
            result.style.fontSize = `${fsr}px`;
        }, 70);
        sr3 = setInterval(function () {
            opr++;
            result.style.opacity = `${opr}%`;
        }, 10);
        setTimeout(function () {
            clearInterval(sr1);
            clearInterval(sr2);
            clearInterval(sr3);
        }, 600);
        flag777 = 1;
    }
    // else {
    //     y = 0;
    //     fsr = 35;
    //     opr = 50;
    // }
}

h1.style.display = 'flex';
var flag = 0;
var copy;
var bkcopy;
window.addEventListener('keydown', function (dets) {
    calcAnimation();
    // console.log(dets.target);
    // console.log(dets.key);
    // 0 key logic
    if (dets.keyCode === 27) {
        flag777 = 0;
        h2.style.display = 'flex';
        sr1 = setInterval(function () {
            y++;
            result.style.transform = `translateY(${y}%)`;
            result.style.opacity = `${y}%`;
        }, 5);
        sr2 = setInterval(function () {
            fsr--;
            result.style.fontSize = `${fsr}px`;
        }, 70);
        sr3 = setInterval(function () {
            opr--;
            result.style.opacity = `${opr}%`;
        }, 10);
        setTimeout(function () {
            clearInterval(sr1);
            clearInterval(sr2);
            clearInterval(sr3);
        }, 600);
        h2.textContent = '0';
        result.textContent = '';
    }
    if (h2.textContent === '0') {
        h2.textContent = '';
    }
    // Decimal logic
    if (dets.key === '.') {
        // console.log(copy.length);
        copy = h2.textContent;
        if (flag === 1) {
            return;
        }
        h2.textContent = `${copy}.`;
        flag = 1;
    }
    // + operator
    else if (dets.key === '+') {
        flag = 0;
        copy = h2.textContent;
        // console.log(copy);
        if (copy.charAt(copy.length - 1) === '+' || copy.charAt(copy.length - 1) === '-' || copy.charAt(copy.length - 1) === '/' || copy.charAt(copy.length - 1) === '*') {
            return;
        }
        h2.textContent = `${copy}+`;
    }
    // - operator
    else if (dets.key === '-') {
        flag = 0;
        copy = h2.textContent;
        console.log(copy);
        if (copy.charAt(copy.length - 1) === '+' || copy.charAt(copy.length - 1) === '-' || copy.charAt(copy.length - 1) === '/' || copy.charAt(copy.length - 1) === '*') {
            return;
        }
        h2.textContent = `${copy}-`;
    }
    // / operator
    else if (dets.key === '/') {
        flag = 0;
        copy = h2.textContent;
        console.log(copy);
        if (copy.charAt(copy.length - 1) === '+' || copy.charAt(copy.length - 1) === '-' || copy.charAt(copy.length - 1) === '/' || copy.charAt(copy.length - 1) === '*') {
            return;
        }
        h2.textContent = `${copy}/`;
    }
    // * operator
    else if (dets.key === '*') {
        flag = 0;
        copy = h2.textContent;
        // console.log(copy);
        if (copy.charAt(copy.length - 1) === '+' || copy.charAt(copy.length - 1) === '-' || copy.charAt(copy.length - 1) === '/' || copy.charAt(copy.length - 1) === '*') {
            return;
        }
        h2.textContent = `${copy}*`;
    }
    // Backspace key logic
    else if (dets.keyCode === 8) {
        bkcopy = h2.textContent;
        bkcopy = bkcopy.slice(0, bkcopy.length - 1);
        h2.textContent = bkcopy;
    }

    else {
        if (dets.keyCode >= 48 && dets.keyCode <= 57) {
            h2.textContent += dets.key;
            // console.log(dets.key);
            result.textContent = eval(h2.textContent); //eval() 
        }
        else if (dets.keyCode === 13) {
            h2.style.display = 'none';
            resultAnimation();
        }
    }
    // console.log(h2.textContent);
    // console.log(result.textContent);
});

var btns = document.querySelectorAll('.cb');

var ind;
var n1;
var n2 = 1;
var flagp = 0;
btns.forEach(function (elem) {
    var pressed = document.querySelector(`#${elem.id} h3`);
    elem.addEventListener('click', function () {
        // console.log(h2.textContent);
        calcAnimation();
        // console.log(n1);
        if (pressed.textContent === 'AC') {
            h2.style.display = 'flex';
            flag777 = 0;
            flagp = 0;
            sr1 = setInterval(function () {
                y++;
                result.style.transform = `translateY(${y}%)`;
                result.style.opacity = `${y}%`;
            }, 5);
            sr2 = setInterval(function () {
                fsr--;
                result.style.fontSize = `${fsr}px`;
            }, 70);
            sr3 = setInterval(function () {
                opr--;
                result.style.opacity = `${opr}%`;
            }, 10);
            setTimeout(function () {
                clearInterval(sr1);
                clearInterval(sr2);
                clearInterval(sr3);
            }, 600);
            h2.textContent = '0';
            result.textContent = '';
        }
        if (h2.textContent === '0') {
            h2.textContent = '';
        }
        if (pressed.textContent === '%') {
            flagp = 1;
            copy = h2.textContent;
            if (copy.charAt(copy.length - 1) === '+' || copy.charAt(copy.length - 1) === '-' || copy.charAt(copy.length - 1) === '/' || copy.charAt(copy.length - 1) === '*' || copy.charAt(copy.length - 1) === '%') {
                return;
            }
            h2.textContent = `${copy}%`;
            ind = h2.textContent.search(/%/);
            n1 = h2.textContent.slice(0, ind);
            result.textContent = eval((n1/100)*1);
        }
        if (pressed.textContent === '.') {
            // console.log(copy.length);
            copy = h2.textContent;
            if (flag === 1) {
                return;
            }
            h2.textContent = `${copy}.`;
            flag = 1;
        }
        else if (pressed.textContent === '+') {
            flag = 0;
            copy = h2.textContent;
            // console.log(copy);
            if (copy.charAt(copy.length - 1) === '+' || copy.charAt(copy.length - 1) === '-' || copy.charAt(copy.length - 1) === '/' || copy.charAt(copy.length - 1) === '*' || copy.charAt(copy.length - 1) === '%') {
                return;
            }
            h2.textContent = `${copy}+`;
            console.log(h2.textContent);
            console.log(copy);
        }
        else if (pressed.textContent === '-') {
            flag = 0;
            copy = h2.textContent;
            // console.log(copy);
            if (copy.charAt(copy.length - 1) === '+' || copy.charAt(copy.length - 1) === '-' || copy.charAt(copy.length - 1) === '/' || copy.charAt(copy.length - 1) === '*' || copy.charAt(copy.length - 1) === '%') {
                return;
            }
            h2.textContent = `${copy}-`;
        }
        else if (pressed.textContent === '/') {
            flag = 0;
            copy = h2.textContent;
            // console.log(copy);
            if (copy.charAt(copy.length - 1) === '+' || copy.charAt(copy.length - 1) === '-' || copy.charAt(copy.length - 1) === '/' || copy.charAt(copy.length - 1) === '*' || copy.charAt(copy.length - 1) === '%') {
                return;
            }
            h2.textContent = `${copy}/`;
        }
        else if (pressed.textContent === '*') {
            flag = 0;
            copy = h2.textContent;
            // console.log(copy);
            if (copy.charAt(copy.length - 1) === '+' || copy.charAt(copy.length - 1) === '-' || copy.charAt(copy.length - 1) === '/' || copy.charAt(copy.length - 1) === '*' || copy.charAt(copy.length - 1) === '%') {
                return;
            }
            h2.textContent = `${copy}*`;
        }
        else if (pressed.textContent === 'Bk') {
            bkcopy = h2.textContent;
            bkcopy = bkcopy.slice(0, bkcopy.length - 1);
            h2.textContent = bkcopy;
        }
        else {
            if (pressed.textContent === '0' || pressed.textContent === '1' || pressed.textContent === '2' || pressed.textContent === '3' || pressed.textContent === '4' || pressed.textContent === '5' || pressed.textContent === '6' || pressed.textContent === '7' || pressed.textContent === '8' || pressed.textContent === '9') {
                h2.textContent += pressed.textContent;
                if (flagp === 1) {
                    n2 = h2.textContent.slice(ind+1, h2.textContent.length+1);
                    result.textContent = eval('(n1/100)*n2');
                }
                else {
                    result.textContent = eval(h2.textContent); //eval() 
                }
            }
            else if (pressed.textContent === '=') {
                h2.style.display = 'none';
                resultAnimation();
            }
        }
    });
});

btns.forEach(function (elem) {
    elem.addEventListener('mouseover', function () {
        elem.classList.add("overlay");
    });
    elem.addEventListener('mouseout', function () {
        elem.classList.remove("overlay");
    });
});