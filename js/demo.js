const shuff = () => {
  //获取dom元素
  var carouselContainer = document.querySelector(".carousel-container");
  var carouselList = document.querySelector(".carousel-list");
  var indicator = document.querySelector(".indicator");
  var spans = indicator.children;
  var preBtn = document.querySelector(".arrow-left");
  var nextBtn = document.querySelector(".arrow-right");
  var count = 10,
    index = 0,
    curIndex = 0,
    playing = 0;
  var timerId = null;
  var init = () => {
    getImgs();
    initEvent();
  };
  var getImgs = () => {
    for (let i = 0; i < count; i++) {
      var img = document.createElement("img");
      var span = document.createElement("span");
      span.setAttribute("num", i);
      img.src = `./img/Wallpaper${i + 1}.jpg`;
      img.className = "wallpaper";
      carouselList.appendChild(img);
      indicator.appendChild(span);
    }
    var img = document.createElement("img");
    img.src = `./img/Wallpaper1.jpg`;
    img.className = "wallpaper";
    carouselList.appendChild(img);
    var imgs = carouselList.childElementCount;
    carouselList.style.width = imgs * 100 + "%";
    spans[0].className = "active";
  };
  var initEvent = () => {
    nextBtn.addEventListener("click", () => {
      next();
    });
    preBtn.addEventListener("click", () => {
      pre();
    });
    carouselContainer.addEventListener("mouseenter", () => {
      clearTimeout(timerId);
    });
    carouselContainer.addEventListener("mouseleave", () => {
      imgsInterval();
    });
    indicator.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "span") {
        onspansClick(e.target);
      }
    });
    var imgsInterval = () => {
      timerId = setInterval(next, 2000);
    };
    var onspansClick = (obj) => {
      var num = obj.getAttribute("num");
      if (playing) {
        return;
      }
      Moveto(-index * 730, -num * 730);
      index = num;
    };
    var Moveto = (from, to) => {
      createAnimation({
        from: from,
        to: to,
        totalMS: 730,
        onmove: (n) => {
          var active = document.querySelector("span.active");
          if (active) {
            active.className = "";
          }
          if (index === 10) {
            spans[0].className = "active";
          } else {
            spans[index].className = "active";
          }
          carouselList.style.marginLeft = n + "px";
          playing = 1;
        },
        onend: () => {
          playing = 0;
        },
      });
    };
    var next = () => {
      if (playing) {
        return;
      }
      index === 10 ? (index = 0) : index;
      curIndex = index++;
      Moveto(-curIndex * 730, (-curIndex - 1) * 730);
    };
    var pre = () => {
      if (playing) {
        return;
      }
      index === 0 ? (index = 10) : index;
      curIndex = index--;
      Moveto(-curIndex * 730, (-curIndex + 1) * 730);
    };
    imgsInterval();
  };
  init();
};