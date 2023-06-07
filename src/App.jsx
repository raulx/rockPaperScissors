import Score from "./components/components/Score";
import Triangle from "./components/Triangle";

function App(){
    return <div className="container">
        <div className="header">
            <div className="header__text">
                <h1 className="header__text--h1">rock paper scissors</h1>
            </div>
            <Score/>
        </div>
        <Triangle/>
    </div>
}

export default App;