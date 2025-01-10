import SampleSaleThubnail from "../assets/Sample-Sale-Thubnail.jpg"
const SaleCard = () => {
    return (
        <>
            <div className="bg-white rounded-md p-2 overflow-clip">
                <img src={SampleSaleThubnail} alt="" className="h- " />
            </div>
        </>
    )
}

export default SaleCard