var numClicks=0;

$(window).load(function() {
	$("#nav-list>li>a").click(function(){
		bannerTo($(this).parent().attr('class').split(' ')[1]);
	});    
	setTimeout(function(){
		bannerTo($("a[href="+window.location.hash+"]").parent().attr('class').split(' ')[1]);
	},100);
});

function bannerTo(newClass){
	console.log("going to "+newClass);

	$("header, #top-banner,#bottom-banner").removeClass();
	$("header, #top-banner,#bottom-banner").addClass(newClass);
}
