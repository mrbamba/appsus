'use strict';
import { utilService } from '../../../services/util.service.js';

export const noteService = {
    getNotes,
    addNote,
    getNoteById,
    deleteNote,
    getPinnedNotes,
    getUnpinnedNotes,
    pinNote,
    changeColor
}

var notes = [
    {
        id: utilService.makeId(),
        type: 'noteText',
        isPinned: true,
        color: 'lightyellow',
        info: {
            txt: 'Gotta call mom'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteImg',
        isPinned: false,
        color: 'lightblue',
        info: {
            url: 'https://c.stocksy.com/a/f9S500/z9/1299871.jpg',
            title: "Beautiful"
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteTodos',
        isPinned: false,
        color: 'lightcoral',
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
        type: 'noteTodos',
        isPinned: false,
        color: 'lightpink',
        info: {
            label: 'Shopping List:',
            todos: [
                { txt: 'Milk', doneAt: null },
                { txt: 'Fruits', doneAt: null },
                { txt: 'Chocolate', doneAt: null },
                { txt: 'More chocolate', doneAt: null },
                { txt: 'Pasta', doneAt: null },

            ]
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteImg',
        isPinned: false,
        color: 'white',
        info: {
            url: 'https://i.pinimg.com/originals/9d/d8/02/9dd802ea7726b25cbbf99ce3b853ccfe.jpg',
            title: 'Our dog'
        },
    },
    {
        id: utilService.makeId(),
        type: 'noteVideo',
        isPinned: false,
        color: 'lightgreen',
        info: {
            url: 'https://steamcdn-a.akamaihd.net/steam/apps/256781910/movie480_vp9.webm?t=1587056339',
            title: 'Play games...'
        }
    }
];


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
        isPinned: false,
        color: 'white',
        info: {
            txt: '',
            url: '',
            title: '',
            label: '',
            todos: null
        }
    }
    if (type === 'noteText') newNote.info.txt = txtOrUrl;
    else if (type === 'noteImg' || type === 'noteVideo') {
        newNote.info.url = txtOrUrl;
        newNote.info.title = title;
    }
    else if (type === 'noteTodos') {
        newNote.info.label = title;
        var todosTxt = txtOrUrl.split(',');
        var todos = todosTxt.map(todo => {
            return { txt: todo, doneAt: null };
        })
        newNote.info.todos = todos;
    }
    notes.unshift(newNote);
}

function pinNote(id) {
    const note = getNoteById(id);
    const idx = notes.findIndex(note => note.id === id);
    note.isPinned = !note.isPinned;
    notes.splice(idx, 1);
    if (note.isPinned) {
    notes.unshift(note);
    }
    else {
        notes.push(note);
    }
    
}

function changeColor(color, id) {
    const note = getNoteById(id);
    note.color = color;
}

function getPinnedNotes() {
    const pinnedNotes = notes.filter(note => { return note.isPinned === true });
    return pinnedNotes;
}


function getUnpinnedNotes() {
    const unpinnedNotes = notes.filter(note => !note.isPinned);
    console.log(unpinnedNotes)
    return unpinnedNotes;
}

function deleteNote(id) {
//     const selectedNote = getNoteById(id);
// // console.log(selectedNote)
// const pinnedNotes = getPinnedNotes();
// const unpinnedNotes = getUnpinnedNotes();
// if (selectedNote.isPinned) {
//     const idx = pinnedNotes.findIndex(note => note.id === id);
//     pinnedNotes.splice(idx, 1);
// } else {
//     const idx = unpinnedNotes.findIndex(note => note.id === id);
//     unpinnedNotes.splice(idx, 1);
// }
const idx = notes.findIndex(note => note.id === id);
notes.splice(idx, 1);
    // console.log(notes)
    // var idxInNotes = notes.findIndex(note => note.id === id);
    // console.log(idxInNotes)
    // notes.splice(idxInNotes, 1);
}

// const selectedNote = getNoteById(id);
// // console.log(selectedNote)
// const pinnedNotes = getPinnedNotes();
// const unpinnedNotes = getUnpinnedNotes();
// if (selectedNote.isPinned) {
//     const idx = pinnedNotes.findIndex(note => note.id === id);
//     pinnedNotes.splice(idx, 1);
// } else {
//     const idx = unpinnedNotes.findIndex(note => note.id === id);
//     unpinnedNotes.splice(idx, 1);
// }
// var idxInNotes = notes.findIndex(note => note.id === selectedNote.id);
// notes.splice(idxInNotes,1);