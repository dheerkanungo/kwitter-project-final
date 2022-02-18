const firebaseConfig = {
    apiKey: "AIzaSyAMavwo4iQRWu5Vt8Gb2fQ10Z4IvnUWNyk",
    authDomain: "kwitter-b8b22.firebaseapp.com",
    databaseURL: "https://kwitter-b8b22-default-rtdb.firebaseio.com",
    projectId: "kwitter-b8b22",
    storageBucket: "kwitter-b8b22.appspot.com",
    messagingSenderId: "559828957865",
    appId: "1:559828957865:web:2f0c29901df5d1e7db07b8",
    measurementId: "G-L53N8MJMJP"
  };
  

  
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("clicked_room");
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

console.log(firebase_message_id);
console.log(message_data);


names=message_data['name'];
messages=message_data['msg'];
likes=message_data['like'];

message_with_tag="<h4 class='message_h4'>"+messages+"</h4>";
like_button="<button class='btn btn-danger' id='"+firebase_message_id+"' value="+likes+" onclick='updateLike(this.id);'"+">";
span_width_tag = "<span class='glyphicon glyphicon-thumbs-up'> like:"+likes+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_width_tag;
document.getElementById("output").innerHTML+=row;
} });  }); }
getData();

function send(){
message= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
like:0,
msg:message,
name:user_name
});

}
function logout(){
    window.location="index.html";
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");  
}
function updateLike(message_id){
 console.log(message_id);
}