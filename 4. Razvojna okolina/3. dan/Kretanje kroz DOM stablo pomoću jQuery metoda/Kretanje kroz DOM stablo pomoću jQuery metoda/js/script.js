$(document).ready(function(){
	/* Dohvaćanje elemenata predaka - parent(), parentsUntil(), parents() */
	var sekcija1Btn = $("#sekcija1 button");
	sekcija1Btn.eq(0).click(function(){
		$("#polaziste").parent().css("background-color", "rgba(255,0,0,0.1)");
	});
	sekcija1Btn.eq(1).click(function(){
		$("#polaziste").parentsUntil("body").css("background-color", "rgba(0,0,255,0.1)");
	});
	sekcija1Btn.eq(2).click(function(){
		$("#polaziste").parents().css("background-color", "rgba(0,255,0,0.1)");
	});
	/* -------------------------------------------- */
	
	/* Dohvaćanje elemenata potomaka - children(), find() */
	var sekcija2Btn = $("#sekcija2 button");
	sekcija2Btn.eq(0).click(function(){
		$("#polaziste").children().css("background-color", "rgba(255,0,0,0.1)");
	});
	sekcija2Btn.eq(1).click(function(){
		$("#polaziste").find("*").css("background-color", "rgba(0,255,0,0.1)");
	});
	sekcija2Btn.eq(2).click(function(){
		$("#polaziste").find("p").css("background-color", "rgba(0,0,255,0.1)");
	});
	/* -------------------------------------------- */
	
	/* Dohvaćanje elemenata s istim roditeljom (braća) - next(), prev(), siblings() */
	var sekcija3Btn = $("#sekcija3 button");
	sekcija3Btn.eq(0).click(function(){
		$("#polaziste").next().css("background-color", "rgba(0,0,0,0.1)");
	});
	sekcija3Btn.eq(1).click(function(){
		$("#polaziste").prev().css("background-color", "rgba(255,0,255,0.1)");
	});
	sekcija3Btn.eq(2).click(function(){
		$("#polaziste").siblings().css("background-color", "rgba(0,255,0,0.1)");
	});
	sekcija3Btn.eq(3).click(function(){
		$("#polaziste").siblings("article").css("background-color", "rgba(255,0,0,0.1)");
	});
	/* -------------------------------------------- */
	
	/* Filtriranje elemenata - first(), last(), eq(), filter(), not() */
	var sekcija4Btn = $("#sekcija4 button");
	sekcija4Btn.eq(0).click(function(){
		$("div").first().css("background-color", "rgba(255,0,0,0.1)");
	});
	sekcija4Btn.eq(1).click(function(){
		$("div").last().css("background-color", "rgba(0,255,0,0.1)");
	});
	sekcija4Btn.eq(2).click(function(){
		$("div").eq(1).css("background-color", "rgba(0,0,255,0.1)");
	});
	sekcija4Btn.eq(3).click(function(){
		$("article").filter("#polaziste").css("background-color", "rgba(255,0,255,0.1)");
	});
	sekcija4Btn.eq(4).click(function(){
		$("article").not("#polaziste").css("background-color", "rgba(255,255,0,0.1)");
	});
	/* -------------------------------------------- */
});