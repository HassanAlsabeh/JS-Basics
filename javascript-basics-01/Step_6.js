function doMath() {
      var numOne = document.getElementById('first_number').value;
      var numTwo = document.getElementById('second_number').value;
      var remainder = parseInt(numOne) % parseInt(numTwo);
    
      alert("The Multiplication : " + remainder);
     
}