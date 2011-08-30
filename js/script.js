var firstLoad=true;	

$(window).load(function() {
	if(window.location.hash){
		jumpto(window.location.hash);	
	}else{
		window.location.hash="#about";
		jumpto("#about");
	}

	$("#nav-list>.btn>a").click(function(){
		jumpto($(this).attr("href"));
		
	});
});

function jumpto(target){
	//hide previously visible div
	$(".visible").each(function(){
		$(this).hide("blind","fast",function(){
			$(target).show("blind","fast",function(){
			});	
			firstLoad=false;
		})
	});

	setTimeout(function(){
		if(firstLoad==true){
			$(target).show("clip","slow");
			console.log("showing slow");
		}
	},300);
	
	$(".visible").removeClass("visible");
	$(target).addClass("visible");
}
