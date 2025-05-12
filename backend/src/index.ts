import express from "express";
import route from "./routes/index.route";

const replicaApp = process.env.APP_NAME || "replicaApp";
const PORT = 3000 ;
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(`requested from [${replicaApp}] ${req.method} ${req.url}`);
    next();
})
app.use(route);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});