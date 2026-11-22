const { default: mongoose } = require("mongoose");
const app = require("./app");

mongoose.connect("mongodb+srv://vekatesw:root@cluster0.db6kyd0.mongodb.net/")
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
}
);






app.listen(3001,'localhost', () => {
  console.log("Server is running on port 3001");
});

