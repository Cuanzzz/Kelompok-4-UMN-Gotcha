//HP BAR
var health = 100;
var healthBar = document.getElementById("health");

function reduceHealth() {
  health -= 0.3;
  if (health < 0) {
    health = 0;
    window.location.replace("gameover.html");
  }
  healthBar.style.width = health + "%";
}

setInterval(reduceHealth, 1000);

function addHealth() {
  var ShowGif = document.getElementById('Show-Gif');
			let img = document.createElement("img");
			img.src = "Images/healing-unscreen.gif";
			document.body.appendChild(img);
			setTimeout(function() {
				document.body.removeChild(img);
			}, 1000);
  health += 5;
  if (health > 100) {
    health = 100;
  }
  healthBar.style.width = health + "%";
}

//HUNGER BAR
var hunger = 100;
var hungerbar = document.getElementById("hunger");

function reduceHunger() {
  hunger -= 0.01;
  if (hunger < 0) {
    hunger = 0;
    health -= 0.1;
  }
  hungerbar.style.width = hunger + "%";
}

setInterval(reduceHunger, 1000);

function addHunger() {
  var ShowGif = document.getElementById('Show-Gif');
			let img = document.createElement("img");
			img.src = "Images/makan-unscreen.gif";
			document.body.appendChild(img);
			setTimeout(function() {
				document.body.removeChild(img);
			}, 1000);
  hunger += 5;
  if (hunger > 100) {
    hunger = 100;
  }
  hungerbar.style.width = hunger + "%";
}

function reduceHungerGerak() {
  hunger -= 0.5;
  if (hunger < 0) {
    hunger = 0;
    health -= 0.1;
  }
  hungerbar.style.width = hunger + "%";
}

//SLEEP BAR
var sleep = 100;
var sleepbar = document.getElementById("sleep");

function reduceSleep() {
  sleep -= 0.3;
  if (sleep < 0) {
    sleep = 0;
  }
  sleepbar.style.width = sleep + "%";
}

setInterval(reduceSleep, 1000);

function addSleep() {
  var ShowGif = document.getElementById('Show-Gif');
			let img = document.createElement("img");
			img.src = "Images/tidur.gif";
			document.body.appendChild(img);
			setTimeout(function() {
				document.body.removeChild(img);
			}, 1000);
  sleep += 5;
  if (sleep > 100) {
    sleep = 100;
  }
  sleepbar.style.width = sleep + "%";
}

function reduceSleepGerak() {
  sleep -= 0.01;
  if (sleep < 0) {
    sleep = 0;
  }
  sleepbar.style.width = sleep + "%";
}

//HAPPY BAR
var happy = 100;
var happybar = document.getElementById("happy");

function reduceHappy() {
  happy -= 0.3;
  if (happy < 0) {
    happy = 0;
  }
  happybar.style.width = happy + "%";
}

setInterval(reduceHappy, 1000);

function addHappy() {
  happy += 10;
  if (happy > 100) {
    happy = 100;
  }

  if (hunger < 5) {
    happy -= 3;
  }
  happybar.style.width = happy + "%";
}

//GERAKAN UNTUK KARAKTER
var character = document.getElementById("character");
var xPosition = 0;
var yPosition = 0;

function moveCharacter(arah) {
  var gerak = 100;
  if (arah == "atas") {
    yPosition -= gerak;
    reduceHungerGerak();
    reduceSleepGerak();
    eatFood();
  } else if (arah == "kiri") {
    xPosition -= gerak;
    reduceHungerGerak();
    reduceSleepGerak();
    eatFood();
  } else if (arah == "kanan") {
    xPosition += gerak;
    reduceHungerGerak();
    reduceSleepGerak();
    eatFood();
  } else if (arah == "bawah") {
    yPosition += gerak;
    reduceHungerGerak();
    reduceSleepGerak();
    eatFood();
  }

  character.style.left = xPosition + "px";
  character.style.top = yPosition + "px";
}

document.addEventListener("keydown", moveCharacter);

var character = document.getElementById("character");
var xPosition = 0;
var yPosition = 0;

function moveCharacter2(event) {
  switch (event.keyCode) {
    case 37:
      xPosition -= 30;
      reduceHungerGerak();
      reduceSleepGerak();
      eatFood();
      break;
    case 38:
      yPosition -= 30;
      reduceHungerGerak();
      reduceSleepGerak();
      eatFood();
      break;
    case 39:
      xPosition += 30;
      reduceHungerGerak();
      reduceSleepGerak();
      eatFood();
      break;
    case 40:
      yPosition += 30;
      reduceHungerGerak();
      reduceSleepGerak();
      eatFood();
      break;
  }

  character.style.left = xPosition + "px";
  character.style.top = yPosition + "px";
}

