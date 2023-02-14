//react
import { useEffect, useState } from "react";
import axios from "axios";
//types
import { GuideAcoustic, Guitar } from "../../assets/types";
import { Link } from "react-router-dom";
//compo
import RateStars from "../../components/RateStars";


interface Props {
    userInfo: GuideAcoustic
    req: string
}

const Result = ({ userInfo, req }: Props) => {
    let classicScore = userInfo.classic + userInfo.flamenco
    const folkScore = userInfo.pop + userInfo.rock
    const [data, setData] = useState<any>([])
    const [guitarFound, setGuitarFound] = useState<any>([])
    const [warning, setWarning] = useState(false)

    useEffect(() => {
        axios.get(req).then((res: any) => setData(res.data))

    },[])

    useEffect(() => {
        console.log(data)
        if(userInfo.beginner || userInfo.child) {
            //because classic is better for child and beginners
            classicScore = classicScore + 1
            if(userInfo.beginner && userInfo.child) {
                classicScore = classicScore + 1
            }
        }
        let typeWin = whoWin(folkScore, classicScore)

        if(!data[0]) {
            return
        }

        if(typeWin == 'folk') {
            let dataStyleFiltred = data.filter((data: any) => data.style.includes('pop'))
            seekGuitar(userInfo.price, dataStyleFiltred, setGuitarFound)

            if(userInfo.child || userInfo.beginner) {
                setWarning(true)
            }
        }

        if(typeWin == 'classic') {
            let dataStyleFiltred = data.filter((data: any) => data.style.includes('classique'))
            seekGuitar(userInfo.price, dataStyleFiltred, setGuitarFound)
        }

        if(typeWin == 'both') {
            if(userInfo.beginner || userInfo.child) {
                let dataStyleFiltred = data.filter((data: any) => data.style.includes('classique'))
                seekGuitar(userInfo.price, dataStyleFiltred, setGuitarFound)
            } else {
                seekGuitar(userInfo.price, data, setGuitarFound)
            }
        }
    },[data])

    return (
        <div className="guideResult">
            <h1>
                Nous avons trouvé {guitarFound.length} guitares qui 
                    { guitarFound.length > 1 ? " peuvent " : " peut " }
                 vous correspondre
            </h1>
            {
                warning && !userInfo.child &&
                <div className="guide_warning">
                    <p>Attention, le resultat correspond au style que vous aimez, mais qui peut être dur à jouer pour un débutant</p>
                </div>
            }
            {
                warning && (!userInfo.beginner || (userInfo.beginner && userInfo.child) ) &&
                <div className="guide_warning">
                    <p>Attention, le resultat correspond au style que vous aimez, mais qui peut être dur à jouer pour un enfant</p>
                </div>
            }

            <div className="Categories listeArticles">
            {
                guitarFound[0] && 
                guitarFound.map((guitar: any) => <ArticleCard article={guitar} />)
            }
            </div>
        </div>
    );
};
export default Result;



const whoWin = (folkScore: number, classicScore: number) => {
    if(classicScore > folkScore) {
        return "classic"
    }
    if(classicScore < folkScore) {
        return "folk"
    }
    if(classicScore == folkScore) {
        return "both"
    }
}

const seekGuitar = (price: number, data: any, setGuitarFound: (v: any)=> void) => {
    let guitarFound: any = []

    // price 30%
    data.map((guitar: any) => {
        if(guitar.price < (price * 1.3) && guitar.price > (price * 0.7)) {
            guitarFound = [...guitarFound, guitar]
        }
    })

    if(!guitarFound[0]) {
        data.map((guitar: any) => {
            if(guitar.price < (price * 1.7) && guitar.price > (price * 0.3)) {
                guitarFound = [...guitarFound, guitar]
            }
        })
    }

    setGuitarFound(guitarFound)
}




//compo guitar
interface PropsArticle {
    article: Guitar
}
const ArticleCard = ({ article }: PropsArticle) => {
    
    return (
        <Link 
            to={`/guitares-acoustiques/${article.id}`} 
            className='articleCard'
        >
            <p className='price'>{article.price}€</p>
            <img src={"/images/articles/" + article.img} alt={article.name} />
            <p className='title'>{ article.name }</p>
            <div className='rate'>
                <RateStars rate={article.rate} />
            </div>
        </Link>
    );
};