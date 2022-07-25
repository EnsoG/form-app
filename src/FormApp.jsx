
export const FormApp = () => {
    return (
        <div className="container">
            <div>
                <h1 className="text-center"> Personas</h1>
            </div>
            <div className="row mt-5">
                <div className="col-9">
                    <h2 className="text-center">Tabla</h2>
                    {/* tabla */}
                    <table className="table table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>Run</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Ciudad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div className="col-3">
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
                </div>
            </div>
        </div>
    )
}
