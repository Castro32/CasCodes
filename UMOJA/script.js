window.addEventListener('DOMContentLoaded', function() {
    const sliderImages = [
      'umoja badge.png',
      'FEJHKKDD.png',
      'IMG_20230520_204807.jpg'
      // Add more image URLs here
    ];
  
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('background-slider');
    document.getElementById('home').appendChild(sliderContainer);
  
    let currentSlide = 0;
  
    function showSlide(slideIndex) {
      const images = document.querySelectorAll('.background-slider img');
  
      images.forEach(function(image, index) {
        if (index === slideIndex) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }
  
    sliderImages.forEach(function(imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      sliderContainer.appendChild(img);
    });
  
    showSlide(currentSlide);
  
    setInterval(function() {
      currentSlide = (currentSlide + 1) % sliderImages.length;
      showSlide(currentSlide);
    }, 2400); // Adjust the duration (in milliseconds) for each slide
  });
  