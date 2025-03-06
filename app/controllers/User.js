const { configs } = require("../config");
const { XhrHttps } = require("../routers/XhrHttps");

class User {
   login = async (data) => {
      let token = '';
      let param = `?mod=customer&act=api_login&email=${data.email}&password=${data.password}&token=${token}`;
      // console.log(configs.domain + param)
      await XhrHttps.init(true);
      return await XhrHttps.instance.get(configs.domain + param);
   }
   regis = async (data) => {
      let url = `${configs.domain}?mod=customer&act=api_regis`;
      console.log(url)
      await XhrHttps.init(true);
      return await XhrHttps.instance.post(url, data);
   }
}
exports.User = new User();