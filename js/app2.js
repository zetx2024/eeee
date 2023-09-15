// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB0gE6lonGms-HULa2eNZaE88gXcFRbqIM",
    authDomain: "publish-form-ysj.firebaseapp.com",
    projectId: "publish-form-ysj",
    storageBucket: "publish-form-ysj.appspot.com",
    messagingSenderId: "558231726186",
    appId: "1:558231726186:web:0d0615c479ba212098c213",
    measurementId: "G-8ZTYWSZHJ4"
};

//initalize firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("PublishData");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector("#userName").value;
  let email = document.querySelector("#userEmail").value;
  let phone = document.querySelector("#userPhone").value;
  let title = document.querySelector("#journalTitle").value;

  saveContactInfo(name, email, phone, title);
}

// Save infos to Firebase
function saveContactInfo(name, email, phone, title) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    Nationality: phone,
    title: title
  });
}




var files = [];
document.getElementById("files").addEventListener("change", function(e) {
  files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

document.getElementById("submit").addEventListener("click", function(e) {
  //checks if files are selected
  if (files.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files.length; i++) {
      //create a storage reference
      var storage = firebase.storage().ref(files[i].name);

      //upload file
      var upload = storage.put(files[i]);

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress").value = percentage;
        },

        function error() {
          alert("error uploading file");
        },

        function complete() {
          alert("Congratulations! Your article is submitted successfully!");
          document.querySelector(".contact-form").reset();
        }
      );
    }
  } else {
    alert("No file chosen");
  }
});

function getFileUrl(filename) {
  //create a storage reference
  var storage = firebase.storage().ref(filename);

  //get file url
  storage
    .getDownloadURL()
    .then(function(url) {
      console.log(url);
    })
    .catch(function(error) {
      console.log("error encountered");
    });
}
