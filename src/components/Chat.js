import "../styles/Chat.css"
import ChatMeta from "../meta/Chat.json"

export default function Chat(){
	return (
	  <>
	  	
	  	{
		  	ChatMeta.map(chat => {
				return <div id="chat-parent">
						<div id="sub-parent">
							<img src={chat.imglink} alt=""/>
							<div id="texts">
								<h3>{chat.contact}</h3>
								<span>{chat.message}</span>
							</div>
						</div>
						<span id="time">{chat.timestamp}</span>
					</div>
				}
			)
		}
	  </>
    )
}