const notesContainer = document.querySelector('.notes-container') ;
const creatbtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');

}
showNotes();

function updateStorege() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}


creatbtn.addEventListener('click', () => {
    let note = document.createElement('div');  
    note.className = 'input-box';

    let inputBox = document.createElement('p');  
    inputBox.setAttribute('contentEditable', 'true');

    let img = document.createElement('img');  
    img.src = 'images/delete.png';

    note.appendChild(inputBox);
    note.appendChild(img);

    notesContainer.appendChild(note);
});

notesContainer.addEventListener('click' , function (e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorege();
    }
     else if (e.target.tagName === 'P'){
        notes = document.querySelectorAll('.input-box');
        notes.forEach( nt => {
            nt.onkeyup = function () {
                updateStorege();
            }

        })
     }
})

document.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
} )
