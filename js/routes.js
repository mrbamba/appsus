import bookApp from '../books/js/pages/book-app.cmp.js';
import bookDetails from '../books/js/pages/book-details.cmp.js';
import homePage from '../books/js/pages/home-page.cmp.js';
import bookAdd from '../books/js/pages/book-add.cmp.js';
import aboutCmp from '../books/js/pages/about.cmp.js';
import aboutTeam from '../books/js/cmps/about-team.cmp.js';
import aboutService from '../books/js/cmps/about-service.cmp.js';


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/add',
        component: bookAdd
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