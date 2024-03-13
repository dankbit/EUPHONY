import {backendurl} from "./config";

export const makeUnauthenticatedPOSTRequest = async (route, body) => {
    const response = await fetch(backendurl + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
};