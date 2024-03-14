import Student from "../models/Studentlist.js";
const getData2 = async(req, res)=>{
    try {
        const {selected} = req.body;
        const response = await Student.find({Rollno:{$in: selected}});
        res.status(200).json({
            response,
            success: true,
            message: "data fetched Successfully",
          });
    } catch (error) {
        console.log("ERROR: While fetching data", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error Occured!!",
    });
    }
}
export default getData2;