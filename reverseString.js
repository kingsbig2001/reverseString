function reverseString(str){
   if(str.length < 1 ){
          return "null";
        }
     var newString = "";
     for (var i = str.length - 1; i >= 0; i--) { 
       
         newString += str[i]; 
         console.log(newString);
        
     }
       if (str === newString || str === "NaN"){
        return true;
    }
       else{
   
        return newString;
 }
}
reverseString("misc");