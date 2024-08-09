import { ApiResponseType } from "./apiResponseType";

export const FetchDomains = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/actusnileh/geoip-geosite-list/main/domains.json');
        const dataResponse: ApiResponseType = await response.json();
        console.log(dataResponse);
        return dataResponse
    } catch (error) {
        console.log(error);
    }
};
