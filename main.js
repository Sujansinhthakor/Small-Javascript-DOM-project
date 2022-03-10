//select form 
var form=document.getElementById("addForm");
//selecting ul
var itemList = document.getElementById("items");
//filter
var fil=document.getElementById('filter');

      //events

//submit event
form.addEventListener("submit",additem);
//remove item
 itemList.addEventListener("click",removeitem);
 //filter
 fil.addEventListener("keyup",filteritem);

 // clear input fields
form.addEventListener("submit",ClearFields);
 function ClearFields() {

   document.getElementById("item").value = "";

}

// adding item in html function 
 function additem(e){
    e.preventDefault();
    //get input value
    
    var newitem=document.getElementById("item").value;
   if(newitem!=''){
      // creating li tag
    var li =  document.createElement('li');
    li.className= 'list-group-item';
    // adding text to li
    li.appendChild(document.createTextNode(newitem));
    itemList.append(li);
   

    //addding delete button
    var deletbtn=document.createElement('button');
    // assign class to delete button
    deletbtn.className='btn btn-danger btn-sm float-right delete';
    // append text X to buttion
    deletbtn.appendChild(document.createTextNode('X'));
    // append delete button to li
    li.append(deletbtn);
   }
   else{
      alert("Add item");
   }
   
    
 }
 

 function removeitem(e){
     e.preventDefault();
     if(e.target.classList.contains('delete')){
      var li =e.target.parentElement;
      itemList.removeChild(li);
     }
    
    }


    // filter item
   function filteritem(e){
      // converting text to lower case
       var text=e.target.value.toLowerCase();
       // get list 
       var items=itemList.getElementsByTagName('li');
      //convert to array 
      Array.from(items).forEach(function(item){
         var itemName=item.firstChild.textContent;
         if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
         }
         else{
            item.style.display='none';
         }
      })
     
   }   



