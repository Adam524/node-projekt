const dbPassword = 'Z492xH0RepU2i8UI';
const dbURL = `mongodb+srv://admin:${dbPassword}@cluster0.debea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = {
  db: dbURL,
  keySesion: ['TWOJKLUCZ'],
  maxAgeSesion: 24 * 60 * 60 * 1000,
};
