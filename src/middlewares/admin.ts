import jwt from 'jsonwebtoken';

const isAdmin = async (req, res, next) => {
    if (req.headers.isadmin) {
        next();
    } else {
        res.status(401).send('No tiene autorización');
    }
}

const validarToken = (req, res, next) => {
    const { token } = req.headers;
    if (token) {
        jwt.verify(token, 'secreteKey', (error, data) => {
            if (error) {
                res.status(401).send('No tiene autorización');
            } else {
                console.log('data', data);
                next();
            }
        })
    } else {
        res.status(401).send('No tiene autorización');
    }
}

export {isAdmin, validarToken};