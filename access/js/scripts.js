//menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

 }

 const scrollHeader = document.getElementById('scrollHeader');


document.addEventListener('scroll', () => {
 if(window.scrollY > 0){
  scrollHeader.classList.add('scroll-active')
 }else{
 scrollHeader.classList.remove('scroll-active')
 }
})


// VIDEO

const clip = document.getElementById('clip');
const frameVideo = document.getElementById('frameVideo');


clip.addEventListener('click', () => {
  frameVideo.innerHTML = "";
    frameVideo.innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4x7W6FutvnM"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
    `
})













 // banner
  //khai báo biến slideIndex đại diện cho slide hiện tại
  var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 6000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
