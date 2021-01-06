// Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');

// MONGO Connection URL
const MONGODB_CONNECTION_URL =
  'mongodb+srv://hikansh:hikansh1998@cluster0.bjpfh.mongodb.net/framily-dev?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connect to DB and start the server
mongoose
  .connect(MONGODB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
  )
  .catch((error) => console.log(error));
mongoose.set('useFindAndModify', false);

// Routes
app.use('/auth', authRouter);
