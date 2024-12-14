var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4, // Show 3 cards at once
    spaceBetween: 30, // Space between slides
    centeredSlides: true, // Center the active slide
    loop: true, // Enable infinite scrolling
    autoplay: {
      delay: 2500, // Autoplay delay (2.5 seconds)
      disableOnInteraction: false, // Continue autoplay after interaction
    },
    pagination: {
      el: ".swiper-pagination", // Pagination element
      clickable: true, // Allow clicking on pagination bullets
    },
    navigation: {
      nextEl: ".swiper-button-next", // Navigation to next slide
      prevEl: ".swiper-button-prev", // Navigation to previous slide
    },
  });

