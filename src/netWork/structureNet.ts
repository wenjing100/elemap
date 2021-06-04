import { req } from "./request";

//post:192.168.3.147:12002/struct/getActualStruct      factory_id=2069

async function getStructure() {
  const option = {
    method: 'post',
    url: 'struct/getActualStruct',
    params:{
      factory_id:2069
    }
  }
  const res = (await req(option)).data;

  return res
}

export {
  getStructure
}
