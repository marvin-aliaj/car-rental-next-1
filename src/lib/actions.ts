import {get} from "./api";

export const getCars = (params) => {
    return get("/cars", params)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error
        })
}
