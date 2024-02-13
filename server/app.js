// app.js
const express = require("express");
const authRoutes = require('./src/routes/firebaseRoute');

const app = express();
app.use('/auth', authRoutes);

module.exports = app;
const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
    console.log(`Server is running on port ${PORT}`);
});