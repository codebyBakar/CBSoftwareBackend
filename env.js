import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT
export const MONGODBURL = process.env.MONGOURL
export const FRONTURL = process.env.FRONTENDURL