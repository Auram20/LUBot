
$(document).ready(function() {
   $('#nav').localScroll({duration:800});
});



// TRIGGERS THE APPEARANCE OF FIRST PART
var controller1 = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
		triggerElement: '.firstpart'
    })
	scene1.setClassToggle('.totrigger1','zoomIn');
    scene1.addTo(controller1); // assign the scene to the controller