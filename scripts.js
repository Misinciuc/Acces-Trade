/* citys script */

$(".city__list").on("click", ".city__item-init", function () {
  $(this).closest(".city__list").children("li:not(.city__item-init)").toggle();
  $(".city__list")
    .children("li:not(.city__item-init)")
    .css("margin-top", "14px");
  $(".city").toggleClass("arrow_anim");
});

var allOptions = $(".city__list").children("li:not(.city__item-init)");
$(".city__list").on("click", "li:not(.city__item-init)", function () {
  $(".city").toggleClass("arrow_anim");
  allOptions.removeClass("selected");
  $(this).addClass("selected");
  $(".city__list").children(".city__item-init").html($(this).html());
  allOptions.toggle();
});

/* language change */

$(".lang__list").on("click", ".lang__item-init", function () {
  $(this).closest(".lang__list").children("li:not(.lang__item-init)").toggle();
  $(".lang__list")
    .children("li:not(.lang__item-init)")
    .css("margin-top", "14px");
  $(".lang").toggleClass("arrow_anim");
});

var allOptions = $(".lang__list").children("li:not(.lang__item-init)");
$(".lang__list").on("click", "li:not(.lang__item-init)", function () {
  $(".lang").toggleClass("arrow_anim");
  allOptions.removeClass("selected");
  $(this).addClass("selected");
  $(".lang__list").children(".lang__item-init").html($(this).html());
  allOptions.toggle();
});

/* slider */
const mainswiper = new Swiper(".main-swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /*  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }, */
});
