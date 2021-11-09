import mysql from 'mysql';

const getConnection = () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'prueba123',
        database: 'prueba',
        port: 3306
    });
    connection.connect(function (error) {
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
            })
        }catch(error){
            console.log(error)
            reject(error);
        }
    });
    
}

export default executeQuery;