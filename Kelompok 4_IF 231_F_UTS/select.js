var sasukeButton = document.getElementById('sasuke-button');
sasukeButton.addEventListener('click', function() {
    localStorage.setItem('selectedCharacter', './Images/sasuke1.gif');
    window.location.href="index.html";
});



var gokuButton = document.getElementById('goku-button');
gokuButton.addEventListener('click', function() {
    localStorage.setItem('selectedCharacter', './Images/goku1.gif');
    window.location.href="index.html";
});


var narutoButton = document.getElementById('naruto-button');
narutoButton.addEventListener('click', function() {
    localStorage.setItem('selectedCharacter', './Images/naruto1.gif');
    window.location.href="index.html";
});





