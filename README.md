# TRELLO

## Flujo de trabajo

1. Maquetar el sitio en HTML con las distintas secciones que requiere indentando correctamente para comprender las relaciones entre cada elemento.

2. Insertar íconos.

3. Dar estilo con el archivo .css realizando comentarios y haciendo uso de buenas prácticas.

4. Ordenar por etiquetas, id's y clases.

5. GENERAR INTERACCION CON EL ARCHIVO DE JS:

    5.1 Crear una textarea que reciba el texto ingresado. En esta Textarea habrá un texto "Añadir una lista..." que debe desaparecer al hacer click

    5.2 Crear un boton para que al hacer click en él se genere una nueva area con el texto ingresado

    5.3 Declarar una variable "link" que sirve para generar una nueva tarjeta en la lista que el usuario ha creado.

    5.4 La variable taskAdd nos servira para agregar el evento que insertara la tarea que el usuario ingresará

    5.5 Se crean elementos en base a la estructura del html

    5.6 Se le dan atributos a los elementos creados.

    5.7 Se agrega un elemento para limpiar el texto ingresado por el usuario

    5.8 Se crea la funcion "throughTask" para hacer el check list de las tareas que el usuario ha realizado ya. Dentro de esta funcion se aplican condiciones a) si el usuario le da check al cuadrito, se agrega la linea encima del texto, con el estilo text decoration b) si no se cumple la condición no aplica el estilo de rayar el texto, con none
