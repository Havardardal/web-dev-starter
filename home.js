

changePercentOff("50");

const header = document.getElementById('message');



const button = document.getElementById('see-review');
button.addEventListener('click', function() {
    
    const review = document.getElementById('review');
    if (review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW'
    }else {
        button.textContent = 'SEE REVIEW'
        review.classList.add('d-none');
    }


})