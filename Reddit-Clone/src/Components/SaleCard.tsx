import SampleSaleThubnail from "../assets/Sample-Sale-Thubnail.jpg"
const SaleCard = () => {
    return (
        <>
            <div className="bg-white rounded-md p-2 border-2 border-red-500 overflow-hidden">
                {/* <div className=""> */}
                    <img src={SampleSaleThubnail} alt="" className="h- border-2 border-orange-500" />
                {/* </div> */}
            </div>
        </>
    )
}

export default SaleCard