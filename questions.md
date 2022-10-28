1.What is the difference between Component and PureComponent? give an example where it might break my app.

	Un componente puro solo cambia en funcion a sus props y un component se cambia a si mismo.

2.Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

Afecta el rendimiento de la aplicacion al intentar volver a renderizar 

3.Describe 3 ways to pass information from a componentto its PARENT.

Redux
Alguna funcion que pase el mismo padre
Context 


4.Give 2 ways to prevent components from re-rendering.

usar una condición, usar el hook memo o ir directo al doom con un useRef


5.What is a fragment and why do we need it? Give an example where it mightbreak my app.
Es un patron de react que envulve un componente con multiples elemento



6.Give 3 examples of the HOC pattern.

Layout envolver a los componentes siempre
Un Loading envolver cuando se carge
Un Auth comprobar si tiene token el user


7.what's the difference in handling exceptions in promises, callbacks and async...await.



8.How many arguments does setState take and why is it async.
Son 2
Las llamadas asincrónicas setState se procesan por lotes para brindar una mejor experiencia de usuario y rendimiento

9.List the steps needed to migrate a Class to Function Component.

Cambiar la clase a funcion
Eliminar el metodo de render
Convertir metodos a funciones
Eliminar las referencias a la clase (this)
Eliminar constructor y usar hook dependiendo de la class a migrar
Remplazar todos los this.setState
Remplazar los ciclos de vidas por hooks


10.List a few ways styles can be used with components.

Usar directamente la propiedad style y agregar estilos deseados o mandar a llamar en extensiones jsx className desde un css

11.How to render an HTML string coming from the server

import {renderToString} from "react-dom/server";
