import jwt from "jsonwebtoken";
import config from "../config/config";

export let sign = (info: any) => {
    return jwt.sign(JSON.stringify(info), config.JWT_SECRET);
};

export let verify = (token: string) => {
    return jwt.verify(token, config.JWT_SECRET);
};
