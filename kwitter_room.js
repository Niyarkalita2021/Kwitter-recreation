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

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
  
        //End code
        });});}
  getData();
  