window.onscroll = function() {scrollFunction()};
function scrollFunction() {
 
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
document.getElementById("myBtn").style.display = "block";
} else {
document.getElementById("myBtn").style.display = "none";
}
}
 
document.getElementById('myBtn').addEventListener("click", function(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});