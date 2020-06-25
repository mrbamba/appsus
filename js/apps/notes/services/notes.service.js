'use strict';
import {utilService} from '../../../services/util.service.js';

export const noteService = {
   getNotes,
   addNote,
   getNoteById
}

function getNotes() {
    return notes;
}

function getNoteById(id) {
    return notes.find(note => note.id === id)    
}

function addNote(type, txtOrUrl, title) {
    var newNote = {
        id: utilService.makeId(),
        type: type,
        info: {
            txt: '',
            url: '',
            title: '',
            label: '',
            todos: null
        }
    }
    if (type === 'noteText') newNote.info.txt = txtOrUrl;
    else if (type === 'noteImg') {
        newNote.info.url = txtOrUrl;
        newNote.info.title = title;
    }
    else if (type === 'noteTodos') {
        newNote.info.label = title;
        var todosTxt = txtOrUrl.split(',');
        var todos = todosTxt.map(todo => {
            return {txt: todo, doneAt: null};
        })
        newNote.info.todos = todos;
    }
    notes.unshift(newNote);
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
    },
    {
        id: utilService.makeId(),
        type: 'noteImg',
        info: {
            url: 'https://i.pinimg.com/originals/9d/d8/02/9dd802ea7726b25cbbf99ce3b853ccfe.jpg',
            title: ''
        },
    }
];