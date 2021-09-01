let isShow = false;
function navShow() {
  var x = document.querySelector(".mobileNav");
  if (!isShow) {
    x.style = "display: block;";
    isShow = true;
  } else {
    x.style = "display: none;";
    isShow = false;
  }
}
