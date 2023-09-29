const toggle = document.getElementById('toggledark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bxs-moon');
    if(this.classList.toggle('bx-sun')){
        body.style.background = 'cornFlowerBLue';
        body.style.color = 'black';
        body.style.transition = '2s';
    } else{
        body.style.background='black';
        body.style.color='white';
        body.style.transition='2s'
    }
} )  