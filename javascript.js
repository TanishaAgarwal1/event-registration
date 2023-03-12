const firebaseConfig = {
    apiKey: "AIzaSyDdfwddpIpFLdiNi-15xkMgTRp4eeznkKw",
    authDomain: "hack-2bcde.firebaseapp.com",
    databaseURL: "https://hack-2bcde-default-rtdb.firebaseio.com",
    projectId: "hack-2bcde",
    storageBucket: "hack-2bcde.appspot.com",
    messagingSenderId: "243836919454",
    appId: "1:243836919454:web:86f3515d2baf83bdd7a58f"
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
