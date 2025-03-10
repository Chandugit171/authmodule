require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/routes");

const app = express();

// Connect to MongoDB
connectDB();


app.use(cors())

// Middleware
app.use(express.json());

// Routes
app.use("/api", authRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
