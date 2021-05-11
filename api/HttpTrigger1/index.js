const say = require('custom-module')

module.exports = async function (context, req) {
    context.res = {
        body: say.hello()
    };
}