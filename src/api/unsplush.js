import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c099620d221e04e26456ac1a8ab6db697e7438efaa42cc25f7fc32b8212cde99"
  }
});
