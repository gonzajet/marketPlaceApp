import type { NextApiRequest, NextApiResponse } from 'next'
import { axiosPost } from 'utilities/axiosManagerFunctions';

//TBD
export const getToken = async (): Promise<boolean | void> => {
    try {
        console.log('matute');
        const response = await axiosPost<string>("apiRoute");
        return true;
    } catch (err: any) {
        const errorMessage = err.message || err.toString();
        throw new Error(`API Error: "${errorMessage}"`);
    }
};
