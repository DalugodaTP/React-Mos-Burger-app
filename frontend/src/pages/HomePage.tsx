import landingImage from "../assets/OIG3.jpeg"
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => {
  return(
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16" >
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Join Us Today!!!
            </h1>
            <span className="text-xl">Construction Contracts a Click away</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} alt="Mobile Devices" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tigher">
                    Draft Contracts even faster!
                </span>
                <span>
                    Download the ContractOven App for faster reviewing and updating data
                </span>
                <img src={appDownloadImage} alt="" />
            </div>
        </div>
    </div>
  );
}

export default HomePage;