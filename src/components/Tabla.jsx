
export const Tabla = ({ datos, deletePerson }) => {

    const eliminar = (person) =>{
        //abre alerta preguntando si desea eliminar un registro
        const confirmacion = window.confirm('Desea eliminar a ' + person.nombre)
        //si es verdadero realiza la operación
        if(confirmacion){
            //creamos un nuevo arreglo sin el registro seleccioando
            const nuevoArreglo = datos.filter(d => d.run !== person.run)         
            //enviamos el arreglo nuevo para que sea reemplazado
            deletePerson(nuevoArreglo)
        }            
    }

    return (
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
            <tbody>
                {datos.map((person) => (
                    <tr key={person.run}>
                        <td>{person.run}</td>
                        <td>{person.nombre}</td>
                        <td>{person.apellido}</td>
                        <td>{person.ciudad}</td>
                        <td><button className="btn btn-danger" onClick={()=>eliminar(person)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
