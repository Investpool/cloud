import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBAPWwm9FTs8MqkyYAxrZZp-d2rnqiqwkw",
    authDomain: "usap-adf34.firebaseapp.com",
    projectId: "usap-adf34",
    storageBucket: "usap-adf34.appspot.com",
    messagingSenderId: "760395767364",
    appId: "1:760395767364:web:92a4b57afcd231328c6611",
    measurementId: "G-4N200J5FMN"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({timestampsInSnapshots:true})
  //const analytics = getAnalytics(app);

  export default firebase;