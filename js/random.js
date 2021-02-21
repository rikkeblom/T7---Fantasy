const gender = ["female", "male", "non-binary"];
const urlRace = "https://kea21-7e1e.restdb.io/rest/race";
const urlMaleName = "https://kea21-7e1e.restdb.io/rest/malename";
const urlFemaleName = "https://kea21-7e1e.restdb.io/rest/femalename";
const urlOccupation = "https://kea21-7e1e.restdb.io/rest/occupation";
const urlBackground = "https://kea21-7e1e.restdb.io/rest/background";
const options = {
  headers: {
    "x-apikey": "602f9e445ad3610fb5bb63d5",
  },
};

//random race-------------------------
fetch(urlRace, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomRace(data);
  });

function randomRace(race) {
  document.querySelector(".race").textContent =
    race[Math.floor(Math.random() * race.length)].x;
}

//random occupation-------------------------
fetch(urlOccupation, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomOccupation(data);
  });

function randomOccupation(occupation) {
  document.querySelector(".occupation").textContent =
    occupation[Math.floor(Math.random() * occupation.length)].x;
}

//random background-------------------------
fetch(urlBackground, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomBackground(data);
  });

function randomBackground(background) {
  document.querySelector("#background").textContent =
    background[Math.floor(Math.random() * background.length)].x;
}

//random gender-------------------------
const genderplace = document.querySelector(".gender");
const charactergender = gender[Math.floor(Math.random() * gender.length)];
genderplace.textContent = charactergender;
randomName();

//random name (based on gender)----------------------
function randomName() {
  if (charactergender == "female") {
    console.log("female name");
    fetch(urlFemaleName, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        randomFemaleName(data);
      });
  } else {
    console.log("male or non-binary name");
    fetch(urlMaleName, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        randomMaleName(data);
      });
  }
}

function randomFemaleName(name) {
  const a = document.querySelectorAll(".name");
  const b = name[Math.floor(Math.random() * name.length)].x;
  a[0].textContent = b;
  a[1].textContent = b;
  console.log(b);
  const c = document.querySelectorAll(".pronoun");
  c[0].textContent = "she";
}

function randomMaleName(name) {
  const a = document.querySelectorAll(".name");
  const b = name[Math.floor(Math.random() * name.length)].x;
  a[0].textContent = b;
  a[1].textContent = b;
  console.log(b);
  const c = document.querySelectorAll(".pronoun");
  c[0].textContent = "he";
}
