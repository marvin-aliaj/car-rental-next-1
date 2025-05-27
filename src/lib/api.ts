import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SITE_URL}`, // Base URL of your API
  timeout: 20000, // Timeout after 20 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = "pelikanikaravastas";

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response) {
      if (error.response.status === 401) {
        // Handle unauthorized access
        console.error("Unauthorized! Redirecting...");
        // Redirect to login page or handle accordingly
      } else if (error.response.status === 403) {
        console.error("Forbidden");
      }
      // Other global error handling like 404, 500, etc.
    }
    return Promise.reject(error);
  },
);

// Define methods to call APIs
export async function get(url, params = {}) {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data ? error.response.data : "An error occurred",
    );
  }
}

export async function post(url, data = {}) {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data ? error.response.data : "An error occurred",
    );
  }
}

export async function put(url, data = {}) {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data ? error.response.data : "An error occurred",
    );
  }
}

export async function deleteRecord(url) {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data ? error.response.data : "An error occurred",
    );
  }
}
