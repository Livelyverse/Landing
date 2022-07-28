import axios from "axios";

export const getBlogData = () => {
    const getBlogDataApi = "https://livelyverse.io/api/blog/findAll?sortType=DESC&offset=10&page=1";
    return axios.get(getBlogDataApi);
}