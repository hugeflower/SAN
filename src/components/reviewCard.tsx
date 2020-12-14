import React from "react";
import Review from "../model/review";

interface WineReviewProps {
    review : Review
}

class WineReview extends React.Component<WineReviewProps, {}> {
    constructor(props: WineReviewProps) {
        super(props);
    }

    formatReview(reviewer: string, score: number){
        return reviewer + " gives the score of " + score;
    }

    render() {
        return (
            <div className="ml-2">
                <p>{this.formatReview(this.props.review.reviewer, this.props.review.score)}</p>
            </div>
        )
    }
}

export default WineReview;