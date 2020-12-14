import React from "react";
import Wine from "../model/wine";
import WineCard from "./wineCard";

interface WineListProps {
    wines : Wine[]
}

interface WineListState {
    winesSelected : Wine[]
}

class WineList extends React.Component<WineListProps, WineListState> {
    constructor(props: WineListProps) {
        super(props);

        this.state = {
            winesSelected: []
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">List of wines</h1>
                <div className="columns">
                    <div className="column">
                        {this.props.wines.map((wine) => (
                            <WineCard wine={wine}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default WineList;