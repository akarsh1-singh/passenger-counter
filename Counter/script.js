let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el");
let count=0;
function increment()
 {
   count+=1;
   countEl.textContent=count;

 }
 function decrement()
 {
   count-=1;
   countEl.textContent=count;

 }
 function reset()
 {
   count=0;
   countEl.innerText=count;

 }
 function save()
 {
    let countStr=count+" - ";
    saveEl.textContent+=countStr;
    count=0;
    countEl.textContent=count;
 }