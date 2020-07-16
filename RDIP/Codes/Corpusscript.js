 var text ='{"con1":[' +'{"a":"John ate an apple before afternoon","b":"before afternoon John ate an apple","c":"John before afternoon ate an apple"},' +
       '{"a":"some students like to study at night", "b":"at night some students like to study"},' +
        '{"a":"John and Mary went to church","b":"Mary and John went to church"},' +
         '{"a":"John went to church after eating","b":"after eating John went to church","c":"John after eating went to church"},' +
        '{"a":"did he go to market","b":"he did go to market"},' +
      '{"a":"the woman who called my sister sells cosmetics","b":"the woman who sells cosmetics called my sister","c":"my sister who sells cosmetics called the woman","d":"my sister who called the woman sells cosmetics"},' +
      '{"a":"John goes to the library and studies","b":"John studies and goes to the library"},'+
    '{"a":"John ate an apple so did she","b":"she ate an apple so did John"},' +
   '{"a":"the teacher returned the book after she noticed the error","b":"the teacher noticed the error after she returned the book","c":"after the teacher returned the book she noticed the error","d":"after the teacher noticed the error she returned the book","e":"she returned the book after the teacher noticed the error", "f":"she noticed the error after the teacher returned the book","g":"after she returned the book the teacher noticed the error","h":"after she noticed the error the teacher returned the book"},' +
     '{"a":"I told her that I bought a book yesterday","b":"I told her yesterday that I bought a book","c":"yesterday I told her that I bought a book","d":"I bought a book that I told her yesterday","e":"I bought a book yesterday that I told her","f":"yesterday I bought a book that I told her" }]}';

var text1 = '{"con2":[' +
         '{"a":"राम और श्याम बाजार गयें", "b":"राम और श्याम गयें बाजार", "c":"बाजार गयें राम और श्याम", "d":"गयें बाजार राम और श्याम"},' +
       
        '{"a":"राम सोया और श्याम भी", "b":"श्याम सोया और राम भी", "c":"सोया श्याम और राम भी", "d":"सोया राम और श्याम भी"},' +

          '{"a":"मैंने उसे बताया कि राम सो रहा है", "b":"मैंने उसे बताया कि सो रहा है राम", "c":"उसे मैंने बताया कि राम सो रहा है", "d":"उसे मैंने बताया कि सो रहा है राम", "e":"मैंने बताया उसे कि राम सो रहा है", "f":"मैंने बताया उसे कि सो रहा है राम", "g":"उसे बताया मैंने कि राम सो रहा है", "h":"उसे बताया मैंने कि सो रहा है राम", "i":"बताया मैंने उसे कि राम सो रहा है", "j":"बताया मैंने उसे कि सो रहा है राम", "k":"बताया उसे मैंने कि राम सो रहा है", "l":"बताया उसे मैंने कि सो रहा है राम" },' +
      
 '{"a":"राम खाकर सोया", "b":"खाकर राम सोया", "c":"राम सोया खाकर", "d":"खाकर सोया राम", "e":"सोया राम खाकर", "f":"सोया खाकर राम"},' +

    '{"a":"बिल्लियों को मारकर कुत्ता सो गया", "b":"मारकर बिल्लियों को कुत्ता सो गया", "c":"बिल्लियों को मारकर सो गया कुत्ता", "d":"मारकर बिल्लियों को सो गया कुत्ता", "e":"कुत्ता सो गया बिल्लियों को मारकर", "f":"कुत्ता सो गया मारकर बिल्लियों को", "g":"सो गया कुत्ता बिल्लियों को मारकर", "h":"सो गया कुत्ता मारकर बिल्लियों को" },' +
      
'{"a":"एक लाल किताब वहाँ है", "b":"एक लाल किताब है वहाँ", "c":"वहाँ है एक लाल किताब", "d":"है वहाँ एक लाल किताब"},' +

            '{"a":"एक बड़ी सी किताब वहाँ है", "b":"एक बड़ी सी किताब है वहाँ", "c":"बड़ी सी एक किताब वहाँ है", "d":"बड़ी सी एक किताब है वहाँ", "e":"वहाँ है एक बड़ी सी किताब", "f":"वहाँ है बड़ी सी एक किताब", "g":"है वहाँ एक बड़ी सी किताब", "h":"है वहाँ बड़ी सी एक किताब" }]}';

