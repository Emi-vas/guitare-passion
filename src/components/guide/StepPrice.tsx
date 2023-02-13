//react
import { useEffect, useState } from "react"
//types
import { GuideAcoustic } from "../../assets/types"


interface Props {
    setStep: (v: number) => void
    userInfo: GuideAcoustic
    setUserInfo: (v: GuideAcoustic) => void
}

const StepPrice = ({ setStep, userInfo, setUserInfo}: Props) => {
    const [priceIsValide, setPriceIsValide] = useState(false)

    //handle press Enter
    const handleKeyDown = (event: any) => {
        if(event.keyCode == 13) {
            if(priceIsValide) {
                setStep(2)
            }
        }
      };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        // cleanup this component
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    },[priceIsValide])

    return (
        <div className="center guide_tarif">
            <h1>Votre budget ?</h1>
            <input 
                type="text" 
                placeholder="€"
                onChange={(e)=> {
                    if(parseInt(e.target.value) > 0) {
                        setPriceIsValide(true)
                        setUserInfo({
                            ...userInfo,
                            price: parseInt(e.target.value)
                        })
                    } else {
                        setPriceIsValide(false)
                    }
                }}
            />
            
            { 
                priceIsValide ? 
                <button 
                    className="btn-1"
                    onClick={() => setStep(2)}
                >Valider</button> 
                : null 
            }
        </div>
    )
}
export default StepPrice;