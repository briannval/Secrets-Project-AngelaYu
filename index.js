// HINTS:
// 1. Import express and axios
import axios from "axios";
import express from "express";

// 2. Create an express app and set the port number.
const app = express();
const APIURL = 'https://secrets-api.appbrewery.com/random';
const PORT = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public"));
// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req,res) => {
    try{
        const response = await axios.get(APIURL);
        res.render("index.ejs", { secret : response.data.secret , user : response.data.username});
    }
    catch(error){
        res.status(404).send(error.message);
    }
})


// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
})
