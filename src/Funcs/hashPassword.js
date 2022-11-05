import crypto from 'crypto';

export async function hashPassword(password){
    const salt = process.env.SALT;
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash;
}