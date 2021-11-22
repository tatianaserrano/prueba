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
exports.eliminarCancion = exports.actualizarCancion = exports.agregarCancion = exports.obtenerCancion = exports.obtenerCanciones = void 0;
const mysql_service_1 = __importDefault(require("../services/mysql.service"));
const obtenerCanciones = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mysql_service_1.default)('SELECT * FROM cancion').then(response => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.status(200).json(data);
    }).catch(error => {
        next(error);
    });
});
exports.obtenerCanciones = obtenerCanciones;
const obtenerCancion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const response = yield (0, mysql_service_1.default)(`SELECT * FROM cancion WHERE idcancion = ${id}`);
        res.status(200).json(response[0]);
    }
    catch (error) {
        next(error);
    }
});
exports.obtenerCancion = obtenerCancion;
const agregarCancion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, genero, artista } = req.body;
    const response = yield (0, mysql_service_1.default)(`INSERT INTO cancion (nombre, genero, artista) VALUES ('${nombre}', '${genero}', '${artista}' );`);
    res.status(201).json({ message: 'created', id: response.insertId });
});
exports.agregarCancion = agregarCancion;
const actualizarCancion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, genero, artista } = req.body;
    const response = yield (0, mysql_service_1.default)(`UPDATE cancion SET nombre = '${nombre}', genero = '${genero}', artista = '${artista}' WHERE (idcancion = '${req.params.id}');`);
    res.status(200).json({ message: 'updated', id: req.params.id });
});
exports.actualizarCancion = actualizarCancion;
const eliminarCancion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, mysql_service_1.default)(`DELETE FROM cancion WHERE (idcancion = '${req.params.id}');`);
        console.log(response);
        if (response.affectedRows > 0) {
            res.json({ message: 'deleted' });
        }
        else {
            res.status(404).json({ message: `No existe registro con id: ${req.params.id}` });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.eliminarCancion = eliminarCancion;
//# sourceMappingURL=cancionesController.js.map