//* =================================================
//* GUESS MY NUMBER
//* Game Logic
//* ================================================


// //? 1-100 arasinda rasgele bir sayi tut.
let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

// //? Variables
let score = 10;
let topScore = 0;

// //? localStorage'de topScore adiyla bir degisken olustur.
// let topScore = localStorage.getItem("topScore") || 0;

// //? DOM'daki top-score degerini localStorage'den okuyarak guncelle.
// document.querySelector(".top-score").textContent = topScore;

// //* 2- CheckBtn basildiginda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value);
    const msg = document.querySelector(".msg");
    const body = document.querySelector("body");

    //! DİKKAT!👉 Bu guessInput'u, msg ve body yı dısarda tanımlasaydık global olurdu ve bır sefer tanımlamamız yeterli olurdu.
    //! Ama burada biz onları localde tanımladık, her defasında bu sefer tanımlamamız gerekiyor.Ama 🎇BELLEK KULLANIMI ACISINDAN LOCAL KULLANMAK DAHA MANTIKLI, yazma konusu acısından global yapmak mantıklı.LOCAL yapmamızın sebebi belleği daha effectif kullanmak için.
    //TODO 🎇Burada guessInput,msg,body sadece ve sadece check butonuna basıldıgında olusuyor 

    //     //? eger input girilmediyse Kullaniciya uyari ver.
    if (!guessInput) {
        msg.innerText = "Please enter a number";
        //! eger rasgele == input.value
    } else if (randomNumber === guessInput) {
        msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i> `;
        body.className = "bg-success";
        document.querySelector(".check-btn").disabled = true;
        if (score > topScore) {
            topScore = score;
            //!👆kullanıcı topScore a girdiğinde topScore her zaman küçük oldukca true döenecek ve alta gececek, scoreden yansıyacak.
            //! Bu güncelleme sadece yukarıdaKI VARIEBLES seviyesind e bır güncelleme 
            //! Ve bir dikkat etmemmız gerekende(score > topScore) {
            //! topScore = score; bunu yaparak DOM A nir sey yansıtmıyoruz yani top scorede görünen bır değişiklşik olmuyor. görünen bır degısıklık olması için👉 document.querySelector(".top-score").textContent = score; u yazıyoruz.

            //? localStorage'deki topScore degiskenini guncelle
            //? yanı kalıcı belleğe atma 
            localStorage.setItem("topScore", score);
            //? DOM'daki top-score degerini guncelle
            document.querySelector(".top-score").textContent = score;
        }
        document.querySelector(".secret-number").textContent = randomNumber;
        //TODO🎇👆 kullanıcı bildiğinde girilen number i görmesi için else-if hızsınsa yazdık

        //! eger rasgele!= input.value
    } else {
        score--;
        // yada score=-1; diyedebiliriz aynı sey
        if (score > 0) {
            guessInput > randomNumber
                ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i >DECREASE `)
                : (msg.innerHTML = `<i i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE `);
        } else {
            msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
            document.querySelector(".secret-number").textContent = randomNumber;
            body.className = "bg-black";
            document.querySelector(".check-btn").disabled = true;
        }

        document.querySelector(".score").textContent = score;
    }
});

// //* again basildiginda oyunu baslangic dgerlerin kur
document.querySelector(".again-btn").addEventListener("click", () => {
    score = 10;
    document.querySelector(".score").textContent = score;
    randomNumber = Math.round(Math.random() * 100);
    document.querySelector(".secret-number").textContent = "?";
    console.log(randomNumber);
    document.querySelector(".check-btn").disabled = false;
    // 👆global yapmadıgımız
    //  için tek tek bu sekilde yazıyoruz.Yani burada check butonunu yenılen dedik 
    document.querySelector("body").classList.remove("bg-success", "bg-black");
    document.querySelector(".guess-input").value = "";
    document.querySelector(".msg").innerText = `Starting...`;
});

document.querySelector(".guess-input").addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        document.querySelector(".check-btn").click();
    }

});

//! LOCALSTORAGE- SESSIONSTORAGE
myObj = { a: 1, b: 2, c: 3 };
localStorage.setItem("OBJ", JSON.stringify(myObj));
const readObj = localStorage.getItem("OBJ");
//? 👆json veya arrayı string haline geitiriyoruz bu sekilde
console.log(readObj)
const readOBJ = JSON.parse(localStorage.getItem("OBJ"));
//? 👆okurkende string haline getirdiğimiz arrayı veya objeyı tekrar eski haline getiriyoruz
console.log(typeof readObj);
console.log(typeof readOBJ);
// console.log(readOBJ);

// //* PUSEDUO
// //? eger score > topScore
// //?     topScore = score
// //? secret_number = gorunur.

// //! değilse
// //! eger score > 0
// //!   score = score -1
// //?   eğer rasgele < input.value
// //?     AZALT
// //?   degilse
// //?     ARTTIR
// //! degise
// //? Uzgunuz kaybetiniz.

// //* againBtn basildiginda kontrolleri yap
