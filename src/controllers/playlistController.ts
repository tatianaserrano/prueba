import executeQuery from "../services/mysql.service";

const agregarPlaylist2 = async(req, res) => {
    const { nombre, descripcion, ids } = req.body;
    console.log('antes')
    const response = await executeQuery(`INSERT INTO playlist (nombre, descripcion) VALUES ('${nombre}', '${descripcion}');`);
    ids.forEach(idCancion => {
        executeQuery(`INSERT INTO cancionPlaylist (idcancion, idplaylist) VALUES ('${idCancion}', '${response.insertId}');`)
    });
    console.log('después foreach')
    //res.status(201).json({ message: 'created', id: response.insertId });
    //res.send('/agregarCancion')
}

const obtenerPlaylists = () => {};
const obtenerPlaylist = () => {};
const actualizarPlaylist = () => {};
const eliminarPlaylist = async(req, res) => {
    const {id} = req.params;
    try{
        await executeQuery(`DELETE FROM cancionPlaylist WHERE (idplaylist = '${id}');`);
        const response = await executeQuery(`DELETE FROM playlist WHERE (idplaylist = '${id}');`);
        res.json({message: response.affectedRows > 0 ? 'deleted' : 'No se pudo eliminar'});
    }catch(error){
        res.status(500).send(error);
    }
};

const agregarPlaylist = async(req, res) => {
    const { nombre, descripcion } = req.body;
    try{
        const response = await executeQuery(`INSERT INTO playlist (nombre, descripcion) VALUES ('${nombre}', '${descripcion}');`);
        res.status(201).json({message: 'created', id: response.insertId});
    }catch(error){
        res.json(error);
    }
}

const addSongsToPlaylist = async(req, res) => {
    try{
        const {idcancion, idplaylist} = req.query;
        const response = await executeQuery(`INSERT INTO cancionPlaylist (idcancion, idplaylist) VALUES ('${idcancion}', '${idplaylist}');`);
        res.json({message: response.insertId ? 'created' : 'No se creó el registro'});
    }catch(error){
        res.status(500).send(error);
    }

}
export {agregarPlaylist, obtenerPlaylists, obtenerPlaylist, actualizarPlaylist, eliminarPlaylist, addSongsToPlaylist}