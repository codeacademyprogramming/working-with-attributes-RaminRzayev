let input = document.querySelecto('#inpt');
let button = document.querySelector('.mybtn');
let error = document.querySelectorAll('.errortxt');


button.onclick = function () {
   

    if (5 <= input.value <= 50) {
        error.classList.add('d-none');
        input.value = '';

    }
    else {
        error.classList.remove('d-none');
    }
}