var firebaseConfig = {
    apiKey: "AIzaSyAEX0W4-pJDpGqL0ANd6Lo0s0vVp8KGhs0",
    authDomain: "kweter-f4af2.firebaseapp.com",
    databaseURL: "https://kweter-f4af2-default-rtdb.firebaseio.com",
    projectId: "kweter-f4af2",
    storageBucket: "kweter-f4af2.appspot.com",
    messagingSenderId: "707405456801",
    appId: "1:707405456801:web:d64cb5ebd2593b439ed7e0",
    measurementId: "G-SJMJ78YK0X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+username;
function addroom() {
    Room_name=document.getElementById("saraswat").value;
 firebase.database().ref("/").child(Room_name).update({
    purpose:"adding  room  name" 
 });
    localStorage.setItem("roomname",Room_name);
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location= "index.html";
}  