import './ styles/startPage.css'
import icon from '../assets/pics/favicon-180.png'


function Header(){
    return (
        <>
            <header id='Header'>
                <img id="icon" src={icon}/>
            </header>
        </>
    );
}


function StartPage() {    
    return (
        <div id="StartBody">
            <Header/>
            


        </div>


        



    );
}

export default StartPage;