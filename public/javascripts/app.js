const deleteButtons = document.querySelectorAll('.delete');

document.addEventListener('dblclick',handleDblClick);
deleteButtons.forEach(i => {i.addEventListener('click',handleDeleteClick)});

function handleDblClick(e){
    console.log(e.target.tagName)
    if(e.target.tagName=="INPUT"){e.target.disabled = !e.target.disabled}
}

function handleDeleteClick(e){
    if(! confirm("Are you sure? This cannot be undone.")){
        e.preventDefault();
    }
}