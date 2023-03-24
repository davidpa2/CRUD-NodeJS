import httpServer from "#Config/http.js";
import '#Config/env.js';
import connectDB from "#Config/db.js";

const bootstrap = async () => {
    await connectDB(process.env.MONGODB_URL);

    httpServer.listen(process.env.PORT, () => {
        console.log(`Server listening on port: ${process.env.PORT}`)
    });
};

bootstrap();