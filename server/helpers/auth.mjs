import bycrypt from "bcrypt";

export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bycrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bycrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

export const comparePassword = (password, hashed) => {
  return bycrypt.compare(password, hashed);
};
