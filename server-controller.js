const app = require("./server");

const PORT = 8080;

//start server
app.listen(PORT, () => {
    console.log(`Now listening on PORT ${PORT}`);
});

