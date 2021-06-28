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
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
  }