function display()
{
document.getElementById("s1").value=" ";
document.getElementById("corpus").value=" ";
 document.getElementById("p4").innerHTML=" ";
document.getElementById("Reform").innerHTML=" ";
document.getElementById("Correctness").innerHTML=" ";
document.getElementById("corpus").innerHTML=" ";
document.getElementById("corpus1").innerHTML=" ";
document.getElementById("s1").innerHTML=" ";
document.getElementById("getcorrectness").innerHTML=" ";

for(i=0;i<10;i++){
document.getElementById(i).value=" ";
}
count1 =0;
 var y=document.getElementById("lan").value;
 if(y=="English"){
 document.getElementById("dis_sen").innerHTML = "Form a sentence(Declarative or Interrogative or any other type)form the given words";
 document.getElementById("dis_sub").innerHTML = "(Select the buttons in proper order)";


      var a=Math.floor(Math.random() * 10);
obj=JSON.parse(text);
var b=obj.con1[a].a;
document.getElementById("random").value = a;
var s=b.split(" ");
var d=s.length
document.getElementById("Reform").value = d;
var g=[];
  var m = 0;
  do {
      var a= Math.floor(Math.random() * d);
      if(g.includes(a)==false){
      g.push(a)
}
m++;
}
while (d!=g.length);
for(var i=0;i<d;i++){
    document.getElementById(i).value=s[g[i]];
    document.getElementById(i).innerHTML="<button>"+s[g[i]]+"</button>"
}
for(var j=d;j<10;j++){
    document.getElementById(j).innerHTML=" "
}

}
else{
 document.getElementById("dis_sen").innerHTML = "Form a sentence(Declarative or Interrogative or any other type)form the given words";
 document.getElementById("dis_sub").innerHTML = "(Select the buttons in proper order)";

var a=Math.floor(Math.random() * 7);
obj=JSON.parse(text1);
var b=obj.con2[a].a;
document.getElementById("random").value = a;
var s=b.split(" ");
var d=s.length
document.getElementById("Reform").value = d;
var g=[];
  var m = 0;
  do {
      var a= Math.floor(Math.random() * d);
      if(g.includes(a)==false){
      g.push(a)
}
m++;
}
while (d!=g.length);
for(var i=0;i<d;i++){
     document.getElementById(i).value=s[g[i]];
    document.getElementById(i).innerHTML="<button>"+s[g[i]]+"</button>"
}
for(var j=d;j<10;j++){
    document.getElementById(j).innerHTML=" "
}

}
}


var count1 =0;
function print(i){
var a = document.getElementById(i).value;
document.getElementById("s1").value += a+ " ";
document.getElementById("dis_sen1").innerHTML= "Formed Sentence";
document.getElementById("sen2").innerHTML= "(After selecting words)";
var a=document.getElementById(i).value;
var b=document.getElementById("Reform").value
count1=count1+1;
document.getElementById("p4").innerHTML+=a+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
document.getElementById(i).innerHTML=" ";
document.getElementById("dis_sen1").innerHTML= "Formed Sentence";
document.getElementById("sen2").innerHTML= "(After selecting words)";
document.getElementById("Reform").innerHTML= "<button>" + "Re-form the sentence" + "</button>";
if(count1==b){
document.getElementById("Correctness").innerHTML="<button>" + "Check the correctness of the sentence" + "</button>";
}
}

function reformed() {
count1 =0;
document.getElementById("dis_sen1").innerHTML=" ";
document.getElementById("sen2").innerHTML=" ";
document.getElementById("Reform").innerHTML=" ";
document.getElementById("p4").innerHTML=" ";
document.getElementById("Correctness").innerHTML=" ";
document.getElementById("corpus").innerHTML=" ";
document.getElementById("corpus1").innerHTML=" ";
document.getElementById("s1").value=" ";
document.getElementById("getcorrectness").innerHTML=" ";

for(var i=0;i<10;i++){
  var a=document.getElementById(i).value
 if(a!=" "){
document.getElementById(i).innerHTML="<button>"+a+"</button>"
document.getElementById("p4").innerHTML=" ";
}
}
}
function check_correctsentence() {
if(document.getElementById("lan").value == "English") {
 var u = document.getElementById("random").value;
 var v = document.getElementById("s1").value;
v = v.trim();
 if(v == obj.con1[u].a || v == obj.con1[u].b || v == obj.con1[u].c || v == obj.con1[u].d || v == obj.con1[u].e || v == obj.con1[u].f || v == obj.con1[u].g || v == obj.con1[u].h)
 document.getElementById("corpus").innerHTML = "Right answer!!";
else{
 document.getElementById("corpus1").innerHTML = "Wrong answer!!";
document.getElementById("getcorrectness").innerHTML="<button>" + "GET CORRECT SENTENCE" + "</button>";
}
}
else{
if(document.getElementById("lan").value == "Hindi") {
 var u = document.getElementById("random").value;
 var v = document.getElementById("s1").value;
v = v.trim();
 if(v == obj.con2[u].a || v == obj.con2[u].b || v == obj.con2[u].c || v == obj.con2[u].d || v == obj.con2[u].e || v == obj.con2[u].f || v == obj.con2[u].g || v == obj.con2[u].h || v == obj.con2[u].i || v == obj.con2[u].j || v == obj.con2[u].k || v ==obj.con2[u].l)
 document.getElementById("corpus").innerHTML = "Right answer!!";

else{
 document.getElementById("corpus1").innerHTML = "Wrong answer!!";
document.getElementById("getcorrectness").innerHTML="<button>" + "GET CORRECT SENTENCE" + "</button>";
}
}
}
}
