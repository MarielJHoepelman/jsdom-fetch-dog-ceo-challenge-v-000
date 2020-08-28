document.addEventListener('DOMContentLoaded', function() {
  console.log('%c HI', 'color: firebrick')

  function fetchImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
        return json
      })
    }

    fetchImages().then(function(json){
      for (const element of json.message) {
        let image = document.createElement("img");
        image.setAttribute("width", "304");
        image.setAttribute("src", element);
        document.body.appendChild(image);
      }
    })

    function fetchBreeds() {
      return fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response) {
          return response.json();
        })
        .then(function(json){
          return json
        })
      }

      fetchBreeds().then(function(json){
        let breeds = Object.keys(json.message)
        let list = document.getElementById("dog-breeds")
        for (const element of breeds) {
          let li = document.createElement("li");
          li.innerHTML = element
          list.appendChild(li)
        }

        list.addEventListener('click', event => {
          if (event.target.nodeName === "li"){
            event.target.style.color = "red";
          }
        })
      })


})
