functiontocaSomPom(){
document.querySelector('#som_tecla_pom').play(''):

}
const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0:

while(contador < 9){
    
    const instrumento = listaDeTeclas[contador].classList[1]
    

    listaDeTeclas[contador].onclick = function(){
      tocaSom('#som_tecla-clap');
    };
   
    contador = contador +1;
}
    
listaDeTeclas[1].onclick = tocaSomPom;
listaDeTeclas [2].onclick = tocaSomTim;
listaDeTeclas [3].onclick = tocaSomPuff