import executeQuery from "../services/mysql.service";

const obtenerCanciones = async (req, res, next) => {
    await executeQuery('SELECT * FROM cancion').then(response => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        }
        res.status(200).json(data);
    }).catch(error => {
        next(error);
    });
}
const obtenerCancion = async(req, res, next) => {
    const { id } = req.params;
    try{
        const response = await executeQuery(`SELECT * FROM cancion WHERE idcancion = ${id}`)
        res.status(200).json(response[0]);
    }catch(error){
        next(error);
    }
}
const agregarCancion = async (req, res) => {
    const {nombre, genero, artista} = req.body;
    const response = await executeQuery(`INSERT INTO cancion (nombre, genero, artista) VALUES ('${nombre}', '${genero}', '${artista}' );`);
    res.status(201).json({message: 'created', id: response.insertId});
}
const actualizarCancion = async (req, res) => {
    const {nombre, genero, artista} = req.body;
    const response = await executeQuery(`UPDATE cancion SET nombre = '${nombre}', genero = '${genero}', artista = '${artista}' WHERE (idcancion = '${req.params.id}');`);
    res.status(200).json({message: 'updated', id: req.params.id});
}
const eliminarCancion = async (req, res, next) => {
    try{
        const response = await executeQuery(`DELETE FROM cancion WHERE (idcancion = '${req.params.id}');`)
        console.log(response)
        if(response.affectedRows > 0){
            res.json({message: 'deleted'});
        }else{
            res.status(404).json({message: `No existe registro con id: ${req.params.id}`})
        }
    }catch(error){
        next(error);
    }
}


export { obtenerCanciones, obtenerCancion, agregarCancion, actualizarCancion, eliminarCancion };