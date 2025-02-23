import entry from "../Animation/Entry";
import "../Card.css";

function CustomCards({ card }) {
    const cardRef = entry();

    const handleClick = () => {
        const link = card.link;
        if (link) {
            window.open(link, "_blank");
        }
    };

    return (
        <div ref={cardRef} className="card-project hidden" onClick={handleClick}>
            <div className="card-timeline">
                <span className="timeline">{card.timeline}</span>
            </div>
            <div className="card-Info">
                <span className="title">{card.title} <br /></span>
                <p className="description">{card.description}</p>
                <span className="card-skill">
                    <div className="skill">
                        <div className="sn">{card.skill_1}</div>
                        <div className="sn">{card.skill_2}</div>
                        <div className="sn">{card.skill_3}</div>
                        <div className="sn">{card.skill_4}</div>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default CustomCards;
