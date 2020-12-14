import Review from "./review";
import {WineType} from "./wineType";

export default interface Wine {
    id: string;
    color: WineType;
    name: string;
    image: string;
    review: Review
    rating: number;
    cost: number
}

export function emptyWine(): Wine {
    return {
        id: "0",
        color: WineType.Orange,
        name: "",
        image: "",
        review: {
            reviewer: "",
            score: 0
        },
        rating: 0,
        cost: 0
    }
}