// CHECK OFF SPECIFIC TO DO ITEMS BY CLICKING
$("ul").on("click", "li", function(){ //WHEN AN LI IS CLICKED INSIDE THE UL RUN THIS CODE:
//ALL OF THIS CODE CAN BE REPLACED BY A CSS CLASS AND TOGGLE
	//IF LI IS GRAY
	//if($(this).css("color") === "rgb(128, 128, 128)"){
		//TURN IT BLACK
	//	$(this).css({
	//		color: "black",
	//		textDecoration: "none"
	//	});
	//} else {
	//ELSE
		//TURN IT GRAY
	//	$(this).css({
	//		color: "gray",
	//		textDecoration: "line-through"
	//	});
	//}
	$(this).toggleClass("completed");
});

//CLICK ON X TO DELETE THE TO DO ITEM
$("ul").on("click", "span", function(event){
	//DELETES THE SPAN AND THE ATTACHED LI ITEM AFTER FADING IT OUT
	$(this).parent().fadeOut(function(){
		$(this).remove(); //ON ITS OWN LINE TO ENSURE FADEOUT FINISHES FIRST
	});
	//STOPS THE CODE FROM BUBBLING (CLICK WILL ONLY USE SPAN CODE NOT LI, UL, DIV, BODY ETC AS WELL)
	event.stopPropagation();
})

//ADD ITEMS TO THE TO DO LIST
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//GRABBING TEXT FROM USER INPUT
		let todoText = $(this).val();
		//EMPTIES THE INPUT BOX:
		$(this).val("");
		//CREATE A NEW LI + SPAN AND ADDS TO THE UL
		$("ul").append("<li><span><i class='far fa-trash-alt'></i> </span>" + todoText + "</li>"); //WILL ATTACH HTML
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
