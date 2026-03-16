function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(email=="admin@gmail.com" && password=="1234"){
document.getElementById("message").innerHTML="Login Successful";
}
else{
document.getElementById("message").innerHTML="Invalid Login";
}

return false;

}

function bookVenue(){

let name=document.getElementById("name").value;

document.getElementById("bookingMessage").innerHTML=
"Venue booked successfully for "+name;

return false;

}
