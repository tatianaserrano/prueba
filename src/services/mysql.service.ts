import mysql from 'mysql2';
import Connection from 'mysql2/typings/mysql/lib/Connection';
import config from '../config/config';

const getConnection = (): Connection => {
    const connection = mysql.createConnection({
        host: config.DB_HOST,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DATABASE,
        port: +config.DB_PORT
    });
    connection.connect((error) => {
        if (error) {
            throw error;
        } else {
            console.log('Conexion correcta.');
        }
    });
    return connection;
}

const executeQuery = (query: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        try{
            const connection = getConnection();
            connection.query(query, (error: any, result: any) => {
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            });
            connection.end(() => console.log('conexion cerrada'));
        }catch(error){
            console.log(error)
            reject(error);
        }
    });
    
}

export default executeQuery;