function form_validation(){
    nam = document.getElementById("name").value;
    ml = document.getElementById("mail").value;
   pword = document.getElementById("psword").value;
  pnum1=document.getElementById("pnumber").value;
   gen1 = document.getElementById("rd1");
   gen2 = document.getElementById("rd2");
   gen3 = document.getElementById("rd3");
   lan = document.getElementById("language").value;
   zi = document.getElementById("zip").value;
   ab = document.getElementById("about").value;
   if(nam == ""){
       alert("Enter your name");
       return false;
   }else if(ml == ""){
       alert("Enter your Email");
       return false;
   }else if(pword == ""){
       alert("Enter your password");
       return false;
   }else if(pnum1 == ""){
       alert("Enter your phone number");
       return false;
   }else if(gen1.checked == false && gen2.checked == false && gen3.checked == false){
       alert("Select the Gender");
       return false;
   }else if(zi == ""){
       alert("Please Enter the Zip code");
       return false;

   }else if(ab == ""){
       alert("Please Write about yourself");
       return false;

   }
   
   
}