"use strict";
var m,
  divId,
  initLatitude,
  initLongitude,
  map,
  body = document.body,
  $windowWidth = $(window).width();
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});
var preloaderType = body.getAttribute("data-preloader");
if ("1" === preloaderType) {
  var e = document.createElement("div");
  (e.className = "preloader preloader-1"),
    (e.innerHTML =
      "<div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20'></svg></div>"),
    body.appendChild(e);
} else if ("2" === preloaderType) {
  var t = document.createElement("div");
  (t.className = "preloader preloader-2"),
    (t.innerHTML = "<div><span></span></div>"),
    body.appendChild(t);
} else if ("3" === preloaderType) {
  var a = document.createElement("div");
  (a.className = "preloader preloader-3"),
    (a.innerHTML = "<div><span></span></div>"),
    body.appendChild(a);
}
sal({ duration: 500 });
var bgImages = document.querySelectorAll(".bg-image");
bgImages &&
  bgImages.forEach(function (e) {
    var t = e.getAttribute("data-bg-src");
    e.style.backgroundImage = 'url("' + t + '")';
  });
var c,
  header = document.querySelector(".header"),
  headerMenu = document.querySelector(".header-menu"),
  headerToggle = document.querySelector(".header-toggle"),
  headerSticky = document.querySelector(".header.sticky-autohide"),
  currentScrollTop = 0;
