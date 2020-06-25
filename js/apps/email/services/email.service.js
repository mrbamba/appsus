import {utilService} from '../../../services/util.service.js';

export const emailService={
    getEmails,
    getById,
    setAsRead,

}

var gEmails=[
    {
        id:utilService.getRandomId(),
        fromAddress:'dhaski@gmail.com',
        fromName:'Dan Haski',
        toAddress:'dror@gmail.com',
        toName:'Dror H',
        subject:'Testing the new email app',
        body:'Hey Dan, I am just testing the new Email app, how do you like it so far',
        timestamp:new Date(),
        isRead:false,
        isStarred:false,
        deleted:false, 
        spam:false,
    },
    {
        id:utilService.getRandomId(),
        fromAddress:'dhaski@gmail.com',
        fromName:'Dan Haski',
        toAddress:'shimi@gmail.com',
        toName:'Shimi',
        subject:'Test 2',
        body:'Hey Dan, I am just testing the new Email app, how do you like it so far',
        timestamp:new Date(),
        isRead:false,
        isStarred:true,
        deleted:false, 
        spam:false,


    },    {
        id:utilService.getRandomId(),
        fromAddress:'dhaski@gmail.com',
        fromName:'Dan Haski',
        toAddress:'steven@gmail.com',
        toName:'Steven',
        subject:'Testing the new email app third time',
        body:'Hey Dan, I am just testing the new Email app, how do you like it so far',
        timestamp:new Date('2020-03-21'),
        isRead:false,
        isStarred:true,
        deleted:false, 
        spam:false,

    },
]

function getById(emailId){
    const email = gEmails.find(email=>email.id===emailId)
    return Promise.resolve(email)
}

function getEmails(){
    return Promise.resolve(gEmails);
}

function setAsRead(emailId){
    getById(emailId)
        .then ((email)=>{
            email.isRead=true;
        })
}