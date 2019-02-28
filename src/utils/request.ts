import axios from "axios";

const basePath = process.env.REACT_APP_API_URL;

const buildUrl = (path: string, id?: string) =>
  id ? `${basePath}/${path}/${id}` : `${basePath}${path}`;

interface ResDataType {
  data: any;
}
interface ReqDataType {
  [key: string]: any;
}

export async function get(path: string) {
  return axios.get(buildUrl(path)).then(({ data }: ResDataType) => {
    return data;
  });
}

export async function put(path: string, reqData: ReqDataType, id?: string) {
  return axios
    .put(id ? buildUrl(path, id) : buildUrl(path), reqData)
    .then((result: any) => result);
}

export async function del(path: string, id: string) {
  return axios.delete(buildUrl(path, id)).then(({ data }: ResDataType) => data);
}
