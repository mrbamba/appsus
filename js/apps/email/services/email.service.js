import {utilService} from '../../../services/util.service.js';

export const emailService={
    getAllEmails,
    getById,
    setAsRead,
    getStarredEmails,
    getSentEmails,
    getSpamEmails,
    getTrashEmails,
    getCleanEmails,
    getEmptyEmail,
    sendEmail,

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
        direction:'outbound'
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
        direction:'inbound'

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
        deleted:true, 
        spam:true,
        direction:'outbound'

    },
]

function getById(emailId){
    const email = gEmails.find(email=>email.id===emailId)
    return Promise.resolve(email)
}


function setAsRead(emailId){
    getById(emailId)
    .then ((email)=>{
        email.isRead=true;
    })
}

function getCleanEmails(){
    let emailsToReturn=gEmails.filter(email=>{
        return email.spam===false && email.deleted===false;
    })
    return Promise.resolve(emailsToReturn);
}

function getAllEmails(){
    return Promise.resolve(gEmails);
}
function getStarredEmails(){
    
    let emailsToReturn=gEmails.filter(email=>{
        return email.isStarred;
    })
    return Promise.resolve(emailsToReturn)
}
function getSentEmails(){
    let emailsToReturn=gEmails.filter(email=>{
        return email.direction==='outbound'
    })
    return Promise.resolve(emailsToReturn)
}

function getSpamEmails(){
    let emailsToReturn=gEmails.filter(email=>{
        return email.spam;
    })
    return Promise.resolve(emailsToReturn)
}

function getTrashEmails(){
    let emailsToReturn=gEmails.filter(email=>{
        return email.deleted;
    })
    return Promise.resolve(emailsToReturn)
}

function getEmptyEmail(){
    return Promise.resolve({
        id:utilService.getRandomId(),
        fromAddress:'dhaski@gmail.com',
        fromName:'Dan Haski',
        toAddress:'',
        toName:'',
        subject:'',
        body:'',
        timestamp:new Date(),
        isRead:false,
        isStarred:false,
        deleted:false, 
        spam:false,
        direction:'outbound',

    })
}


function sendEmail(email){
    gEmails.push(email)
}