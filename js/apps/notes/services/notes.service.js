'use strict';
import { utilService } from '../../../services/util.service.js';

export const noteService = {
    getNotes,
    addNote,
    getNoteById,
    deleteNote,
    pinNote,
    changeColor,
    getTodos,
    getPinnedNotes,
    getUnpinnedNotes
}

var notes = [
    {
        id: utilService.makeId(),
        type: 'noteText',
        isPinned: true,
        color: 'rgb(248, 248, 157)',
        info: {
            txt: 'Call mom',
            title: 'Reminder'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteText',
        isPinned: false,
        color: 'rgb(248, 160, 248)',
        info: {
            txt: 'As a child i never imagined that all of the real monsters in the world would be humans.',
            title: ''
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
            ],
            todosTxt: 'Do that, Do this'
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
            ],
            todosTxt: 'Milk, Fruits, Chocolate, More chocolate, Pasta'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteText',
        isPinned: false,
        color: 'rgb(81, 192, 186)',
        info: {
            txt: 'Where wisdom reigns, there is no conflict between thinking and feeling. - Carl Jung',
            title: 'Quote'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteImg',
        isPinned: false,
        color: 'rgb(248, 248, 157)',
        info: {
            url: 'https://www.rspca-pix.com/pimage/114/640033/640033_450_450_81393_0_fill_0_03347f0da3079474cd9cea1d47498f6a.jpg',
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
    // {
    //     id: utilService.makeId(),
    //     type: 'noteVideo',
    //     isPinned: false,
    //     color: 'rgb(241, 203, 98)',
    //     info: {
    //         url: 'https://www.youtube.com/embed/BBEaVSDRrm8',
    //         title: 'Play games...'
    //     }
    // },
    {
        id: utilService.makeId(),
        type: 'noteAudio',
        isPinned: false,
        color: 'white',
        info: {
            url: 'http://www.hochmuth.com/mp3/Tchaikovsky_Nocturne__orch.mp3',
            title: 'Listen to this!'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteText',
        isPinned: false,
        color: 'rgb(248, 160, 248)',
        info: {
            txt: 'The true value of a human being is determined primarily by the measure and the sense in which he has attained to liberation from the self. - Albert Einstein',
            title: 'Quote'
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
            todosTxt: '',
            todos: null
        }
    }
    if (type === 'noteText') {
        newNote.info.txt = txtOrUrl;
        newNote.info.title = title;
    }
    else if (type === 'noteImg' || type === 'noteVideo' || type === 'noteAudio') {
        newNote.info.url = txtOrUrl;
        newNote.info.title = title;
    }
    else if (type === 'noteTodos') {
        newNote.info.label = title;
        newNote.info.todosTxt = txtOrUrl;
        var todosTxts = txtOrUrl.split(',');
        var todos = todosTxts.map(todo => {
            return { txt: todo, doneAt: null };
        })
        newNote.info.todos = todos;
    }
    var idx = getNumOfPinnedNotes();
    notes.splice(idx, 0, newNote);
}

function pinNote(id) {
    const note = getNoteById(id);
    const pinnedNotes = getPinnedNotes();
    const unpinnedNotes = getUnpinnedNotes();
    if (note.isPinned) {
        var oldIdx = pinnedNotes.findIndex(note => note.id === id);
        pinnedNotes.splice(oldIdx, 1);
        unpinnedNotes.push(note);
    }
    else {
        oldIdx = unpinnedNotes.findIndex(note => note.id === id);
        unpinnedNotes.splice(oldIdx, 1);
        pinnedNotes.unshift(note);
    }
    note.isPinned = !note.isPinned;
}

function changeColor(color, id) {
    const note = getNoteById(id);
    note.color = color;
}

function getPinnedNotes() {
    const pinnedNotes = notes.filter(note => note.isPinned);
    return pinnedNotes;
}

function getNumOfPinnedNotes() {
    var count = 0;
    notes.forEach(note => {
        if (note.isPinned) count++
    })
    return count;
}


function getUnpinnedNotes() {
    const unpinnedNotes = notes.filter(note => !note.isPinned);
    return unpinnedNotes;
}

function deleteNote(id) {
    const note = getNoteById(id);
    const pinnedNotes = getPinnedNotes();
    const unpinnedNotes = getUnpinnedNotes();
    if (note.isPinned) {
        note.isPinned = !note.isPinned
        var idx = pinnedNotes.findIndex(note => note.id === id);
        pinnedNotes.splice(idx, 1);
    } else {
        note.isPinned = !note.isPinned
        idx = unpinnedNotes.findIndex(note => note.id === id);
        unpinnedNotes.splice(idx, 1);
    }
    var idxInAllNotes = notes.findIndex(note => note.id === id);
    notes.splice(idxInAllNotes, 1);
    console.log(notes)
    console.log(pinnedNotes)
    console.log(unpinnedNotes)
}

function getTodos(id) {
    const note = getNoteById(id);
    const todos = note.info.todos;
    const todoTxts = todos.map(todo => todo.txt).join(', ');
    console.log(todoTxts);
    return todoTxts
}