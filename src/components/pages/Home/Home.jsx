import React, { useEffect, useState } from "react"
import "../Home/styles.scss"
import Header from "../../Header/Header"
import Card from "../../Card/Card.jsx"
import img1 from "../../Image/assassins-creed.png"
import axios from "axios"

function Home() {
    const [replyData, setReplyData] = useState ([]);

    useEffect (()=>{
        data()
    },[]);

    const data = async () => {
        const Api = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/"
        try{
            const reply = await axios.get(Api, {
                headers:{
                    'Content-Type': 'application/json',
                    'dev-email-address': 'abelardoalves510@gmail.com',
                },
            });
            return setReplyData(reply.data)
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <>
        <Header/>
        <div className="container">
                <div className="space-cards">
                {
                        replyData.map((value, id)=>
                        <Card
                        id={id}
                        image={value.thumbnail}
                        name={value.title}
                        description={value.short_description}
                        release={value.release_date}
                        plataform={value.platform}
                        genero={value.genre}
                        button={value.game_url}
                        />
                        )
                    }
                    <Card image={img1} name={"Assassins Creed Valhalla"} description={"Torne-se Eivor, um invasor Viking poderoso, e leve seu clã das adversas costas da Noruega para um novo lar em meio às exuberantes terras agrícolas da Inglaterra do século IX."} release={"2019"} plataform={"Pc/Xbox/PS4"}/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}
export default Home