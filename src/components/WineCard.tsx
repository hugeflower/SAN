import React from "react";
import Wine from "../model/wine";
import WineReview from "./ReviewCard";

interface WineCardProps {
    wine : Wine
}

class WineCard extends React.Component<WineCardProps, {}> {
    constructor(props: WineCardProps) {
        super(props);
    }

    formatedName(name:string, color:string) {
        return name + " (" + color + ")"
    }

    render() {
        return (
            <div className="card mb-2">
                <h3 className="card-header-title title is-4">
                    {this.formatedName(this.props.wine.name, this.props.wine.color.toString())}
                </h3>
                <div className="card-content">
                    <div>
                        {this.props.wine.image}
                    </div>
                    <div>
                        <p>{this.props.wine.rating}</p>
                    </div>
                </div>
                <div className="card-footer">
                    <WineReview review={this.props.wine.review}/>
                </div>
            </div>
        )
    }
}

export default WineCard;