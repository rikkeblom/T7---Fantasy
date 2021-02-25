document.querySelector("#button-5").addEventListener("click", sendForm);

function sendForm() {
  const race = document.querySelector("#race").value;
  const gender = document.querySelector("#gender").value;
  const alignment = document.querySelector("#alignment").value;
  const occupation = document.querySelector("#occupation").value;
  console.log(
    `You have selected a ${alignment} ${gender} ${race} ${occupation}`
  );
  const link = `characterpage.html?race=${race}&gender=${gender}&alignment=${alignment}&occupation=${occupation}`;
  console.log(link);
  document.querySelector("#button-5 a").href = link;
}
