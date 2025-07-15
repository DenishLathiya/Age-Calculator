const birthEl = document.querySelector("#birth");
const calculateBtn = document.querySelector("#btn");
const resultMsg = document.querySelector("#result");

function calculateAge() {
  const birthdayValue = birthEl.value;
  if (birthdayValue === "") {
    alert("please Enter valid Age..");
  } else {
    const age = getAge(birthdayValue);
    resultMsg.innerText = `Your Current Age is ${age} ${
      age > 1 ? "years" : "year"
    } old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

calculateBtn.addEventListener("click", calculateAge);
