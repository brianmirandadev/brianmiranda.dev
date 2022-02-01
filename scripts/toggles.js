// NAME BUTTON TOGGLE

var nameButton = document.getElementsByClassName("buttonname")[0];

function activateName() {
  nameButton.classList.add("activated");
}

document,
  addEventListener("click", function (e) {
    let clickInsideButton = nameButton.contains(e.target);

    if (!clickInsideButton) {
      nameButton.classList.remove("activated");
    }
  });

// EMAIL BUTTON TOGGLE

var emailButton = document.getElementsByClassName("buttonemail")[0];

function activateEmail() {
  emailButton.classList.add("activated");
}

document,
  addEventListener("click", function (e) {
    let clickInsideButton = emailButton.contains(e.target);

    if (!clickInsideButton) {
      emailButton.classList.remove("activated");
    }
  });

// DETAILS BUTTON TOGGLE

var detailsButton = document.getElementsByClassName("buttondetails")[0];

function activateDetails() {
  detailsButton.classList.add("activated");
}

document,
  addEventListener("click", function (e) {
    let clickInsideButton = detailsButton.contains(e.target);

    if (!clickInsideButton) {
      detailsButton.classList.remove("activated");
    }
  });
