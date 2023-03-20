import React from 'react';

import Tabla from './tabla';

export default {
  title: 'Example/Tabla',
  component: Tabla,

};

const Template = (args) => <Tabla {...args} />;

export const Columnas_Filas = Template.bind({});
Columnas_Filas.args = {
  titulo: 'mi tabla',
  columna : ['Nro', 'Producto', 'Descripcion'],
  //fila : [1,'Refrigerador','Electrodomestico'],
  fila : [
    ["1", "Refrigerador", "Electrodomestico"],
    ["2", "Televisor", "Electrodomestico"]
  ]
};

