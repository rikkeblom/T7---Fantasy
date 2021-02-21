const gender = ["female", "male", "non-binary"];

const urlRace = "https://kea21-7e1e.restdb.io/rest/race";
const urlFirstName = "https://kea21-7e1e.restdb.io/rest/firstname";
const urlOccupation = "https://kea21-7e1e.restdb.io/rest/occupation";
const options = {
  headers: {
    "x-apikey": "602f9e445ad3610fb5bb63d5",
  },
};

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

fetch(urlFirstName, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomFirstName(data);
  });

function randomFirstName(name) {
  const a = document.querySelectorAll(".name");
  const b = name[Math.floor(Math.random() * name.length)].x;
  a[0].textContent = b;
  a[1].textContent = b;
}

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

document.querySelector(".gender").textContent =
  gender[Math.floor(Math.random() * gender.length)];

//   <p>Meet <span class="name"></span></p>
//   <p>
//   <span class="name"></span> is a <span class="gender"></span>
//   <span class="race"></span> <span class="occupation"></span>
//   </p>
