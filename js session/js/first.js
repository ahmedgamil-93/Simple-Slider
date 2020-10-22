
/*
$(".test").hide (Time, callback  function);
$(".test").show (Time, callback  function);
$(".test").toggle (Time, callback  function);
-------------------------------------------
$(".test").slideup (Time, callback  function);
$(".test").slideDown (Time, callback  function);
$(".test").slideToggle (Time, callback  function);
-----------------------------------------------
$(".test").fadeIn (Time, callback  function);
$(".test").fadeOut (Time, callback  function);
$(".test").fadeToggle (Time, callback  function);
$(".test").fadeTo(Time, callback  function);
-----------------------------------------
JQUERY == >  Html Setters and Getters
Chaining 
css();
-------
getter =>
$("#id").css("property  " ,"value ");
$("#demo").css("backgroundColor  " ,"red ");
setter => 
window.alert($("#id").css("property ));
window.alert($("#demo").css("backgroundColor ));

html();
-------
.innerHtml
setter =>
$(#demo).html("<a href="#"> Google </a>")
getter =>
let x = $(#demo).html();
alert(x);

text();
--------
nfs el html() bs btgeb el text bs msh el tagaat 

val(); => bgeb el value bta3t el input 

attr();
-----
setter =>
$("target").attr("attribute");

getter =>
$("target").attr("src", "new attribute")

*/

/*
prepend()
append()
after()
before()
remove()
empty()
$("#x").prepend("<a href='#'> Google </a>");
width()  => width only
innerWidth()  => width + padding
outerWidth()  => width + padding + border
outerWidth(true)  => width + padding + margin + border

hight = width ;) 
 


parent().css()
parents().css()
parentsUntil().css()
childern() ==> direct child   children("div")  wladk mn no3 div bs 

find("eltag aly bdwr 3aleh aw el id") btbos l kol aly t7t 

next()
prev()
nextall()
prevall()
siblings()   ==> el a5wat klhom fo2 we t7t 
eq() ==> equal 0 1 2 b5tar el span aly 3ayz a3ml feha ta3del 


not() ==> $("#x").not().css() ==> kol el id's aly msh x 
*/ 

let x = $(".test").outerWidth(true );
console.log(x);