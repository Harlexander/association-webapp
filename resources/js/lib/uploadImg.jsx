import { api } from "./axios";

export const handleUpload = async (file)  => {
    try {
        const formData = new FormData();
        formData.append("file", file);
        const { data } = await api.post("/upload-file", formData);
        return data;        
    } catch (error) {
        throw Error("Image is required!");
    }
};