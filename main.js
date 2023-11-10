function tocaSom(idElementoAudio){
const elemento = document.querySelector(idElementoAudio).play(''):

if(elemento != null && elemento.localNam === 'audio'){
   elemento.play();
}else{
  alert('Elemento não encontrado');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for(contador = 0; contador <listaDeTeclas.length; contador ++){

  const instrumento = listaDeTeclas[contador]classList[1];

  const tecla = listaDeTeclas[contador];
    
constidAudio = '#som_${instrumento}';

    tecla.onclick = function(){
      tocaSom(idAudio);
    };
   
    tecla.onkeydown = function(){
       if (evento.code == 'Space' || evento.code == 'Enter'){
            tecla.classlist.add('ativa');
       }
      } 
      tecla.onkeyup = function(){
        tecla.classlist.remove('ativa');
       }
      }   
