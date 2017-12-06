var account = 0; //contador que incrementará de acuerdo a las tarjetas añadidas por el usuario
var position;
var container = document.getElementById('tasks'); //llamndo a la seccion que contendrá el formulario de textarea
var submitButton = document.getElementById('submit-button'); //llamando al boton que añadirá los tableros creados
var texTarea = document.getElementById('textarea-two');//llamando a la seccion que contiene el segundo formulario

//declarando variable para agregar el evento, que agregará la tarea que el usuario ingresará
var taskAdd = function(event) {
    event.preventDefault(); //para prevenir eventos inesperados de la funcion

    //creamos elementos basados en la estructura del html
    var task = document.getElementById('text'); //llamando la seccion que contiene la  textarea y su boton
    var article = document.createElement('article');//creando elemento article
    article.id = 'article' + account; //creando el id al elemente article concatenando el contador para poder agregarle los mismos estilos a todas las tareas que agregue el usuario
    article.className = ('boxAddToCard') //creando una clase para el elemento article
    var label = document.createElement('label'); //creando elemento label
    var a = document.createElement('a');//creando elemento a
    var contentA = document.createTextNode('Agregar una tarjeta');//creando nodo de texto
    var button = document.createElement('button');//creando elemento boton
    //var input = document.createElement('input');


    var id = 'check' + account;//asignándole al id un contador

    label.setAttribute('for', id);//creandole atributo for al label
    label.textContent = task.value;//creandole un contenido de texto al label para que se visualice en el textarea

    /*button.type = 'button';
    button.innerText = 'x';
    button.addEventListener('click', remove);*/
    var addCard = button;//declarando variable para el link que va a añadir una tarjeta en las listas
    addCard.id = account;//creando un id al link que agregará la tarjeta
    addCard.innerText = 'Agregar una tarjeta';//creando un texto al link
    addCard.className = ('buttonCard');//crenado una clase para el link
    addCard.addEventListener('click', link);//diciendole al link que escuche el evento que se le asignará

    //agregamos atributos al padre que es el article
    article.appendChild(label);
    article.appendChild(a);
    article.appendChild(button);
    container.appendChild(article);
    account++;

    task.value = ""; //esto sirve para limpiar o borrar el contenido que el usuario agregó
    task.placeholder = "Añadir lista";//después de limpiarlo, se le agregará este placeholder

};

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

  var newTask = document.getElementById('txaAdd' + position); //llamando la texarea de la tarjeta más la posicion id
  // console.log('ntval ', elId, newTask.value)

  addTask.textContent = newTask.value;
  document.getElementsByTagName('article')[position].appendChild(addTask)

  //txaAdd.value = "";
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
  //buttonCard.value = ""; //no funciona...


}
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
