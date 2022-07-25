import { useState, useEffect } from "react"
import { Formulario } from "./components/Formulario"
import { Tabla } from "./components/Tabla"

const personas = () => {
    return JSON.parse(localStorage.getItem('Personas')) || []
}
export const FormApp = () => {
    //useState permitirá cambiar los valores agregados
    const [valor, setValor] = useState(personas)
    //permite agregar valores al arreglo 
    const addPersonas = (nuevoRegistro) => {
        if (valor.filter(item => item.run === nuevoRegistro.run).length > 0)
            return alert('el registro ya existe')
        setValor([nuevoRegistro, ...valor])
    }
    //hook useEffect se activa luego de realziar una acción, en este caso cuando se modifique las personas
    useEffect(() => {
        localStorage.setItem('Personas', JSON.stringify(valor))
    }, [valor])

    const eliminarValor = (registro) => {
        console.log(registro)
        setValor([...registro])
    }
    return (
        <div className="container">
            <div>
                <h1 className="text-center"> Personas</h1>
            </div>
            <div className="row mt-5">
                <div className="col-9">
                    <h2 className="text-center">Tabla</h2>
                    {/* tabla */}
                    <Tabla datos={valor} deletePerson={eliminarValor}  />
                </div>
                <div className="col-3">
                    <Formulario addNewPerson={addPersonas} />
                </div>
            </div>
        </div>
    )
}
