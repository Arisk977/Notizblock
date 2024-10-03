let allNotes={
    'notesTitles': ['Fruits', 'Aufgabe'],
    'notes': ['banana', 'rasen mähen'],
    'archivNotesTitles':[],
    'archivNotes': [],
    'trashNotesTitles':[],
    'trashNotes':[]
}

function moveNote(indexNote, startKey, destinationKey){
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);
    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(notesTitle[0]);


    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    
    for(let indexNote= 0; indexNote < allNotes.notes.length; indexNote++){
        
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes(){
    let trashcontentRef = document.getElementById('trash-content');
    trashcontentRef.innerHTML = "";
    
    for(let indexTrashNote= 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++){
        trashcontentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function renderArchivNotes(){
    let archivContentRef = document.getElementById('archiv-content');
    archivContentRef.innerHTML = "";
    
    for(let indexArchivNote= 0; indexArchivNote < allNotes.archivNotes.length; indexArchivNote++){
        archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
    }
}


//notizen hinzufügen

function addNote(){
    document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Your custom form submission logic here
});

    let noteInputRef = document.getElementById('note_input');
    let noteTitleInputRef= document.getElementById('note_input_title');
    let noteInput = noteInputRef.value;
    let noteTitle = noteTitleInputRef.value;

    if(noteInput == "" || noteTitle == ""){
        return
    }
    allNotes.notes.push(noteInput);
    allNotes.notesTitles.push(noteTitle);
    
   renderNotes();
   
    noteInputRef.value = "";
    noteTitleInputRef.value= "";
 
}

//notizen löschen

function deleteNote(indexNote){
    let trashNote = allNotes.notes.splice(indexNote, 1);
    allNotes.trashNotes.push(trashNote);
    let trashNotesTitle = allNotes.notesTitles.splice(indexNote, 1);
    allNotes.trashNotesTitles.push(trashNotesTitle);
    renderNotes();
    renderTrashNotes();
}



function removeTrash(indexTrashNote){
    allNotes.trashNotes.splice(indexTrashNote, 1);
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);
    
    renderNotes();
    renderTrashNotes();
}

//notizen archivieren