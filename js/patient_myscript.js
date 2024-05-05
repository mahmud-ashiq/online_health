function validateForm() {
  var gender = document.getElementById("gender").value;
  if (!gender) {
    document.getElementById("genderError").innerHTML = "Gender must be selected";
    return false;
  }
  var marital = document.getElementById("marital").value;
  if (!marital) {
    document.getElementById("maritalError").innerHTML = "Marital Status must be selected";
    return false;
  }  
  var address = document.getElementById("address").value;
  if (address == "") {
    document.getElementById("add").innerHTML = "Address must be filled";
    return false;
  }
  var city = document.getElementById("city").value;
  if (city == "") {
    document.getElementById("cityError").innerHTML = "City must be entered";
    return false;
  }
  var postal = document.getElementById("postal").value;
  if (isNaN(postal) || postal.length != 4) {
    document.getElementById("postalError").innerHTML = "Postal code must be 4 digit number";
    return false;
  }
} 
function validateEmail(){
  var email = document.getElementById('submit_email').value;
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(!regex.test(email)){
    document.getElementById('email_error').innerHTML = "Please Enter a valid email address";
    return false;
  }
}
/*
function loadDoc() {
  var str = document.getElementById("name").value;
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "../controller/test.php?name="+str);
  xhttp.send();
}

function loadUser() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("txt").innerHTML = this.responseText;
    alert(jsonData);
  }
  xhttp.open("GET", "../controller/searchUser.php");
  xhttp.send();
  
}

function loadProfile(){
  var str;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.onload = function(){
    var data = JSON.parse(xhttp.responseText);
     data.forEach(function(user ){
      document.getElementById("output").innerHTML +=  "Name: "+user.name + "<br> ID: "+ user.id +"<br> Username: "+user.username+ "<br><br>" ;
     });
    
    
  }
  xhttp.send();

}


*/

