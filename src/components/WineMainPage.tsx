import React from "react";
import {loadWinesFromBackend} from "../infrastructure/rest";
import WineList from "./WineList";
import WineStats from "./WineStats";
import Wine from "../model/wine";

interface WinePageState {
    wines: Wine[]
    inWineStatsPage: boolean
}

class WinePage extends React.Component<{}, WinePageState> {
    constructor() {
        super({});

        this.state = {
            wines: [],
            inWineStatsPage: true
        }
    }

    componentDidMount() {
        const wines: Wine[] = loadWinesFromBackend()
        this.setState({wines: wines})
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