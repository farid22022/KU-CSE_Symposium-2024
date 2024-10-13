const TimeTable = () => {
    return (
        <div className="max-w-xl lg:p-5 lg:mb-5 mx-auto bg-transparent  rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
                <table className="table bg-transparent">
                    {/* head */}
                    <thead>
                    <tr>
                        <th className="text-xl text-yellow-600">SL.</th>
                        <th className="text-xl text-yellow-600">Location</th>
                        <th className="text-xl text-yellow-600">Event</th>
                        <th className="text-xl text-yellow-600">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th className="text-white">1</th>
                        <td className="text-white">Online</td>
                        <td className="text-white">Pre-registration Ends</td>
                        <td className="text-white">22 October 2024</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th className="text-white text-base">2</th>
                        <td className="text-white text-base">Online</td>
                        <td className="text-white text-base">Final Registration Starts</td>
                        <td className="text-white text-base">24 October 2024</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th className="text-white">3</th>
                        <td className="text-white">Online</td>
                        <td className="text-white">Final Registration Ends</td>
                        <td className="text-white">02 November 2024</td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <th className="text-white">4</th>
                        <td className="text-white">Computer Lab, CSE Discipline</td>
                        <td className="text-white">Contest Date</td>
                        <td className="text-white">10 November 2024</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TimeTable;
