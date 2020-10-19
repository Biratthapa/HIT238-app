const hello = document.querySelector('#swtwala');
const toggle= document.querySelector('#toggle');


toggle.addEventListener('click', changecor);
function changecor(){
    hello.classlist.toggle('.col-sm-3 mx-2 my-1 bg-secondary');
}
