setTimeout(function () {
  var msg = document.getElementsByClassName("abertura");
  while (msg.length > 0) {
    msg[0].parentNode.removeChild(msg[0]);
  }
}, 4000);


$('.carouselSlick').slick({
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
});