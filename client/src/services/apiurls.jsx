import axios from "axios";

const server = "YOUR-API-URL";

export const URLS = {
    ADMIN_LOGIN: `${server}/auth/admin`,
    USER_LOGIN: `${server}/auth/user`,
    USER_REGISTER: `${server}/auth/register`,


}

class WebService {
  async get(url) {
    try {
      return await axios.get(url);
    } catch (error) {
      console.error("GET Error:", error);
      throw error;
    }
  }

  async post(url, data) {
    try {
      return await axios.post(url, data);
    } catch (error) {
      console.error("POST Error:", error);
      throw error;
    }
  }

  async put(url, data) {
    try {
      return await axios.put(url, data);
    } catch (error) {
      console.error("PUT Error:", error);
      throw error;
    }
  }

  async delete(url) {
    try {
      return await axios.delete(url);
    } catch (error) {
      console.error("DELETE Error:", error);
      throw error;
    }
  }
}


export const webService = new WebService();