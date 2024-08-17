import {useState} from "react";
import Chats from "./components/Chat";
import Status from "./components/Status";
import Calls from "./components/Calls";
import "./styles/App.css";

function App() {
  const [tab, setTab] = useState("chats");
  return (
	<div id="container">
		<header>
			<div id="sub-header-one">
				<h1>WhatsApp</h1>
				<div id="symbols">
					<h1>⌕</h1>
					<h1>⋮</h1>
				</div>
			</div>
			<div id="sub-header-two">
				<button onClick={()=>{
					setTab("chats")
				}}>CHATS</button>
				<button onClick={()=>{
					setTab("status")
				}}>STATUS</button>
				<button onClick={()=>{
					setTab("calls")
				}}>CALLS</button>
			</div>
		</header>
		{
			tab==="chats"? <Chats/>: tab==="status"? <Status/>: <Calls/>
		}
    </div>
  );
}

export default App;
