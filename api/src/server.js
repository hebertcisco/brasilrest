const app = require("./app");

const port = process.env.PORT || process.env.port || 3333;

app.listen(port, console.log(`Server running at port ${port}...`));
