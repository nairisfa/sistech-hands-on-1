document.addEventListener('DOMContentLoaded', function () {
  const carouselContainer = document.getElementById('carousel-container');
  const languages = ['Korean', 'Portuguese', 'English', 'Japanese', 'Chinese', 'French', 'Italian', 'Indonesian'];
  const captions = [
    "한국어 학습 여정을 시작하세요", 'Comece sua jornada aprendendo português', 'Begin your journey in learning English',
    '日本語学習の旅を始めましょう', '开始你的汉语学习之旅', 'Commencez votre voyage en apprenant le français',
    "Inizia il tuo viaggio nell'apprendimento dell'italiano", 'Mulailah perjalanan Anda dalam mempelajari Indonesia'
  ];


  function generateCarouselItems() {
    languages.forEach((language, index) => {

      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      carouselItem.setAttribute('data-language', language);


      const languagePage = `languages/language.html`;
      carouselItem.innerHTML = `
              <a href="${languagePage}" class="language-link">
                  <img class="flag-image" src="/assets/flag-courses/${language.toLowerCase()}-flag.jpg" alt="${language} Course">
                  <h3>${language}</h3>
                  <p>${captions[index]}</p>
              </a>
          `;


      carouselContainer.appendChild(carouselItem);
    });
  }


  generateCarouselItems();


  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');


  if (prevButton && nextButton) {
    prevButton.addEventListener('click', function () {
      carouselContainer.scrollLeft -= 300;
    });

    nextButton.addEventListener('click', function () {
      const maxScrollLeft = carouselContainer.scrollWidth - carouselContainer.clientWidth;
      if (carouselContainer.scrollLeft < maxScrollLeft) {
        carouselContainer.scrollLeft += 300;
      }
    });
  }


  const lastItemIndex = languages.length - 1;
  carouselContainer.addEventListener('scroll', function () {
    const maxScrollLeft = carouselItemWidth;
    if (carouselContainer.scrollLeft >= maxScrollLeft) {
      carouselContainer.scrollLeft = maxScrollLeft;
    }
  });


  const getStartedBtn = document.getElementById('getStartedBtn');


  getStartedBtn.addEventListener('click', function () {

    window.location.href = './membership/membership.html';
  });


  document.querySelectorAll('.language-link').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const language = this.closest('.carousel-item').getAttribute('data-language');
      localStorage.setItem('selectedLanguage', language);
      window.location.href = this.href;
    });
  });
});
