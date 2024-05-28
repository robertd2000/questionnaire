import axios from "axios";
import { BASE_URL } from "../constants";

const base = axios.create({
  baseURL: BASE_URL,
});

export default base;
