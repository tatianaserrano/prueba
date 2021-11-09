import { Router } from 'express';


const playlistRoutes = (app) => {
    const router = Router();
    app.use('/', router);

    router.get('/obtenerPlaylists', (req, res) => {
        res.send('/obtenerCanciones')
    });
    router.get('/obtenerPlaylist', (req, res) => {
        res.send('/obtenerCancion')
    });
    router.post('/agregarPlaylist', (req, res) => {
        res.send('/agregarCancion')
    });
    router.put('/actualizarPlaylist', (req, res) => {
        res.send('/actualizarCancion')
    });
    router.delete('/eliminarPlaylist', (req, res) => {
        res.send('/eliminarCancion')
    });
}