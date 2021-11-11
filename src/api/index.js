import axios from "axios";
const URL ="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw,ne) => {
  try {
    const {
      data: { data }
    } = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": "7582b96f42mshee4e22ad05a2a7fp13e736jsn01e8aaf9d0e6",
        },
      });
    return data;
  } catch (error) {
      console.log(error);
  }
};
