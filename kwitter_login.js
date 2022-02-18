function AddUser(){
    user_name=document.getElementById("user_name_text").value;
    console.log(user_name);
    localStorage.setItem("user_name_text",user_name);
    window.location="kwitter_room.html";
}