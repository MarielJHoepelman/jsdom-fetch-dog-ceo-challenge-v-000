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
        console.log(json);
        debugger;
    })
})
