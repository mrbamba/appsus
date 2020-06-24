import {utilService} from '..../services/util.service.js';

export const emailService={
    getEmails,
    getById,

}

var gEmails=[
    {
        id:utilService.getRandomId(),
        from:'dhaski@gmail.com',
        to:'haskiseo@gmail.com',
        subject:'Testing the new email app',
        body:'Hey Dan, I am just testing the new Email app, how do you like it so far',
        timestamp=Date.now(),
    },
    {
        id:utilService.getRandomId(),
        from:'dhaski@gmail.com',
        to:'haskiseo@gmail.com',
        subject:'Test 2',
        body:'Hey Dan, I am just testing the new Email app, how do you like it so far',
        timestamp=Date.now(),
    },    {
        id:utilService.getRandomId(),
        from:'dhaski@gmail.com',
        to:'haskiseo@gmail.com',
        subject:'Testing the new email app third time',
        body:'Hey Dan, I am just testing the new Email app, how do you like it so far',
        timestamp=Date.now(),
    },
]

function getById(emailId){
    const email = gEmails.find(email=>email.id===emailId)
    return Promise.resolve(email)
}

function getEmails(){
    return Promise.resolve(gEmails);
}