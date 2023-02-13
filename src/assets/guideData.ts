type Param = "price" | "beginner" | "child" | "classic" | "pop" | "flamenco" | "rock"

export type Style = {
    name: string,
    urlVideo: string,
    param : Param
}

export type YesNo = {
    question: string,
    param: Param
}

export const styleClassic: Style = {
    name: "Classique",
    urlVideo: "https://www.youtube.com/embed/inBKFMB-yPg",
    param: "classic"
}

export const stylePop: Style = {
    name: "La Pop",
    urlVideo: "https://www.youtube.com/embed/zvCBSSwgtg4",
    param: "pop"
}

export const styleFlamenco: Style = {
    name: "Flamenco",
    urlVideo: "https://www.youtube.com/embed/ENBX_v1Po1Y",
    param: "flamenco"
}

export const styleRock: Style = {
    name: "Rock & Blues",
    urlVideo: "https://www.youtube.com/embed/T80B7s7ekGo",
    param: "rock"
}


export const QChild: YesNo = {
    question: "La guitare est elle pour un enfant ? (moins de 13ans)",
    param: "child"
}

export const QBegin: YesNo = {
    question: "Etes vous débutant ?",
    param: "beginner"
}