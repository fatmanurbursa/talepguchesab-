var input=document.querySelector("#input");
var secenek=document.querySelector("#secenek");
var secenek2=document.querySelector("#secenek2");
var button=document.querySelector("#button");
var p=document.querySelector("#sonuc");



function hesapla(e){

    let sonuc;
 if(secenek.value==="Mesken"){

   sonuc=(input.value)*1.1/0.8
 }else{
   sonuc= (input.value)*1.1/0.99
 }



 p.innerHTML=sonuc/secenek2.value*100



}




button.addEventListener("click", hesapla);
