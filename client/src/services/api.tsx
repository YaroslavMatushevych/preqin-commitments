import axios from "axios";
import { Commitment, Investor } from "../types";

const API_URL = "http://localhost:8000";

// Centralized error handling for HTTP requests
const handleApiError = (error) => {
    let errorMessage = "An unexpected error occurred.";
    if (axios.isAxiosError(error)) {
        console.error("API error:", error.response?.data || error.message);
        errorMessage = error.response?.data?.error || error.message;
    } else {
        console.error("Unexpected error:", error);
    }

    return {
        success: false,
        errorMessage,
    };
};

export const fetchCommitments = async (investorId: string, assetClass?: string): Promise<Commitment[]> => {
    try {
        const { data } = await axios.get(
            `${API_URL}/commitments/${investorId}${assetClass ? `?assetClass=${assetClass}` : ""}`
        );
        return data;
    } catch (error) {
        handleApiError(error);
    }
};

export const fetchInvestors = async (page: number, pageSize: number): Promise<Investor[]> => {
    try {
        const { data } = await axios.get(`${API_URL}/investors/?skip=${page * pageSize}&limit=${pageSize}`);
        return data;
    } catch (error) {
        handleApiError(error);
    }
};
