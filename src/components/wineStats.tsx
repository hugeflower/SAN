import React from "react";
import Wine from "../model/wine";
import {everyWineType} from "../model/wineType";
import WineAmount from "../model/wineAmount";
import {round} from "../utils";

interface WineStatsProps {
    wines: Wine[]
}

class WineStats extends React.Component<WineStatsProps, {}> {
    constructor(props: WineStatsProps) {
        super(props);
    }

    totalWineCount(): number {
        return this.props.wines.length;
    }

    totalWineCost(): number {
        let totalWineCost: number = 0;
        this.props.wines.forEach(wine => {totalWineCost += wine.cost})
        return round(totalWineCost);
    }

    totalWineOfEveryType() {
        let wineAmounts: WineAmount[] = [];
        let wineTypes: string[] = everyWineType();
        wineTypes.forEach(type => {
            let totalOfType: number = 0;
            this.props.wines.forEach(wine => {
                if (this.sameType(wine.color.toString(), type)) {
                    totalOfType++;
                }
            })
            wineAmounts.push({nameOfWine: type, amount: totalOfType})
        })
        return wineAmounts;
    }

    sameType(firstType:string, secondType:string) {
        return firstType.toLowerCase() === secondType.toLowerCase()
    }

    formatWineAmount(wineAmount: WineAmount) {
        return wineAmount.nameOfWine + ": " + wineAmount.amount
    }

    generalAverage() {
        let totalRating: number = 0;
        this.props.wines.forEach(wine => {
            totalRating += wine.rating;
        })
        const averageRating = totalRating / this.props.wines.length;
        return round(averageRating);
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">Statistics of wines</h1>
                <div className="card mb-2">
                    <h3 className="card-header-title">Total cost of all wines (current count : {this.totalWineCount()})</h3>
                    <p className="card-content">{this.totalWineCost() + "$"}</p>
                </div>
                <div className="card mb-2">
                    <h3 className="card-header-title">Total amount of every wine type</h3>
                    <ul className="card-content">
                        {this.totalWineOfEveryType().map(wineAmount =>
                            <li>{this.formatWineAmount(wineAmount)}</li>
                        )}
                    </ul>
                </div>
                <div className="card mb-2">
                    <h3 className="card-header-title">Average rating of every wine</h3>
                    <p className="card-content">{this.generalAverage()}</p>
                </div>
            </div>
        )
    }
}

export default WineStats;