import express, {
    Application,
    Express,
    NextFunction,
    Request,
    Response,
} from "express";
import cors from "cors";
import colors from "colors";
import connectDB from "./dbconfig/db";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler";
import dotenv from "dotenv";
import publicRoutes from "./routes/publicRoutes";
import burnsRoutes from "./routes/burnsRoutes";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 5001;

// Use CORS middleware with default options
app.use(cors());

// Middleware for parsing cookies
app.use(cookieParser());

// Middleware for parsing JSON and URL-encoded data
app.use(express.json({ limit: "50mb" })); // Increase limit as needed
app.use(
    express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

// Routes configuration
interface RouteConfig {
    [key: string]: any;
}

const routesConfig: RouteConfig = {
    public: publicRoutes,
    burn: burnsRoutes,
};

// Function to register routes
const registerRoutes = (
    app: Application,
    basePath: string,
    routes: Record<string, any>
) => {
    Object.entries(routes).forEach(([key, routeHandler]) => {
        app.use(`${basePath}/${key}`, routeHandler);
    });
};

// Register all routes with the base path /backend
registerRoutes(app, "/backend", routesConfig);

// Error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
});

// Connect to the database and start the server
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(colors.green(`Server is running on port ${port}`));
        });
    })
    .catch((err: Error) => {
        console.error(
            colors.red(`Failed to connect to the database: ${err.message}`)
        );
    });
