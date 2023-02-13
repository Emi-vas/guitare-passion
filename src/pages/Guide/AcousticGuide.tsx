import { useEffect, useState } from "react";
import { ICONS } from "../../assets/constants";
//data
import { reqAcousticsGuitars } from "../../assets/req";
import { styleClassic, stylePop, styleFlamenco, styleRock, QChild, QBegin } from "../../assets/guideData";
//types
import { GuideAcoustic } from "../../assets/types";
import { Style, YesNo } from "../../assets/guideData";
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
            { step == 2 && <StepStyle data={styleClassic} setStep={setStep} step={step} userInfo={userInfo} setUserInfo={setUserInfo}/> }
            { step == 3 && <StepStyle data={stylePop} setStep={setStep} step={step} userInfo={userInfo} setUserInfo={setUserInfo}/> }
            { step == 4 && <StepStyle data={styleFlamenco} setStep={setStep} step={step} userInfo={userInfo} setUserInfo={setUserInfo}/> }
            { step == 5 && <StepStyle data={styleRock} setStep={setStep} step={step} userInfo={userInfo} setUserInfo={setUserInfo}/> }
            { step == 6 && <StepYesNo data={QChild} setStep={setStep} step={step} userInfo={userInfo} setUserInfo={setUserInfo}/> }
            { step == 7 && <StepYesNo data={QBegin} setStep={setStep} step={step} userInfo={userInfo} setUserInfo={setUserInfo}/> }
            { step == 8 && <Result userInfo={userInfo} req={reqAcousticsGuitars} />}
        </div>
    );
};

export default AcousticGuide;

interface PropsStepStyle {
    setStep: (v: number) => void
    step: number
    userInfo: GuideAcoustic
    setUserInfo: (v: GuideAcoustic) => void
    data: Style
}

const StepStyle = ({setStep, userInfo, setUserInfo, data, step}: PropsStepStyle) => {
    const handleClick = (rate: number) => {
        let tempUserInfo: any = userInfo
        tempUserInfo[data.param] = rate
        setUserInfo(tempUserInfo)
        setStep(step + 1)
    }

    return (
        <div className="center">
            <h2>{data?.name}</h2>
            <iframe width="720" height="400" src={data?.urlVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
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


interface PropsStepYesNo {
    setStep: (v: number) => void
    step: number
    userInfo: GuideAcoustic
    setUserInfo: (v: GuideAcoustic) => void
    data: YesNo
}

const StepYesNo = ({setStep, userInfo, setUserInfo, data, step}: PropsStepYesNo) => {
    const handleClick = (answer: boolean) => {
        let tempUserInfo: any = userInfo
        tempUserInfo[data.param] = answer
        setUserInfo(tempUserInfo)
        setStep(step + 1)
    }

    return (
        <div className="center">
            <h1>{data.question}</h1>
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