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
    getUnreadCount,
    deleteEmail,
    markAsSpam,
    markAsUnread,

}

var gEmails=[
    {
        id:utilService.getRandomId(),
        fromAddress:'dan@gmail.com',
        fromName:'Dan',
        toAddress:'dror@gmail.com',
        toName:'Dror',
        subject:'Zoom Meeting at 2PM tomorrow',
        body:`Hey Dror, 
                I will not be able to attend our metting tomorrow, 
                I'm sorry but it turns out I will be at a board meeting 
                from noon till the end of the day, 
                can we reschedule to next monday at 1PM?` ,
        timestamp:new Date(),
        isRead:false,
        isStarred:false,
        deleted:false, 
        spam:false,
        direction:'outbound'
    },
    {
        id:utilService.getRandomId(),
        fromAddress:'dan@gmail.com',
        fromName:'Dan Haski',
        toAddress:'samantha@gmail.com',
        toName:'Samantha Kofler',
        subject:'You have a new message from Samantha',
        body:`Hey Dan, 
            I am working on the project and I think Search is now working, 
            can you please test?`,
        timestamp:new Date(),
        isRead:false,
        isStarred:false,
        deleted:false, 
        spam:false,
        direction:'outbound'
    },
    {
        id:utilService.getRandomId(),
        fromAddress:'powerdispatch@gmail.com',
        fromName:'PowerDispatch',
        toAddress:'dan@gmail.com',
        toName:'Dan',
        subject:'Field service management software simplified',
        body:`We at PowerDispatch are always thinking about how we can simplify your workflow,
                as a result we have beem working on and have now released the latest version of the software,
                the next time you will log in you will be greeted with a new UI and improved workflow.
                
                Thank you for being a loyal customer, as always, here for you, PowerDispatch.`,
        timestamp:new Date(),
        isRead:false,
        isStarred:true,
        deleted:false, 
        spam:false,
        direction:'inbound'

    },    
    {
        id:utilService.getRandomId(),
        fromAddress:'dan@gmail.com',
        fromName:'Dan Haski',
        toAddress:'steven@gmail.com',
        toName:'Steven',
        subject:`Unable to get you on the phone, please call me ASAP`,
        body:'You can call me at (602)653-7688',
        timestamp:new Date('2020-03-21'),
        isRead:false,
        isStarred:true,
        deleted:true, 
        spam:true,
        direction:'outbound'

    },
    {
        id:utilService.getRandomId(),
        fromAddress:'michelle@gmail.com',
        fromName:'Michelle',
        toAddress:'dan@gmail.com',
        toName:'Dan',
        subject:'I miss you!',
        body:`How is my favorite cousin doing? How is Ethan? I hear he has grown so much! 
        I miss guys dearly! When are you planning on visiting us?
        
        Michael is almost finished with college now, 
        he plans on joining his father's firm as an engineer, we are so proud.`,
        timestamp:new Date(),
        isRead:true,
        isStarred:true,
        deleted:false, 
        spam:false,
        direction:'inbound'
    },
    {
        id:utilService.getRandomId(),
        fromAddress:'dan@gmail.com',
        fromName:'Dan',
        toAddress:'elite@gmail.com',
        toName:'Wifey',
        subject:'Can you stop by the shop?',
        body:`Hey Honey,
            I know you are busy but can you stop by the shop and bring milk and cereal on the way back from work please?`,
        timestamp:new Date(),
        isRead:true,
        isStarred:true,
        deleted:false, 
        spam:false,
        direction:'ourbound'
    },
    {
        id:utilService.getRandomId(),
        fromAddress:'mint@mint.com',
        fromName:'Mint Financial',
        toAddress:'dan@gmail.com',
        toName:'Dan',
        subject:'Do you know your credit score?',
        body:`Stay on top of your financials!
            We noticed you haven't checked your credit score in 3 months, 
            log in now to check your credit score and stay up to date on any changes 
            to your credit history or events on your credit. log in now at www.mint.com`,
        timestamp:new Date(),
        isRead:true,
        isStarred:false,
        deleted:true, 
        spam:false,
        direction:'inbound'
    },
    {
        id:utilService.getRandomId(),
        fromAddress:'mizrahi@mizrahi.co.il',
        fromName:'Mizrahi Bank',
        toAddress:'dan@gmail.com',
        toName:'Dan',
        subject:'אתה מוזמן לנסות את הכרטיס אשראי החדש של בנק מזרחי',
        body:`הכרטיס החדש של בנק מזרחי הוא לא כרטיס רגיל,
         תוכל להתצטרף ללא עמלות למשך 18 חודשים,
          בנוסף הכרטיס הוא ללא עלויות למשך 5 שנים, אז למה אתה מחכה`,
        timestamp:new Date(),
        isRead:false,
        isStarred:false,
        deleted:false, 
        spam:false,
        direction:'inbound'
    },
    {
        id:utilService.getRandomId(),
        fromAddress:'automated@stocktwits.com',
        fromName:'StockTwits',
        toAddress:'dan@gmail.com',
        toName:'Dan',
        subject:'Verify Your Email on Stocktwits',
        body:`To Get Started, Verify Your Email


        Please verify your email by pressing the button below:
         
        Verify Your Email
        If you're having any trouble with your account, please reply to this email and our community team will help as soon as possible.
        
        Remember, you control all of your settings by going to your settings page on Stocktwits. That is where you can change your profile, bio, username and more.
        
        We're thrilled to welcome you to the largest network for investors and traders!`,
        timestamp:new Date(),
        isRead:false,
        isStarred:false,
        deleted:false, 
        spam:false,
        direction:'inbound'
    },
    {
        id:utilService.getRandomId(),
        fromAddress:'googlecloud@google.com',
        fromName:'Google Cloud',
        toAddress:'dan@gmail.com',
        toName:'Dan',
        subject:'Google Cloud Newsletter, June 2020 | Next OnAir is coming',
        body:`Google Cloud Next ’20: OnAir | July 14–September 8
        Join live Q&As with Google Cloud experts, watch on-demand sessions, and get fresh content every week.
        Register now
        
         
         
            
        Jakarta is live: Our ninth APAC region lowers latency, boosts availability.
        See what's new	See what's new
            
        Fight disease with data: Medical and data researchers battle COVID-19.
        Learn how	Learn how
            
        Big day for big data: BigQuery turns 10.
        Read more	Read more
         
        PLATFORM NEWS
        Hyperscale research on GKE: 15k nodes, 240k cores, 1.48 PiB of RAM.
        What’s possible when scale is no longer a governor? Get the details – and potential applications from gaming to ecommerce – as data scientists and infrastructure architects’ collaborate to push the boundaries of both disciplines.
        Build resilient systems to weather the unexpected.
        Lock down business continuity and disaster recovery scenarios with best practices from our VP of engineering, Ben Treynor, and learn why SRE is the secret weapon that enables Google to reliably manage all nine of our billion-user products.
        Father’s Day AI: A searchable video archive makes a present of the past.
        See how an AI engineer built a searchable archive of her family home movies using 127 GB of footage spanning 30 years – and almost as many video formats – that transcribes audio, recognizes objects, and extracts text from images.
        We want the func: Java 11 comes to Cloud Functions.
        Write Cloud Functions using your favorite JVM languages – including Java, Kotlin, Groovy, and Scala – with our Functions Framework for Java, or with frameworks like Spring Cloud Functions and Micronaut.
         
        RESOURCES
        Take new certification prep courses and online proctored tests – and collect skill badges.
        Stay productive and current and build new skills with certifications designed to meet the rapidly increasing adoption of cloud technology.
        Streamline compliance with the Compliance Resource Center.
        Build and maintain your compliance program with on-demand access to resources to verify technical compliance and control requirements, and help you understand region- and industry-specific regulations.
        Barbarians at the gate: How Kaggle built and deployed a spam filter in eight days using AutoML.
        Read how Kaggle used automated machine learning to beat back a siege of spam that threatened its community of nearly 5 million data scientists.
        How to secure secret storage using Google Cloud Platform, from Rhys Kentish on Medium.
        Lock down keys, passwords, certificates, and critical data at the user and app level across Google Cloud with this step-by-step tutorial.`,
        timestamp:new Date(),
        isRead:true,
        isStarred:false,
        deleted:false, 
        spam:false,
        direction:'inbound'
    },
    {
        id:utilService.getRandomId(),
        fromAddress:'inspiration@mp1.tripadvisor.com',
        fromName:'Tripadvisor',
        toAddress:'dan@gmail.com',
        toName:'Dan',
        subject:'See how we’re helping you Travel Safe',
        body:`Dear Fellow Travelers,

        At Tripadvisor, we believe travel is a force for good — it brings out the best in us, lifts businesses, strengthens communities, and compels us to share our experiences with others. As hotels and restaurants begin to reopen, we know millions of travelers around the world are relying on us for our people-powered guidance and knowledge.
        
        Over the past several months, we’ve been developing new ways to better serve you during this time. You’ve told us that health and safety are now your primary concerns when making travel decisions. That’s why we’re excited to launch Travel Safe, a new set of tools designed to give you peace of mind for when you’re ready to start planning again. Tripadvisor is now the only place where you can find and filter for hospitality businesses worldwide that are taking health and safety precautions in response to COVID-19, and validate that information through first-hand reviews from travelers who have been there.
        
        Here’s a preview of what you can expect:
        
        Health and safety checklists
        Hotel owners can share safety measures directly on their Tripadvisor listing: sanitation procedures, mask wearing guidelines, social distancing policies, and more.
        
        A new search filter
        A new filter allows you to easily find which hotels are taking added safety precautions.
        
        Traveler reviews
        We’ve added prompts to the review submission form so you can validate safety measures and share your experiences with other travelers.
        
        Q&A with business owners
        If you still have questions, you can directly message business owners about their safety measures (or anything else).
        
        
        Whether you’re planning a trip around the block or around the world, we’ll be here to help you travel confidently. The Travel Safe tools are available beginning today to travelers searching for hotels, and soon to come for restaurants, tours and activities. To learn more about Tripadvisor’s Travel Safe initiative and our commitment to COVID-19 recovery, please visit tripadvisor.com/travel-safe.`,
        timestamp:new Date(),
        isRead:false,
        isStarred:false,
        deleted:false, 
        spam:false,
        direction:'inbound'
    },
    {
        id:utilService.getRandomId(),
        fromAddress:'noreply@useaquasuite.com',
        fromName:'Oasis Pools & Spas',
        toAddress:'dan@gmail.com',
        toName:'Dan',
        subject:'Your Swimming Pool Has Just Been Professionally Serviced',
        body:`Here are the details from your service stop today:
        Out time: 06-22-2020 12:29 PM
        Chemical Readings:
        Ph: 7.4
        Alkalinity: 80 (ppm)
        Stabilizer: 30 (ppm)
        Free chlorine: 3.0 (ppm)
        Chemicals Added:
        Tabs: 4.0 tabs
        Tasks Completed:
        Emptied baskets: Completed
        Skimmed surface: Completed
        Brushed: Completed
        Inspected equipment : Completed
        Misc. Readings:
        Pool condition: Clear
        Water level: Normal
        `,
        timestamp:new Date(),
        isRead:false,
        isStarred:false,
        deleted:false, 
        spam:false,
        direction:'inbound'
    },
    {
        id:utilService.getRandomId(),
        fromAddress:'',
        fromName:'',
        toAddress:'dan@gmail.com',
        toName:'Dan',
        subject:'Amazon and Apple want live sports',
        body:`Last Week’s Market Moves
 
        Dow Jones
        25,871 (+1.03%)
        S&P 500
        3,098 (+1.87%)
        Nasdaq
        9,946 (+3.72%)
        Bitcoin
        $9,303 (-1.19%)
        10-Yr US Treasury
        0.694%
        Hey Snackers,
        
        Product marketing in 2020: "Just turn it into a baby." After the viral success of Baby Yoda-related anything, Planters has shipped a toddler mascot. RIP 104-year-old Mr. Peanut. Hello "Baby Nut." What's next, Baby Mr. Clean? Oh wait, that already happened.
        
        Markets ended the week positive led by the tech-heavy Nasdaq. "Reopening stocks" like airlines dipped Friday after Apple said it's re-closing some stores in states with corona-spikes (like Florida and Arizona).
        
        On the pod: CLEAR likes speeding you through airports so you feel better than everyone else — our 15-minute podcast is looking at the startup's pivot to health to speed you into the office.
        
        Want to start getting Snacks daily? Or prefer to unsubscribe? Manage your subscription preferences here.
        Stream
        Amazon offers free Premier League streaming as Big Tech dabbles in live sports
        
        Pour out the pints of London Pride... Amazon is footing the pub tab, as long as you're guzzling London Prime. Amazon will air four Premier League soccer matches on Prime Video and Twitch for free in the UK (even for non-Prime members). It's Amazon's competition-crushing way of getting more of Europe on its platforms:
        
        Last year, Amazon streamed Premier League matches for the first time. It reportedly dropped $112M for the right to broadcast 60 matches over three years (pennies for the 'Zon).
        For the first time, Amazon is offering Premier League on Twitch, the live gaming streamer it bought in 2014 for almost $1B. The matches will be played in empty stadiums, so Amazon's adding optional synthetic cheering noises from EA Sports. And since it's Twitch, you can blast emojis through the match via live chat.
        Encroaching on cable's sacred turf... Live sports are a big reason many still haven't cut the cable cord. Now, those soccer and football-driven cable bucks are being threatened by streamers. Particularly, big tech companies that also happen to have streaming (and billions lying around to spend on it):
        
        Apple just hired a former Amazon sports exec to lead its Apple TV+ sports division. It's reportedly looking to invest in live sports, including college football.
        Amazon recently signed a deal with the NFL for the right to stream 11 Thursday Night Football games a year on Prime and Twitch. The 'Zon first acquired TNF rights in 2017, but this deal is the biggest (reportedly worth over $200M).
        THE TAKEAWAY
        Big Tech can afford to give away things that should be expensive... Companies like Amazon, Apple, and Google rake in so much from their main hustles that they can afford to throw billions at growth in side gigs (like video streaming). That can significantly undercut existing players, like cable providers, who can't afford to give away their main product for free. Legacy cable is bound to lose in a price war with tech's video streaming loss leaders.
        
        Highs
        Who's up...
        
        Battle Royale > Casino Royale... Fortnite-maker Epic Games is reportedly close to raising $750M from private investors (Epic hasn't IPO'd yet). That would level it up to a $17B valuation, up from $15B in 2018. People have flocked to video games for thrills + human interaction in the corona-conomy. Investors think the trend will stick post-lockdown. Epic has over 250M users gaming/chatting via Fortnite. It also owns video chat app Houseparty, which gained 50M users in April alone.
        Kim K and Batman walk into a pod... Spotify shares hit an all-time high after it snagged exclusive podcast deals with Warner Bros' DC Comics and Kim Kardashian. Expect original pods featuring Superman and Wonder Woman... and a Kim K pod on criminal justice. Last month, Spotify dropped $100M to make Joe Rogan Spotify-exclusive. Since its 1st pod-cquisition in 2019, Spotify's market value has gained $25B and its pod audience more than doubled.
        Lows
        ...and who's down
        
        Ship out of luck... Carnival stock plunged 8% Friday after cruise lines suspended all trips out of US ports until September 15th — Carnival had 8 set for August 1st (now canceled). Earlier in the week, Carnival reported a record $4.4B quarterly loss and said it would burn $650M per month for the rest of 2020. The stock actually jumped after that because investors focused on early bookings for 2021, which hit pre-COVID levels.
        Truth hertz, needed something... less bankrupt. A month ago, Hertz filed for bankruptcy with $19B in debt. Over the next two weeks, Hertz stock confoundingly soared 887% as investors piled into shares of the rental car company. So Hertz announced plans to sell $500M in new shares, which it warned are most likely worthless (but would help it raise cash to pay off creditors). Then the SEC (aka the US' chief stock market regulator) questioned the bizarre move. That SEC side-eye led Hertz to cancel the controversial sale.
        What else we're Snackin'
        Chill: How to build a rest ethic that's as strong as your work ethic — Aristotle's "noble leisure" philosophy for the 21st century.
        Visualize: The true size of land masses, from largest to smallest (Brazil beats Australia, hands down under).
        Focus: The two things killing your ability to focus — those endless information feeds aren't always a good thing.
        Learn: How to start managing your finances in your 20s with the BOMB method.
        Eat: 10 once-popular foods that have fallen out of favor (Baked Alaska?).
        🍪 Thanks for Snacking with us! Want to share the Snacks? Invite your friends to sign up here.
        
        The Snacks Daily Podcast
        Biometrics company CLEAR loves to speed you through TSA checkpoints (so that you can feel cooler than people in the "normal" line).
        
        But since people are paranoid of flying right now, CLEAR is pivoting to health: biometric data like fingerprints to virus-screen people for COVID-19.
        
        Clear's "Health Pass" could go way beyond airports — think: stadiums, offices, and retail stores. Tune into our highly digestible pod to learn more about this potential multi-billion dollar market.
        
        
        
        
        Snack Fact Of the Day
        The number of Black-owned businesses in the US fell by 41% from February to April — in contrast, the overall number of small businesses dropped by 35%
        
        This Week
        Monday: Chicago Fed national activity index.
        Tuesday: New home sales for May. Earnings expected from La-Z-Boy.
        Wednesday: Earnings expected from Winnebago, National Beverage and Blackberry.
        Thursday: Weekly jobless claims. Earnings expected from Nike, Darden Restaurants, and Rite Aid.
        Friday: Consumer spending and personal income report for May.
        Disclosure: Authors of this Snacks own shares of Amazon and Spotify`,
        timestamp:new Date(),
        isRead:true,
        isStarred:false,
        deleted:false, 
        spam:false,
        direction:'inbound'
    },
    {
        id:utilService.getRandomId(),
        fromAddress:'noreply@e.fitbit.com',
        fromName:'Fitbit',
        toAddress:'dan@gmail.com',
        toName:'Dan',
        subject:'Your Weekly Boost: June 21',
        body:`First, a very Happy Father’s Day to all our dads. You inspire us everyday! In this week’s boost, discover a simple trick for managing stress—plus learn how Fitbit built a ventilator in just weeks to support COVID-19 efforts.
        Fitbit builds a ventilator
        Learn how Fitbit moved fast to design and build an emergency ventilator to support COVID-19 patients in need.
        
        Read the story  Right arrow
        
        
            
        Family-fun fitness
        Squeeze in workout time and quality time with these 10 ideas that get the whole family moving.
        
        Get ideas  Right arrow
        
        A simple trick for managing stress
        Studies link this technique to lower levels of stress and anxiety. See how you can work it into your life.
        
        Check it out  Right arrow
        
        
        Try a free meditation with Ten Percent Happier for Fitbit on YouTube Live, Tuesdays & Thursdays at 8:30am PDT through June 25
        Check it out  Right Arrow
        Take a yoga break
        Celebrate International Yoga Day with a beginner session from Yoga Studio, available with Fitbit Premium.`,
        timestamp:new Date(),
        isRead:true,
        isStarred:true,
        deleted:false, 
        spam:false,
        direction:'inbound'
    }
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

function getUnreadCount(emails){
    let count=0
            emails.forEach((email) => {
                if (!email.isRead) count ++
            });
            return Promise.resolve(count);
}

function sendEmail(email){
    gEmails.push(email)
}

function deleteEmail(emailId){
    let emailToBeDeletedIndex= gEmails.findIndex(email=> email.id===emailId)
    gEmails[emailToBeDeletedIndex].deleted=true;
}

function markAsSpam(emailId){
    let emailToMarkAsSpamIndex= gEmails.findIndex(email=> email.id===emailId)
    gEmails[emailToMarkAsSpamIndex].spam=true;
}
function markAsUnread(emailId){
    let emailToMarkAsUnread =  gEmails.findIndex(email=> email.id===emailId)
    gEmails[emailToMarkAsUnread].isRead=false;

}