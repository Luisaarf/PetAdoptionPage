
document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector('#submit');
    let test = document.querySelector('#subtitle');

    test.style.backgroundColor = 'red';

    function largefont() {
        test.style.fontSize = '50px';
    }

    button.onchange = largefont;


});
