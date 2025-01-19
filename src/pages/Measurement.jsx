import AM from "../assets/images/am.png";
import LR from "../assets/images/LR.png";
import LR2 from "../assets/images/LR2.png";
import MO from "../assets/images/mo.png";
import OK from "../assets/images/ok.png";
import OLGA from "../assets/images/olga.png";
import ONDRICKA from "../assets/images/ondricka.png";
import Rau from "../assets/images/Rau.png";
import runte from "../assets/images/runte.png";
import Mayer from "../assets/images/Mayer.png";
import { Link } from "react-router-dom";
const Measurement = () => {
    return (
        <>
        <h1>Select the employee you want to evaluate</h1>
        <article id="page1" className="bg-white w-full  mt-5 mb-5 rounded-xl">
        <div className="container mx-auto px-4 py-4">
            <div className="container flex flex-row justify-between">
                <p className="text-xl">Employee List</p>
                <input
                type="date"
                name="date"
                className="border p-3  rounded"
                id="date"
                placeholder="Date Expire"
              />
            </div>
            
            <div className="container mx-auto px-4">
                <p className="text-xl mt-5">Waiting for evaluation</p>
                <div className="flex flex-row justify-between mt-5 gap-2">
                    <Link to="/Measurement_2"><img src={Mayer} alt="Mayer" className="cursor-pointer" /></Link>
                    <img src={ONDRICKA} alt="ONDRICKA" />
                    <img src={Rau} alt="Rau" />
                    <img src={runte} alt="runte" />
                    
                </div>
                <p className="text-xl mt-5">Expired evaluation</p>
                <div className="flex flex-row justify-between mt-5 px-4 gap-2">
                    <img src={AM} alt="AM" />
                    <img src={MO} alt="MO" />
                    <img src={LR} alt="LR" />
                    <img src={LR2} alt="LR2" />
                
                </div>
            </div>
        </div>
        </article>
        </>
    )
};

export default Measurement;