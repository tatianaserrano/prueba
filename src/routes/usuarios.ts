import { Router } from "express";
import { agregarUsuarios, iniciarSesion } from "../controllers/usuariosController";

const usuariosRutas = (app) => {
    const router = Router();
    app.use(router);

    router.post('/agregarUsuario', agregarUsuarios);
    router.post('/iniciarSesion', iniciarSesion);

}

export default usuariosRutas;