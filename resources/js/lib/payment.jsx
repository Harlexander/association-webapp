import { api } from "./axios";

export const initiatePayment = async (body, token) => {
        const { data } = await api.post("/create-payment", body , { headers : { Authorization : `Bearer ${token}`}})
      
        return data;
    }

export const verifyPayment = async (token, reference) => {
      const response = await api.get('/verify-payment', {
          headers: { Authorization: `Bearer ${token}` },
          params: { ref: reference }
        });

        return response.data;
    }