import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete";
const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
    restaurant_tagcategory_standalone: "10591",
    restaurant_tagcategory: "10591",
    limit: "30",
    currency: "USD",
    open_now: "false",
    lunit: "km",
    lang: "en_US"
  },
  headers: {
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    "X-RapidAPI-Key": "7211eeb065mshd03a24c4c654134p14166ajsne0a144204e1b"
  }
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data }
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
