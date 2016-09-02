function toggleInformer() 	
    	{ 		
			// ищем нужный нам тег информера
			var elm = document.getElementById("block1");


    		// если тег найден, обрабатываем его
			if(elm)
			{
				// меняем видимость элемента на противоположную
				if(elm.style.visibility == "visible")
				{
					elm.style.visibility = "hidden";
				}
				else
				{
					elm.style.visibility = "visible";
				}
				
		 	} 	
    }
	var text = 'Битва Пяти Воинств';
var gap = 9;

ns4 = (navigator.appName.indexOf("Netscape")>=0 && document.layers)? true : false;
ie4 = (document.all && !document.getElementById)? true : false;
ie5 = (document.all && document.getElementById)? true : false;
ns6 = (document.getElementById && navigator.appName.indexOf("Netscape")>=0 )?
        true: false;
var the_text = new Array();
var text = text.split('');
var xx = 0;
var yy = -999;
var txt = '';

for(i=1;i<=text.length;i++){
txt+=(ns4)? '<layer name="text' + i + '" top="-100" left="0" width="' + gap +
    '" height="1">' : '<span id="text' + i +
    '" style="position:absolute; top:-100px; left:0px; height:1px; width:' +
    gap + '; visibility:visible;">';
txt+='<font color="red"><b>' + text[i-1] + '</b></font>';
txt+=(ns4)? '</layer>' : '</span>';
}
document.write(txt);

function move_letter(letter,left,top){
if(ns4)letter.moveTo(left,top);
else{
letter.style.left=left + 'px';
letter.style.top=top + 'px';
}
}

function flying_text(evt){
xx=15+((ie4||ie5)?event.clientX+document.body.scrollLeft:evt.pageX);
yy=10+((ie4||ie5)?event.clientY+document.body.scrollTop:evt.pageY);
}

function what_left(id){
if(ns4)return id.left;
else return parseInt(id.style.left);
}

function what_top(id){
if(ns4)return id.top;
else return parseInt(id.style.top);
}

function window_width(){
if(ie4||ie5)return document.body.clientWidth+document.body.scrollLeft;
else return window.innerWidth+pageXOffset;
}

function move_string(){
for(n=text.length;n>1;n=n-1){
if(what_left(the_text[n-1])+gap*2>=window_width()){
move_letter(the_text[n-1],0,-999);
move_letter(the_text[n],0,-999);
}
else move_letter(the_text[n],what_left(the_text[n-1])+gap,what_top(the_text[n-1]));
}
move_letter(the_text[1],xx,yy);
}

window.onload=function(){
for(n=1;n<=text.length;n++) the_text[n]= (ns4)?document.layers['text' + n]:
    (ie4)?document.all['text'+n]:document.getElementById('text'+n);
if(ns4)document.captureEvents(Event.MOUSEMOVE);
document.onmousemove=flying_text;
setInterval('move_string()', 25);
}

function mDown(obj)
{
obj.style.backgroundColor="#1ec5e5";
obj.innerHTML="Отпустите кнопку"
}
 
function mUp(obj)
{
obj.style.backgroundColor="#D94A38";
obj.innerHTML="Реакция на нажатие"
}

function myFunction()
{
var x;
var name=prompt("Пожалуйста, введите ваше имя","");
if (name!=null)
  {
  x="Привет  " + name + "! Как дела?";
  document.getElementById("demo").innerHTML=x;
  }
}