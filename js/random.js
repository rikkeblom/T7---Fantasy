const gender = ["female", "male", "non-binary"];
const professionalism = [
  "Professional",
  "Amateur",
  "Expert",
  "Licensed",
  "Novice",
];
const urlRace = "https://kea21-7e1e.restdb.io/rest/race";
const urlMaleName = "https://kea21-7e1e.restdb.io/rest/malename";
const urlFemaleName = "https://kea21-7e1e.restdb.io/rest/femalename";
const urlGenderNeutralName =
  "https://kea21-7e1e.restdb.io/rest/genderneutralname";
const urlOccupation = "https://kea21-7e1e.restdb.io/rest/occupation";
const urlBackground = "https://kea21-7e1e.restdb.io/rest/background";
const urlAlignment = "https://kea21-7e1e.restdb.io/rest/alignment";
const urlMannerism = "https://kea21-7e1e.restdb.io/rest/mannerism";
const urlObjective = "https://kea21-7e1e.restdb.io/rest/objective";
const urlPosAdj = "https://kea21-7e1e.restdb.io/rest/positiveadjective";
const urlNegAdj = "https://kea21-7e1e.restdb.io/rest/negativeadjective";
const options = {
  headers: {
    "x-apikey": "602f9e445ad3610fb5bb63d5",
  },
};

//look through the link -------------DONE--
const urlParams = new URLSearchParams(window.location.search);
const linkrace = urlParams.get("race");
const linkgender = urlParams.get("gender");
const linkalignment = urlParams.get("alignment");

//get either the RACE you picked or a random race -- DONE --
if (linkrace == "human") {
  console.log("You chose human");
  document.querySelector(".race").textContent = "human";
} else if (linkrace == "elf") {
  console.log("You chose elf");
  document.querySelector(".race").textContent = "elf";
} else if (linkrace == "dwarf") {
  console.log("You chose dwarf");
  document.querySelector(".race").textContent = "dwarf";
} else if (linkrace == "tiefling") {
  console.log("You chose tiefling");
  document.querySelector(".race").textContent = "tiefling";
} else {
  console.log("You didn't choose so you got random");
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
}

//random professionalism adjective -----------DONE---
const randProfessionalism =
  professionalism[Math.floor(Math.random() * professionalism.length)];
document.querySelector(".professionalism").textContent = randProfessionalism;

//get either the ALIGNMENT you picked or a random one --DONE--
if (linkalignment == "lawful-good") {
  console.log("You chose lawful-good");
  document.querySelector("#alignment").textContent = "lawful-good";
} else if (linkalignment == "neutral-good") {
  console.log("You chose neutral-good");
  document.querySelector("#alignment").textContent = "neutral-good";
} else if (linkalignment == "chaotic-good") {
  console.log("You chose chaotic-good");
  document.querySelector("#alignment").textContent = "chaotic-good";
} else if (linkalignment == "lawful-neutral") {
  console.log("You chose lawful-neutral");
  document.querySelector("#alignment").textContent = "lawful-neutral";
} else if (linkalignment == "true-neutral") {
  console.log("You chose true-neutral");
  document.querySelector("#alignment").textContent = "true-neutral";
} else if (linkalignment == "chaotic-neutral") {
  console.log("You chose chaotic-neutral");
  document.querySelector("#alignment").textContent = "chaotic-neutral";
} else if (linkalignment == "lawful-evil") {
  console.log("You chose lawful-evil");
  document.querySelector("#alignment").textContent = "lawful-evil";
} else if (linkalignment == "neutral-evil") {
  console.log("You chose neutral-evil");
  document.querySelector("#alignment").textContent = "neutral-evil";
} else if (linkalignment == "chaotic-evil") {
  console.log("You chose chaotic-evil");
  document.querySelector("#alignment").textContent = "chaotic-evil";
} else {
  fetch(urlAlignment, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      randomAlignment(data);
    });

  function randomAlignment(alignment) {
    document.querySelector("#alignment").textContent =
      alignment[Math.floor(Math.random() * alignment.length)].x;
  }
}

//random occupation-----------------------DONE--
fetch(urlOccupation, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomOccupation(data);
  });

function randomOccupation(occupation) {
  const randOccupation =
    occupation[Math.floor(Math.random() * occupation.length)].x;
  console.log(randOccupation);
  document.querySelector(".occupation").textContent = randOccupation;
}

