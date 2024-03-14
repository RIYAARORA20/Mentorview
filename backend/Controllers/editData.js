import Edit from "../Models/Editlist";
const getData3 = async(req, res)=>{
    try {
        
    } catch (error) {
        console.log("ERROR: While fetching data", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error Occured!!",
    });
    }
}
export default getData3;