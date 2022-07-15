import { app } from './app';
import { PORT } from './config/env'; 

app.listen(PORT, (err?: Error): void => {
  if (err) return console.log(err);
  return console.log('Server is listening at port', PORT);
});