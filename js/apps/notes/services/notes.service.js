'use strict';
import {utilService} from '../../../services/util.service.js';

export const noteService = {
   getNotes,
   addNote
}

function getNotes() {
    return notes;
}

function addNote(type, txtOrUrl, title) {
    var newNote = {
        id: utilService.makeId(),
        type: type,
        info: {
            txt: '',
            url: '',
            title: ''
        }
    }
    if (type === 'noteText') newNote.info.txt = txtOrUrl;
    else if (type === 'noteImg') {
        newNote.info.url = txtOrUrl;
        newNote.info.title = title;
    }
    console.log(newNote);
    notes.push(newNote);
}

var notes = [
    {
        id: utilService.makeId(),
        type: 'noteText',
        isPinned: true,
        info: {
            txt: 'Gotta call mom'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteImg',
        info: {
            url: '../../../img/hermione.jpg',
            title: "Hermione Granger"
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteTodos',
        info: {
            label: 'To do:',
            todos: [
                { txt: 'Do that', doneAt: null },
                { txt: 'Do this', doneAt: 187111111 }
            ]
        }
    }
];