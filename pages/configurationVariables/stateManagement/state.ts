export interface IConfigurationVariablesState {
    appRedirectUri: string;
    appApiHostname: string;
    appApiUrl: string;
    configurationReady: boolean;
}

export const INITIAL_STATE: IConfigurationVariablesState = {
    appRedirectUri: "",
    appApiHostname: "",
    appApiUrl: "",
    configurationReady: false,
};
