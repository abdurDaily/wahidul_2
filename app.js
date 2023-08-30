let height = document.querySelector('.height');
let weidth = document.querySelector('.weidth');
let btn = document.querySelector('.btn');
let output = document.querySelector('.output');

btn.addEventListener('click',function(e){

    let result = height.value * weidth.value;
    output.innerHTML = result;

    e.preventDefault();
});
