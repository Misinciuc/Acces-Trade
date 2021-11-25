
   
/* Languages script */

document.querySelector(".language__list").addEventListener("click", ".language__item-init", function () {
  document.querySelector(this)
    .closest(".language__list")
    .children("li:not(.language__item-init)")
    .toggle();
  document.querySelector(".language__list")
    .children("li:not(.language__item-init)")
    .css("margin-top", "14px");
  document.querySelector(".language").classList.toggle("arrow_anim");
});

let allOptions = document.querySelector(".language__list").children("li:not(.language__item-init)");
document.querySelector(".language__list").addEventListener("click", "li:not(.language__item-init)", function () {
  document.querySelector(".language").classList.toggle("arrow_anim");
  allOptions.removeClass("selected");
  document.querySelector(this).classList.add("selected");
  document.querySelector(".language__list").children(".language__item-init").html(document.querySelector(this).html());
  allOptions.toggle();
});

/* Currency script */

document.querySelector(".money__list").addEventListener("click", ".money__item-init", function () {
  document.querySelector(this)
    .closest(".money__list")
    .children("li:not(.money__item-init)")
    .toggle();
  document.querySelector(".money__list")
    .children("li:not(.money__item-init)")
    .css("margin-top", "10px");
  document.querySelector(".money").classList.toggle("arrow_anim");
});

var otherOption = document.querySelector(".money__list").children("li:not(.money__item-init)");
document.querySelector(".money__list").addEventListener("click", "li:not(.money__item-init)", function () {
  document.querySelector(".money").classList.toggle("arrow_anim");
  otherOption.removeClass("selected");
  document.querySelector(this).classList.add("selected");
  document.querySelector(".money__list")
    .children(".money__item-init")
    .css("background-image", "none")
    .html(document.querySelector(this).html());
  otherOption.toggle();
});
