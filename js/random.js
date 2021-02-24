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
const urlLastname = "https://kea21-7e1e.restdb.io/rest/lastname";
const options = {
  headers: {
    "x-apikey": "602f9e445ad3610fb5bb63d5",
  },
};

//Set Loading Screen Timer--------------------------------DONE--
window.addEventListener("load", setTimer);
function setTimer() {
  setTimeout(removeLoadScreen, 22000);
}
function removeLoadScreen() {
  document.querySelector("#load").classList.add("hidden");
}

//look through the link -------------DONE--
const urlParams = new URLSearchParams(window.location.search);
const linkrace = urlParams.get("race");
const linkgender = urlParams.get("gender");
const linkalignment = urlParams.get("alignment");

//get either the RACE you picked or a random race -- DONE --
if (linkrace == "human") {
  console.log("You chose human");
  document.querySelector(".race").textContent = "human";
  changeImage();
} else if (linkrace == "elf") {
  console.log("You chose elf");
  document.querySelector(".race").textContent = "elf";
  changeImage();
} else if (linkrace == "dwarf") {
  console.log("You chose dwarf");
  document.querySelector(".race").textContent = "dwarf";
  changeImage();
} else if (linkrace == "tiefling") {
  console.log("You chose tiefling");
  document.querySelector(".race").textContent = "tiefling";
  changeImage();
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
    changeImage();
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
  if (randPosAdjA == randPosAdjB) {
    console.log("new adjectives please");
    fetch(urlPosAdj, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        randomPosAdj(data);
      });
  } else if (randPosAdjA == randPosAdjC) {
    console.log("new adjectives please");
    fetch(urlPosAdj, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        randomPosAdj(data);
      });
  } else if (randPosAdjB == randPosAdjC) {
    console.log("new adjectives please");
    fetch(urlPosAdj, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        randomPosAdj(data);
      });
  } else {
    console.log("You got 3 unique adjectives");
  }
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
  document.querySelector(".gender").textContent = "female";
  randomFemaleName();
} else if (linkgender === "male") {
  console.log("You chose male");
  document.querySelector(".gender").textContent = "male";
  randomMaleName();
} else if (linkgender === "non-binary") {
  console.log("You chose non-binary");
  document.querySelector(".gender").textContent = "non-binary";
  randomNonBinaryName();
} else {
  const genderplace = document.querySelector(".gender");
  const charactergender = gender[Math.floor(Math.random() * gender.length)];
  genderplace.textContent = charactergender;
  if (charactergender == "female") {
    randomFemaleName();
  } else if (charactergender == "male") {
    randomMaleName();
  } else {
    randomNonBinaryName();
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

//random Lastname ------------DONE----
fetch(urlLastname, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomLastname(data);
  });

function randomLastname(name) {
  const randName = name[Math.floor(Math.random() * name.length)].x;
  console.log(randName);
  document.querySelector(".lastname").textContent = randName;
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

//change image based on race and gender--------------IN PROGRESS
//----------------HUMAN---------DONE--
function changeImage() {
  if (document.querySelector(".race").textContent == "human") {
    x = window.innerWidth;
    console.log(`Screenwidth is ${x}`);
    if (document.querySelector(".gender").textContent == "male") {
      if (window.innerWidth > 520 == true) {
        console.log("Insert Full body human MALE image");
        document.querySelector(".img-avatar").src = "../img/human-boy.svg";
      } else {
        console.log("Insert bust of human MALE image");
        document.querySelector(".img-avatar").src = "../img/human-boy-bust.svg";
      }
    } else if (document.querySelector(".gender").textContent == "female") {
      if (window.innerWidth > 520 == true) {
        console.log("Insert Full body human FEMALE image");
        document.querySelector(".img-avatar").src = "../img/human-girl.svg";
      } else {
        console.log("Insert BUST of human FEMALE image");
        document.querySelector(".img-avatar").src =
          "../img/human-girl-bust.svg";
      }
    } else {
      console.log("Insert human NON-BINARY image");
      if (window.innerWidth > 520 == true) {
        console.log("Insert Full body human NON-BINARY image");
        document.querySelector(".img-avatar").src = "../img/human-girl.svg";
      } else {
        console.log("Insert bust of human NON-BINARY image");
        document.querySelector(".img-avatar").src =
          "../img/human-girl-bust.svg";
      }
    }
    //----------------DWARF-----------------DONE--
  } else if (document.querySelector(".race").textContent == "dwarf") {
    if (document.querySelector(".gender").textContent == "male") {
      if (window.innerWidth > 520 == true) {
        console.log("Insert Full body dwarf MALE image");
        document.querySelector(".img-avatar").src = "../img/dwarf-boy.svg";
      } else {
        console.log("Insert BUST of dwarf MALE image");
        document.querySelector(".img-avatar").src = "../img/dwarf-boy.svg";
      }
    } else if (document.querySelector(".gender").textContent == "female") {
      if (window.innerWidth > 520 == true) {
        console.log("Insert Full body dwarf FEMALE image");
        document.querySelector(".img-avatar").src = "../img/dwarf-girl.svg";
      } else {
        console.log("Insert BUST of dwarf FEMALE image");
        document.querySelector(".img-avatar").src = "../img/dwarf-girl.svg";
      }
    } else {
      if (window.innerWidth > 520 == true) {
        console.log("Insert Full body dwarf NON-BINARY image");
        document.querySelector(".img-avatar").src = "../img/dwarf-boy.svg";
      } else {
        console.log("Insert bust of dwarf NON-BINARY image");
        document.querySelector(".img-avatar").src = "../img/dwarf-boy.svg";
      }
    }
    //-------------TIEFLING-----------DONE--
  } else if (document.querySelector(".race").textContent == "tiefling") {
    if (document.querySelector(".gender").textContent == "male") {
      if (window.innerWidth > 520 == true) {
        console.log("Insert Full body tiefling MALE image");
        document.querySelector(".img-avatar").src = "../img/tiefling-boy.svg";
      } else {
        console.log("Insert BUST of tiefling MALE image");
        document.querySelector(".img-avatar").src =
          "../img/tiefling-boy-bust.svg";
      }
    } else if (document.querySelector(".gender").textContent == "female") {
      if (window.innerWidth > 520 == true) {
        console.log("Insert Full body tiefling FEMALE image");
        document.querySelector(".img-avatar").src = "../img/tiefling-girl.svg";
      } else {
        console.log("Insert BUST of tiefling FEMALE image");
        document.querySelector(".img-avatar").src =
          "../img/tiefling-girl-bust.svg";
      }
    } else {
      if (window.innerWidth > 520 == true) {
        console.log("Insert Full body tiefling NON-BINARY image");
        document.querySelector(".img-avatar").src = "../img/tiefling-boy.svg";
      } else {
        console.log("Insert bust of tiefling NON-BINARY image");
        document.querySelector(".img-avatar").src =
          "../img/tiefling-boy-bust.svg";
      }
    }

    //--------------ELF----------------
  } else if (document.querySelector(".race").textContent == "elf") {
    if (document.querySelector(".gender").textContent == "male") {
      if (window.innerWidth > 520 == true) {
        console.log("Insert Full body elf MALE image");
        document.querySelector(".img-avatar").src = "../img/elf-boy.svg";
      } else {
        console.log("Insert BUST of elf MALE image");
        document.querySelector(".img-avatar").src = "../img/elf-boy-bust.svg";
      }
    } else if (document.querySelector(".gender").textContent == "female") {
      if (window.innerWidth > 520 == true) {
        console.log("Insert Full body elf FEMALE image");
        document.querySelector(".img-avatar").src = "../img/elf-girl.svg";
      } else {
        console.log("Insert BUST of elf FEMALE image");
        document.querySelector(".img-avatar").src = "../img/elf-girl-bust.svg";
      }
    } else {
      if (window.innerWidth > 520 == true) {
        console.log("Insert Full body elf NON-BINARY image");
        document.querySelector(".img-avatar").src = "../img/elf-girl.svg";
      } else {
        console.log("Insert bust of elf NON-BINARY image");
        document.querySelector(".img-avatar").src = "../img/elf-girl-bust.svg";
      }
    }

    //--------------Back-Up-Category----------
  } else {
    if (document.querySelector(".gender").textContent == "male") {
      console.log("Insert -other- MALE image");
    } else if (document.querySelector(".gender").textContent == "female") {
      console.log("Insert -other- FEMALE image");
    } else {
      console.log("Insert -other- NON-BINARY image");
    }
  }
}
