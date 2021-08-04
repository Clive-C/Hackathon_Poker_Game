import './Header.css'
import { useHistory } from "react-router-dom"

function Header() {
    const history = useHistory();

    return(
        <header className="container-fluid sticky-top">
            <div className="row">
                <div className="col col-lg-12">
                    <h1>The Crazy Game of Poker</h1>
                </div>
                <div className="col col-lg-12 align-bottom">
                    <button 
                        className="btn btn-lg btn-secondary px-md-4 mx-2"
                        onClick={()=>{history.push(`/`)}}    
                    >
                        Home
                    </button>
                    <button 
                        className="btn btn-lg btn-primary px-md-4 mx-2"
                        onClick={()=>{history.push(`/play`)}}
                    >
                        Play
                    </button>
                </div>
            </div>
            
        </header>
        
    )
}

export default Header;