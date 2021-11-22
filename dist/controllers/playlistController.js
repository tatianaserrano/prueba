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
exports.addSongsToPlaylist = exports.eliminarPlaylist = exports.actualizarPlaylist = exports.obtenerPlaylist = exports.obtenerPlaylists = exports.agregarPlaylist = void 0;
const mysql_service_1 = __importDefault(require("../services/mysql.service"));
const agregarPlaylist2 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, descripcion, ids } = req.body;
    console.log('antes');
    const response = yield (0, mysql_service_1.default)(`INSERT INTO playlist (nombre, descripcion) VALUES ('${nombre}', '${descripcion}');`);
    ids.forEach(idCancion => {
        (0, mysql_service_1.default)(`INSERT INTO cancionPlaylist (idcancion, idplaylist) VALUES ('${idCancion}', '${response.insertId}');`);
    });
    console.log('después foreach');
    //res.status(201).json({ message: 'created', id: response.insertId });
    //res.send('/agregarCancion')
});
const obtenerPlaylists = () => { };
exports.obtenerPlaylists = obtenerPlaylists;
const obtenerPlaylist = () => { };
exports.obtenerPlaylist = obtenerPlaylist;
const actualizarPlaylist = () => { };
exports.actualizarPlaylist = actualizarPlaylist;
const eliminarPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, mysql_service_1.default)(`DELETE FROM cancionPlaylist WHERE (idplaylist = '${id}');`);
        const response = yield (0, mysql_service_1.default)(`DELETE FROM playlist WHERE (idplaylist = '${id}');`);
        res.json({ message: response.affectedRows > 0 ? 'deleted' : 'No se pudo eliminar' });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.eliminarPlaylist = eliminarPlaylist;
const agregarPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, descripcion } = req.body;
    try {
        const response = yield (0, mysql_service_1.default)(`INSERT INTO playlist (nombre, descripcion) VALUES ('${nombre}', '${descripcion}');`);
        res.status(201).json({ message: 'created', id: response.insertId });
    }
    catch (error) {
        res.json(error);
    }
});
exports.agregarPlaylist = agregarPlaylist;
const addSongsToPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idcancion, idplaylist } = req.query;
        const response = yield (0, mysql_service_1.default)(`INSERT INTO cancionPlaylist (idcancion, idplaylist) VALUES ('${idcancion}', '${idplaylist}');`);
        res.json({ message: response.insertId ? 'created' : 'No se creó el registro' });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addSongsToPlaylist = addSongsToPlaylist;
//# sourceMappingURL=playlistController.js.map