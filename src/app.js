import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


// Major Configurations
app.use(express.json({limit: '16kb'})); // to handle JSON data with a size limit of 16kb
app.use(express.urlencoded({ extended: true, limit: '16kb' })); // to handle URL-encoded data with a size limit of 16kb like form submissions
app.use(express.static('public')); // to serve static files from the 'public' directory
app.use(cookieParser()); // to parse cookies from incoming requests

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});