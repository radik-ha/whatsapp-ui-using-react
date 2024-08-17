import "../styles/Calls.css";
import CallsMeta from "../meta/Calls.json";

export default function Calls(){
	return(
		<>
		    {
		    	CallsMeta.map(call => {
		    		return <div id="call-parent">
		    		        <div id="call-subparent">
		    		            <img src={call.imglink} alt=""/>
		    		            <div id="texts">
								    <h3>{call.contact}</h3>
								    <span>{call.time}</span>
							    </div>
						    </div>
						    <span id="logo">{call.logo}</span>
					    </div>
		    	    }
		    	)
		    }
		</>
	)
}