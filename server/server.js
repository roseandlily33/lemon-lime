const express = require("express");
const path = require("path");
const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const router = require("./routers");
const { connectToMongoose } = require("./utils/connection");
const PORT = process.env.PORT || 8000;
require("dotenv").config();
console.log('DIRNAME', __dirname);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_ROUTE,
    methods: ["GET", "POST", "PUT", "DELETE"],
    //allowedHeaders: ['Content-Type', 'Authorization']
    //credentials: true,
    //preflightContinue: false,
    //optionsSuccessStatus: 204,
  })
);
const buildPath = path.join(__dirname, "../client/build");
// const buildPath = path.join(__dirname, "client/build");
if (fs.existsSync(buildPath)) {
  console.log("Build folder exists:", buildPath);
  app.use(express.static(buildPath));
} else {
  console.log("Build folder does not exist:", buildPath);
}

// app.use(express.static(path.join(__dirname, "../client/build")));

app.use("/", router);

router.use((req, res, next) => {
  console.log('--- Incoming Request ---');
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.originalUrl}`);
  console.log('Params:', req.params);
  console.log('Query:', req.query);
  console.log('Body:', req.body);
  console.log('-------------------------');
  next(); 
});
// ../
const indexHtmlPath = path.join(__dirname, "client/build/index.html");
if (indexHtmlPath) {
  console.log("Index html path exists", indexHtmlPath);
} else {
  console.log("Index html path does not exist");
}

app.get("*", (req, res) => {
  // Changed from join to resolve
  //../
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  // res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

async function startServer() {
  await connectToMongoose();
  await app.listen(PORT, () => {
    console.log("Listening on port mongoose", PORT);
  });
  if (process.env.ENV_DEV_PROD === "development") {
    // DEVELOPMENT ONLY - Uncomment any time you need to update a model
    // await updateUsers();
    // await updateCompanies();
    // await updateCourses();
    // runCronJobNow();
  }
}

startServer();
