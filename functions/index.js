const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Add a user to Firestore database:
exports.setupUsers = functions.auth.user().onCreate(async (user) => {
  var fullName = user.displayName || 'Anonymous';
  //var photo = user.photoURL || 'None';
  await admin.firestore().collection('users').doc(user.uid).set({
    username: fullName,
    user_id: user.uid
    //profile_pic: photo
  });
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
