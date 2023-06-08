function passwordValidator(password) {
  let passwordLenght = password.length;
  let numCounter = 0;
  let validPassword = true;
  let notValidChar = true;

  for (let index = 0; index < passwordLenght; index++) {
    let currentChar = password[index].charCodeAt();
    let isNumber = currentChar >= 48 && currentChar <= 57;
    let isLargeLetter = currentChar >= 65 && currentChar <= 90;
    let isSmallLetter = currentChar >= 97 && currentChar <= 122;

    if (!(isNumber || isLargeLetter || isSmallLetter)) {
      validPassword = false;
      notValidChar = false;
    }
    if (currentChar >= 48 && currentChar <= 57) {
      numCounter++;
    }
  }

  if (passwordLenght < 6 || passwordLenght > 10) {
    console.log("Password must be between 6 and 10 characters");
    validPassword = false;
  }

  if (!notValidChar) {
    console.log("Password must consist only of letters and digits");
  }

  if (numCounter < 2) {
    console.log("Password must have at least 2 digits");
    validPassword = false;
  }

  if (validPassword) {
    console.log(`Password is valid`);
  }
}
passwordValidator("logIn");

// (currentChar < 48 && currentChar > 57) ||
//       (currentChar < 65 && currentChar > 90) ||
//       (currentChar < 97 && currentChar > 122)
