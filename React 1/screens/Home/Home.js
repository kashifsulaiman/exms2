import React, { Component } from 'react';

class Home extends Component {

    render() {
        const text = "hello world";
        const obj = {
            breakfast: "Halwa Poori",
            lunch: "Biryani",
            dinner: "Daal"
        }
        const list = ["Chae", "Halwa Poori", "Paye", "Lassi"];
        const newList = list.map((item, index) => {
            return <li key={Math.random() * index} >{item + " sab mera hua"} </li>
        });

        return <div>
            <h1>This is home....</h1>
            <p>{text}</p>
            <p>{obj.breakfast}</p>
            <p>{obj.lunch}</p>
            <p>{obj.dinner}</p>
            

            <ul>
                {newList}
            </ul>
        </div>
    }
}

export default Home
