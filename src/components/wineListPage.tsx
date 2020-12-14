import React from "react";
import {loadWinesFromBackend} from "../infrastructure/middleware";
import WineList from "./wineList";
import WineStats from "./wineStats";

interface WinePageState {
    wines: any
    inWineStatsPage: boolean
}

class WinePage extends React.Component<{}, WinePageState> {
    constructor() {
        // @ts-ignore
        super();

        const wines = loadWinesFromBackend()

        this.state = {
            wines: wines,
            inWineStatsPage: true
        }
    }

    toggleView = () => {
        this.setState({inWineStatsPage: !this.state.inWineStatsPage})
    }

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column">
                        {this.state.inWineStatsPage || <WineList wines={this.state.wines}/>}
                        {this.state.inWineStatsPage && <WineStats wines={this.state.wines}/>}
                    </div>
                    <div className="column mt-4">
                        <button className="button" onClick={this.toggleView}>Toggle</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WinePage;