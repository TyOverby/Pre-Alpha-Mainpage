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
	$(".visible").hide("fast",function(){
		$(target).show("fast");
		work=true;	
	});
	if(!work){
		$(target).show("slow");
	}
	
	$(".visible").removeClass("visible");
	$(target).addClass("visible");
}
