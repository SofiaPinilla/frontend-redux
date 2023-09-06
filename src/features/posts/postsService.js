import axios from "axios";

const API_URL = "http://localhost:3000";

const getAll = async () => {
  const res = await axios.get(API_URL + "/posts");
  return res.data;
};

const getById = async (id)=>{
    const res = await axios.get(API_URL + "/posts/id/"+id)
    return res.data
}

const getByName = async(title)=>{
    const res = await axios.get(API_URL +"/posts/title/" + title)
    return res.data
}
const postsService = {
  getAll,
  getById,
  getByName
};

export default postsService;
