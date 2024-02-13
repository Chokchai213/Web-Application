const firebaseAdmin = require('../configs/firebaseConfig');

exports.signup = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    firebaseAdmin.auth()
    .createUser({
      email: email,
      password: password,
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully created new user:', userRecord.uid);
      res.status(200).json({ userRecord });
    })
    .catch((error) => {
      console.log('Error creating new user:', error);
      res.status(500).json({ error: 'Error creating new user' });
    });
};

exports.signin = async (req, res) => {
    const { email, password } = req.body;
    firebaseAdmin.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // Respond with success message or user data
            res.status(200).send(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // Respond with error message
            res.status(401).send(errorCode, errorMessage);
        });
};

exports.signout = async (req, res) => {
    firebaseAdmin.auth().signOut().then(() => {
        // Sign-out successful.
        // Respond with success message
        res.status(200).json({ message: 'User signed out successfully' });
      }).catch((error) => {
        // An error happened.
        // Respond with error message
        res.status(500).json({ message: 'Error signing out user' });
      });
};
