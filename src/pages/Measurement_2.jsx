import Andrew from "../assets/images/Andrew.png";
const Measurement_2 = () => {
    return (
        <>
        <h1>Measurement</h1>
        <article id="page1" className="bg-white w-full  mt-5 mb-5 rounded-xl">
            <div className="container mx-auto px-4 py-4">
                <p className="text-2xl">Employee profile</p>
                <img src={Andrew} alt="Andrew" className="rounded-full border-2 border-gray-500" />
            </div>
        </article>
        </>
    )
}
export default Measurement_2