fetch('http://localhost:5000/pantalones')
    .then(data => data.json())
        .then(data => console.log(data))