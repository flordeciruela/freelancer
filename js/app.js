
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
		 document.getElementById("nav-header").classList.add("retraer");
		 document.getElementById("link-home").classList.add("retraer");
   } else {
     if(currentScroll<=3){
			 document.getElementById("nav-header").classList.remove("retraer");
			 document.getElementById("link-home").classList.remove("retraer");
     }
   }

	 function resaltarLinks() {
		 var linkNav = document.getElementsByClassName('link-header');
		 if(currentScroll>=607 && currentScroll<=1490){
			 linkNav[0].classList.add("resaltar");
		 } else {
			 linkNav[0].classList.remove("resaltar");
		 }

		 if(currentScroll>=1491 && currentScroll<=2000){
			 linkNav[1].classList.add("resaltar");
		 } else {
			 linkNav[1].classList.remove("resaltar");
		 }

		 if(currentScroll>=2003){
			 linkNav[2].classList.add("resaltar");
		 } else {
			 linkNav[2].classList.remove("resaltar");
		 }
	 }
	 resaltarLinks();

   lastScrollTop = currentScroll;
}, false);
