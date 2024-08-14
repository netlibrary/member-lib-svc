import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

export const AuthSvc = {
    createJWT: (data: any): Promise<string> => {
        return new Promise((resolve, reject) => {
            jwt.sign(data, "your-256-bit-secret", (err, token) => {
                if (err) {
                    return reject(err);
                }

                return resolve(token as string);
            });
        });
    },
    createPwHash: async (pw: any) => {
        const saltRounds = 10;
        return  await bcrypt.hash(pw, saltRounds);
    },
    comparePassword(plainText, hash) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(plainText, hash, (err, result) => {
                if (err) {
                    return reject(err);
                }

                return resolve(result);
            });
        });
    }
}