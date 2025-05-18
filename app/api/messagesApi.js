import client from "./client";

// Fetch all messages for the logged-in user
const getMessages = () => client.get("/messages");

export default {
  getMessages,
};
