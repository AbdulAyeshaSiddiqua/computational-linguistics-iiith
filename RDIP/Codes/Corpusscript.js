
function display()
{
 document.getElementById("dis_sen").innerHTML = "Form a sentence(Declarative or Interrogative or any other type)form the given words";
 document.getElementById("dis_sub").innerHTML = "(Select the buttons in proper order)";

 var text ='{"con1":[' +'{"a":"John ate an apple before afternoon<br>", "b":"before afternoon John ate an apple<br>", "c":"John before afternoon ate an apple"},' +
       '{"a":"some students like to study in the night<br>", "b":"at night some students like to study" },' +
        '{"a":"John and Mary went to church<br>", "b":"Mary and John went to church" },' +
         '{"a":"John went to church after eating<br>", "b":"after eating John went to church<br>", "c":"John after eating went to church" },' +
        '{"a":"did he go to market<br>", "b":"he did go to market" },' +
      '{"a":"the woman who called my sister sells cosmetics<br>", "b":"the woman who sells cosmetics called my sister<br>", "c":"my sister who sells cosmetics called the woman<br>", "d":"my sister who called the woman sells cosmetics" },' +
      '{"a":"John goes to the library and studies<br>", "b":"John studies and goes to the library" },' +
    '{"a":"John ate an apple so did she<br>", "b":"she ate an apple so did John" },' +
   '{"a":"the teacher returned the book after she noticed the error<br>", "b":"the teacher noticed the error after she returned the book<br>", "c":"after the teacher returned the book she noticed the error<br>", "d":"after the teacher noticed the error she returned the book<br>", "e":"she returned the book after the teacher noticed the error<br>", "f":"she noticed the error after the teacher returned the book<br>", "g":"after she returned the book the teacher noticed the error<br>", "h":"after she noticed the error the teacher returned the book" },' +
     '{"a":"I told her that I bought a book yesterday<br>", "b":"I told her yesterday that I bought a book<br>", "c":"yesterday I told her that I bought a book<br>", "d":"I bought a book that I told her yesterday<br>", "e" :"I bought a book yesterday that I told her<br>", "f" :"yesterday I bought a book that I told her" }]}';
      var a=Math.floor(Math.random() * 9);
obj=JSON.parse(text);
var b=obj.con1[a].a;
var s=b.split(" ");
var d=s.length
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
    document.getElementById(i).innerHTML="<button>"+s[g[i]]+"</button>"
}
for(var j=d;j<10;j++){
    document.getElementById(j).innerHTML=" "
}

}
function v()
{
 document.getElementById("dis_sen").innerHTML = "Form a sentence(Declarative or Interrogative or any other type)form the given words";
 document.getElementById("dis_sub").innerHTML = "(Select the buttons in proper order)";


var text1 = '{"con2":[' +
         '{"a":"राम और श्याम बाजार गयें<br>", "b":"राम और श्याम गयें बाजार<br>", "c":"बाजार गयें राम और श्याम<br>", "d":"गयें बाजार राम और श्याम "},' +
      
        '{"a":"राम सोया और श्याम भी<br>", "b":"श्याम सोया और राम भी<br>", "c":"सोया श्याम और राम भी<br>", "d":"सोया राम और श्याम भी " },' +

          '{"a":"मैंने उसे बताया कि राम सो रहा है<br>", "b":"मैंने उसे बताया कि सो रहा है राम<br>", "c":"उसे मैंने बताया कि राम सो रहा है<br>", "d":"उसे मैंने बताया कि सो रहा है राम<br>", "e":"मैंने बताया उसे कि राम सो रहा है<br>", "f":"मैंने बताया उसे कि सो रहा है राम<br>", "g":"उसे बताया मैंने कि राम सो रहा है<br>", "h":"उसे बताया मैंने कि सो रहा है राम<br>", "i":"बताया मैंने उसे कि राम सो रहा है<br>", "j":"बताया मैंने उसे कि सो रहा है राम<br>", "k":"बताया उसे मैंने कि राम सो रहा है<br>", "l":"बताया उसे मैंने कि सो रहा है राम " },' +
      
 '{"a":"राम खाकर सोया<br>", "b":"खाकर राम सोया<br>", "c":"राम सोया खाकर<br>", "d":"खाकर सोया राम<br>", "e":"सोया राम खाकर<br>", "f":"सोया खाकर राम " },' +

    '{"a":"बिल्लियों को मारकर कुत्ता सो गया<br>", "b":"मारकर बिल्लियों को कुत्ता सो गया<br>", "c":"बिल्लियों को मारकर सो गया कुत्ता<br>", "d":"मारकर बिल्लियों को सो गया कुत्ता<br>", "e":"कुत्ता सो गया बिल्लियों को मारकर<br>", "f":"कुत्ता सो गया मारकर बिल्लियों को<br>", "g":"सो गया कुत्ता बिल्लियों को मारकर<br>", "h":"सो गया कुत्ता मारकर बिल्लियों को " },' +
      
'{"a":"एक लाल किताब वहाँ है<br>", "b":"एक लाल किताब है वहाँ<br>", "c":"वहाँ है एक लाल किताब<br>", "d":"है वहाँ एक लाल किताब " },' +

            '{"a":"एक बड़ी सी किताब वहाँ है<br>", "b":"एक बड़ी सी किताब है वहाँ<br>", "c":"बड़ी सी एक किताब वहाँ है<br>", "d":" बड़ी सी एक किताब है वहाँ<br>", "e":"वहाँ है एक बड़ी सी किताब<br>", "f":"वहाँ है बड़ी सी एक किताब<br>", "g":" है वहाँ एक बड़ी सी किताब<br>", "h":"है वहाँ बड़ी सी एक किताब " }]}';
var a=Math.floor(Math.random() * 6);
obj=JSON.parse(text1);
var b=obj.con2[a].a;
var s=b.split(" ");
var d=s.length
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
    document.getElementById(i).innerHTML="<button>"+s[g[i]]+"</button>"
}
for(var j=d;j<10;j++){
    document.getElementById(j).innerHTML=" "
}

}
