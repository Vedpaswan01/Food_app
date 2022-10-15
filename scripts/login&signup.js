let students = JSON.parse(localStorage.getItem("Userdata")) || [];
localStorage.setItem("login_status", false);

class User {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
  //validation of username and Password as per rules
  signup(email, password) {
    let isValidated = false;
    //validation  username and Password methods
    isValidated =
      this.#ValidatedUsername(email) && this.#ValidatedPassword(password);

    if (isValidated) {
      this.email = email;
      this.password = password;
      // console.log("User registered succesfully");
      alert("User registered succesfully");
      students.push(this);
      localStorage.setItem("Userdata", JSON.stringify(students));
    } else {
      console.log("Please follow username and password rules");
      alert("Please follow username and password rules");
    }
  }

  #ValidatedUsername(username) {
    //checking for rules
    return true;
  }

  #ValidatedPassword(password) {
    //cheking for password rules
    return true;
  }

  login(email, password, students) {
    students.forEach((element, i) => {
      if (email == element[i].email && password === element[i].password) {
        console.log("Logged In!");
      } else {
        console.log("Authentication faild");
      }
    });
  }
}

class Student extends User {
  constructor(name, id) {
    super(name, phone);
  }
}

user_signUp = (event) => {
  event.preventDefault();
  console.log("hello");

  let form = document.getElementById("form");

  let name = form.name.value;
  let phone = form.phone.value;
  let email = form.email.value;
  let password = form.Usrpass.value;

  let user = new Student(name, phone);

  user.signup(email, password);
};

UserSingIn = (event) => {
  event.preventDefault();

  let form = document.getElementById("form");

  let email = form.email.value;
  let password = form.Usrpass.value;

  let x = JSON.parse(localStorage.getItem("Userdata"));
  checkLogIn();

  function checkLogIn() {
    let isTrue = false;
    x.forEach((element) => {
      if (element.email == email && element.password == password) {
        isTrue = true;

        localStorage.setItem("login_status", true);
      }
    });

    if (isTrue) {
      alert("logged In");
      window.location.href = "index.html";
    } else {
      alert("wrong Credentials");
    }
  }
};
