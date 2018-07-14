
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

        // TRIGGERS THE APPEARANCE OF FOURTH PART
var controller4 = new ScrollMagic.Controller();
var scene4 = new ScrollMagic.Scene({
		triggerElement: '.fourthpart'
    })
	scene4.setClassToggle('.totrigger4','fadeInRight');
    scene4.addTo(controller4); // assign the scene to the controller

var controller5 = new ScrollMagic.Controller();
var scene5 = new ScrollMagic.Scene({
		triggerElement: '.fourthpart'
    })
	scene5.setClassToggle('.totrigger5','fadeInLeft');
    scene5.addTo(controller5); // assign the scene to the controller

var controller6 = new ScrollMagic.Controller();
var scene6 = new ScrollMagic.Scene({
		triggerElement: '.fifthpart'
    })
	scene6.setClassToggle('.totrigger6','zoomIn');
    scene6.addTo(controller6); // assign the scene to the controller


var controller7 = new ScrollMagic.Controller();
var scene7 = new ScrollMagic.Scene({
		triggerElement: '.fifthpart'
    })
	scene7.setClassToggle('.totrigger7','zoomIn');
    scene7.addTo(controller7); // assign the scene to the controller




