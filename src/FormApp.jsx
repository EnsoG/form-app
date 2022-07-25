import { Formulario } from "./components/Formulario"
import { Tabla } from "./components/Tabla"
const personas = [{
    run: '12.345.678-9',
    nombre: 'Roberta',
    apellido: 'Soto',
    ciudad: 'Laja'
},{
    run: '13.245.648-9',
    nombre: 'Andres',
    apellido: 'Silva',
    ciudad: 'Santiago'
}]
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
                    <Tabla datos={personas} />
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
