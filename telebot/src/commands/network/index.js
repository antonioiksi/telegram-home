const {bot} = require('../bot')

const network = (msg) => {
    var ifaces = os.networkInterfaces();
    var ips = ''
    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0;

        ifaces[ifname].forEach(function (iface) {
            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses
                ips += ifname + ':' + alias, iface.address + ', '
                console.log(ifname + ':' + alias, iface.address);
            } else {
                // this interface has only one ipv4 adress
                ips += ifname + ':' + iface.address + ', '
                console.log(ifname, iface.address);
            }
            ++alias;
        });
    });

    return bot.sendMessage(msg.from.id, `Local IPs: ${ ips }`);
};

module.exports.network = network
