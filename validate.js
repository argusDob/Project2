   /*  function validateForm()                                    
{   
    var ok=true;
    var name = document.forms["form"]["first-name"];           
    var last = document.forms["form"]["last-name"]; 
    var city = document.forms["form"]["address"];
    var zip = document.forms["form"]["zipcode"]; 
    var date = document.forms["form"]["b_day"]; 
    var phone = document.forms["form"]["email"];  
    var what =  document.forms["form"]["last-name"];  
    var password = document.forms["form"]["city"];  
    var address = document.forms["form"]["signature"];
    var phone = document.forms["form"]["tel"];
    var pname = document.forms["form"]["pname"]; 
    ErrorText= "";
    
    
  if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        ok= false; 
    } 
   
    if (last.value == "")                               
    { 
        window.alert("Please enter your Last Name."); 
        name.focus(); 
        ok= false; 
    } 
       
    if (city.value == "")                               
    { 
        window.alert("Please enter your  City."); 
        name.focus(); 
        ok= false; 
    } 
    
   /* if (zip.value == "")                               
    { 
        window.alert("Please enter your Zip Code."); 
        name.focus(); 
        return false; 
    } 
    
    
     if (date.value == "")                               
    { 
        window.alert("Please enter your birth date."); 
        name.focus(); 
        return false; 
    } 
    
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    
  
    
      if (ErrorText= "") { form.submit() }
    
  
     if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) ) 
    {
     alert ( "Please choose your Gender: Male or Female" ); 
     return false;
     }  
    
    
    
     
    
     
     if ( ( form.position[0].checked == false ) && ( form.position[1].checked == false ) && ( form.position[2].checked == false ) && ( form.position[3].checked == false ))
     {
     alert ( "Please choose your Position" ); 
     return false;
     }
    
    
    
    
      if ( ( form.position2[0].checked == false ) && ( form.position2[1].checked == false ) && ( form.position2[2].checked == false ) && ( form.position2[3].checked == false ))
     {
     alert ( "Please choose your perferable Position" ); 
     return false;
     }
     
      if ( ( form.position2[0].checked == false ) && ( form.position2[1].checked == false ) && ( form.position2[2].checked == false ) && ( form.position2[3].checked == false ))
     {
     alert ( "Please choose your perferable Position" ); 
     return false;
     }
     
 
 
  
    
      if ( ( form.size[0].checked == false ) && ( form.size[1].checked == false ) && ( form.size[2].checked == false ) && ( form.size[3].checked == false )&& ( form.size[4].checked == false )&& ( form.size[5].checked == false )&& ( form.size[6].checked == false ))
     {
     alert ( "Please choose your Jersey Size" ); 
     return false;
     }   
    
    
    
    if ( ( form.size1[0].checked == false ) && ( form.size1[1].checked == false ) && ( form.size1[2].checked == false ) && ( form.size1[3].checked == false )&& ( form.size1[4].checked == false )&& ( form.size1[5].checked == false )&& ( form.size1[6].checked == false ))
     {
     alert ( "Please choose your Short Size" ); 
     return false;
     }   
    
   
   if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
      
    
      var e = document.getElementById("school");
      var strUser = e.options[e.selectedIndex].value;
      //if you need text to be compared then use
      var strUser1 = e.options[e.selectedIndex].text;
      if(strUser==0) //for text use if(strUser1=="Select")
      {
      alert("Please select your School");
    }
     
    
    
      if(document.getElementById("school").value == "0")
   {
      alert("Please choose your school"); // prompt user
      document.getElementById("school").focus(); //set focus back to control
      return false;
   }
    
    
      if(document.getElementById("uniform").value == "none")
   {
      alert("Please select if you have a uniform"); // prompt user
      document.getElementById("uniform").focus(); //set focus back to control
      return false;
   }
    
       
  if (pname.value == "")                                  
    { 
        window.alert("Please enter your Parent's name."); 
        name.focus(); 
        return false; 
    } 
    */





   // return true; 
   //}





   function validateForm() {
       var name = document.forms["form"]["first-name"];
       var last = document.forms["form"]["last-name"];
       var address = document.forms["form"]["address"];
       var zipCode = document.forms["form"]["zipcode"];
       var birth_date = document.forms["form"]["b_day"];
       var phone = document.forms["form"]["tel"];
       var email = document.forms["form"]["email"];
       var p_name = document.forms["form"]["parname"];
       var date = document.forms["form"]["sign_date"];




       var errors = [];


       if (name.value == "") {
           errors.push("Please provide the first name");
           name.focus();
       }

       if (last.value == "") {
           errors.push("Please provide the last name");
           last.focus();
       }

       if (address.value == "") {
           errors.push("Please provide the City")
           address.focus();

       }


       if (zipCode.value == "") {
           errors.push("Please provide the Zip Code")
           zipCode.focus();
       }

       if (birth_date.value == "") {
           errors.push("Please Provide your birth date")
           birth_date.focus();

       }



       if ((form.gender[0].checked == false) && (form.gender[1].checked == false)) {
           errors.push("Please Provide your birth date");

       }


       if (phone.value == "") {
           errors.push("Please Provide your phone number");
           birth_date.focus();

       }

       if (email.value == "") {
           errors.push("Please enter a valid e-mail address.");
           email.focus();
       }


       var e = document.getElementById("school");
       var strUser = e.options[e.selectedIndex].value;
       //if you need text to be compared then use
       var strUser1 = e.options[e.selectedIndex].text;
       if (strUser == 0) //for text use if(strUser1=="Select")
       {
           errors.push("Please select your School");

       }


       if ((form.position[0].checked == false) && (form.position[1].checked == false) && (form.position[2].checked == false) && (form.position[3].checked == false)) {
           errors.push("Please choose your Position");
       }


       if ((form.position2[0].checked == false) && (form.position2[1].checked == false) && (form.position2[2].checked == false) && (form.position2[3].checked == false)) {
           errors.push("Please choose your perferable Position");

       }


       if (document.getElementById("uniform").value == "none") {
           errors.push("Please select if you have a uniform"); // prompt user
           document.getElementById("uniform").focus(); //set focus back to control

       }


       if ((form.size[0].checked == false) && (form.size[1].checked == false) && (form.size[2].checked == false) && (form.size[3].checked == false) && (form.size[4].checked == false) && (form.size[5].checked == false) && (form.size[6].checked == false)) {
           errors.push("Please choose your Jersey Size");


       }



       if ((form.size1[0].checked == false) && (form.size1[1].checked == false) && (form.size1[2].checked == false) && (form.size1[3].checked == false) && (form.size1[4].checked == false) && (form.size1[5].checked == false) && (form.size1[6].checked == false)) {
           errors.push("Please choose your Short Size");

       }


       if (p_name.value == "") {

           errors.push("Please Provide Parent's name");
           p_name.focus();

       }


       if (date.value == "") {
           errors.push("Please provide the the curently date");
           date.focus();
       }



       var messages = "";

       for (var i = 0; i < errors[i].length; i++) {

           alert(errors.join());
           return false;

       }

       return false;



   }