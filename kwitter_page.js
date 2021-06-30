var firebaseConfig = {
    apiKey: "AIzaSyCdgfLV88GdywYWs67pGey050SuD2YXPZw",
    authDomain: "project-93-kwitter-437b0.firebaseapp.com",
    databaseURL: "https://project-93-kwitter-437b0-default-rtdb.firebaseio.com",
    projectId: "project-93-kwitter-437b0",
    storageBucket: "project-93-kwitter-437b0.appspot.com",
    messagingSenderId: "8420222583",
    appId: "1:8420222583:web:be339cef98ba47779fc872"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
          });

          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}
