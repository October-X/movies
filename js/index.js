// (()=>{
function getEle(selector) {
  return document.querySelector(selector);
}
var doms = {
  nav: getEle(".nav"),
  navItems: [
    getEle("#one"),
    getEle("#twe"),
    getEle("#three"),
    getEle("#four"),
    getEle("#five"),
  ],
  content: getEle(".content"),
  displayPic: getEle(".display"),
  comment: getEle("#comment"),
};
doms.nav.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "li") {
    const li = e.target;
    const active = getEle(".nav-item.active");
    active ? active.classList.remove("active") : active;
    li.classList.add("active");
    doms.content.scrollTop = 0 + "px";
    switch (li.id) {
      case "one":
        doms.content.style.display = "flex";
        doms.content.innerHTML = homeHtml;
        shuff();
        break;
      case "two":
        doms.content.style.display = "flex";
        doms.content.innerHTML = productsHtml;
        break;
      case "three":
        doms.content.style.display = "flex";
        doms.content.innerHTML = introduceHtml;
        break;
      case "four":
        doms.content.style.display = "flex";
        doms.content.innerHTML = designHtml;
        const designContainer = getEle(".draw");
        designContainer.addEventListener("click", function (e) {
          if (e.target.tagName.toLowerCase() === "img") {
            const img = e.target;
            doms.displayPic.style.display = "flex";
            doms.displayPic.querySelector("img").src = img.src;
          } else {
            doms.displayPic.style.display = "none";
          }
        });
        break;
      //   case "five":
      //     doms.content.innerHTML = commentHtml;

      //     comment();
      //     break;
      default:
        break;
    }
  }
});

doms.displayPic.onclick = function () {
  this.style.display = "none";
};
doms.content.innerHTML = homeHtml;
shuff();
// })()
