var account = 0;
var seccionArticle = document.getElementById('tasks');
var submitButton = document.getElementById('submit-button');
var textArea = document.getElementById('textarea');
var remove = function() {
    console.log(this);
    this.parentNode.remove();
    //this.parentElement.remove();
}

var buttonOff = function(){
  var campoTexto = textArea.value.length;
  if(campoTexto === 0){
    submitButton.disabled = true;
  }else{
    submitButton.disabled = false;
  }
}

//declarando variable para agregar el evento, que agregará la tarea que el usuario ingresará
var taskAdd = function(event) {
    event.preventDefault(); //para prevenir eventos inesperados de la funcion

    //creamos elementos basados en la estructura del html
    var task = document.getElementById('text');
    var article = document.createElement('article');
    var label = document.createElement('label');
    var a = document.createElement('a')
    var contentA = document.createTextNode('Agregar una tarjeta')

    //var input = document.createElement('input');
    var button = document.createElement('button');

    var id = 'check' + account;

    label.setAttribute('for', id);
    label.textContent = task.value;

    /*button.type = 'button';
    button.innerText = 'x';
    button.addEventListener('click', remove);*/
    var addCard = button;
    addCard.innerText = 'Agregar una tarjeta';
    addCard.addEventListener('click', link);

    //agregamos atributos al padre que es el article
    //article.appendChild(input);
    article.appendChild(label);
    article.appendChild(a);
    //a.appendChild(contentA);
    article.appendChild(button);
    seccionArticle.appendChild(article);
    account++;


    task.value = ""; //esto sirve para limpiar o borrar el contenido que el usuario agregó
    task.placeholder = "Añadir lista";

};

//declarando variable para agregar tarjeta en la lista que el usuario ha creado
//revisar con el squad y jedi
var link = function(event) {
    event.preventDefault();
    console.log('haciendo click');
    var task = document.getElementById('text');
    var article = document.createElement('article');
    var label = document.createElement('label');
    var id = 'check' + account;
    label.setAttribute('for', id);
    label.textContent = task.value;

};


submitButton.addEventListener('click', taskAdd);
submitButton.addEventListener('keyup', buttonOff);
