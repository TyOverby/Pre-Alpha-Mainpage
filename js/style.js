$(window).load(function() {
	console.log("testing");

	$("#nav-list>li>a").click(function(){
		bannerTo($(this).parent().attr('class').split(' ')[1]);	
	});    
});

function bannerTo(newClass){
	$("header").removeClass().addClass(newClass);
	$("#top-banner").removeClass().addClass(newClass);
	$("#bottom-banner").removeClass().addClass(newClass);
}
