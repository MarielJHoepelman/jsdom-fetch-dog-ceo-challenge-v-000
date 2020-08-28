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
})
