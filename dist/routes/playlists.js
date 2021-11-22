"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playlistController_1 = require("../controllers/playlistController");
const playlistRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    router.get('/obtenerPlaylists', playlistController_1.obtenerPlaylists);
    router.get('/obtenerPlaylist', playlistController_1.obtenerPlaylist);
    router.post('/agregarPlaylist', playlistController_1.agregarPlaylist);
    router.post('/agregarCancionesAPlaylist', playlistController_1.addSongsToPlaylist);
    router.put('/actualizarPlaylist', playlistController_1.actualizarPlaylist);
    router.delete('/eliminarPlaylist/:id', playlistController_1.eliminarPlaylist);
    router.delete('/eliminarCancionPlaylist', playlistController_1.eliminarPlaylist);
};
exports.default = playlistRoutes;
//# sourceMappingURL=playlists.js.map