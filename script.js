document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".hover-box img[src='Settings.png']").parentElement;

  button.addEventListener("click", function () {
    const img = this.querySelector("img");

    this.disabled = true;

    img.classList.remove("spin");
    void img.offsetWidth;
    img.classList.add("spin");

    img.addEventListener("animationend", () => {
      this.disabled = false;
    }, { once: true });
  });
});




const boxes = document.querySelectorAll(".hover-box");

boxes.forEach(box => {
  const tooltip = box.querySelector(".tooltip");
  let hideTimer;

  box.addEventListener("mouseenter", () => {
    tooltip.classList.add("show");

    hideTimer = setTimeout(() => {
      tooltip.classList.remove("show");
    }, 1500);
  });

  box.addEventListener("mouseleave", () => {
    clearTimeout(hideTimer);
    tooltip.classList.remove("show");
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("settingsBtn");
  const menu = document.getElementById("settingsMenu");

  console.log(btn, menu);
  console.log("menu:", menu);

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});



new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: -10,

  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});

function scrollToSection(){
document.querySelector("#explore").scrollIntoView({
behavior:'smooth'
});
}


