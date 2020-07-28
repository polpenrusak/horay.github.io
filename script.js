function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute(`src`, `img/${gambar[i++]}.png`);
    if (i == gambar.length) i = 0;
  }, 100);
}

const getPilihanOrang = document.querySelectorAll("li img");
let win = 1;
let lose = 1;
getPilihanOrang.forEach(function (img) {
  img.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = img.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute(`src`, `img/${pilihanComputer}.png`);

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
      const skorKomputer = document.querySelector(".skorKomputer");
      const skorPlayer = document.querySelector(".skorPlayer");

      if (hasil == "MENANG!") {
        skorPlayer.innerHTML = win++;
      }
      if (hasil == "KALAH!") {
        skorKomputer.innerHTML = lose++;
      }
    }, 1000);
  });
});
