
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

// TRIGGERS THE APPEARANCE OF SECOND PART
var controller2 = new ScrollMagic.Controller();
var scene2 = new ScrollMagic.Scene({
		triggerElement: '.secondpart'
    })
	scene2.setClassToggle('.totrigger2','zoomIn');
    scene2.addTo(controller2); // assign the scene to the controller

    // TRIGGERS THE APPEARANCE OF THIRS PART
var controller3 = new ScrollMagic.Controller();
var scene3 = new ScrollMagic.Scene({
		triggerElement: '.thirdpart'
    })
	scene3.setClassToggle('.totrigger3','zoomIn');
    scene3.addTo(controller3); // assign the scene to the controller