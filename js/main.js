const scrollBtn = document.querySelector(".scroll-to-top");

const refreshButtonVisibility = () => {
    if (document.documentElement.scrollTop <= 1500) {
        scrollBtn.style.display = "none";
    } else {
        scrollBtn.style.display = "block";
    }
};
refreshButtonVisibility();

scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    refreshButtonVisibility();
    
});

$("#btn1").on("click", function() {
    const profile = $("#section_a").position().top;
  
    $("html, body").animate(
      {
        scrollTop: profile
      },
      900
    );
  });

$("#view-work").on("click", function() {
    const images = $("#images").position().top;
  
    $("html, body").animate(
      {
        scrollTop: images
      },
      900
    );
  });