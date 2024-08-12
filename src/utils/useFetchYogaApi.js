import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addApiResults } from "../reduxStore/yogaApiSlice";

const useFetchYogaApi = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      fetchPoses();
    }, []);

    const fetchPoses = async () => {
      const data = await fetch("https://yoga-api-nzy4.onrender.com/v1/poses");
      const json = await data.json();
      dispatch(addApiResults(json));
    }; 
}

export default useFetchYogaApi;