export type Categorie = "accessoires" | "guitares-acoustiques" | "guitares-electriques" | "amplis"

export type Guitar = {
    id: number,
    name: string,
    price: number,
    rate: number,
    img: string,
    cara: {
        polyvalence: number,
        maneuverability: number,
        sound: number
    },
    style: string[],
    desc: string,
    video: string,
}

export type FilterPrice = {
    min: null | number,
    max: null | number
}