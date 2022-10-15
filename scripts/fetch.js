let getData = async () => {
    let query = document.getElementById("query").value;
  
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`;
  
    let res = await fetch(url);
    let resdata = await res.json();
    // append(resdata.hotels);
    console.log(resdata.meals);
    display(resdata.meals);
  };
  
  let display = (data) => {
    let cont = document.getElementById("container");
    data.forEach(({ strMealThumb, strMeal, strInstructions }) => {
      let img = document.createElement("img");
      img.src = strMealThumb;
      let t = document.createElement("h3");
      t.innerText = strMeal;
  
      let p = document.createElement("p");
      p.innerText = strInstructions;
  
      let div = document.createElement("div");
      div.append(img, t, p);
      cont.append(div);
    });
  };
  
  