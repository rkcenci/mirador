
const refreshCarousel = () => {

  const multipleItemCarousel = document.querySelector("#carousel_sec_espiritual");

  new bootstrap.Carousel(multipleItemCarousel, {
    keyboard: false
  });

  if (window.matchMedia("(min-width:728px)").matches) {
    $(multipleItemCarousel).removeClass("slide");
    $("#carousel_sec_espiritual .carousel-inner .carousel-item.active").removeClass("active");

    var cardWidth = $("#carousel_sec_espiritual .carousel-item").width();
    var enabledControl = 'right';

    $("#carousel_sec_espiritual .carousel-control-next").on("click", function () {
      if (enabledControl === 'right') {
        $("#carousel_sec_espiritual .carousel-inner .carousel-item").animate({ left: -3 * cardWidth + 'px' }, 1500 );
        enabledControl = 'left';
      }
    });

    $("#carousel_sec_espiritual .carousel-control-prev").on("click", function () {
      if (enabledControl === 'left') {
        $("#carousel_sec_espiritual .carousel-inner .carousel-item").animate({ left: '0px' }, 1500 ); 
        enabledControl = 'right';  
      }
    });

  } else {
    $("#carousel_sec_espiritual .carousel-inner .carousel-item").first().addClass("active");
    $(multipleItemCarousel).addClass("slide");
  }
}

window.addEventListener("orientationchange", function() {
  location.reload();
});

refreshCarousel();

$("#sobre").click(function() {
  $('html,body').animate({
      behavior: 'smooth',
      scrollTop: $("#sec_ambiente").offset().top},
      'slow');
});

$("#formacao").click(function() {
  $('html,body').animate({
      behavior: 'smooth',
      scrollTop: $("#sec_formacao").offset().top},
      'slow');
});

$("#atividades").click(function() {
  $('html,body').animate({
      behavior: 'smooth',
      scrollTop: $("#sec_atividades").offset().top},
      'slow');
});

$("#contribua").click(function() {
  $('html,body').animate({
      behavior: 'smooth',
      scrollTop: $("#sec_contribua").offset().top},
      'slow');
});

$("#contato").click(function() {
  $('html,body').animate({
      behavior: 'smooth',
      scrollTop: $("#sec_contato").offset().top},
      'slow');
});