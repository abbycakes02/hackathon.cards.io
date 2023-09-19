import React from "react";
import Card from './Card';


//creating react component;
const Structure = () => {
    return (
<div className="Structure">
<table>
        <thead>
            <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
            <td>
            <Card title='GirlHacks, NJ(Apply by 09/22)' 
            description ='Beginner' 
            image = "https://girlhacks.github.io/images/GirlHacks%202023%20Logo.png"
            linkUrl="https://www.instagram.com/girlhacksnjit/"
            buttonUrl="https://docs.google.com/forms/d/e/1FAIpQLScm3SNEUw_oaDN48dw6WMXyxma_YYPtn_ZH7cB04IEk1W4jsg/viewform"/>
            </td>
            <td>
                <Card title='HackHarvard(Apply by 09/25)' 
            description ='Intermediate' 
            image = "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/000/857/071/datas/original.png"
            linkUrl="https://www.instagram.com/hackharvardcollege/" 
            buttonUrl="https://portal.hackharvard.io/signin"/>
            </td>
            <td>
                <Card title='CodeforGood(App depends on location)' 
                description ='Difficult' 
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRK-aC-aiYloN9Dpcr-QM8WKWPXVFHOsSZHA&usqp=CAU"
                linkUrl="https://www.instagram.com/jpmorgan/" 
                buttonUrl="https://careers.jpmorgan.com/us/en/students/programs/code-for-good#:~:text=We%20host%20in%20person%20and,attending%20a%20Social%20Good%20Hackathon%3F"/>
            </td>
            </tr>
            <tr>
            <td>
                <Card title='Wellesleyhack(Apply by 10/23)' 
                description ='Beginner' 
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpQ1_hH_Q2h7kVmr25Z4kAo1Tf2IsVTZzXCSLi1bHthwef52kL6gN7EmO-91TFx6diLQ&usqp=CAU"
                linkUrl="https://www.instagram.com/wellesleyhack/" 
                buttonUrl="https://www.wellesleyhacks.org/#faq"
                />
            </td>
            <td>
                <Card title='HackPrinceton(Apply by 10/08)' 
            description ='Beginner($50 travel reimbursement)' 
            image = "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/421/629/datas/original.png"
            linkUrl="https://www.instagram.com/hackprinceton/?hl=en" 
            buttonUrl="https://my.hackprinceton.com/dashboard"
            />
            </td>
            <td>
                <Card title='HackGTX(Apply by 09/19)' 
                description ='Beginner(travel reimbursement provided on request)' 
            image = "data:image/jpeg;base64,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"
            linkUrl="https://www.instagram.com/thehexlabs/" 
            buttonUrl="https://hack.gt/"/>
            </td>
            </tr>
            <tr>
            <td>
            <Card title='CalHacks, CA(Apply by 09/22)' 
            description ='Intermediate' 
            image = "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/246/249/datas/original.png"
            linkUrl="https://www.instagram.com/calhacks/" 
            buttonUrl="https://apply.calhacks.io/login"
            />
            </td>
            <td>
            <Card title='HackRU, NJ(Apply by 10/30)' description ='Beginner 18+' 
            image = "https://hackru.org/static/media/racoon-min.e901923e.png"
            linkUrl="https://www.instagram.com/thehackru/" 
            buttonUrl="https://hackru.org/"/>
            </td>
            <td>
            <Card title='MadHacks, WI(Apply by 11/10)' 
            description ='Beginner' 
            image = "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/396/168/datas/large.png"
            linkUrl="https://www.instagram.com/madhacksuw/?hl=en" 
            buttonUrl="https://tally.so/r/nWEQZR"
            />
            </td>
            </tr>
        </tbody>
      </table>
</div>
        )
}
//export react component;
export default Structure;