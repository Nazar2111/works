'use strict'

/////////////FUNCTION SLIDER

$(document).ready(function()
		{
			$(".slider").each(function ()
			{
				var obj = $(this);
				$(obj).append("<div class='nav'></div>");

				$(obj).find("li").each(function (){
					$(this).addClass("slider"+$(this).index());
				});
				$(obj).find("h1").each(function (){
					$(this).addClass("slider"+$(this).index());
				});
				$(obj).find("span").first().addClass("on");
			});
		});

	function sliderJS (obj, sl) // slider function
	{
		var ul = $(sl).find("ul");
		var bl = $(sl).find("li.slider"+obj);
		var step = $(bl).width();
		$(ul).animate({marginLeft: "-"+step*obj}, 500);
	}

	$(document).on("click", ".slider .nav-slider span", function() // slider click navigate
	{
		var sl = $(this).closest(".slider");
		$(sl).find("span").removeClass("on");
		$(this).addClass("on");
		var obj = $(this).attr("rel");
		sliderJS(obj, sl);
		return false;
	});



/////////////FUNCTION TAB

function openTab(evt, tabId) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
};

/////////////FUNCTION DROPDOWN

$(document).ready(function (){
	$('#select1').selecter({
		label: 'Select Region',//надпись
	});
	$('#select2').selecter({
		label: 'Select Category',//надпись
	});
	$('#select3').selecter({
		label: 'Select Date',//надпись
	});
	$('#select4').selecter({
		label: 'Select Price',//надпись
	});
});