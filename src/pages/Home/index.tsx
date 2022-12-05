import { isTelFct } from "../../helper/isTel";

const Home = () => {
    const isTel = isTelFct()

    return (
        <div>
            <h1>Home</h1>
            <img 
                src={isTel ? "./images/guide_tel.jpg" : "./images/guide_pc.jpg"}
                alt="" 
            />
        </div>
    );
};

export default Home;