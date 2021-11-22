"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const canciones_1 = __importDefault(require("./routes/canciones"));
const config_1 = __importDefault(require("./config/config"));
const playlists_1 = __importDefault(require("./routes/playlists"));
const app = (0, express_1.default)();
//const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
(0, canciones_1.default)(app);
(0, playlists_1.default)(app);
app.get('/prueba', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const datos = {
        nombre: "Tatiana",
        apellido: "Albarracin",
        genero: "femenino"
    };
    const { nombre } = datos;
    const miArray = ["perro", "gato", datos];
    const [primero, segundo, tercero] = miArray;
    const nuevosDatos = Object.assign(Object.assign({}, datos), { ciudad: "Bucaramanga", profesion: "Ing. sistemas", nombre: "Carolina" });
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
    res.status(200).send({ mayor });
}));
app.listen(config_1.default.PORT, () => {
    return console.log(`server is listening on ${config_1.default.PORT}`);
});
//# sourceMappingURL=app.js.map