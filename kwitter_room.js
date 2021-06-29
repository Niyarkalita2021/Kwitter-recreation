var firebaseConfig = {
    apiKey: "AIzaSyCdgfLV88GdywYWs67pGey050SuD2YXPZw",
    authDomain: "project-93-kwitter-437b0.firebaseapp.com",
    projectId: "project-93-kwitter-437b0",
    storageBucket: "project-93-kwitter-437b0.appspot.com",
    messagingSenderId: "8420222583",
    appId: "1:8420222583:web:be339cef98ba47779fc872"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addroom()
    {
          room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";
    }


  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
        });});}
  getData();
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name" , name);
        window.location = "kwitter_page.html";
  }
  
  function logout()
  {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "kwitter.html";
  }
  
  