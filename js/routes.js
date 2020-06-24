import bookApp from './apps/books/pages/book-app.cmp.js';
import bookDetails from './apps/books/pages/book-details.cmp.js';
import homePage from './apps/books/pages/home-page.cmp.js';
import bookAdd from './apps/books/pages/book-add.cmp.js';
import aboutCmp from './apps/books/pages/about.cmp.js';
import aboutTeam from './apps/books/cmps/about-team.cmp.js';
import aboutService from './apps/books/cmps/about-service.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import notesApp from './apps/notes/pages/notes-app.cmp.js';


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
    },
    {
        path: '/notes',
        component: notesApp
    },
    {
        path: '/about/:who?',
        component: aboutCmp,
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