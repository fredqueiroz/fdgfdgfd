alert('4');
var i = 1;
var j = 0;
var text = document.querySelector('#buttons').innerHTML;
var buttons = text.split('<');
var id = '';
var value = '';
var value2 = document.querySelector('#myaccordion').innerHTML;
for (i = 1; i <= buttons.length - 1; i++)
{ value = value + '<div id=\"div' + i + '\"><' + buttons[i] + '</div>';
value2 = value2.replace('<li>', '<li class=\"spotli\"><a class=\"spota\" data-id=\"div' + i + '\" href=\"#\"><span class=\"filter-names\">');
 }

 $('#buttons').html(value);
 value2 = value2.replace(/<\/li>/g, '</span></a></li>');
 $('#myaccordion').html(value2);

function triggerClick(id) {
	var children = $("#" + id).children();
	children.click();
}
$(".spota").click(function() {
             var navMenu = $(this).attr('data-id');
                triggerClick(navMenu);   
});
$(".icons").click(function() {
                var navMenu = $(this).attr('data-id');
                triggerClick(navMenu);
});

//document.querySelector("#myaccordion").innerHTML = document.querySelector("#myaccordion").innerHTML.replace(/\<li\>/g, "<li class=\"spotli\"><a class=\"spota\" href=\"#\"><span class=\"filter-names\">").replace(/\<\/li\>/g, "</span></a></li>");


//document.getElementById("cssstyle").innerHTML = '<style type="text/css">.buttonsicons{display:none} .spota{text-decoration: none !important; } .icons    {   color: #e65400;   font-size: 24px;   position: absolute;   top: 6px;   cursor: pointer;   }   .pagetitle   {   color: #e65400;   font-size: 24px;   line-height: 36px;   font-family: \'Segoe UI\';   font-weight: 600;   text-align: center;   width:100%;   position:absolute;   }   .logo   {   width: 150px;   margin-left: 125px;   }   .buttons   {   display: none;   }   .spota:hover   {   color:#72777a;   text-decoration:none;   }   .filter-names   {   font-size:18px;   line-height: 50px;   color: #72777a;   position:relative;   left: 20px;   font-family: \'Segoe UI\';   font-weight: 500;   top: -3px;   text-align: left;   }   .side-menu   {   border-color: rgba(0,0,0,0.7);   border-style: solid;   background-clip: padding-box;   border-width: 0px 0px 0px 0px;    font-family: \'Segoe UI\';   position: fixed;   top: 87px;   left: 0px;   margin: 0;   padding: 0;   width: 0px;   bottom: 25px;   list-style-type: none;   background: #FFFFFF;   overflow: hidden;   z-index: 99999;   transition: width 0.8s;   overflow:hidden;   }   .fa   {   font-size: 24px;   min-width: 24px;   text-align:center;   color: #72777a;   position:relative;   line-height: 50px;   }   .spota   {   text-decoration:none;   display: block;   font-size: 24px;   color: #72777a;   height: 50px;   margin-left: 20px;   white-space: nowrap;   }   .spotli   {   width: 360px;   }   .spotli .spota{   margin-left: 26px;   }   .filter-names:hover {color:black;}   .spotli .spota .filter-names {font-weight: 400;}   .fa-angle-down:hover{   color:black;   }   .fa-angle-right:hover{   color:black;   }   .fa-angle-down{   position: absolute;   left: 380px;	   margin-top: 7px;   }   .fa-angle-right{   position: absolute;   left: 380px;	   margin-top: 7px;   }   #shadow {   position: fixed;   top: 0px;   left: 0px;   margin-top: 87px;   width:0%;   background-color: rgba(0,0,0,0.7);   border-style: solid;   background-clip: padding-box;   border-width: 0px 0px 0px 0px;   transition: width 0.8s;   bottom:25px;   }   h3   {   left:-25px; text-decoration:none;   }h3:hover   {   left:-25px;   width:100%; text-decoration:none;   }   .accordionitems{   background-color: #FFFFFF;   border-color:#FFFFFF;   }.HtmlTextArea a:visited, .HtmlTextArea a:active {color:#FFFFFF;}.fa-home{left: 50px;} .fa-bars{left: 100px;} .fa-times{left: 100px;} .fa-filter{right: 100px;} .fa-redo-alt{right: 50px;}</style>';













