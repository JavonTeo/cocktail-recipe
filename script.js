const express = require("express");
const app = express();
const axios = require('axios');
const PORT = 8080;
const URL = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

axios.get(URL)
.then((response)=> {
    console.log(response.json());
})

// app.use(express.json());

// app.listen(PORT, () => console.log(`its alive on http://localhost:${PORT}`));

// app.get('/tshirt', (req, res) => {
//     res.status(200).send({
//         test: "200_OK"
//     })
// })

// app.post('/tshirt/:id', (req, res) => {
    
//     const {id} = req.params;
//     const { logo } = req.body();

//     if (!logo) {
//         res.status(418).send({ message : "We need a logo"});
//     }
//     res.status(200).send({
//         tshirt: `${logo} with ID: ${id}`
//     })
// })