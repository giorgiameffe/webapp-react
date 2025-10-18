import StarRating from "./StarRating";

function ReviewCard({ data }) {

    const { text, vote, name, } = data;

    return (

        <div className="card review-card mb-3">
            <div className="p-2">
                <p className="fst-italic fs-4">{text}</p>
                <p className="fw-bold">Vote: <StarRating vote={vote} /></p>
                <p className="fst-italic">By {name}</p>
            </div>
        </div>
    )
}

export default ReviewCard;