document.getElementById("shadow").onclick = function(){ document.getElementById("menu").style.width = "0px";
		document.getElementById("shadow").style.width = "0%";
		document.getElementById("menubutton").innerHTML = "<i class=\"fas fa-bars icons\" alt=\"Open menu\"></i>";
		$("#myaccordion").accordion({
					collapsible: true, active: false, heightStyle: 'content',
					activate: function(event, ui) {
				   if(ui.newHeader.text()!="") {
					   $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
					  }
					  else{
				 $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
				 }
					$(".sf-input-with-placeholder").width("173px");
					$(".ListContainer").width("200px");
					$(".ListContainerScroll").width("194px");
					$(".Image").css("left","197px"); 
					$(".sfc-scrollable").width("192px");
					$(".ListContainerScroll .HorizontalScrollbarContainer").width("178px");
					$(".ListContainerScroll .VerticalScrollbarContainer").css("left","180px");
					$(".ListContainerScroll .VerticalScrollbarContainer").css("top","0px");
					$(".sf-element-list-box .ScrollArea").width("178px");
					$(".sf-element-check-box .ScrollArea").width("178px");
					$(".ListItems .sf-element-list-box-item").width("166px");
					$(".ui-widget-content").css({
							"background": "inherit",
							"color": "inherit",
					});
					},
					});};
document.getElementById("menubutton").onclick = function(){
	if (document.getElementById("menubutton").innerHTML.trim() == "<i class=\"fas fa-times icons\" alt=\"Open menu\"></i>")
	{
		document.getElementById("menu").style.width = "0px";
		document.getElementById("shadow").style.width = "0%";
		document.getElementById("menubutton").innerHTML = "<i class=\"fas fa-bars icons\" alt=\"Open menu\"></i>";
		$("#myaccordion").accordion({
					collapsible: true, active: false, heightStyle: 'content',
					activate: function(event, ui) {
				   if(ui.newHeader.text()!="") {
					   $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
					  }
					  else{
				 $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
				 }
					$(".sf-input-with-placeholder").width("173px");
					$(".ListContainer").width("200px");
					$(".ListContainerScroll").width("194px");
					$(".Image").css("left","197px"); 
					$(".sfc-scrollable").width("192px");
					$(".ListContainerScroll .HorizontalScrollbarContainer").width("178px");
					$(".ListContainerScroll .VerticalScrollbarContainer").css("left","180px");
					$(".ListContainerScroll .VerticalScrollbarContainer").css("top","0px");
					$(".sf-element-list-box .ScrollArea").width("178px");
					$(".sf-element-check-box .ScrollArea").width("178px");
					$(".ListItems .sf-element-list-box-item").width("166px");
					$(".ui-widget-content").css({
							"background": "inherit",
							"color": "inherit",
					});
					},
					});
	}
	else
	{
			if (document.getElementById("menubutton").innerHTML.trim() == "<i class=\"fas fa-bars icons\" alt=\"Open menu\"></i>")
			{
				document.getElementById("menu").style.width = "400px";
				document.getElementById("shadow").style.width = "100%"; 
				document.getElementById("menubutton").innerHTML = "<i class=\"fas fa-times icons\" alt=\"Open menu\"></i>";
			}
	}	
};





//Accordian variables
var headBkgColor = "#FFFFFF";

$("#myaccordion").accordion({
 collapsible: true, active: false, heightStyle: 'content',
 activate: function(event, ui) { 
	  if(ui.newHeader.text()!="") {
	   $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
	   $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
	  }
	  else{
       $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
 }
 $(".sf-input-with-placeholder").width("173px");
 $(".ListContainer").width("200px");
 $(".ListContainerScroll").width("194px");
 $(".Image").css("left","197px"); 
 $(".sfc-scrollable").width("192px");
 $(".ListContainerScroll .HorizontalScrollbarContainer").width("178px");
 $(".ListContainerScroll .VerticalScrollbarContainer").css("left","180px");
 $(".ListContainerScroll .VerticalScrollbarContainer").css("top","0px");
 $(".sf-element-list-box .ScrollArea").width("178px");
 $(".sf-element-check-box .ScrollArea").width("178px");
 $(".ListItems .sf-element-list-box-item").width("166px");
	$(".ui-widget-content").css({
			"background": "inherit",
			"color": "inherit",
	});
 },
 });
//Header background color
$(".ui-accordion .ui-accordion-header").css({
  "background": headBkgColor
});

//Header background color
$(".ui-accordion .ui-accordion-header").css({
  "borderColor": headBkgColor
});
