/* citys script */

$(".city__list").on("click", ".city__item-init", function () {
  $(this)
    .closest(".city__list")
    .children(".city__item:not(.city__item-init)")
    .toggle();
  $(".city__list")
    .children(".city__item:not(.city__item-init)")
    .css("margin-top", "5px");
  $(".city").toggleClass("arrow_anim");
});

var allOptions = $(".city__list").children(".city__item:not(.city__item-init)");
$(".city__list").on("click", ".city__item:not(.city__item-init)", function () {
  $(".city").toggleClass("arrow_anim");
  allOptions.removeClass("selected");
  $(this).addClass("selected");
  $(".city__list").children(".city__item-init").html($(this).html());
  allOptions.toggle();
});

/* language change */

$(".lang__list").on("click", ".lang__item-init", function () {
  $(this)
    .closest(".lang__list")
    .children(".lang__item:not(.lang__item-init)")
    .toggle();
  $(".lang__list")
    .children(".lang__item:not(.lang__item-init)")
    .css("margin-top", "5px");
  $(".lang").toggleClass("arrow_anim");
});

var otherOptions = $(".lang__list").children(
  ".lang__item:not(.lang__item-init)"
);
$(".lang__list").on("click", ".lang__item:not(.lang__item-init)", function () {
  $(".lang").toggleClass("arrow_anim");
  otherOptions.removeClass("selected");
  $(this).addClass("selected");
  $(".lang__list").children(".lang__item-init").html($(this).html());
  otherOptions.toggle();
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
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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

/* FORM RANGE */

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach((wrap) => {
  const range = wrap.querySelector(".form__input");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

/* const tab = document.querySelectorAll(".form__tab");
for (let item = 0; item < tab.length; item++) {
  tab[item].onclick = function () {
    if (!tab[item].classList.contains("form__tab-select")) {
      tab[item].classList.add("form__tab-select");
      console.log(tab[item].value);
    } else {
      tab[item].classList.remove("form__tab-select");
    }
  };
} */

/* const tab = document.querySelector(".form__tabs");
tab.addEventListener("click", (event) => {
  if (!event.target.classList.contains("form__tab-select")) {
    event.target.classList.add("form__tab-select");
    tab.classList.remove("form__tab-select");
  } else {
    event.target.classList.remove("form__tab-select");
  }
});
 */

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 2;
  const max = range.max ? range.max : 10;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  /*  const tab = document.querySelector(".form__tabs");
  tab.addEventListener("click", function (event) {
    if (!event.target.classList.contains("form__tab-select")) {
      event.target.classList.add("form__tab-select");
    } else {
      event.target.classList.remove("form__tab-select");
    }
  }); */

  let t = document.querySelectorAll(".form__tab");
  for (let i = 0; i < t.length; i++) {
    t[i].onclick = function (elem) {
      elem.classList.add("form__tab-select");
    };
  }

  let newval;
  let tb = document.querySelectorAll(".form__tab");
  for (let i = 0; i < tb.length; i++) {
    if (tb[i].classList.contains("form__tab-select")) {
      newval = tb[i].value;
    }
  }

  let inp3Value = +document.querySelector(".form__input-3").value;
  let inp2Value = +document.querySelector(".form__input-2").value;
  let inp1Value = +document.querySelector(".form__input-1").value;

  let radio1 = document.getElementById("radio-1");

  let taxiType = 2;
  if (radio1.checked) {
    taxiType = 2;
  } else {
    taxiType = 2.5;
  }

  let kmPerHour = (inp2Value / 2) * 100; // get km made by day
  let clientPerDay = Math.round(inp2Value * 1.7);
  let kmPerMounth = kmPerHour * inp3Value * 4.3; //get km prMounth
  let consumKm = (kmPerHour * inp1Value) / 100; // fuel consum by day
  let consumPrice = consumKm * newval; // fuel consum by day * price-fuel
  let workDayConsum = consumPrice * inp3Value; // fuel consum by week
  let mounthConsum = workDayConsum * 4.3; //fuel consum by mounth
  let profit = Math.round(kmPerMounth * taxiType - mounthConsum);
  console.log(profit);
  document.querySelector(".out-bold-1").innerHTML = "~ " + profit;
  document.querySelector(".out-bold-2").innerHTML = "~ " + clientPerDay;
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

/* First screen counter */

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

/* Modal popup formular */

const popup = document.querySelector(".formular");
const popupClose = document.querySelector(".close__formular");

document.querySelector(".form__submit-1").onclick = function () {
  popup.classList.add("formular__show");
  document.body.classList.add("body__blur");
  document.body.style.overflowY = "hidden";
  popupClose.onclick = () => {
    popup.classList.remove("formular__show");
    document.body.classList.remove("body__blur");
    document.body.style.overflowY = "visible";
  };
};
