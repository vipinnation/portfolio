const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Message = require("./message");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

let url =
  "mongodb+srv://vipinnation:McEOoqLcHWNKhEOS@cluster0.gunhg14.mongodb.net/portfolio";
mongoose
  .connect(url)
  .then((result) => {
    console.log(
      `Mongodb connected successfully to host ${result.connection.host}`
    );
  })
  .catch((err) => {
    console.log(`Database not connected  \n ${err}`);
  });

app.post("/request", async (req, res) => {
  try {
    console.log(req.body);
    let newMessage = new Message(req.body);
    await newMessage.save();
    res.status(200).json({ msg: "Request sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Something went wrong, Please try again" });
  }
});

app.listen(5000, () => console.log("Server is running on Port 5000"));
