
export const Tabla = ({ datos }) => {
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
                        <td><button className="btn btn-danger">Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
