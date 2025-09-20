let state = "view";
let profileData = {
  name: "Lava Kumar",
  role: "Frontend Developer",
  mail: "lava.kumar@exmple.com",
  bio: "Learning frontend development with focus on HTML, CSS, and React.",
  location: "Bangalore, India",
  image_src:
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9_i-a-k40JFgYSaPhX0xT19h9gDxWbftBA&s",
    // "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    "https://www.nuflowerfoods.com/wp-content/uploads/2024/09/person-dummy-Copy.jpg",
};

// DOM
const editIcon = document.getElementById("editIcon");
const viewIcon = document.getElementById("viewIcon");
const flipContainer = document.querySelector(".card-flip-container");

viewIcon.addEventListener("click", function () {
  const name = document.querySelector('.card_edit input[type="text"]').value;
  const role = document.querySelectorAll('.card_edit input[type="text"]')[1]
    .value;
  const email = document.querySelectorAll('.card_edit input[type="text"]')[2]
    .value;
  const bio = document.querySelector(".card_edit textarea").value;
  const location = document.querySelectorAll('.card_edit input[type="text"]')[3]
    .value;

  document.querySelector(".applicant_name").textContent = name;
  document.querySelectorAll(".card .role p")[0].textContent = role;
  document.querySelectorAll(".card .role p")[1].textContent = email;
  document.querySelectorAll(".card .role p")[2].textContent = `"${bio}"`;
  document.querySelectorAll(".card .role p")[3].textContent = location;
// Input
const nameInput = document.getElementById("name_input");
const roleInput = document.getElementById("role_input");
const mailInput = document.getElementById("mail_input");
const bioInput = document.getElementById("autoTextarea");
const locationInput = document.getElementById("location_input");
const profileImage = document.getElementById("prof_image");
const profileImageEdit = document.getElementById("prof_image_edit");

  state = "view";
  console.log("view");
  flipContainer.classList.remove("flipped");
});
function renderViewCard() {
  document.querySelector(".applicant_name").textContent = profileData.name;
  document.querySelectorAll(".card .role p")[0].textContent = profileData.role;
  document.querySelectorAll(".card .role p")[1].textContent = profileData.mail;
  document.querySelectorAll(
    ".card .role p"
  )[2].textContent = `"${profileData.bio}"`;
  document.querySelectorAll(".card .role p")[3].textContent =
    profileData.location;
  document.getElementById("prof_image").src = profileData.image_src;
  document.querySelector(".card:not(.card_edit) .profile").src =
    profileData.image_src;
}

function fillEditForm() {
  nameInput.value = profileData.name;
  roleInput.value = profileData.role;
  mailInput.value = profileData.mail;
  bioInput.value = profileData.bio;
  locationInput.value = profileData.location;
  // profileImage.value = profileData.image_src;
  profileImage.src = profileData.image_src;
  profileImageEdit.src = profileData.image_src;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
  if (
    nameInput.value.trim() === "" ||
    roleInput.value.trim() === "" ||
    mailInput.value.trim() === "" ||
    bioInput.value.trim() === "" ||
    locationInput.value.trim() === ""
  ) {
    alert("All fields are required.");
    return false;
  }

  if (!isValidEmail(mailInput.value.trim())) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}
// function validateForm() {
//   let isValid = true;

//   // Clear previous errors
//   document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

//   if (nameInput.value.trim() === "") {
//     document.getElementById("nameError").textContent =
//       "Name is required field.";
//     isValid = false;
//   }

//   if (roleInput.value.trim() === "") {
//     document.getElementById("roleError").textContent =
//       "Role is required field.";
//     isValid = false;
//   }

//   if (mailInput.value.trim() === "") {
//     document.getElementById("emailError").textContent =
//       "Email is required field.";
//     isValid = false;
//   } else if (!isValidEmail(mailInput.value.trim())) {
//     document.getElementById("emailError").textContent =
//       "Please enter a valid email.";
//     isValid = false;
//   }

//   if (bioInput.value.trim() === "") {
//     document.getElementById("bioError").textContent = "Bio is required field.";
//     isValid = false;
//   }

//   if (locationInput.value.trim() === "") {
//     document.getElementById("locationError").textContent =
//       "Location is required field.";
//     isValid = false;
//   }

//   return isValid;
// }

editIcon.addEventListener("click", function () {
  state = "edit";
  console.log("edit");
  fillEditForm();
  flipContainer.classList.add("flipped");
});

viewIcon.addEventListener("click", function (e) {
  e.preventDefault();

  if (!validateForm()) return;

  profileData.name = nameInput.value.trim();
  profileData.role = roleInput.value.trim();
  profileData.mail = mailInput.value.trim();
  profileData.bio = bioInput.value.trim();
  profileData.location = locationInput.value.trim();

  renderViewCard();
  flipContainer.classList.remove("flipped");
  state = "view";
});

renderViewCard();

// ---- image edit----

const imageEdit = document.getElementById("image_upload_icon");
const imageInput = document.getElementById("image_input");

imageEdit.addEventListener("click", () => {
  imageInput.click();
  console.log("clicked image edit");
  profileImageEdit.src = profileData.image_src;
});

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    profileImageEdit.src = imageURL;
    profileData.image_src = imageURL;

    const viewImage = document.getElementById("prof_image");
    if (viewImage) {
      viewImage.src = imageURL;
    }
  }
});