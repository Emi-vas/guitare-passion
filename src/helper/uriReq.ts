import { Categorie } from "../assets/types";

/* pass an uri recive a request url */
export const uriReq = (uri: Categorie) => {
    switch (uri) {
        case "accessoires":
            return "url accessoires"
        case "amplis":
            return "url amplis"
        case "guitares-acoustiques":
            return "url acoustique"
        case "guitares-electriques":
            return "electrique"
    }
}