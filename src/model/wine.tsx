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