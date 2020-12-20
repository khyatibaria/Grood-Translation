var btnTranslate = document.querySelector('#btn-translate');
var inputField = document.querySelector('#textIP');
var OutputField = document.querySelector('#textOP');

var Url = "https://api.funtranslations.com/translate/groot.json"

btnTranslate.addEventListener('click',function ClickEventHandler()
{
    inputText=inputField.value;
    FetchUrl= Url + "?" + "text=" +inputText;
    fetch(FetchUrl)
    .then(response => response.json())
    .then(json => InputInDiv(json))
    .catch(handelError)
    
});
function InputInDiv(json){
    OutputField.innerText=json.contents.translated;
}
function handelError(){
    OutputField.innerText="Limit Reached!😓"
}


