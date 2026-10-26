import './ styles/startPage.css'
import icon from '../assets/pics/favicon-180.png'


function Header(){
    return (
        <>
            <header id='Header'>
                <img id="icon" src={icon}/>
            </header>
        
        
        
            <LoginBtn/>
        
        </>
    );
}


function StartPage() {    
    return (
        <div id="StartBody">
            <Header/><br /><br /><br /><br /><br />
            <h2 id="anas">$$$$$$$$Anas So Gayy ! </h2>
        </div>
    );
}

function LoginBtn() {
    return(
        <>
            <button id="loginBtn">Register</button>
            <span>Already have an account ?</span>
        </>
    );
}


export default StartPage;