if (
  (headerSticky &&
    window.addEventListener("scroll", function () {
      var e = window.pageYOffset;
      c < (currentScrollTop = e) && e > 210
        ? headerMenu.classList.contains("show") ||
          headerSticky.classList.add("hide")
        : c > currentScrollTop &&
          !(e <= 210) &&
          headerSticky.classList.remove("hide"),
        (c = currentScrollTop);
    }),
  document.querySelector(
    ".header.sticky-autohide:not(.header-lg, .header-xl, .transparent-light, .transparent-dark)"
  ))
) {
  var r = document.createElement("div");
  (r.className = "header-placeholder"),
    document
      .querySelector(".header.sticky-autohide")
      .insertAdjacentElement("beforebegin", r);
}
if (
  document.querySelector(
    ".header-lg.sticky-autohide:not(.transparent-light, .transparent-dark)"
  )
) {
  var o = document.createElement("div");
  (o.className = "header-placeholder-lg"),
    document
      .querySelector(".header-lg.sticky-autohide")
      .insertAdjacentElement("beforebegin", o);
}
if (
  document.querySelector(
    ".header-xl.sticky-autohide:not(.transparent-light, .transparent-dark)"
  )
) {
  var s = document.createElement("div");
  (s.className = "header-placeholder-xl"),
    document
      .querySelector(".header-xl.sticky-autohide")
      .insertAdjacentElement("beforebegin", s);
}
if (
  document.querySelector(
    ".header.sticky:not(.header-lg, .header-xl, .transparent-light, .transparent-dark)"
  )
) {
  var r = document.createElement("div");
  (r.className = "header-placeholder"),
    document
      .querySelector(".header.sticky")
      .insertAdjacentElement("beforebegin", r);
}
if (
  document.querySelector(
    ".header-lg.sticky:not(.transparent-light, .transparent-dark)"
  )
) {
  var o = document.createElement("div");
  (o.className = "header-placeholder-lg"),
    document
      .querySelector(".header-lg.sticky")
      .insertAdjacentElement("beforebegin", o);
}
if (
  document.querySelector(
    ".header-xl.sticky:not(.transparent-light, .transparent-dark)"
  )
) {
  var s = document.createElement("div");
  (s.className = "header-placeholder-xl"),
    document
      .querySelector(".header-xl.sticky")
      .insertAdjacentElement("beforebegin", s);
}
if (
  (document.querySelector(".transparent-light") &&
    window.addEventListener("scroll", function () {
      var e = document.querySelectorAll(
        ".header.sticky-autohide, .header.sticky"
      );
      window.pageYOffset > 10
        ? e.forEach(function (e) {
            e.classList.remove("transparent-light");
          })
        : e.forEach(function (e) {
            e.classList.add("transparent-light");
          });
    }),
  document.querySelector(".transparent-dark") &&
    window.addEventListener("scroll", function () {
      var e = document.querySelectorAll(
        ".header.sticky-autohide, .header.sticky"
      );
      window.pageYOffset > 10
        ? e.forEach(function (e) {
            e.classList.remove("transparent-dark");
          })
        : e.forEach(function (e) {
            e.classList.add("transparent-dark");
          });
    }),
  headerToggle &&
    headerToggle.addEventListener("click", function () {
      headerMenu.classList.contains("show")
        ? (headerMenu.classList.remove("show"),
          headerToggle.classList.remove("toggle-close"))
        : (headerMenu.classList.add("show"),
          headerToggle.classList.add("toggle-close"));
    }),
  headerMenu &&
    document.addEventListener("click", function (e) {
      !e.target.closest(".header-menu, .header-toggle") &&
        headerMenu.classList.contains("show") &&
        (headerMenu.classList.remove("show"),
        headerToggle.classList.remove("toggle-close"));
    }),
  document.querySelector(".nav-dropdown"))
) {
  var l,
    n,
    d,
    u = document.querySelectorAll(".nav-dropdown"),
    h = document.querySelectorAll(".nav-subdropdown");
  u.forEach(function (e) {
    var t = e.parentNode;
    t.querySelector(".nav-link").classList.add("d-toggle"),
      t.insertAdjacentHTML(
        "beforeend",
        '<a class="nav-dropdown-toggle" href="#"></a>'
      );
  }),
    h.forEach(function (e) {
      var t = e.parentNode;
      t.querySelector(".nav-dropdown-link").classList.add("sd-toggle"),
        t.insertAdjacentHTML(
          "beforeend",
          '<a class="nav-subdropdown-toggle" href="#"></a>'
        );
    }),
    document.querySelectorAll(".nav-dropdown-toggle").forEach(function (e) {
      var t = e.parentNode.querySelector(".nav-dropdown");
      e.addEventListener("click", function (a) {
        e.classList.contains("active")
          ? (e.classList.remove("active"), t.classList.remove("show"))
          : (e.classList.add("active"), t.classList.add("show")),
          a.preventDefault();
      });
    }),
    document.querySelectorAll(".nav-subdropdown-toggle").forEach(function (e) {
      var t = e.parentNode.querySelector(".nav-subdropdown");
      e.addEventListener("click", function (a) {
        e.classList.contains("active")
          ? (e.classList.remove("active"), t.classList.remove("show"))
          : (e.classList.add("active"), t.classList.add("show")),
          a.preventDefault();
      });
    }),
    document
      .querySelectorAll(".mega-menu-item .nav-link")
      .forEach(function (e) {
        var t = e.parentNode.querySelector(".mega-menu-content");
        e.addEventListener("click", function (a) {
          e.classList.contains("active")
            ? (e.classList.remove("active"), t.classList.remove("show"))
            : (e.classList.add("active"), t.classList.add("show")),
            a.preventDefault();
        });
      });
}
var fm = document.querySelector(".fullscreen-menu");
if (fm) {
  var p = document.querySelector(".fm-toggle"),
    g = document.querySelector(".fm-close");
  p.addEventListener("click", function () {
    fm.classList.contains("fm-show")
      ? fm.classList.remove("fm-show")
      : fm.classList.add("fm-show");
  }),
    g.addEventListener("click", function () {
      fm.classList.remove("fm-show"), p.classList.remove("fm-toggle-hide");
    });
}
var scrollTopBtn = document.querySelector(".scrolltotop");
scrollTopBtn &&
  window.addEventListener("scroll", function () {
    window.pageYOffset > 700
      ? scrollTopBtn.classList.add("scrolltotop-show")
      : scrollTopBtn.classList.remove("scrolltotop-show");
  });
