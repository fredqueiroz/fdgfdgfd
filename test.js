
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
