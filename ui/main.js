var button=document.getElementById('counter');
 
 button.onclick = function() {
     //Create a request object
      
      var request= new XMLHttpRequest();
     
     //capturing the response and store it in a variable
     request.onreadystatechange= function() {
     if (request.readyState=== XMLHttprequest.DONE)
     {
         if(request.status===200) {
             // take some action
             var counter= request.responseText;
             var span=document.getElementById('count');
             span.innerHTML=counter.toString();
         }
     }
     
     };
     
     request.open('GET','http://jananinathanee.imad.hasura-app.io/counter',true);
     request.send(null);
     
     


     
 };

 