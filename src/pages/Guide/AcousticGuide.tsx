import { useEffect, useState } from "react";
import { ICONS } from "../../assets/constants";
//data
import { reqAcousticsGuitars } from "../../assets/req";
//types
import { GuideAcoustic } from "../../assets/types";
//compo 
import StepPrice from "../../components/guide/StepPrice";
import Result from "./Result";

const AcousticGuide = () => {
    const [step, setStep] = useState(1)
    const [userInfo, setUserInfo] = useState<GuideAcoustic>({
        price: 0,
        beginner: false,
        child: false,
        classic: 0,
        pop: 0,
        flamenco: 0,
        rock: 0
    })

    return (
        <div>
            { step == 1 && <StepPrice setStep={setStep} userInfo={userInfo} setUserInfo={setUserInfo} /> }
            { step == 2 && <Step2 setStep={setStep} userInfo={userInfo} setUserInfo={setUserInfo}/> }
            { step == 3 && <Step3 setStep={setStep} userInfo={userInfo} setUserInfo={setUserInfo}/> }
            { step == 4 && <Step4 setStep={setStep} userInfo={userInfo} setUserInfo={setUserInfo}/> }
            { step == 5 && <Step5 setStep={setStep} userInfo={userInfo} setUserInfo={setUserInfo}/> }
            { step == 6 && <Step6 setStep={setStep} userInfo={userInfo} setUserInfo={setUserInfo}/> }
            { step == 7 && <Step7 setStep={setStep} userInfo={userInfo} setUserInfo={setUserInfo}/> }
            { step == 8 && <Result userInfo={userInfo} req={reqAcousticsGuitars} />}
        </div>
    );
};

export default AcousticGuide;

interface PropsStep {
    setStep: (v: number) => void
    userInfo: GuideAcoustic
    setUserInfo: (v: GuideAcoustic) => void
}

const Step2 = ({setStep, userInfo, setUserInfo}: PropsStep) => {
    const handleClick = (rate: number) => {
        setUserInfo({
            ...userInfo,
            classic: rate
        })
        setStep(3)
    }

    return (
        <div className="center">
            <h2>Classique</h2>
            <iframe width="720" height="400" src="https://www.youtube.com/embed/inBKFMB-yPg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
            <h1>Avez vous envie de jouer ce style ?</h1>
            <div className="guide_like3">
                <div className="elem" onClick={()=>handleClick(0)}>
                    <i className={ICONS.faceNon}></i>
                    <p>Pas du tout</p>
                </div>
                <div className="elem" onClick={()=>handleClick(1)}>
                    <i className={ICONS.faceLike}></i>
                    <p>Oui j'aime bien</p>
                </div>
                <div className="elem" onClick={()=>handleClick(2)}>
                    <i className={ICONS.faceLove}></i>
                    <p>J'adore !!!</p>
                </div>
            </div>
        </div>
    )
}




const Step3 = ({setStep, userInfo, setUserInfo}: PropsStep) => {
    const handleClick = (rate: number) => {
        setUserInfo({
            ...userInfo,
            pop: rate
        })
        setStep(4)
    }

    return (
        <div className="center">
            <h2>La Pop</h2>
            <iframe width="720" height="400" src="https://www.youtube.com/embed/zvCBSSwgtg4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
            <h1>Avez vous envie de jouer ce style ?</h1>
            <div className="guide_like3">
                <div className="elem" onClick={()=>handleClick(0)}>
                    <i className={ICONS.faceNon}></i>
                    <p>Pas du tout</p>
                </div>
                <div className="elem" onClick={()=>handleClick(1)}>
                    <i className={ICONS.faceLike}></i>
                    <p>Oui j'aime bien</p>
                </div>
                <div className="elem" onClick={()=>handleClick(2)}>
                    <i className={ICONS.faceLove}></i>
                    <p>J'adore !!!</p>
                </div>
            </div>
        </div>
    )
}



const Step4 = ({setStep, userInfo, setUserInfo}: PropsStep) => {
    const handleClick = (rate: number) => {
        setUserInfo({
            ...userInfo,
            flamenco: rate
        })
        setStep(5)
    }

    return (
        <div className="center">
            <h2>Flamenco</h2>
            <iframe width="720" height="400" src="https://www.youtube.com/embed/ENBX_v1Po1Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
            <h1>Avez vous envie de jouer ce style ?</h1>
            <div className="guide_like3">
                <div className="elem" onClick={()=>handleClick(0)}>
                    <i className={ICONS.faceNon}></i>
                    <p>Pas du tout</p>
                </div>
                <div className="elem" onClick={()=>handleClick(1)}>
                    <i className={ICONS.faceLike}></i>
                    <p>Oui j'aime bien</p>
                </div>
                <div className="elem" onClick={()=>handleClick(2)}>
                    <i className={ICONS.faceLove}></i>
                    <p>J'adore !!!</p>
                </div>
            </div>
        </div>
    )
}



const Step5 = ({setStep, userInfo, setUserInfo}: PropsStep) => {
    const handleClick = (rate: number) => {
        setUserInfo({
            ...userInfo,
            rock: rate
        })
        setStep(6)
    }

    return (
        <div className="center">
            <h2>Rock & Blues</h2>
            <iframe width="720" height="400" src="https://www.youtube.com/embed/T80B7s7ekGo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
            <h1>Avez vous envie de jouer ce style ?</h1>
            <div className="guide_like3">
                <div className="elem" onClick={()=>handleClick(0)}>
                    <i className={ICONS.faceNon}></i>
                    <p>Pas du tout</p>
                </div>
                <div className="elem" onClick={()=>handleClick(1)}>
                    <i className={ICONS.faceLike}></i>
                    <p>Oui j'aime bien</p>
                </div>
                <div className="elem" onClick={()=>handleClick(2)}>
                    <i className={ICONS.faceLove}></i>
                    <p>J'adore !!!</p>
                </div>
            </div>
        </div>
    )
}



const Step6 = ({setStep, userInfo, setUserInfo}: PropsStep) => {
    const handleClick = (answer: boolean) => {
        setUserInfo({
            ...userInfo,
            child: answer
        })
        setStep(7)
    }

    return (
        <div className="center">
            <h1>La guitare est elle pour un enfant ? (moins de 13ans)</h1>
            <div className="guide_like3">
                <div className="elem" onClick={()=>handleClick(false)}>
                    <p><strong>Non</strong></p>
                </div>
                <div className="elem" onClick={()=>handleClick(true)}>
                    <p><strong>Oui</strong></p>
                </div>
            </div>
        </div>
    )
}

const Step7 = ({setStep, userInfo, setUserInfo}: PropsStep) => {
    const handleClick = (answer: boolean) => {
        setUserInfo({
            ...userInfo,
            beginner: answer
        })
        setStep(8)
    }

    return (
        <div className="center">
            <h1>Etes vous débutant ?</h1>
            <div className="guide_like3">
                <div className="elem" onClick={()=>handleClick(false)}>
                    <p><strong>Non</strong></p>
                </div>
                <div className="elem" onClick={()=>handleClick(true)}>
                    <p><strong>Oui</strong></p>
                </div>
            </div>
        </div>
    )
}