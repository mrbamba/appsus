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
        color: 'rgb(248, 248, 157)',
        info: {
            txt: 'Call mom'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteImg',
        isPinned: false,
        color: '',
        info: {
            url: 'https://cdn.shopify.com/s/files/1/0808/8861/products/Milk_76b3410f-ff3e-496a-a64e-2de581a8db32_grande.jpg?v=1586811080',
            title: 'Save the earth - it is the only planet with chocolate!'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteText',
        isPinned: false,
        color: 'rgb(248, 160, 248)',
        info: {
            txt: 'As a child i never imagined that all of the real monsters in the world would be humans.'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteImg',
        isPinned: false,
        color: 'rgb(171, 210, 236)',
        info: {
            url: 'https://c.stocksy.com/a/f9S500/z9/1299871.jpg',
            title: "Winter Wonderland"
        },
    },
    {
        id: utilService.makeId(),
        type: 'noteTodos',
        isPinned: false,
        color: 'rgb(81, 192, 186)',
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
        color: 'rgb(171, 210, 236)',
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
        type: 'noteText',
        isPinned: false,
        color: 'rgb(248, 160, 248)',
        info: {
            txt: 'Where wisdom reigns, there is no conflict between thinking and feeling. - Carl Jung'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteImg',
        isPinned: false,
        color: 'white',
        info: {
            url: 'https://i.pinimg.com/originals/9d/d8/02/9dd802ea7726b25cbbf99ce3b853ccfe.jpg',
            title: 'Shimi'
        },
    },
    {
        id: utilService.makeId(),
        type: 'noteVideo',
        isPinned: false,
        color: 'rgb(241, 203, 98)',
        info: {
            url: 'https://steamcdn-a.akamaihd.net/steam/apps/256781910/movie480_vp9.webm?t=1587056339',
            title: 'Play games...'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteText',
        isPinned: false,
        color: 'rgb(248, 160, 248)',
        info: {
            txt: 'The true value of a human being is determined primarily by the measure and the sense in which he has attained to liberation from the self. - Albert Einstein'
        }
    },
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
    const idx = notes.findIndex(note => note.id === id);
    notes.splice(idx, 1);
}
