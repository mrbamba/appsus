import bookApp from './apps/books/pages/book-app.cmp.js';
import bookDetails from './apps/books/pages/book-details.cmp.js';
import homePage from './pages/home-page.cmp.js';
import bookAdd from './apps/books/pages/book-add.cmp.js';
import about from './pages/about.cmp.js';
import aboutTeam from './cmps/about-team.cmp.js';
import aboutService from './cmps/about-service.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import notesApp from './apps/notes/pages/notes-app.cmp.js';
import noteEdit from './apps/notes/pages/note-edit.cmp.js';
import emailDetails from './apps/email/cmps/email-details.cmp.js';


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/books',
        component: bookApp,
        children: [
            {
                path: ':bookId?',
                component: bookDetails
            },
            {
                path: 'add',
                component: bookAdd
            },
        ]
    },
    {
        path: '/email',
        component: emailApp,
        children:[
            {
                path:':emailId?',
                component:emailDetails,
            },
            {
                path:'inbox',
                component:emailApp,
            },
            {
                path:'starred',
                component:emailApp,
            },
            {
                path:'sent',
                component:emailApp,
            },
            {
                path:'spam',
                component:emailApp,
            },
            {
                path:'trash',
                component:emailApp,
            },
        ]
    },
    {
        path: '/notes',
        component: notesApp,
        children: [
            {
                path: ':noteId?',
                component: noteEdit
            }
        ]
    },
    {
        path: '/about/:who?',
        component: about,
        children: [
            {
                path: 'team',
                component: aboutTeam
            },
            {
                path: 'service',
                component: aboutService
            }
        ]
    }

];

export const myRouter = new VueRouter({ routes: myRoutes })