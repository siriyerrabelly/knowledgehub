import { useParams, Link } from "react-router-dom";
import { knowledgeData } from "../api/data";
import "./Topic.css";

function Topic(){

const { id } = useParams();

const topic = knowledgeData.find(
t => t.id === id
);

if(!topic){
return <h2>Topic not found</h2>;
}

return(

<div className="topic-page">

<h2 className="topic-title">{topic.title}</h2>

<div className="articles">

{topic.articles.map((article,index)=>(

<Link
key={index}
to={`/article/${id}/${index}`}
className="article-card"
>

<img
src={article.image}
alt={article.title}
className="article-img"
/>

<h3>{article.title}</h3>

</Link>

))}

</div>

</div>

)

}

export default Topic;