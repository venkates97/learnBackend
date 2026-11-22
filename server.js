const { default: mongoose } = require("mongoose");
const app = require("./app");
const { MANGOOSE_DB_URI, PORT, HOST } = require("./utils/config");



mongoose.connect(MANGOOSE_DB_URI)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
}
);



app.listen(PORT,HOST, () => {
  console.log("Server is running on port 3001");
});

