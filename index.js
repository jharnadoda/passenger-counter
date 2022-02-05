let count =0
let countElement=document.getElementById("count-element")
function increment()
{
    count=count+1
    countElement.innerText=count
   // console.log(count)
}
function save()
{
    console.log(count)
}