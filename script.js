var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening, Welcome to the Slop Bucket';
} else if (hourNow > 12) {
    greeting = 'Good afternoon, Welcome to the Slop Bucket';
} else if (hourNow > 0) {
    greeting = 'Good morning, Welcome to the Slop Bucket';
} else {
    greeting = 'Welcome to the Slop Bucket';
}       
document.getElementById('greeting').innerHTML = '<h3>' + greeting + '</h3>';