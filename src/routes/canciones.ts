import { Router } from 'express';
import {actualizarCancion, agregarCancion, eliminarCancion, obtenerCancion, obtenerCanciones} from "../controllers/cancionesController"
import isAdmin from '../middlewares/admin';

const cancionesRoutes = (app) => {
    const router = Router();
    app.use('/', router);
    // router.use(isAdmin)
    
    router.get('/obtenerCanciones', obtenerCanciones);
    router.get('/obtenerCancion/:id', obtenerCancion);
    router.post('/agregarCancion', agregarCancion);
    router.put('/actualizarCancion/:id', actualizarCancion);
    router.delete('/eliminarCancion/:id', eliminarCancion);
}



export default cancionesRoutes;