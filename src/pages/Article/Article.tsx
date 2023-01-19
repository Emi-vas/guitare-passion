//react
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
//types
import { Guitar } from '../../assets/types';
//Compo
import ArticleMain from '../../components/article/ArticleMain';
import ArticleSimilar from '../../components/article/ArticleSimilar';
import TopSection from '../../components/TopSection';

import { dataAcoustic } from '../../assets/acoustic';

interface Props {
    title: string,
    req: string
}

const Article = ({ title, req }: Props) => {
    const params = useParams()
    const [data, setData] = useState<[] | Guitar[]>([])
    const [articleData, setArticleData] = useState<undefined | Guitar>()

    console.log(JSON.stringify(dataAcoustic))

    useEffect(() => {
        axios
        .get(req)
        .then(res => {
            setData(res.data)
            const resFiltred = res.data.filter((data: any) => data.id == params.id)
            setArticleData(resFiltred[0])
        })
        window.scrollTo(0,0)
    },[params.id])

    return (
        <div>
            <TopSection title='Guitares électriques'/>
            {
                articleData && <ArticleMain articleData={articleData} />
            }
            {
                data && articleData &&
                <ArticleSimilar data={data} articleRef={articleData} />
            }
            
        </div>
    );
};

export default Article;