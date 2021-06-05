var firebaseConfig = {
    apiKey: "AIzaSyA6mxV0Wk_A9RlTAsOUlGIQBeb9nX7hYiU",
    authDomain: "kwitter-2-2b171.firebaseapp.com",
    databaseURL: "https://kwitter-2-2b171-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-2b171",
    storageBucket: "kwitter-2-2b171.appspot.com",
    messagingSenderId: "943197405008",
    appId: "1:943197405008:web:16a9a0df0d72becbbd3655",
    measurementId: "G-HLK6N4FFTP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });

    document.getElementById("msg").value="";
}

 user_name = localStorage.getItem("user_name");