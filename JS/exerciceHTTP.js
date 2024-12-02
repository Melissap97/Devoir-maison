//methode GET
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


// methode POST
fetch('https://jsonplaceholder.typicode.com/todos/2', {
   method: 'POST',
    body: JSON.stringify({
         userId: 1,
         id: 2,
         title: "quis ut nam facilis et officia qui",
        completed: false,
}),
 headers: {
      'Content-type': 'application/json; charset=UTF-8',
       },

}).then((response) => response.json())
.then((json) => console.log(json));