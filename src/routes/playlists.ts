import { Router } from 'express';
import { actualizarPlaylist, addSongsToPlaylist, agregarPlaylist, eliminarPlaylist, obtenerPlaylist, obtenerPlaylists } from '../controllers/playlistController';


const playlistRoutes = (app) => {
    const router = Router();
    app.use('/', router);

    router.get('/obtenerPlaylists', obtenerPlaylists);
    router.get('/obtenerPlaylist', obtenerPlaylist);
    router.post('/agregarPlaylist', agregarPlaylist);
    router.post('/agregarCancionesAPlaylist', addSongsToPlaylist)
    router.put('/actualizarPlaylist', actualizarPlaylist);
    router.delete('/eliminarPlaylist/:id', eliminarPlaylist);
    router.delete('/eliminarCancionPlaylist', eliminarPlaylist);
}

export default playlistRoutes;