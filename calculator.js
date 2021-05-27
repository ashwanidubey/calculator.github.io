function dark()
{
    console.log("bad")
    const b=document.getElementsByTagName("body")
    const u=document.getElementById("screen")
    const v=document.getElementById("keypad")
    const x=document.getElementsByClassName("table_data")
    const y=document.getElementsByTagName("button")
    const z=document.getElementById("input")
    u.style.backgroundColor="rgba(0, 0, 0, 0.897)"
    v.style.backgroundColor="black" 
    for(var i=0 ;i<x.length ;i++)
    {
        x[i].style.backgroundColor="rgba(0, 0, 0, 0.897)"
    }
    for(var i=0 ;i<y.length ;i++)
    {
        y[i].style.backgroundColor="black"
         y[i].style.color="white"
    }
    z.style.color="white"
    b[0].style.backgroundColor="white"
}
function light()
{
    console.log("good")
    const u=document.getElementById("screen")
   // u.style.color=red
    const v=document.getElementById("keypad")
   // v.style.color=red
   const b=document.getElementsByTagName("body")
    const x=document.getElementsByClassName("table_data")
    const y=document.getElementsByTagName("button")
    const z=document.getElementById("input")
    u.style.backgroundColor="white"
    v.style.backgroundColor="white" 
    //x.style.backgroundColor="rgba(0, 0, 0, 0.897)" 
    //y.style.color="black"
    for(var i=0 ;i<x.length ;i++)
    {
        x[i].style.backgroundColor="white"
    }
    for(var i=0 ;i<y.length ;i++)
    {
        y[i].style.backgroundColor="white"
        y[i].style.color="black"
    }
    z.style.color="black"
    b[0].style.backgroundColor="black"

}
function append(x)
{
  console.log("append")
  const a=document.getElementById("current_input")
  const b=document.getElementById("result")
  if(b.style.display=="block"  && b.innerHTML!="0")
  {
      b.style.display="none"
      a.innerHTML =b.innerHTML+x
  } 
  else if(b.innerHTML==="0" || a.innerHTML==="0")
  {
      if(a.innerHTML!='+' && a.innerHTML!='-' && a.innerHTML!='*' && a.innerHTML!='/' )
           a.innerHTML=x
  }
  else  
  {
      a.innerHTML =a.innerHTML+x
  }
}
function calculate()
{  
    console.log("jai ho")
    var x=eval(document.getElementById("current_input").innerHTML)
    x=Math.round(x*100)
    x=x/100
    document.getElementById("result").innerHTML=x
    document.getElementById("result").style.display="block"
}
function Clear()
{
    console.log("clear")
    document.getElementById("current_input").innerHTML="0" 
    document.getElementById("result").innerHTML=""
}
function deletelast()
{
    console.log("delete")
    
    var x=document.getElementById("current_input").innerHTML
    console.log(x)
    console.log(x.slice(0, -1))
    
    if(x!="0" && x.length>0)
    {
        
        document.getElementById("current_input").innerHTML=x.slice(0, -1)
    }
    if(document.getElementById("current_input").innerHTML.length==0)
    {
        document.getElementById("current_input").innerHTML="0"
    }

}