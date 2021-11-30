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

let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.classList.toggle("accordion-anim");

    let panel = this.nextElementSibling;
    console.log(panel);
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

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

const testimonialswiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 2,
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

/* document.querySelector(".form__input-1").oninput = Logics;

document.querySelector(".form__input-2").oninput = Logics;

document.querySelector(".form__input-3").oninput = Logics;

function Logics() {
  let inp3Out = document.querySelector(".input-3-out");
  let inp3Value = document.querySelector(".form__input-3").value;
  let inp2Out = document.querySelector(".input-2-out");
  let inp2Value = document.querySelector(".form__input-2").value;
  let inp1Out = document.querySelector(".input-1-out");
  let inp1Value = document.querySelector(".form__input-1").value;
  inp1Out.innerHTML = inp1Value;
  inp2Out.innerHTML = inp2Value;
  inp3Out.innerHTML = inp3Value;
  let sum = inp2Value * 60;
  let sumAll = sum * inp3Value;
  let consum = sumAll / 0.5;
  document.querySelector(".out-bold-1").innerHTML = "~ " + consum;
}
 */

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach((wrap) => {
  const range = wrap.querySelector(".form__input");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 2;
  const max = range.max ? range.max : 10;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  let inp3Value = document.querySelector(".form__input-3").value;
  let inp2Value = document.querySelector(".form__input-2").value;
  let sum = inp2Value * 60;
  let sumAll = sum * inp3Value;
  let consum = sumAll / 0.5;
  document.querySelector(".out-bold-1").innerHTML = "~ " + consum;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerHTML;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCounter, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCounter();
});
