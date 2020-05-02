// Begin Navigation Bars
var ButtonsImageMapping = [];
ButtonsImageMapping["NavigationBar2"] = {
	"NavigationButton1" : { image: "../Index_NsfondoPulsante_2.JPG", rollover: "../Index_NRsfondoPulsante_2.JPG", w: 84, h: 20 },
	"NavigationButton2" : { image: "../Automazione_NsfondoPulsante_2.JPG", rollover: "../Automazione_NRsfondoPulsante_2.JPG", w: 84, h: 20 },
	"NavigationButton3" : { image: "../Progetto_NsfondoPulsante_2.JPG", rollover: "../Progetto_NRsfondoPulsante_2.JPG", w: 84, h: 20 },
	"NavigationButton4" : { image: "../Organizzazione_NsfondoPulsante_2.JPG", rollover: "../Organizzazione_NRsfondoPulsante_2.JPG", w: 84, h: 20 },
	"NavigationButton5" : { image: "../automotive_HsfondoPulsante_2.JPG", rollover: "../automotive_HRsfondoPulsante_2.JPG", w: 84, h: 20 },
	"NavigationButton6" : { image: "../Software_NsfondoPulsante_2.JPG", rollover: "../Software_NRsfondoPulsante_2.JPG", w: 84, h: 20 },
	"NavigationButton7" : { image: "../Brevetti_NsfondoPulsante_2.JPG", rollover: "../Brevetti_NRsfondoPulsante_2.JPG", w: 84, h: 20 },
	"NavigationButton8" : { image: "../Contatti_NsfondoPulsante_2.JPG", rollover: "../Contatti_NRsfondoPulsante_2.JPG", w: 84, h: 20 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar2", rollover: true, autoClose: false });
	$("#NavigationBar2").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar2 ul").hide();
});


// End Navigation Bars

