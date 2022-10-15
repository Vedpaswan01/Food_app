import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let getData = async () => {
  let query = document.getElementById("query").value;

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  let res = await fetch(url);
  let resdata = await res.json();

  console.log(resdata.meals);
  display(resdata.meals);
};

document.getElementById("btn").addEventListener("click", getData);

let display = (data) => {
  let cont = document.getElementById("container");
  cont.innerHTML = "";
  data.forEach(({ strMealThumb, strMeal, strInstructions }) => {
    let img = document.createElement("img");
    img.src = strMealThumb;

    let div2 = document.createElement("div");
    div2.setAttribute("id", "foodimg");

    div2.append(img);

    let t = document.createElement("h3");
    t.innerText = strMeal;

    let p = document.createElement("p");
    p.innerText = strInstructions;
    let div1 = document.createElement("div");
    div1.setAttribute("id", "discription");
    div1.append(t, p);
    let div = document.createElement("div");
    div.append(img, div1, div2);
    cont.append(div);
  });
};

let students = JSON.parse(localStorage.getItem("Userdata"));

if (localStorage.getItem("login_status")) {
  let div = document.getElementById("dispay_user_name");
  div.setAttribute("id", "user_icon_div");
  let p = document.createElement("p");
  p.innerText = students[0].name;
  let img = document.createElement("img");
  img.src =
    "https://icon-library.com/images/profile-icon-images/profile-icon-images-6.jpg";
  div.append(img, p);
}
