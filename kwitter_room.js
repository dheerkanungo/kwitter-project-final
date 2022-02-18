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
  document.getElementById("user_name").innerHTML=" welcome "+ user_name + "!";
  
  
  function Add_room(){
    room_name =document.getElementById("add_room").value;
  console.log(room_name);
  firebase.database().ref("/").child(room_name).update({
  purpose :"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log(Room_names);
        row="<div class='room_name' id='"+ Room_names + "' onclick='RedirectToRoom(this.id);'> #"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
       
        //End code
        });
      });
    }
  
        
  getData();
  
  function RedirectToRoom(name){
  console.log("clicked_room= "+name);
  localStorage.setItem("clicked_room",name);
  window.location="kwitter_page.html";
  
  }
  
  
  function Logout(){
  window.location="index.html";
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  }
  