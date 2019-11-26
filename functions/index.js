const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Add a user to Firestore database:
exports.setupUsers = functions.auth.user().onCreate(async (user) => {
  var fullName = user.displayName || 'Anonymous';
  //var photo = user.photoURL || 'None';
  var creationDate= new Date();
  var creationDateYear = creationDate.getFullYear();
  var creationDateMonth = creationDate.getMonth();
  var creationDateDay = creationDate.getDate();
  await admin.firestore().collection('users').doc(user.uid).set({
    username: fullName,
    user_id: user.uid,
    profession: "Unspecified",
    connection_count: 0,
    date_joined: creationDate,
    user_connections: [],
    daily_article: {article_id: "U1jQF2JSTFu50Lpjbyzr",
                    is_bookmarked: false, 
                    is_read: false, 
                    reactions: []}
    //profile_pic: photo,
    //date_joined: firebase.firestore.FieldValue.serverTimestamp(), ---> Doesnt work
    
/*
    profile_pic: photo,
    date_joined: user.metaData.creationDate*/
  });
  await admin.firestore().collection('users').doc(user.uid).collection("user_details").doc("user_dot_history").set({
    });
/*    await admin.firestore().collection('users').doc(user.uid).collection("user_connections").doc("info").set({
        connection_count: 0,
    });  */
});




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
