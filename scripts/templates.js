
function getNoteTemplate(indexNote){
    return `
    <div class="note">
    <div>
    <h3>${allNotes.notesTitles[indexNote]}</h3>
    <p>${allNotes.notes[indexNote]}</p> 
    </div>
    <hr>
    <div class="buttons">
    <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')">x</button>
    <button onclick="moveNote(${indexNote}, 'notes', 'archivNotes')">A</button>
    </div>
    </div>`;
    
}

function getTrashNoteTemplate(indexTrashNote){
    return `
    <div class="trash_note">
    <div>
    <h3>${allNotes.trashNotesTitles[indexTrashNote]}</h3>
    <p>${allNotes.trashNotes[indexTrashNote]}</p> 
    </div>
    <hr>
    <div class="buttons">
    <button onclick="removeTrash(${indexTrashNote})">x</button>
    <button onclick="moveNote(${indexTrashNote}, 'trashNotes', 'archivNotes')">A</button>
    </div>
    </div>`;
}

function getArchivNoteTemplate(indexArchivNote){
    return `
    <div class="archiv_note">
    <div>
    <h3>${allNotes.archivNotesTitles[indexArchivNote]}</h3>
    <p>${allNotes.archivNotes[indexArchivNote]}</p> 
    </div>
    <hr>
    <div class="buttons">
    <button onclick="moveNote(${indexArchivNote}, 'archivNotes', 'trashNotes')">x</button>
    <button onclick="moveNote(${indexArchivNote}, 'archivNotes', 'notes')">A</button>
    </div>
    </div>`;
}