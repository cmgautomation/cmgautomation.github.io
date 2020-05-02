// Begin XHTML adjustment
$(document).ready(function(){
	if (jQuery.browser.msie && jQuery.browser.version.substr(0, 2) == "6.") {
		$(".nof-clearfix").each(function (i) {
			$(this).append("<div style='clear:both'/>");
			$(this).removeClass("nof-clearfix");
		});
	}
	if (jQuery.browser.safari){
		$(".nof-lyr>br:first").each(function () {
			$(this).replaceWith("<div style='height:0px'>&nbsp;</div>");
		});
	}
});

// End XHTML adjustment

// Begin Navigation Bars
var ButtonsImageMapping = [];
ButtonsImageMapping["NavigationBar1"] = {
	"NavigationButton1" : { image: "./Home_Hp-highlighted_1.png", rollover: "./Home_HRp-highlightedOver_1.png", w: 110, h: 40 },
	"NavigationButton2" : { image: "./About_Np-regular_1.png", rollover: "./About_NRp-regularOver_1.png", w: 110, h: 40 },
	"NavigationButton3" : { image: "./Blog_Np-regular_1.png", rollover: "./Blog_NRp-regularOver_1.png", w: 110, h: 40, opening: "bottom", offsetX: 0, offsetY: 40 },
	"NavigationButton9" : { image: "./2013_Ns-regular.png", rollover: "./2013_NRs-regularOver.png", w: 110, h: 25 },
	"NavigationButton11" : { image: "./2012_Ns-regular.png", rollover: "./2012_NRs-regularOver.png", w: 110, h: 25 },
	"NavigationButton4" : { image: "./Services_Np-regular_1.png", rollover: "./Services_NRp-regularOver_1.png", w: 110, h: 40 },
	"NavigationButton5" : { image: "./Contact_Np-regular_1.png", rollover: "./Contact_NRp-regularOver_1.png", w: 110, h: 40 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar1", rollover: true, autoClose: true });
	$("#NavigationBar1").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar1_1").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 110, offsetY: 0 });
	$("#NavigationBar1 ul").hide();
});


// End Navigation Bars

// Begin JCarousel
$(document).ready(function() {
	$("#Carousel1>ul").jcarousel({scroll:1, visible:1, vertical:false, auto:3, wrap:"circular"});
});

// End JCarousel

