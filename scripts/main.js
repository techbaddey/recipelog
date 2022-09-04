// toggle
const menu = document.querySelector(".header .nav-bar .nav-list .menu");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// header effect
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 50) {
    header.style.backgroundColor = "#A3D6E7";
  } else {
    header.style.backgroundColor = "#CAE9FA";
  }
});

// 0wl-carousel
const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

$(document).ready(function () {
  $(".owl-one").owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: responsive,
  });

  $(".owl-two").owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigate .owl-nav-prev"),
      $(".owl-navigate .owl-nav-next"),
    ],
    responsive: responsive,
  });
});

AOS.init();

// videoplayer
$(document).ready(function () {
  $(".videos video").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    var src = $(this).attr("src");
    $(".main-video video").attr("src", src);
  });
});
