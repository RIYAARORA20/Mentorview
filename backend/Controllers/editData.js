import Student from "../models/Studentlist.js";

const getData3 = async (req, res) => {
    try {
        const { updated } = req.body;

        // Using Promise.all to wait for all updates to finish
        await Promise.all(updated.map(async (item) => {
            await Student.findOneAndUpdate(
                { Rollno: item.Rollno },
                { Idea: item.Idea, Execution: item.Execution, Viva: item.Viva }
            );
        }));

        res.status(200).json({
            success: true,
            message: "Data fetched and updated successfully",
        });
    } catch (error) {
        console.log("ERROR: While updating data", error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal Server Error Occurred!",
        });
    }
}

export default getData3;
