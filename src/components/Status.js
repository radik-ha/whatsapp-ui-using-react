import "../styles/Status.css"
import StatusMeta from "../meta/Status.json"

export default function Status(){
	return (
	  <>
		  <div id="status">
				<img src='/images/ben10.jpg' alt=""/>
				<div id="texts">
					<h3>My Status</h3>
					<span>07:30 pm</span>
				</div>
		  </div>
		  <h3 id="recent-updates">Recent updates</h3>

	  	  {
		  	StatusMeta.map(status => {
				return <div id="status">
							<img src={status.imglink} alt=""/>
							<div id="texts">
								<h3>{status.contact}</h3>
								<span>{status.time}</span>
			     		    </div>
						</div>
				}
			)
		  }
	  </>
    )
}