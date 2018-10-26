import { RequestInit } from "node-fetch";

export default {
    validate,
    parse
}

export type Fetch = (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>;

function validate(response: Response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {   
        let error = new Error(response.toString());
        throw error;
    }
};

function parse<T>(promise: Promise<Response>): Promise<T> {
    return promise.then(response => { 
        return response.json() as Promise<T>;
    });
}