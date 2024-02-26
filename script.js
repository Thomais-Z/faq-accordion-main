const questionH2 = document.querySelectorAll('.question-box-h2');
const questionBox = document.querySelectorAll('.question-box');
const faqQuestionContainer = document.querySelectorAll(
  '.faq-question--container'
);
const questionBoxIcon = document.querySelectorAll('.question-box-icon');
const body = document.querySelector('body');
///////////////////////////////////////////////////////////////

questionH2.forEach(el =>
  el.addEventListener('mouseover', function () {
    el.classList.toggle('active');
  })
);

questionH2.forEach(el =>
  el.addEventListener('mouseout', function () {
    el.classList.toggle('active');
  })
);

faqQuestionContainer.forEach(el => {
  const faqQuestion = el.children[0];
  const iconPlus = faqQuestion.children[1];
  const iconMinus = faqQuestion.children[2];

  faqQuestion.addEventListener('click', function (e) {
    e.preventDefault();
    const questionP = el.children[1];
    questionP.classList.toggle('hidden-p');

    iconPlus.classList.toggle('hidden');
    iconMinus.classList.toggle('hidden');
  });
});