var pMasonry = document.querySelector(".portfolio-masonry");
pMasonry &&
  imagesLoaded(pMasonry, function () {
    var e = $(".portfolio-masonry").isotope({
        itemSelector: ".portfolio-item",
        transitionDuration: 250,
      }),
      t = $(".filter ul li");
    t.on("click", function () {
      var a = $(this).attr("data-filter");
      e.isotope({ filter: a }),
        t.removeClass("active"),
        $(this).addClass("active");
    });
  });
var pGrid = document.querySelector(".portfolio-grid");
if (pGrid)
  var mixer = mixitup(".portfolio-grid", {
    selectors: { target: ".portfolio-item" },
    animation: { duration: 250 },
  });
var owlSlider = document.querySelector(".owl-carousel");
owlSlider &&
  $(".owl-carousel").each(function () {
    var e = $(this),
      t = {
        items: e.data("owl-items"),
        margin: e.data("owl-margin"),
        loop: e.data("owl-loop"),
        center: e.data("owl-center"),
        nav: e.data("owl-nav"),
        rewind: e.data("owl-rewind"),
        dots: e.data("owl-dots"),
        autoplay: e.data("owl-autoplay"),
      },
      a = {
        responsive: {
          0: { items: e.data("owl-xs") },
          576: { items: e.data("owl-sm") },
          768: { items: e.data("owl-md") },
          992: { items: e.data("owl-lg") },
          1200: { items: e.data("owl-xl") },
        },
      };
    e.owlCarousel(
      $.extend(
        {
          rewind: !0,
          navText: [
            "<i class='bi bi-arrow-left-short'></i>",
            "<i class='bi bi-arrow-right-short'></i>",
          ],
          autoHeight: !0,
          autoplayTimeout: 4e3,
          autoplaySpeed: 400,
          autoplayHoverPause: !0,
          navSpeed: 300,
          dotsSpeed: 300,
        },
        t,
        a
      )
    );
  });
var blogMasonry = document.querySelector(".blog-masonry");
blogMasonry &&
  imagesLoaded(blogMasonry, function () {
    $(blogMasonry).masonry({ itemSelector: ".blog-post-box" });
  });
var masonryGrid = document.querySelector(".masonry");
masonryGrid &&
  imagesLoaded(masonryGrid, function () {
    $(masonryGrid).masonry({ itemSelector: ".masonry-item" });
  });
var $lightboxImage = $(".lightbox-image-link, .lightbox-image-box");
$lightboxImage.each(function () {
  $(this).magnificPopup({
    type: "image",
    fixedContentPos: !1,
    removalDelay: 200,
    closeOnContentClick: !0,
    image: { titleSrc: "data-image-title" },
  });
});
var $lightboxMedia = $(".lightbox-media-link, .lightbox-media-box");
$lightboxMedia.each(function () {
  $(this).magnificPopup({
    type: "iframe",
    fixedContentPos: !1,
    removalDelay: 200,
    preloader: !1,
    iframe: {
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1&rel=0",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
      },
      srcAction: "iframe_src",
    },
  });
});
var $gallery = $(".gallery-wrapper");
if (
  ($gallery.length &&
    $gallery.each(function () {
      $(this).magnificPopup({
        delegate: "a",
        removalDelay: "200",
        type: "image",
        fixedContentPos: !1,
        gallery: { enabled: !0 },
        image: { titleSrc: "data-gallery-title" },
      });
    }),
  $windowWidth > 1200)
) {
  var v = $(".parallax");
  v.length &&
    v.each(function () {
      $(this).parallaxie({ speed: 0.2 });
    });
}
$(".countdown").each(function () {
  var e = $(this).attr("data-countdown");
  $(this).countdown(e, function (e) {
    $(this).html(e.strftime("%D days %H:%M:%S"));
  });
}),
  $(".counter").appear(
    function () {
      $(this).each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            { Counter: $(this).text() },
            {
              duration: 2500,
              easing: "swing",
              step: function (e) {
                $(this).text(Math.ceil(e));
              },
            }
          );
      });
    },
    { accX: 0, accY: -10 }
  );
