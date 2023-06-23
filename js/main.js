function widthResizer() {
  document.getElementById("demo").innerHTML = window.innerWidth;
}
widthResizer();

window.addEventListener("resize", widthResizer);
var menu = document.querySelectorAll("#menu-desktop > li > a");
menu.forEach(function (e) {
  e.addEventListener("mouseover", function (e) {
    console.log(this.nextElementSibling);
    this.nextElementSibling.classList.remove('drop-down');
    this.nextElementSibling.classList.add('drop-down-active');
  });
  e.addEventListener("mouseout",function(e){
    this.nextElementSibling.classList.remove('drop-down-active');
    this.nextElementSibling.classList.add('drop-down');
  })
});
