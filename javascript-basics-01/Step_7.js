function doMath() {
      var shoe = document.getElementById('shoe_size').value;
      var year = document.getElementById('year').value;
      var answer = ((((parseInt(shoe) * 2)+5)*50)-year)+1766 ;
    
      alert("The answer : " + answer);
     
}