import './ styles/startPage.css'

import meteo from '../assets/pics/pngegg.png'

function Header(){
    return (
        <>
            <header id='Header'>
                <img src={meteo} height={150}px id="meteo" />
                <div id="title">KRONOS</div>
            </header>
        
        
            <LoginBtn/>
        
        </>
    );
}


function StartPage() {    
    return (
        <div id="StartBody">
            <Header/><br /><br /><br /><br /><br />
            <Card/>
        </div>
    );
}

function Card() {
    return(<>
      <div className="card">
         <p id='card'>Hello there ,<br/> Wanna watch some ANime <br/> but  didn't find Where ...</p>
      </div>
         </>);
}




function LoginBtn() {
    return(
        <>
            <button id="loginBtn"><span>Register</span></button>
            <a id='login'>Already have an account ?</a>
        </>
    );
}


export default StartPage;
