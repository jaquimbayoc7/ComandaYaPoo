const formulario = document.getElementById('formulario');
const toast = document.getElementById('toast');

function avisar(tipo, texto){
    toast.className = "";
    void toast.offsetWidth;
    toast.className = tipo;
    toast.textContent = texto;
}

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    avisar('ok', 'Formulario enviado correctamente');
});