importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');
var firebaseConfig = {
            apiKey: "AIzaSyDgH_9keA5FkNd2w9DS6gF7_0oewnfIaGA",
            authDomain: "app-push-notification-6ba57.firebaseapp.com",
            projectId: "app-push-notification-6ba57",
            storageBucket: "app-push-notification-6ba57.appspot.com",
            messagingSenderId: "760573265612",
            appId: "1:760573265612:web:99305f713b082029c42469",
            measurementId: "G-1LJEEZBK8Z"
          };
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload){
    console.log(payload);
    const notification = JSON.parse(payload);
    const notificationOption = {
        body : notification.body,
        icon : notification.icon,
        click_action : notification.click_action
    };
    return self.registration.showNotification(payload.notification.title, notificationOption);
});