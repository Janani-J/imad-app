var button=document.getElementById('counter');
 
 button.onclick = function() {
     //Create a request object
      
      var request= new XMLHttpRequest();
     
     //capturing the response and store it in a variable
     request.onreadystatechange= function() {
     if (request.readyState=== XMLHttpRequest.DONE)
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
 
 //Submit name
 
 var submit=document.getElementById('submit_btn');
 submit.onclick=function() 
 {
//Create a request object
      
      var request= new XMLHttpRequest();
     
     //capturing the response and store it in a variable
     request.onreadystatechange= function() {
     if (request.readyState=== XMLHttpRequest.DONE)
     {
         if(request.status===200) {
            //Capture the list of name
  var names=request.responseText;
  names= JSON.parse(names);
  var list='';
  for(var i=0;i< names.length;i++)
  {
  list +='<li>' + names[i] + '</li>';
   }
 var ul=document.getElementById('namelist');
 ul.innerHTML=list;
         }
     }
 };
 
 var nameInput=document.getElementById('name');
 var name=nameInput.value;
     
     request.open('GET','http://jananinathanee.imad.hasura-app.io/submit-name?name=' + name,true);
     request.send(null);
 };
 
  var submitNew=document.getElementById('submit_cmnt');
  submitNew.onclick=function() 
 {
//Create a request object
      
      var request= new XMLHttpRequest();
     
     //capturing the response and store it in a variable
     request.onreadystatechange= function() {
     if (request.readyState=== XMLHttpRequest.DONE)
     {
         if(request.status===200) {
            //Capture the list of name
  var comments=request.responseText;
  comments= JSON.parse(comments);
 var list='';
  for(var i=0;i< comments.length;i++)
  {
  list +='<li>' + comments[i] + '</li>';
   }
 var ul=document.getElementById('commentlist');
 ul.innerHTML=list;
         }
     }
 };
 
 var commentInput=document.getElementById('comment');
 var comment=commentInput.value;
     
     request.open('GET','http://jananinathanee.imad.hasura-app.io/articleName?comment=' + comment,true);
     request.send(null);
 };
 