let caftor= document.getElementById("plus").addEventListener("click",()=>{window.location.href="https://eloquentjavascript.net/index.html"})
filtercategory("all")
function filtercategory(c) { 
  if(c=="all") return;
  var x = document.getElementById("list").getElementsByClassName("filterDiv");
  for (let i = 0; i < x.length; i++) 
  {
    x[i].style.display = "none";
  }
  
 var s = document.getElementById("list").getElementsByClassName(c);
 for (let i = 0; i < s.length; i++) 
 {
 s[i].style.display="flex";
 }  
 
}