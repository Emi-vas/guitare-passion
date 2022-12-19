import { useEffect, useState } from "react";

const Aside = () => {
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

                <form action="" >
                    <p>Styles :</p>
                    <ul>
                        {
                            styles && styles.map(style => (
                                <li key={style}>
                                    <input type="radio" id={style} name="style" />
                                    <label htmlFor={style}>{ style }</label>
                                </li>
                            ))
                        }
                    </ul>
                </form>
            </div>
        </aside>
    );
};

export default Aside;