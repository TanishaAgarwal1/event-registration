const firebaseConfig = {
    apiKey: "AIzaSyDomBBg_pXemi1kZXr1qKRVunAYzh7yQvc",
  authDomain: "eventbeep-7cc04.firebaseapp.com",
  databaseURL: "https://eventbeep-7cc04-default-rtdb.firebaseio.com",
  projectId: "eventbeep-7cc04",
  storageBucket: "eventbeep-7cc04.appspot.com",
  messagingSenderId: "602245976409",
  appId: "1:602245976409:web:2fdb01b3072d9dc2f0fc48",
  measurementId: "G-L8Q0QGZKT4"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore=firebase.firestore()
  const db=firestore.collection("formData")

  let sub=document.getElementById('eventForm')

  sub.addEventListener('click', (e) => {
    e.preventDefault();

    let eventName = document.getElementById('ename').value;
      let  venue = document.getElementById('vname').value;
      let club = document.getElementById('orgname').value;
      let date = document.getElementById('date').value;
      let price = document.getElementById('num').value;
      let info = document.getElementById('info').value;


      db.doc().set({
         ename:eventName,
         vname:venue,
         orgname:club,
         date:date,
         num:price,
         info:info
      }).then(()=>{
        console.log("data saved")
      }).catch((error)=>{
        console.log(error)
         
      })
  })
