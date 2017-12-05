var account = 0;
var position;
var container = document.getElementById('tasks');
var submitButton = document.getElementById('submit-button');
var texTarea = document.getElementById('textarea-two');

var remove = function() {
    console.log(this);
    this.parentNode.remove();
    //this.parentElement.remove();
}

//declarando funcion con un evento click para el "link" de agregar tarjeta en la lista de tareas que el usuario ha creado
var link = function(event) {
    var elId = this.id; //declarando variable para agregar id a los elementos más abajo
    position = elId; //la variable elId se usará al llamar position
    //console.log('el id ', elId)

    event.preventDefault();
    //console.log('haciendo click');
    var createTextArea = document.createElement('textarea');//creando el textarea para añadir tarjeta
    createTextArea.id = 'txaAdd' + elId; //creandole un id al elemento textarea
    var butonNewTask = document.createElement('button'); //creando boton para añadir la nueva tarjeta
    butonNewTask.innerText = 'Añadir'; //agregándole texto al botón
    butonNewTask.id = 'btnAdd' + elId; // creandole id al boton
    butonNewTask.className = "buttonTask" // creandole clase al boton
    butonNewTask.addEventListener('click', addCard); // diciendole al boton el evento que tendrá

    document.getElementsByTagName('article')[elId].appendChild(createTextArea) //agregándole el textarea al article por su id
    document.getElementsByTagName('article')[elId].appendChild(butonNewTask) //agregándole el boton al article por su id

    //quitando el link una vez que ya se agregó la primer tarjeta
    link.value = ""; //no funciona...


}

//declarando funcion para agregar la tarjeta en la lista creada
var addCard = function(event) {
    var elId = this.id;//declarando variable para decirle al id a cual id se le hace referencia
    //console.log('elId ', elId)
    //console.log('position ', position)
    //console.log('aaaa ', 'article' + position)

    event.preventDefault();
    // console.log('haciendo click');
    var addTask = document.createElement('div'); //creando elemento div para la variable que agregará la tarea
    // addTask.id = 'lista'+ elId;

    var newTask = document.getElementById('txaAdd' + position); // declarando variable llamando la texarea de la tarjeta junto con la posicion id
    // console.log('ntval ', elId, newTask.value)

    addTask.textContent = newTask.value;
    document.getElementsByTagName('article')[position].appendChild(addTask)

    txaAdd0.value = "";


}

//declarando variable para agregar el evento, que agregará la tarea que el usuario ingresará
var taskAdd = function(event) {
    event.preventDefault(); //para prevenir eventos inesperados de la funcion

    //creamos elementos basados en la estructura del html
    var task = document.getElementById('text');
    var article = document.createElement('article');
    article.id = 'article' + account;
    article.className = "boxAddToCard"
    var label = document.createElement('label');
    var a = document.createElement('a')
    var contentA = document.createTextNode('Agregar una tarjeta')

    //var input = document.createElement('input');
    var button = document.createElement('button');

    var id = 'check' + account;

    //agregamos atributos a los elementos de article
    /*input.type = 'checkbox'; // esta forma es igual a hacer lo sig: checkbox.setAttribute ("type","checkbox")
    input.addEventListener('click', throughTask); //funcion declarada más abajo...
    input.id = id;*/

    label.setAttribute('for', id);
    label.textContent = task.value;

    /*button.type = 'button';
    button.innerText = 'x';
    button.addEventListener('click', remove);*/
    var addCard = button;
    addCard.id = account;
    addCard.innerText = 'Agregar una tarjeta';
    addCard.className = "buttonCard"
    addCard.addEventListener('click', link);

    //agregamos atributos al padre que es el article
    //article.appendChild(input);
    article.appendChild(label);
    article.appendChild(a);
    //a.appendChild(contentA);
    article.appendChild(button);
    container.appendChild(article);
    account++;

    task.value = ""; //esto sirve para limpiar o borrar el contenido que el usuario agregó
    task.placeholder = "Añadir lista";

};

//funcion para deshabilitar el boton si no tiene texto el texTarea
/*var offBtn = function() {
  if (texTarea.value = "") {
    submitButton.disabled = true;
    console.log(submitButton)
  } else {
    submitButton.disabled = false;
    console.log(submitButton)
  }
};*/

//funcion para abrir el primer texTarea
/*document.addEventListener('click', openForm);

 function openForm() {
   var addList = document.getElementById('add-list');
   var listForm = document.getElementById('list-form');

   if(addList.classList.contains('show')){
     addList.classList.remove('show');
     addList.classList.add('hidden');
   } else if (listForm.classList.contains('hidden')) {
     listForm.classList.remove('hidden');
     listForm.classList.add('show');
   }*/

/*window.addEventListener('click', collapseForm);

  function collapseForm(event) {
    if (event.target !== addList && event.target !== listForm && event.target.closest('form') !== listForm) {
      addList.className = '';
      listForm.className = 'hidden';
    }
  }
}*/

//submitButton.addEventListener('click', offBtn);

submitButton.addEventListener('click', taskAdd);
