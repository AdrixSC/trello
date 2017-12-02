var account = 0;
var container = document.getElementById('tasks');
var submitButton = document.getElementById('submit-button');

var remove = function() {
    console.log(this);
    this.parentNode.remove();
    //this.parentElement.remove();
}

//declarando variable para agregar el evento, que agregará la tarea que el usuario ingresará
var taskAdd = function(event) {
    event.preventDefault(); //para prevenir eventos inesperados de la funcion

//creamos elementos basados en la estructura del html
    var task = document.getElementById('text');
    var article = document.createElement('article');
    var label = document.createElement('label');
    var input = document.createElement('input');
    var button = document.createElement('button');

    var id = 'check' + account;

//agregamos atributos a los elementos de article
    input.type = 'checkbox'; // esta forma es igual a hacer lo sig: checkbox.setAttribute ("type","checkbox")
    input.addEventListener('click', throughTask);//funcion declarada más abajo...
    input.id = id;

    label.setAttribute('for', id);
    label.textContent = task.value;

    button.type = 'button';
    button.innerText = 'x';
    button.addEventListener('click', remove);

    //agregamos atributos al padre que es el article
    article.appendChild(input);
    article.appendChild(label);
    article.appendChild(button);

    container.appendChild(article);
    account++;

    task.value = " ";//esto sirve para limpiar o borrar el contenido que el usuario agregó
};

//declarando funcion para hacer el check list de las tareas que el usuario ha realizado ya
var throughTask = function() {
    var checked = this.checked; //con this hacemos referencia a qué se le está haciendo el check
    //console.log(checked);
    var text = this.nextSibling; //metodo para tachar el texto del checked, en donde el texto a tachar es el hermano del cuadro al que se le hace el check
    //console.log(text);
    if (checked) { //aplicando la condición en donde si el usuario le da check al cuadrito, se agregue la linea encima del texto, con el estilo text decoration
        text.style.textDecoration = 'line-through';
    } else { //si no se cumple la condición no aplica el estilo de rayar el texto, con none
        text.style.textDecoration = 'none';
    }
};

submitButton.addEventListener('click', taskAdd);
