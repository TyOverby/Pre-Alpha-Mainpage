$(window).load(function() {
	if(window.location.hash){
		jumpto(window.location.hash);	
	}else{
		jumpto("#about");
	}

	$("#nav-list>.btn>a").click(function(){
		jumpto($(this).attr("href"));
		
	});
});

function jumpto(target){
	var work=false;	

	//hide previously visible div
	$(".visible").hide("blind","fast",function(){
		$(target).show("blind","fast");
		work=true;	
	});
	if(!work){
		//$(target).show("clip","slow");
	}
	
	$(".visible").removeClass("visible");
	$(target).addClass("visible");
}
