import Student from "../models/Studentlist.js";
// const data = [
//     {
//       "name": "John Doe",
//       "rollNo": 1,
//       "viva": 90,
//       "execution": 10,
//       "idea": 10
//     },
//     {
//       "name": "Jane Smith",
//       "rollNo": 2,
//       "viva": 85,
//       "execution": 10,
//       "idea": 10
//     },
//     {
//       "name": "Alice Johnson",
//       "rollNo": 3,
//       "viva": 95,
//       "executionIdea": 10,
//       "idea": 10
//     },
//     {
//         "name": "Rahul",
//         "rollNo": 4,
//         "viva": 90,
//         "execution": 10,
//         "idea": 10
//       },
//       {
//         "name": "cxyz",
//         "rollNo": 5,
//         "viva": 85,
//         "execution": 10,
//         "idea": 10
//       },
//       {
//         "name": "ojj",
//         "rollNo": 6,
//         "viva": 95,
//         "executionIdea": 10,
//         "idea": 10
//       },
//       {
//         "name": "John Doe",
//         "rollNo": 7,
//         "viva": 90,
//         "execution": 10,
//         "idea": 10
//       },
//       {
//         "name": "Jane Smith",
//         "rollNo": 8,
//         "viva": 85,
//         "execution": 10,
//         "idea": 10
//       },
//       {
//         "name": "Alice Johnson",
//         "rollNo": 9,
//         "viva": 95,
//         "executionIdea": 10,
//         "idea": 10
//       },
//       {
//         "name": "John Doe",
//         "rollNo": 10,
//         "viva": 90,
//         "execution": 10,
//         "idea": 10
//       },
//       {
//         "name": "Jane Smith",
//         "rollNo": 11,
//         "viva": 85,
//         "execution": 10,
//         "idea": 10
//       },
//       {
//         "name": "Alice Johnson",
//         "rollNo": 12,
//         "viva": 95,
//         "executionIdea": 10,
//         "idea": 10
//       },
//       {
//         "name": "John Doe",
//         "rollNo": 13,
//         "viva": 90,
//         "execution": 10,
//         "idea": 10
//       },
//       {
//         "name": "Jane Smith",
//         "rollNo": 14,
//         "viva": 85,
//         "execution": 10,
//         "idea": 10
//       },
//       {
//         "name": "Alice Johnson",
//         "rollNo": 15,
//         "viva": 95,
//         "executionIdea": 10,
//         "idea": 10
//       },
//       {
//         "name": "John Doe",
//         "rollNo": 16,
//         "viva": 90,
//         "execution": 10,
//         "idea": 10
//       },
//       {
//         "name": "Jane Smith",
//         "rollNo": 17,
//         "viva": 85,
//         "execution": 10,
//         "idea": 10
//       },
//       {
//         "name": "Alice Johnson",
//         "rollNo": 18,
//         "viva": 95,
//         "executionIdea": 10,
//         "idea": 10
//       },
//       {
//         "name": "John Doe",
//         "rollNo": 19,
//         "viva": 90,
//         "execution": 10,
//         "idea": 10
//       },
//       {
//         "name": "Jane Smith",
//         "rollNo": 20,
//         "viva": 85,
//         "execution": 10,
//         "idea": 10
//       },
//       {
//         "name": "Alice Johnson",
//         "rollNo": 21,
//         "viva": 95,
//         "executionIdea": 10,
//         "idea": 10
//       }
//   ];

const getData = async(req, res)=>{
    try{
        const response = await Student.find();
        res.status(200).json({
            response,
            success: true,
            message: "data fetched Successfully",
          });
    }catch(error){
        console.log("ERROR: While fetching data", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error Occured!!",
    });
    }
}
export default getData;