import { useEffect, useState } from "react";
import { FilterPrice } from "../assets/types";
import { ICONS } from "../assets/constants";
import { useSelector } from "react-redux";

interface Props {
    listFilters: string[],
    filterStyleSelected: string | null,
    setFilterStyleSelected: (v: string | null) => void,
    filterPrice: FilterPrice,
    setFilterPrice: (v: FilterPrice) => void
}

const Aside = ({
    listFilters,
    filterStyleSelected,
    setFilterStyleSelected,
    filterPrice,
    setFilterPrice
}: Props) => {

    //const styles: string[] = useSelector((state: any) => state.filterList)
    const [isSticky, setIsSticky] = useState(false)
    const [isSmall, setIsSmall] = useState(false)
    const [isTel, setIsTel] = useState(false)
    const [displayFilters, setDisplayFilters] = useState(false)

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
        window.innerWidth > 1000 ? setIsSmall(false) : setIsSmall(true)
        window.innerWidth < 500 ? setIsTel(true) : setIsTel(false)

        return () => {
            window.removeEventListener('scroll', stickyEffect)
        }
    },[])

    return (
        <aside 
            id="filtres-pos"
            style={{
                minWidth: (isSmall && !displayFilters) || isTel ? "30px" : "190px",
            }}
        >
            { !isSmall || displayFilters ?
            <div 
                className={isSticky ? 'filtres stickyAside' : 'filtres'} 
            >
                { isSmall && 
                    <i 
                        className={ICONS.backArrow + " back-arrow"}
                        onClick={()=> setDisplayFilters(false)} 
                    ></i> 
                }
                <h2>Filtres</h2>
                <form>
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
                    <p>Styles :</p>
                    <ul>
                        {
                            listFilters && listFilters.map(style => (
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
                </form>
            </div>
            : 
            // display icon on small size
            <div 
                className={isSticky ? 'stickyAside icon' : 'icon'}
                onClick={()=>setDisplayFilters(true)}
                data-testid="icon-filters"
            >
                <i className={ICONS.settings}></i>
            </div>
            }
        </aside>
    );
};

export default Aside;