document.addEventListener('DOMContentLoaded', function() {
  console.log('%c HI', 'color: firebrick')

  function fetchUrl(url) {
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
        return json
      })
    }

  fetchUrl("https://dog.ceo/api/breeds/image/random/4").then(function(json){
    for (const element of json.message) {
      let dogContainer = document.getElementById("dog-image-container")
      let image = document.createElement("img");
      image.setAttribute("width", "304");
      image.setAttribute("src", element);
      dogContainer.appendChild(image);
    }
  })

  let list = document.getElementById("dog-breeds")

  fetchUrl("https://dog.ceo/api/breeds/list/all").then(function(json){
    let breeds = Object.keys(json.message)

    renderBreeds(breeds)
  })

  function renderBreeds(breeds){
    for (const element of breeds) {
      let li = document.createElement("li");
      li.innerHTML = element
      list.appendChild(li)
    }
  }


})
