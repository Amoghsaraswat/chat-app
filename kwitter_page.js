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

firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
Room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("send").value;
    firebase.database().ref(Room_name).push({
        name: username,
        message: msg,
        like: 0
    });
    document.getElementById("send").value = "";
}

function getData() {
    firebase.database().ref("/" + Room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
            }
        });
    });
}
getData();
function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(Room_name).child(message_id).update({
		like : updated_likes  
	 });

}
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
