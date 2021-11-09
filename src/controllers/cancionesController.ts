import executeQuery from "../services/mysql.service";

const obtenerCanciones = async (req, res) => {
    await executeQuery('SELECT * FROM cancion').then(response => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        }
        res.status(200).json(data);
    }).catch(error => {
        res.status(500).send(error);
    })
}
const obtenerCancion = async(req, res) => {
    const response = await executeQuery(`SELECT * FROM cancion WHERE idcancion = ${req.params.id}`)
    res.status(200).json(response[0]);
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
const eliminarCancion = async (req, res) => {
    const response = await executeQuery(`DELETE FROM cancion WHERE (idcancion = '${req.params.id}');`)
    console.log(response)
    res.status(200).json({message: 'deleted', id: req.params.id});
}


export { obtenerCanciones, obtenerCancion, agregarCancion, actualizarCancion, eliminarCancion };