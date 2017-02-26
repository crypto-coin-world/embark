/*globals describe, it*/
var Compiler = require('../lib/contracts/compiler.js');
var TestLogger = require('../lib/core/test_logger.js');
var assert = require('assert');
var fs = require('fs');

var readFile = function(file) {
  return {filename: file, content: fs.readFileSync(file).toString()};
};

describe('embark.Compiler', function() {
  var compiler = new Compiler({logger: new TestLogger({})});

  describe('#compile_solidity', function() {
    var expectedObject = {};

    expectedObject["SimpleStorage"] = {"code":"606060405234610000576040516020806100f083398101604052515b60008190555b505b60bf806100316000396000f300606060405263ffffffff60e060020a6000350416632a1afcd98114603657806360fe47b11460525780636d4ce63c146061575b6000565b346000576040607d565b60408051918252519081900360200190f35b34600057605f6004356083565b005b346000576040608c565b60408051918252519081900360200190f35b60005481565b60008190555b50565b6000545b905600a165627a7a72305820a250be048d43f54e9afbb37211dc73ba843d23b95863b60afe703903500077220029","runtimeBytecode":"606060405263ffffffff60e060020a6000350416632a1afcd98114603657806360fe47b11460525780636d4ce63c146061575b6000565b346000576040607d565b60408051918252519081900360200190f35b34600057605f6004356083565b005b346000576040608c565b60408051918252519081900360200190f35b60005481565b60008190555b50565b6000545b905600a165627a7a72305820a250be048d43f54e9afbb37211dc73ba843d23b95863b60afe703903500077220029","gasEstimates":{"creation":[20131,38200],"external":{"get()":269,"set(uint256)":20163,"storedData()":224},"internal":{}},"functionHashes":{"get()":"6d4ce63c","set(uint256)":"60fe47b1","storedData()":"2a1afcd9"},"abiDefinition":[{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initialValue","type":"uint256"}],"payable":false,"type":"constructor"}]};

    expectedObject["Token"] = {"code":"6060604052346100005760405160208061048e83398101604052515b600160a060020a033316600090815260208190526040902081905560028190555b505b6104418061004d6000396000f3006060604052361561005c5763ffffffff60e060020a600035041663095ea7b3811461006157806318160ddd1461009157806323b872dd146100b057806370a08231146100e6578063a9059cbb14610111578063dd62ed3e14610141575b610000565b346100005761007d600160a060020a0360043516602435610172565b604080519115158252519081900360200190f35b346100005761009e6101dd565b60408051918252519081900360200190f35b346100005761007d600160a060020a03600435811690602435166044356101e4565b604080519115158252519081900360200190f35b346100005761009e600160a060020a03600435166102f8565b60408051918252519081900360200190f35b346100005761007d600160a060020a0360043516602435610317565b604080519115158252519081900360200190f35b346100005761009e600160a060020a03600435811690602435166103da565b60408051918252519081900360200190f35b600160a060020a03338116600081815260016020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b6002545b90565b600160a060020a0383166000908152602081905260408120548290101561020a57610000565b600160a060020a03808516600090815260016020908152604080832033909416835292905220548290101561023e57610000565b600160a060020a0383166000908152602081905260409020546102619083610407565b151561026c57610000565b600160a060020a038085166000818152600160209081526040808320338616845282528083208054889003905583835282825280832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060015b9392505050565b600160a060020a0381166000908152602081905260409020545b919050565b600160a060020a0333166000908152602081905260408120548290101561033d57610000565b600160a060020a0383166000908152602081905260409020546103609083610407565b151561036b57610000565b600160a060020a0333811660008181526020818152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060015b92915050565b600160a060020a038083166000908152600160209081526040808320938516835292905220545b92915050565b808201829010155b929150505600a165627a7a7230582017291fa7c1b9234972e866bb8b730096a40f8610da4684f7977498fc0ee8f75b0029","runtimeBytecode":"6060604052361561005c5763ffffffff60e060020a600035041663095ea7b3811461006157806318160ddd1461009157806323b872dd146100b057806370a08231146100e6578063a9059cbb14610111578063dd62ed3e14610141575b610000565b346100005761007d600160a060020a0360043516602435610172565b604080519115158252519081900360200190f35b346100005761009e6101dd565b60408051918252519081900360200190f35b346100005761007d600160a060020a03600435811690602435166044356101e4565b604080519115158252519081900360200190f35b346100005761009e600160a060020a03600435166102f8565b60408051918252519081900360200190f35b346100005761007d600160a060020a0360043516602435610317565b604080519115158252519081900360200190f35b346100005761009e600160a060020a03600435811690602435166103da565b60408051918252519081900360200190f35b600160a060020a03338116600081815260016020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b6002545b90565b600160a060020a0383166000908152602081905260408120548290101561020a57610000565b600160a060020a03808516600090815260016020908152604080832033909416835292905220548290101561023e57610000565b600160a060020a0383166000908152602081905260409020546102619083610407565b151561026c57610000565b600160a060020a038085166000818152600160209081526040808320338616845282528083208054889003905583835282825280832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060015b9392505050565b600160a060020a0381166000908152602081905260409020545b919050565b600160a060020a0333166000908152602081905260408120548290101561033d57610000565b600160a060020a0383166000908152602081905260409020546103609083610407565b151561036b57610000565b600160a060020a0333811660008181526020818152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060015b92915050565b600160a060020a038083166000908152600160209081526040808320938516835292905220545b92915050565b808201829010155b929150505600a165627a7a7230582017291fa7c1b9234972e866bb8b730096a40f8610da4684f7977498fc0ee8f75b0029","gasEstimates":{"creation":[40422,217800],"external":{"allowance(address,address)":598,"approve(address,uint256)":22273,"balanceOf(address)":462,"totalSupply()":265,"transfer(address,uint256)":42894,"transferFrom(address,address,uint256)":63334},"internal":{"safeToAdd(uint256,uint256)":41}},"functionHashes":{"allowance(address,address)":"dd62ed3e","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd"},"abiDefinition":[{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"ok","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"supply","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"ok","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"value","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"ok","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"_allowance","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initial_balance","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]}

    it('should generate compiled code and abi', function(done) {
      compiler.compile_solidity([
        readFile('test/contracts/simple_storage.sol'),
        readFile('test/contracts/token.sol')
      ], function(compiledContracts) {
        assert.deepEqual(compiledContracts, expectedObject);
        done();
      });
    });

  });

});
