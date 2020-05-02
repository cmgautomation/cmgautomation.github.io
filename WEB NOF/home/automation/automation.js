// Begin Navigation Bars
var ButtonsImageMapping = [];
ButtonsImageMapping["NavigationBar1"] = {
	"NavigationButton1" : { image: "../../home_NsfondoPulsante_2.JPG", rollover: "../../home_NRsfondoPulsante_2.JPG", w: 84, h: 20 },
	"NavigationButton2" : { image: "../../automation_HsfondoPulsante_2.JPG", rollover: "../../automation_HRsfondoPulsante_2.JPG", w: 84, h: 20 },
	"NavigationButton3" : { image: "../../design_NsfondoPulsante_2.JPG", rollover: "../../design_NRsfondoPulsante_2.JPG", w: 84, h: 20 },
	"NavigationButton4" : { image: "../../software_NsfondoPulsante_2_1.JPG", rollover: "../../software_NRsfondoPulsante_2_1.JPG", w: 84, h: 20 },
	"NavigationButton5" : { image: "../../patents_NsfondoPulsante_2.JPG", rollover: "../../patents_NRsfondoPulsante_2.JPG", w: 84, h: 20 },
	"NavigationButton6" : { image: "../../contact_me_NsfondoPulsante_2.JPG", rollover: "../../contact_me_NRsfondoPulsante_2.JPG", w: 84, h: 20 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar1", rollover: true, autoClose: false });
	$("#NavigationBar1").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar1 ul").hide();
});


// End Navigation Bars

