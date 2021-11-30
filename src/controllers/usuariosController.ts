import executeQuery from "../services/mysql.service";
import jwt from 'jsonwebtoken';
const agregarUsuarios = async (req, res, next) => {
    try {
        const {nombre, correo, contrasena} = req.body;
        const existUser = await executeQuery(`SELECT * FROM usuarios WHERE correo = '${correo}'`);
        if(existUser.length > 0){
            res.status(403).send('Ya existe una cuenta creada con ese correo');
        }else {
            const response = await executeQuery(`INSERT INTO usuarios (nombre, correo, contrasena) VALUES ('${nombre}', '${correo}', '${contrasena}' );`);
            res.status(201).json({message: 'created', id: response.insertId});
        }
    }
    catch(error){
        next(error);
    }
}

const iniciarSesion = async (req, res, next) => {
    try{
        const {correo, contrasena} = req.body;
        const dataUser = await executeQuery(`SELECT * FROM usuarios WHERE correo = '${correo}'`);
        if(dataUser.length > 0){
            if(dataUser[0].contrasena === contrasena){
                const token = await getToken(dataUser[0]);
                console.log(token)
                res.json({...dataUser[0], token})
            }else{
                res.send('Constraseña incorrecta');
            }
        }else{
            res.send('No existe ese usuario');
        }
    }catch(error){
        next(error);
    }
}

const getToken = (datos: any) => {
    return new Promise((resolve, reject) => {
        jwt.sign(datos, 'secreteKey', (error, token) => {
            if(error){
                reject(error);
            }
            resolve(token)
        });
    })
}

export {agregarUsuarios, iniciarSesion};