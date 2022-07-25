export const Formulario = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="text-center">Formulario</h2>
            </div>
            <div className="card-body">
                <label>Run:</label>
                <input
                    type="text"
                    className="form-control"
                    name="run"
                />
                <label>Nombre:</label>
                <input
                    type="text"
                    className="form-control"
                    name="nombre"
                />
                <label>Apellido:</label>
                <input
                    type="text"
                    className="form-control"
                    name="apellido"
                />
                <label>Ciudad:</label>
                <input
                    type="text"
                    className="form-control"
                    name="ciudad"
                />
            </div>
            <div className="card-footer">
                <input type="button" className="btn btn-success" value="Agregar" />
            </div>
        </div>
    )
}
