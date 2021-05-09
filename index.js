const Imap = require("imap");
const { inspect } = require("util");

const imap = new Imap({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  tls: true,
});

console.log(imap);
