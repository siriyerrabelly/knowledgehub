import { Link } from "react-router-dom";
import { knowledgeData } from "../api/data";
import "./Sidebar.css";

function Sidebar(){

return(

<div className="sidebar">

<h3>Topics</h3>

{knowledgeData.map((topic)=>(
<Link key={topic.id} to={`/topic/${topic.id}`}>
{topic.title}
</Link>
))}

</div>

)

}

export default Sidebar;