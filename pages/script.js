const cont=document.getElementById("cont");
const tabella=document.createElement("table");
tabella.classList.add("table");


function creaTabella(){

   
   for(let i=0;i<6;i++){

       const tr=document.createElement("tr");
       for(let i=0;i<6;i++){
           const td=document.createElement("td");
           tr.appendChild(td);
       }
       tabella.appendChild(tr);
   }
   cont.appendChild(tabella);
}
document.addEventListener("DOMContentLoaded",creaTabella);