document.addEventListener("keydown", moveCharacter2);

//function buat makan mas bro
function eatFood() {
  var character = document.getElementById("character");
  var food = document.querySelector(".food");
  if (food) {
    var foodRect = food.getBoundingClientRect();
    var characterRect = character.getBoundingClientRect();
    var distance = Math.sqrt(
      Math.pow(
        foodRect.left +
          foodRect.width / 2 -
          (characterRect.left + characterRect.width / 2),
        2
      ) +
        Math.pow(
          foodRect.top +
            foodRect.height / 2 -
            (characterRect.top + characterRect.height / 2),
          2
        )
    );
    if (distance < characterRect.width / 2 + foodRect.width / 2) {
      food.remove();
      addHappy();
    }
  }
}

setInterval(function () {
  var body = document.querySelector("body");
  var food = document.createElement("div");
  food.classList.add("food");
  food.style.top = Math.floor(Math.random() * body.offsetHeight) + "px";
  food.style.left = Math.floor(Math.random() * body.offsetWidth) + "px";
  body.appendChild(food);
  setTimeout(function () {
    if (food) {
      happy -= 3;
      food.remove();
    }
  }, 8000);
}, 4000);

//Function waktu ingame || asumsikan 1 detik dunia asli adalah 2,4 detik ingame. Maka 1 hari di game adalah 10 menit di dunia asli.
var hari = 0;
var jam = 6; //biar selalu mulai game dari jam 6 pagi.
var menit = 0;
var detik = 0;

function waktu() {
  detik += 60;

  if (detik >= 60) {
    detik -= 60;
    menit++;
  }

  if (menit == 60) {
    menit -= 60;
    jam++;
  }

  if (jam == 24) {
    jam -= 24;
    hari++;
  }

  //ini cuma buat nambah angka 0 jika semua waktu kecuali hari masih dibawah 9.
  var tambahWaktu = "<b>Hari</b> ";
  tambahWaktu += hari + "<br><b>Jam</b> ";

  if (jam < 10) {
    tambahWaktu += " 0";
  }
  tambahWaktu += jam + ":";

  if (menit < 10) {
    tambahWaktu += "0";
  }
  tambahWaktu += menit + "";

  document.getElementById("waktugame").innerHTML = tambahWaktu;

  //ganti BG sesuai waktu
  var salam = "";
  const bodyElement = document.body;
  if (jam > 5 && jam < 10) {
    bodyElement.style.backgroundImage = "url('./Images/image.png')";
    salam += "Selamat pagi";
  } else if (jam > 9 && jam < 14) {
    bodyElement.style.backgroundImage = "url('./Images/image (1).png')";
    salam += "Selamat Siang";
  } else if (jam > 13 && jam < 19) {
    bodyElement.style.backgroundImage = "url('./Images/image (2).png')";
    salam += "Selamat Sore";
  } else {
    bodyElement.style.backgroundImage = "url('./Images/image (3).png')";
    salam += "Selamat Malam";
  }
}

setInterval(waktu, 500);

//buat load status bar
function loadStatusBars() {
  health = localStorage.getItem("health");

  hunger = localStorage.getItem("hunger");

  sleep = localStorage.getItem("sleep");

  happy = localStorage.getItem("happy");

  hari = localStorage.getItem("hari");

  jam = localStorage.getItem("jam");

  menit = localStorage.getItem("menit");

  detik = localStorage.getItem("detik");

  musik = localStorage.getItem("musik");
}

const selectedCharacter = localStorage.getItem("selectedCharacter");

const img = document.createElement("img");
img.src = selectedCharacter;

const selectedCharacterDiv = document.getElementById("character");
selectedCharacterDiv.appendChild(img);

localStorage.setItem("hari", hari);
			localStorage.setItem("jam", jam);
			localStorage.setItem("menit", menit);
			localStorage.setItem("detik", detik);
			

			document.getElementById("level").innerHTML = levelup;
			document.getElementById("selamat").innerHTML = salam;
			document.getElementById("waktugame").innerHTML = tambahWaktu;

      window.addEventListener('load', function() {
  const music = new Audio('Images/mixkit-game-show-fun-suspense-942.wav');
  music.loop = true;
  music.play();

  music.addEventListener('ended', function() {
    music.play();
  });
});