import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = () => console.log("Bom");

export default {
  getListings,
};