var accordionTitles = document.querySelectorAll(".accordion-title");
accordionTitles.forEach(function (e) {
  e.addEventListener("click", function () {
    var t = e.parentElement,
      a = e.nextElementSibling;
    t.classList.contains("active")
      ? (t.classList.remove("active"), (a.style.maxHeight = null))
      : (t.classList.add("active"),
        e.closest(".accordion").classList.contains("single-open") &&
          (e
            .closest(".accordion")
            .querySelectorAll("li")
            .forEach(function (e) {
              e.classList.remove("active");
            }),
          t.classList.add("active"),
          e
            .closest(".single-open")
            .querySelectorAll(".accordion-content")
            .forEach(function (e) {
              e.style.maxHeight = "0";
            })),
        (a.style.maxHeight = a.scrollHeight + "px"));
  });
  var t = e.parentElement.closest(".accordion");
  if (t.querySelector("li.active")) {
    var a = t.querySelector("li.active .accordion-content"),
      r = a.scrollHeight;
    a.style.maxHeight = r + "px";
  }
}),
  $(".animated-progress div").each(function () {
    $(this).appear(
      function () {
        $(this).css("width", $(this).attr("data-progress") + "%");
      },
      { accX: 0, accY: -10 }
    );
  }),
  $(".pie-chart").appear(
    function () {
      $(this).each(function () {
        $(this).easyPieChart({
          lineCap: "square",
          onStep: function (e, t, a) {
            $(this.el).find(".percent").text(Math.round(a));
          },
        });
      });
    },
    { accX: 0, accY: -10 }
  );
var mapCanvas = $(".gmap");
if (mapCanvas.length)
  for (var i = 0; i < mapCanvas.length; i++)
    (initLatitude = (m = mapCanvas[i]).dataset.latitude),
      (initLongitude = m.dataset.longitude),
      (divId = "#" + m.id),
      (map = new GMaps({
        el: divId,
        lat: initLatitude,
        lng: initLongitude,
        zoom: 16,
        scrollwheel: !1,
        styles: [],
      })).addMarker({ lat: initLatitude, lng: initLongitude });
$("#contactform").on("submit", function (e) {
  var t = $("#name").val(),
    a = $("#email").val(),
    r = $("#subject").val(),
    o = $("#message").val();
  ("" === t && $("#name").addClass("error-color"),
  "" === a && $("#email").addClass("error-color"),
  "" === r && $("#subject").addClass("error-color"),
  "" === o)
    ? $("#message").addClass("error-color")
    : ($.ajax({
        url: "assets/php/contact-form.php",
        data: $(this).serialize(),
        type: "POST",
        success: function (e) {
          $("#success").addClass("show-result"),
            $("#contactform").each(function () {
              this.reset();
            });
        },
        error: function (e) {
          $("#error").addClass("show-result");
        },
      }),
      $("#contactform input, #contactform textarea").removeClass(
        "error-color"
      )),
    e.preventDefault();
});
var customCursor = document.getElementById("cursor");
if (customCursor) {
  var f,
    y = document.getElementById("cursor");
  document.addEventListener("mousemove", function (e) {
    (y.style.left = e.pageX + "px"), (y.style.top = e.pageY + "px");
  }),
    document
      .querySelectorAll(
        "a, button, input, textarea, .accordion-title, .filter li"
      )
      .forEach(function (e) {
        e.addEventListener("mouseenter", function () {
          y.classList.add("scale-cursor");
        }),
          e.addEventListener("mouseleave", function () {
            y.classList.remove("scale-cursor");
          });
      });
}
var pageProgress = $(".page-progress-container");
if (pageProgress.length) {
  window.onscroll = function () {
    w();
  };
  function w() {
    var e = document.body.scrollTop || document.documentElement.scrollTop,
      t =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    document.getElementById("pageProgress").style.width = (e / t) * 100 + "%";
  }
}
var swiper = new Swiper(".hero-portfolio-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 30 },
    992: { slidesPerView: 2, spaceBetween: 40 },
    1200: { slidesPerView: 2, spaceBetween: 50 },
  },
  centeredSlides: !0,
  grabCursor: !0,
  pagination: { el: ".swiper-pagination", clickable: !0 },
});
