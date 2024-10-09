import { Helmet } from "react-helmet-async";


const CP = () => {
    return (
        <div className="space-y-2 h-screen">
            <Helmet>
                <title>Context Programming | KUCSE-Symposium-2024</title>
            </Helmet>
            {/* <Banner2></Banner2> */}
            <h2 className="text-center pt-20 text-2xl">Contest Programming</h2>
            <div className="text-center">
                <button >Register Now !</button>
            </div>
            
        </div>
    );
};

export default CP;