function myFunc1() {
  const url = "https://restcountries.com/v3.1/all";

  fetch(url)
    .then((response) => response.json())
    .then((data) => userData(data));

  const cards = document.querySelector(".cards");
  const input = document.querySelector("#input");

  const userData = (user) => {
    console.log(user);

    user.forEach((item) => {
      const card = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h2");

      card.classList.add("card");
      img.classList.add("img");
      title.classList.add("h1");
      img.src = item.flags.png;
      title.textContent = item.name.common;

      card.append(img, title);
      cards.appendChild(card);

      
    });
  };
}

myFunc1();
