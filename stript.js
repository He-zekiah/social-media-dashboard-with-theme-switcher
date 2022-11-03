const switchCtn = document.getElementById('light');
const switchBtn = document.getElementById('round');
const container = document.getElementById('change');
const mess1 = document.getElementById('mess1');
const boxes = document.querySelectorAll('.box');
const small = document.querySelectorAll('.boxes');
const num = document.querySelectorAll('.number');
const num2 = document.querySelectorAll('.number2');
const combined = [...boxes, ...small];
const join = [...num, ...num2];
console.log(join);

switchCtn.addEventListener('click', function (e) {
    switchBtn.classList.toggle('active');
    switchCtn.classList.toggle('active2');
    container.classList.toggle('content2');
    mess1.classList.toggle('cont');
    combined.forEach((box) => {
        box.classList.toggle('cont2');
    });
    join.forEach((number) => {
        number.classList.toggle('cont3');
    });
});
console.log(cont3);


