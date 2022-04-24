const submitBtn = document.querySelector('.submit-button');
const ratingModal = document.querySelector('.rating-modal');
const gratitudeModal = document.querySelector('.gratitude-modal')
const userChoice = document.querySelector('.user-choice')



let choosenRating = '';

const ratingOption1 = document.querySelector('.opt-1');
const ratingOption2 = document.querySelector('.opt-2');
const ratingOption3 = document.querySelector('.opt-3');
const ratingOption4 = document.querySelector('.opt-4');
const ratingOption5 = document.querySelector('.opt-5');




const ratingOptions = [ratingOption1, ratingOption2, ratingOption3, ratingOption4, ratingOption5];


ratingOptions.forEach((e) => {
    e.addEventListener('click', () => {
        ratingOptions.forEach(e => {
            e.classList.remove('active-rating')
        })
        choosenRating = e.innerHTML;
        e.classList.add('active-rating');
    })
})


submitBtn.addEventListener('click', e => {
    e.preventDefault();
    if (choosenRating == '') {
        alert('Select a rating');
        reutrn;
    }

    ratingModal.classList.add('hide');
    gratitudeModal.classList.remove('hide');

    ratingChoosing();
})


const ratingChoosing = () => {
    let ratingMessage = `${choosenRating} out of ${ratingOptions.length}`
    userChoice.textContent = ratingMessage;
}