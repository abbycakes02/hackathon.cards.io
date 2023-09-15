import React from "react";
import Card from './Card'
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
                <td className="time">1</td>
                <Card title='CalHacks' description ='Intermediate' color = "pink"/>
                <Card title='CalHacks' description ='Intermediate' color = "pink"/>
            </tr>
            <tr>
                <td className="time">2</td>
                <Card title='CalHacks' description ='Intermediate' color = "pink" image = "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/246/249/datas/original.png"/>
                <td></td>
                </tr>
            <tr>
            <Card title='CalHacks' description ='Intermediate' color = "pink" image = "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/246/249/datas/original.png"/>
            <td></td>
            <Card title='CalHacks' description ='Intermediate' color = "pink" image = "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/246/249/datas/original.png"/>
            </tr>
        </tbody>
      </table>
</div>
        )
}
//export react component;
export default Structure;