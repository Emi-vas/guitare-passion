export type Categorie = "accessoires" | "guitares-acoustiques" | "guitares-electriques" | "amplis"

export type Guitar = {
    id: number,
    name: string,
    price: number,
    rate: number,
    img: string,
    cara: {
        polyvalence: number,
        maneuverability?: number,
        sound: number,
        puissance?: number
    },
    style: string[],
    desc: string,
    video: string,
}

export type GuitarInCart = Guitar & {qte: number}

export type Store = {
    cart: {
        cart:GuitarInCart[] | []
    }
}

export type FilterPrice = {
    min: null | number,
    max: null | number
}

export type GuideAcoustic = {
    price: number,
    beginner: boolean,
    child: boolean,
    classic: number,
    pop: number,
    flamenco: number,
    rock: number
}