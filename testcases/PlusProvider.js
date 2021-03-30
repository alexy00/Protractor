var MultCredentials = require('./MultCredentials.json'); // import Credentials.json
var using = require('jasmine-data-provider');

function PlusProviders(){
    this.plusproviders =function(){
        return([
            {username:MultCredentials.username,password:MultCredentials.password},
            {username:MultCredentials.username1,password:MultCredentials.password1}
    ]);
    }
}



module.exports = PlusProviders;