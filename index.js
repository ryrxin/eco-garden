const app = require("./src/app");
const PORT = 3000;

// START SERVER
app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
});
