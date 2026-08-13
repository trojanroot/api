import dotenv from "dotenv";

dotenv.config();

const config={
 port:process.env.PORT || 9000,//THI IS FROM .ENV FILE
};

export default config;