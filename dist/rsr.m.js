var r=require("./validate"),e=function(){};e.save=function(e,n){var t=n.data,a=n.error,o=r.setAlert("save",n.validate),u=r.setAlert("save",a);return r.isValid(t,o),e.create(t).then(function(e){return r.handleError(e,u),e}).catch(function(r){return console.error(r.message),r})},e.delete=function(e,n){var t=n.params,a=n.error;return r.isValid(t.id),e.destroy({where:t}).then(function(e){return r.handleError(e,a),e}).catch(function(r){return console.error(r.message),r})},e.update=function(e,n){var t=n.params,a=n.error,o=n.data;return r.isValid(n.params,n.validate),e.update(o,{where:t}).then(function(e){return r.handleError(e,a),e}).catch(function(r){return console.error(r.message),r})},e.findAll=function(e,n){var t=n.params,a=r.setAlert("find",n.error);return e.findAll(t).then(function(e){return r.handleError(e,a),e}).catch(function(r){return console.error(r.message),r})},e.findOne=function(e,n){var t=n.error,a=n.params,o=(r.setAlert("save",n.validate),r.setAlert("find",t));return e.findOne(a).then(function(e){return r.handleError(e,o),e}).catch(function(r){return console.error(r.message),r})},module.exports=e;
//# sourceMappingURL=rsr.m.js.map