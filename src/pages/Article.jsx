import { useParams } from "react-router-dom";
import { knowledgeData } from "../api/data";
import "./Article.css";

function Article(){

const { topicId, articleIndex } = useParams();

const topic = knowledgeData.find(
t => t.id === topicId
);

if(!topic){
return <h2>Topic not found</h2>;
}

const index = parseInt(articleIndex);

const article = topic.articles[index];

if(!article){
return <h2>Article not found</h2>;
}

return(

<div className="article-page">

<h1 className="article-title">
{article.title}
</h1>

<img
src={article.image}
alt={article.title}
className="article-image"
/>

<div className="article-content">

<p>{article.description}</p>

<p>
This technology is widely used in modern industries to improve
efficiency and innovation. Learning these concepts helps
developers and engineers design smarter digital systems.
</p>

<p>
Understanding the fundamentals also helps build scalable
applications and solve complex problems in real-world
technology environments.
</p>

</div>

</div>

)

}

export default Article;