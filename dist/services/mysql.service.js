"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = __importDefault(require("../config/config"));
const getConnection = () => {
    const connection = mysql2_1.default.createConnection({
        host: config_1.default.DB_HOST,
        user: config_1.default.DB_USER,
        password: config_1.default.DB_PASSWORD,
        database: config_1.default.DATABASE,
        port: +config_1.default.DB_PORT
    });
    connection.connect((error) => {
        if (error) {
            throw error;
        }
        else {
            console.log('Conexion correcta.');
        }
    });
    return connection;
};
const executeQuery = (query) => {
    return new Promise((resolve, reject) => {
        try {
            const connection = getConnection();
            connection.query(query, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
            connection.end(() => console.log('conexion cerrada'));
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
exports.default = executeQuery;
//# sourceMappingURL=mysql.service.js.map