//random objective-----------------------DONE--
fetch(urlObjective, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomObjective(data);
  });

function randomObjective(objective) {
  const randObjective =
    objective[Math.floor(Math.random() * objective.length)].x;
  console.log(randObjective);
  document.querySelector(".objective").textContent = randObjective;
}

//random mannerism----------------------DONE---
fetch(urlMannerism, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomMannerism(data);
  });

function randomMannerism(mannerism) {
  const randMannerism =
    mannerism[Math.floor(Math.random() * mannerism.length)].x;
  console.log(randMannerism);
  document.querySelector(".mannerism").textContent = randMannerism;
}

//random Possitive Adjectives---------------------DONE--
fetch(urlPosAdj, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomPosAdj(data);
  });

function randomPosAdj(adj) {
  const randPosAdjA = adj[Math.floor(Math.random() * adj.length)].x;
  const randPosAdjB = adj[Math.floor(Math.random() * adj.length)].x;
  const randPosAdjC = adj[Math.floor(Math.random() * adj.length)].x;
  console.log(`they are ${randPosAdjA}, ${randPosAdjB} and ${randPosAdjC}`);
  const a = document.querySelectorAll(".positiveAdjective");
  a[0].textContent = randPosAdjA;
  a[1].textContent = randPosAdjB;
  a[2].textContent = randPosAdjC;
}

//random Negative Adjectives---------------------------------
fetch(urlNegAdj, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomNegAdj(data);
  });

function randomNegAdj(adj) {
  document.querySelector(".negativeAdjective").textContent =
    adj[Math.floor(Math.random() * adj.length)].x;
}

//get either the gender you picked or a random --DONE--
if (linkgender === "female") {
  console.log("You chose female");
  randomFemaleName();
} else if (linkgender === "male") {
  console.log("You chose male");
  randomMaleName();
} else if (linkgender === "non-binary") {
  console.log("You chose non-binary");
  randomNonBinaryName();
} else {
  const genderplace = document.querySelector(".gender");
  const charactergender = gender[Math.floor(Math.random() * gender.length)];
  genderplace.textContent = charactergender;
  if (charactergender == "female") {
    randomFemaleName();
  } else {
    randomMaleName();
  }
}

function randomMaleName(name) {
  console.log("male name");
  fetch(urlMaleName, options)
    .then((response) => {
      return response.json();
    })
    .then((name) => {
      const a = document.querySelectorAll(".name");
      const b = name[Math.floor(Math.random() * name.length)].x;
      a[0].textContent = b;
      a[1].textContent = b;
      a[2].textContent = b;
      console.log(b);
      const c = document.querySelectorAll(".pronoun");
      c[0].textContent = "he";
      c[1].textContent = "he";
      c[2].textContent = "him";
      c[3].textContent = "him";
    });
}

function randomNonBinaryName(name) {
  console.log("non-binary name");
  fetch(urlGenderNeutralName, options)
    .then((response) => {
      return response.json();
    })
    .then((name) => {
      const a = document.querySelectorAll(".name");
      const b = name[Math.floor(Math.random() * name.length)].x;
      a[0].textContent = b;
      a[1].textContent = b;
      a[2].textContent = b;
      console.log(b);
      document.querySelector("#remove").classList.add("hidden");
      const c = document.querySelectorAll(".pronoun");
      c[0].textContent = "they";
      c[1].textContent = "they";
      c[2].textContent = "them";
      c[3].textContent = "them";
    });
}

function randomFemaleName(name) {
  console.log("female name");
  fetch(urlFemaleName, options)
    .then((response) => {
      return response.json();
    })
    .then((name) => {
      const a = document.querySelectorAll(".name");
      const b = name[Math.floor(Math.random() * name.length)].x;
      a[0].textContent = b;
      a[1].textContent = b;
      a[2].textContent = b;
      console.log(b);
      const c = document.querySelectorAll(".pronoun");
      c[0].textContent = "she";
      c[1].textContent = "she";
      c[2].textContent = "her";
      c[3].textContent = "her";
    });
}

//random background ------------DONE----
fetch(urlBackground, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomBackground(data);
  });

function randomBackground(background) {
  const randBackground =
    background[Math.floor(Math.random() * background.length)].x;
  console.log(randBackground);
  document.querySelector(".background").textContent = randBackground;
}
