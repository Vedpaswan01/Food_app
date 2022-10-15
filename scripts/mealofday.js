if (localStorage.getItem("login_status")) {
  let mod = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;

    let res = await fetch(url);
    let resdata = await res.json();

    console.log(resdata);
    display(resdata.meals);
  };

  mod();

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
} else {
  alert("Please Log In before continue");
}
