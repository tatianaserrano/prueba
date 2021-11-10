import express, { response } from 'express';
import isAdmin from './middlewares/admin';
import cancionesRoutes from './routes/canciones';
import config from './config/config';

const app = express();
//const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cancionesRoutes(app);

app.get('/prueba', async (req, res) => {
  let x = 11;
  const promesa = new Promise((resolve, reject) => {
    if(x == 10){
      resolve('Se resuelve la promesa')
    }else{
      reject('Rechaza promesa')
    }
  });

  await promesa.then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error);
  })

  const response = await promesa;

  console.log('otra respuesta')
  //res.status(200).send("<p>some html</p>");
});

app.listen(config.PORT, () => {
  return console.log(`server is listening on ${config.PORT}`);
});