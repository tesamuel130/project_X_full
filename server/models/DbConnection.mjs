import mongoose from "mongoose";

//database connection
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log(`database connected`))
    .catch((err) => console.log("databse is not connected", err));
};
