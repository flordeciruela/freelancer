
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
	 console.log(currentScroll);
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



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
