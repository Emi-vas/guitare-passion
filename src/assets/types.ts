export type Categorie = "accessoires" | "guitares-acoustiques" | "guitares-electriques" | "amplis"

export type StyleMusic = "rock" | "hard-rock" | "metal" | "funk" | "jazz" | "pop" | "classique" | "folk" | "raggae"

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