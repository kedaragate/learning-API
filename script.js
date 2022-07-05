const usersDiv = document.querySelector(".cards");

fetch("https://dummyapi.io/data/v1/user", {
  method: "GET",

  headers: {
    "app-id": "62c3859db3b09459b4b1f8a0",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data.data));
