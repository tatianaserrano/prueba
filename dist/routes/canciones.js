"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cancionesController_1 = require("../controllers/cancionesController");
const errors_1 = __importDefault(require("../middlewares/errors"));
const cancionesRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use(router);
    // router.use(isAdmin)
    router.get('/obtenerCanciones', cancionesController_1.obtenerCanciones);
    router.get('/obtenerCancion/:id', cancionesController_1.obtenerCancion);
    router.post('/agregarCancion', cancionesController_1.agregarCancion);
    router.put('/actualizarCancion/:id', cancionesController_1.actualizarCancion);
    router.delete('/eliminarCancion/:id', cancionesController_1.eliminarCancion);
    app.use('/', errors_1.default);
};
exports.default = cancionesRoutes;
//# sourceMappingURL=canciones.js.map