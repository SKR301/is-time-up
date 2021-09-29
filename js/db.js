const config = {
	apiKey: "AIzaSyD29K0iWpMe-uvxwVABrdUEXSS8_xvDVSc",
	authDomain: "is-time-up.firebaseapp.com",
	databaseURL: "https://is-time-up-default-rtdb.firebaseio.com",
	projectId: "is-time-up",
	storageBucket: "is-time-up.appspot.com",
	messagingSenderId: "72923141638",
	appId: "1:72923141638:web:32178274645ed9c2f9d587",
	measurementId: "G-DPB45LH10H"
};

firebase.initializeApp(config);
var ref = firebase.database().ref();