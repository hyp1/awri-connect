const {AWRI,User} = require('./awri-connect')


module.exports.connect =async function () { 
var _user=new User;
    await AWRI.connect().then(function(user){
        _user=user;
    });  
return _user;
}
   
module.exports.login =async function (user,pass) { 
var _user=new User;
    await AWRI.login(user,pass).then(function(user){
         _user=user;
    });  
return _user;
}

module.exports.search =async function (text) { 
    var _result;
    await AWRI.search(text).then(function(data){
        _result=data;
    });  
return _result;
}


module.exports.setup = function (url,endpoint) { 
    console.log('setup awri connect to '+url+'/'+endpoint);
 new AWRI(url,endpoint);
};