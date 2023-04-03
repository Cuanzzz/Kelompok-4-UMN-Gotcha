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
			localStorage.setItem("health", health);
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
			hunger -= 0.3;
			if (hunger < 0) {
				hunger = 0;
			}
			hungerbar.style.width = hunger + "%";
			localStorage.setItem("hunger", hunger);
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


		//SLEEP BAR
        var sleep = 100;
		var sleepbar = document.getElementById("sleep");

		function reduceSleep() {
			sleep -= 0.3;
			if (sleep < 0) {
				sleep = 0;
			}
			sleepbar.style.width = sleep + "%";
			localStorage.setItem("sleep", sleep);
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



		//HAPPY BAR
        var happy = 100;
		var happybar = document.getElementById("happy");

		function reduceHappy() {
			happy -= 0.3;
			if (happy < 0) {
				happy = 0;
			}
			happybar.style.width = happy + "%";
			localStorage.setItem("happy", happy);
		}

		setInterval(reduceHappy, 1000);

		
		function addHappy() {
			happy += 5;
			if (happy > 100) {
				happy = 100;
			}
			happybar.style.width = happy + "%";
		}



		//Function waktu ingame || asumsikan 1 detik dunia asli adalah 2,4 detik ingame. Maka 1 hari di game adalah 10 menit di dunia asli.
		var hari = 0;
		var jam = 6; //biar selalu mulai game dari jam 6 pagi.
		var menit = 0;
		var detik = 0;

		function waktu()
		{
			detik += 60;

			if(detik >= 60)
			{
				detik -= 60;
				menit++;
			}

			if(menit == 60)
			{
				menit -= 60;
				jam++;
			}

			if(jam == 24)
			{
				jam -=24;
				hari++;
			}


			//ini cuma buat nambah angka 0 jika semua waktu kecuali hari masih dibawah 9.
			var tambahWaktu = "<b>Hari</b> ";
			tambahWaktu += hari + "<br><b>Jam</b> ";
			
			if (jam < 10) 
      		{
				tambahWaktu += " 0";
			}
			tambahWaktu += jam + ":";
			
			if (menit < 10) 
      		{
				tambahWaktu += "0";
			}
			tambahWaktu += menit + "";


			//Buat Salam
			var salam =""
			const bodyElement = document.body;
			if(jam > 5 && jam < 10)
			{
				bodyElement.style.backgroundImage = "url('./Images/image.png')";;
				salam += "Selamat pagi";
			}else if(jam > 9 && jam < 14)
			{
				bodyElement.style.backgroundImage = "url('./Images/image (1).png')";;
				salam += "Selamat Siang";
			}else if(jam > 13 && jam < 19)
			{
				bodyElement.style.backgroundImage = "url('./Images/image (2).png')";;
				salam += "Selamat Sore"
			}else
			{
				bodyElement.style.backgroundImage = "url('./Images/image (3).png')";;
				salam += "Selamat Malam"
			}


			//buat level
			var levelup =""

			do
			{
				levelup += "<b>Level </b>" + hari;
			}while(levelup < hari)

			if(hari >= 0 && hari < 4)
			{
				levelup += " (bayi)";
			}else if(hari > 3 && hari < 6)
			{
				levelup += " (Remaja)";
			}else
			{
				levelup += " (Dewasa)";
			}


			//buat status bar hari 0 di set jadi 0.
			if(hari == 0)
			{
				health = 50;
				hunger = 50;
				sleep = 50;
				happy = 50;
			}


			localStorage.setItem("hari", hari);
			localStorage.setItem("jam", jam);
			localStorage.setItem("menit", menit);
			localStorage.setItem("detik", detik);
			

			document.getElementById("level").innerHTML = levelup;
			document.getElementById("selamat").innerHTML = salam;
			document.getElementById("waktugame").innerHTML = tambahWaktu;

		}

		setInterval(waktu, 0.1);

var selectedCharacter = localStorage.getItem("selectedCharacter");

var img = document.createElement("img");
img.src = selectedCharacter;

var selectedCharacterDiv = document.getElementById("character");
selectedCharacterDiv.appendChild(img);

window.addEventListener('load', function() {
	const music = new Audio('Images/mixkit-game-show-fun-suspense-942.wav');
	music.loop = true;
	music.play();
  
	music.addEventListener('ended', function() {
	  music.play();
	});
  });