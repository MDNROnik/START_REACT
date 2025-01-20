import React, { useEffect } from "react"
export default function Main() {
    const [count, setcount] = React.useState(0);
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imgUrl: ""
    });

    function handlefuction(event){
        console.log(event.currentTarget.name);
        const{value, name} = event.currentTarget;
        setMeme(
            (prevMeme)=>(
                {
                    ...prevMeme,
                    [name]:value
                }
            )
        )
    }
    useEffect(
        ()=>{
            fetch("https://api.imgflip.com/get_memes")
            .then( res => res.json() )
            .then(obj=> {
                const {data} = obj;
                const {memes} = data;
                console.log(data);
                const randomNumber = Math.floor(Math.random() * memes.length)
                const u = memes[randomNumber].url;
                setMeme(
                    (meme)=>(
                        {
                            ...meme,
                            imgUrl:u
                        }
                    )
                )
            })

        },
        [count]
    )

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handlefuction}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handlefuction}
                    />
                </label>
                <button onClick={
                    function(){
                        setcount(count+1);
                    }
                }>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}