// https://github.com/motdotla/dotenv
const fs = require('fs');

const dev2prod = file => {
  // `yarn env dev` will copy `.env.dev` file to `.env` file.
  const from = `${file}.dev`;
  const to = file;

  fs.copyFileSync(from, to);

  // eslint-disable-next-line no-console
  console.log(`.env: ${from} copied to ${to}`);
};

dev2prod('.env');
