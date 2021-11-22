import express, { response } from 'express';
import isAdmin from './middlewares/admin';
import cancionesRoutes from './routes/canciones';
import config from './config/config';
import playlistRoutes from './routes/playlists';

const app = express();
//const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

cancionesRoutes(app);
playlistRoutes(app);

app.get('/prueba', async (req, res) => {
  const datos = {
    nombre: "Tatiana",
    apellido: "Albarracin",
    genero: "femenino"
  }
  const {nombre} = datos;
  const miArray = ["perro", "gato", datos]
  const [primero, segundo, tercero] = miArray;
  const nuevosDatos = {
    ...datos,
    ciudad: "Bucaramanga",
    profesion: "Ing. sistemas",
    nombre: "Carolina"
  }
  const nuevoArray = [...miArray, "otro", "nuevo"];
  const nombre2 = "Tatiana";
  const arrayNumeros = [1, 2, 5, 30, 3, 90, 4, 85];
  const mayor = Math.max(...arrayNumeros);
  // let x = 11;
  // const promesa = new Promise((resolve, reject) => {
  //   if(x == 10){
  //     resolve('Se resuelve la promesa')
  //   }else{
  //     reject('Rechaza promesa')
  //   }
  // });

  // await promesa.then(res => {
  //   console.log(res)
  // }).catch(error => {
  //   console.log(error);
  // })

  // const response = await promesa;

  // console.log('otra respuesta')
  res.status(200).send({mayor});
});

app.listen(config.PORT, () => {
  return console.log(`server is listening on ${config.PORT}`);
});