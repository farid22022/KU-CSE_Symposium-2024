import CEOs from "../CEOs/CEOs";


const Overview = () => {
    return (
        <div className="pt-20 text-center space-y-12">
            <div>
                <h2 className="text-3xl text-yellow-700 pt-10">What is CEO Talk</h2>
                <p className="text-white mt-10">The CEO Talk brings together influential leaders from the tech industry to share their insights on leadership, innovation, and future trends. It's an opportunity to learn from the experiences of top executives and understand the future direction of technology</p>
            </div>
            <div className="pt-20">
                <h2 className="text-3xl text-yellow-700 text-center">Welcome to our respected persons</h2>
                <p className="text-white">We are privileged to welcome our esteemed speakers for the CEO Talk, who are distinguished leaders in their respective fields. Their insights and experiences will inspire and enrich our audience, fostering a deeper understanding of innovation, leadership, and the future of the tech industry. Join us as we celebrate their contributions and learn from their valuable perspectives</p>
            </div>
            <div className="">
                <CEOs></CEOs>
            </div>
        </div>
    );
};

export default Overview;