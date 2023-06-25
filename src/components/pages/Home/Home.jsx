import "../Home/styles.scss"
import Header from "../../Header/Header"
import Card from "../../Card/Card.jsx"
import img1 from "../../Image/assassins-creed.png"

function Home() {
    return(
        <>
        <Header/>
        <div className="container">
                <Card image={img1} name={"Assassins Creed Valhalla"} description={"Torne-se Eivor, um invasor Viking poderoso, e leve seu clã das adversas costas da Noruega para um novo lar em meio às exuberantes terras agrícolas da Inglaterra do século IX."} release={"2019"}/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}
export default Home