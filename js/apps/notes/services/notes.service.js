'use strict';
import {utilService} from '../../../services/util.service.js';

export const noteService = {
   getNotes
}

function getNotes() {
    return notes;
}

var notes = [
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Gotta call mom"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        info: {
            label: "To do:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];