import { io } from "socket.io-client";
const backendURL = import.meta.env.VITE_BACKEND_URL;

if (!backendURL) {
  throw new Error("VITE_BACKEND_URL is not defined");
}
console.log(backendURL)

// const socket = io(window.location.origin);
const socket = io(backendURL);
export default socket;
