function myfun()
{
   let xx=document.getElementById("sent").value;
   let yy=document.getElementById("letter").value;
   let letter_search=xx.search(yy);
   if(xx!=="" && yy!="")
   {

   
        if(letter_search>0)
        {
            let part=xx.slice(letter_search+1);
            document.getElementById("res").innerHTML=part; 
        }
        else
        {
            document.getElementById("res").innerHTML="The letter doesn't exist";
        }
   }
    else{
            window.alert("please fill the form");
        }
   
}
