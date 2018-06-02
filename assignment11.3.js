       function showAttriboflnk(){ //function showAttriboflnk() that shows anchor element attribute values inside the div element block having id "attrs"
                var anchorAttribvalue1=document.getElementById("google").id;   //anchorAttributes1 object stores anchor element with id "google" having attribute id value 
                var anchorAttribvalue2=document.getElementById("google").target; //anchorAttributes2 object stores anchor element with id "google" having attribute target value 
                var anchorAttribvalue3=document.getElementById("google").href; //anchorAttributes3 object stores anchor element with id "google" having attribute href value 
                var anchorAttribvalues="id: "+anchorAttribvalue1+" type: "+anchorAttribvalue2+" href: "+anchorAttribvalue3; //anchorAttributes object value stores anchor element attribute values with id "google"
                document.getElementById("attrs").innerHTML=anchorAttribvalues; //Object div element with id "attrs" is initialized with values stored in anchorAttributes object that has anchor element attribute values with id "google"
       }
       function removeResult(){ //function removeResult() that removes the displayed result from the div element block having id "attrs"
        showAttribindiv.removeChild(showAttribindiv.firstChild); //removeChild() built-in method removes all child nodes of object showAttribindiv of div element with id "attrs" 
       }
