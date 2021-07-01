var firebaseConfig = {
      apiKey: "AIzaSyDFJ31Olwrieq9gaiZOB0TX8suvOKrtOQU",
      authDomain: "kwitter-847e6.firebaseapp.com",
      projectId: "kwitter-847e6",
      storageBucket: "kwitter-847e6.appspot.com",
      messagingSenderId: "560896863359",
      appId: "1:560896863359:web:9b40e7d5c261108821234a",
      measurementId: "G-8PPFG2VE4X"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
