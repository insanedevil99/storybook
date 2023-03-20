import React from "react";

const Tabla = ({titulo ,columna,fila})  => {

   
    return <>
    <div class="">
        <table class="" >
            <caption>{titulo}</caption>
            <thead>
                <tr>
                { columna.map(col => {
                    return (
                        <th>{col}</th>                  
                    );
                })}
                </tr>
            </thead>
            <tbody>

                {fila.map((item, index) => {
                return (
                <tr>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
    </div>
    </>
};

export default Tabla;