const firebaseConfig = {
      apiKey: "AIzaSyA3kzHwi1PgREd9UKYwXsl6oZaMYDRyaUs",
      authDomain: "kwitter-app-9172a.firebaseapp.com",
      databaseURL: "https://kwitter-app-9172a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-9172a",
      storageBucket: "kwitter-app-9172a.appspot.com",
      messagingSenderId: "541316853168",
      appId: "1:541316853168:web:10d7fb42f9125ce5a87a75"
    };
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
      