import React from "react";
import ReactDOM from "react-dom/client";
import Board from "./componenets/Board";


const App: React.FC = () => {
    return <div>
        <Board/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)