import React from "react";


//aqui vamos a crear un reaact hook este
//este es una forma sencilla, declarativa de ver el estado
//de forma individual en el hook

function UseState({name}){

    const [error, setError] = React.useState(false);
    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad</p>
            {error && (
                <p>Error:el codigo es inccorrecto</p>
            )}
            <input placeholder="codigo de seguridad"/>
            <button
            onClick={()=> setError(!error)}
            >Comprobar</button>
        </div>
    )

}
export {UseState};