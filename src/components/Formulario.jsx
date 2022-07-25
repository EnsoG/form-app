import { useState } from "react"

export const Formulario = ({ addNewPerson }) => {
    //se define initForm para tener el estado inicial de los input
    const initForm = {
        run: '',
        nombre: '',
        apellido: '',
        ciudad: ''
    }
    //se utiliza useStata para los inputs del formulario
    const [valoresForm, setValoresForm] = useState(initForm)
    //definir nombre de los inputs
    const { run, nombre, apellido, ciudad } = valoresForm
    //inputChange permite cambiar el valor de los input
    const inputChange = (event) => {
        setValoresForm({
            ...valoresForm,
            [event.target.name]: event.target.value
        })
    }
    const clickEvent = (e) => {
        e.preventDefault()
        addNewPerson(valoresForm)
        //volvemos el valoresForm a su estado inicial (initForm)
        setValoresForm({ ...initForm })
    }
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
                        value={run}
                        onChange={inputChange}
                    />
                    <label>Nombre:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={nombre}
                        onChange={inputChange}
                    />
                    <label>Apellido:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="apellido"
                        value={apellido}
                        onChange={inputChange}
                    />
                    <label>Ciudad:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="ciudad"
                        value={ciudad}
                        onChange={inputChange}
                    />
                </div>
                <div className="card-footer">
                    <input type="submit" onClick={clickEvent} className="btn btn-success" value="Agregar" />
                </div>
        </div>
    )
}
