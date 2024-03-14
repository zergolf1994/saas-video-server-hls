const { ServerModel } = require("../models/server.models");
const { get_os } = require("./os");

exports.getLocalServer = async () => {
  try {
    let { ip_v4 } = get_os();
    return await ServerModel.findOne({ sv_ip: ip_v4 });
  } catch (error) {
    return null;
  }
};
