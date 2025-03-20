import Client from './intance';

export async function getRequest(params: object, URL: string) {
  const response = await Client.get(URL, params);
  return response;
}

export async function postRequest(params: object, URL: string) {
  //console.log("PARAMS",params)
  //console.log(URL)
  const response = await Client.post(URL, params);
  return response;
}
