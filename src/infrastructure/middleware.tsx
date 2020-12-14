import Wine from "../model/wine";
import {WineType} from "../model/wineType";

const urlForWine:string = "https://api.mocki.io/v1/6123babb"

export function loadWinesFromBackend() {
    //let wines = callAPI(urlForWine)
    return wines;
}

const wine1:Wine = {
    id: "1",
    color: WineType.Red,
    name: "merlot",
    image: "tres belle image",
    review: {
        reviewer: "Gros Nez",
        score: 34
    },
    rating: 34,
    cost: 12.34
}
const wine2:Wine = {
    id: "2",
    color: WineType.White,
    name: "cabernet",
    image: "miaow",
    review: {
        reviewer: "Gros Nez",
        score: 32
    },
    rating: 32,
    cost: 11.22
}
const wine3:Wine = {
    id: "3",
    color: WineType.White,
    name: "Cabernet 2.0",
    image: "wouf",
    review: {
        reviewer: "Jean",
        score: 45
    },
    rating: 47,
    cost: 25.93
}

const wines:Wine[] = [wine1, wine2, wine3]