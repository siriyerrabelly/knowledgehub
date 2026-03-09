import { useState } from "react";
import { Link } from "react-router-dom";
import { knowledgeData } from "../api/data";
import "./Home.css";

function Home() {

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// show all topics first
const [selectedLetter, setSelectedLetter] = useState("");

const filteredTopics = selectedLetter
  ? knowledgeData.filter(topic =>
      topic.title.toUpperCase().startsWith(selectedLetter)
    )
  : knowledgeData;

return (

<div className="home">

<h1 className="home-title">
Technology Knowledge Portal
</h1>

{/* Technology Banner */}

<div className="tech-banner">

<img
src="https://images.unsplash.com/photo-1518770660439-4636190af475"
alt="Technology"
/>

<p className="tech-description">

Technology is transforming the world by enabling innovation,
automation, and intelligent systems. Fields like Artificial
Intelligence, Data Science, Cloud Computing, Blockchain,
Cyber Security, and the Internet of Things are shaping
the future of industries and everyday life.

</p>

</div>

{/* Alphabet Navigation */}

<div className="alphabet-bar">

{alphabet.map(letter => (

<button
key={letter}
className={`letter-btn ${selectedLetter === letter ? "active" : ""}`}
onClick={() => setSelectedLetter(letter)}
>

{letter}

</button>

))}

</div>

<h2 className="section-title">

{selectedLetter
? `Topics Starting With "${selectedLetter}"`
: "All Technology Topics"}

</h2>

<div className="topic-grid">

{filteredTopics.length > 0 ? (

filteredTopics.map(topic => (

<div key={topic.id} className="topic-card">

<h3>{topic.title}</h3>

<Link to={`/topic/${topic.id}`}>
View Articles
</Link>

</div>

))

) : (

<p>No topics available.</p>

)}

</div>

</div>

);

}

export default Home;