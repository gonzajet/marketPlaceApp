import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import store from "store/index";

let REACT_APP_API_URL = "";

async function generateFinalUrl(path: string, apiUrl?: string): Promise<string> {

    const state = await store.getState();
    REACT_APP_API_URL = state.configurationVariables?.appApiUrl || "";

    const finalUrl: string = (apiUrl || REACT_APP_API_URL) + "/" + path;
    return finalUrl.replace("api//", "api/");
}

export async function axiosGet<R = unknown>(path: string, config?: AxiosRequestConfig | undefined, apiUrl?: string): Promise<AxiosResponse<R>> {
    const finalUrl = await generateFinalUrl(path, apiUrl);
    return axios.get(finalUrl, config);
}

export async function axiosPut<D = unknown, R = D>(path: string, data?: D, config?: AxiosRequestConfig | undefined, apiUrl?: string): Promise<AxiosResponse<R>> {
    const finalUrl = await generateFinalUrl(path, apiUrl);
    return axios.put(finalUrl, data, config);
}

export async function axiosPost<D = unknown, R = D>(path: string, data?: D, config?: AxiosRequestConfig | undefined, apiUrl?: string): Promise<AxiosResponse<R>> {
    const finalUrl = await generateFinalUrl(path, apiUrl);
    return axios.post(finalUrl, data, config);
}

export async function axiosDelete<R = unknown>(path: string, config?: AxiosRequestConfig | undefined, apiUrl?: string): Promise<AxiosResponse<R>> {
    const finalUrl = await generateFinalUrl(path, apiUrl);
    return axios.delete(finalUrl, config);
}
