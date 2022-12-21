import { useEffect, useState } from "react";
import { FilterPrice } from "../assets/types";

interface Props {
    filterStyleSelected: string | null,
    setFilterStyleSelected: (v: string | null) => void,
    filterPrice: FilterPrice,
    setFilterPrice: (v: FilterPrice) => void
}

const Aside = ({
    filterStyleSelected,
    setFilterStyleSelected,
    filterPrice,
    setFilterPrice
}: Props) => {
    const styles = ["rock", "hard-rock", "metal", "jazz", "funk", "raggae"]
    const [isSticky, setIsSticky] = useState(false)

    const stickyEffect = () => {
        const posFiltre = document.getElementById('filtres-pos')?.getBoundingClientRect()
        if(posFiltre?.y && posFiltre?.y <= 0) {
            setIsSticky(true)
        } else if(posFiltre?.y && posFiltre?.y > 0) {
            setIsSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', stickyEffect)
        return () => {
            window.removeEventListener('scroll', stickyEffect)
        }
    },[])

    return (
        <aside id="filtres-pos">
            <div 
                className={isSticky ? 'filtres stickyAside' : 'filtres'} 
            >
                <h2>Filtres</h2>

                <form>
                    <p>Styles :</p>
                    <ul>
                        {
                            styles && styles.map(style => (
                                <li key={style}>
                                    <input 
                                        type="radio" 
                                        id={style} 
                                        name="style" 
                                        value={style}
                                        checked={filterStyleSelected == style}
                                        onChange={(e)=>setFilterStyleSelected(e.target.value)}
                                    />
                                    <label htmlFor={style}>{ style }</label>
                                </li>
                            ))
                        }
                        { filterStyleSelected && 
                            <button 
                                className="btn-1"
                                onClick={() => setFilterStyleSelected(null)}
                            > tous les styles </button> }
                    </ul>

                    <p>Prix</p>
                    <div className="price">
                            <input 
                                type="number" 
                                placeholder="min"
                                min={0}
                                value={filterPrice.min ? filterPrice.min : ""}
                                onChange={(e)=> {
                                    setFilterPrice({
                                        min: parseInt(e.target.value),
                                        max: filterPrice.max
                                    })
                                }}
                            />
                            <div className="separation">-</div>
                            <input 
                                type="number" 
                                placeholder="max"
                                value={filterPrice.max ? filterPrice.max : ""}
                                onChange={(e)=> {
                                    setFilterPrice({
                                        max: parseInt(e.target.value),
                                        min: filterPrice.min
                                    })
                                }}
                            />
                    </div>
                </form>
            </div>
        </aside>
    );
};

export default Aside;