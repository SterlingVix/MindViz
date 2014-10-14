var nodeThinkGear = require('node-neurosky');

var tgClient = nodeThinkGear.createClient({
	appName:'NodeThinkGear',
	appKey:'0fc4141b4b45c675cc8d3a765b8d71c5bde9390'
});
console.log(tgClient);

tgClient.on('data',function(data){
	console.log(data);
});

tgClient.connect();

/*




////////////////////////////////////////////

var net = require('net'),
	events = require('events'),
	util = require('util');

function NodeThinkGearError(message){
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.message = message;
  this.name = 'NodeThinkGearError';
};

NodeThinkGearError.prototype.__proto__ = Error.prototype;

var ThinkGearClient = function(opts){
	opts || (opts = {});

	this.port = opts.port || 13854;
	this.host = opts.host || 'localhost';

	if(typeof(opts.appName) !== 'string') throw new NodeThinkGearError('Must specify appName');
	if(typeof(opts.appKey) !== 'string') throw new NodeThinkGearError('Must specify appKey');
	
	this.auth = {
		appName:opts.appName,
		appKey:opts.appKey
	};

	this.config = {
		enableRawOutput: false,
		format: "Json"
	};

	events.EventEmitter.call(this);
};

util.inherits(ThinkGearClient, events.EventEmitter);

ThinkGearClient.prototype.connect = function(){
	var self = this;
	
	var client = this.client = net.connect(this.port,this.host,function(){
		client.write(JSON.stringify(self.auth));
	});

	client.on('data',function(data){
		if(!self.configSent){
			self.configSent = true;
			client.write(JSON.stringify(self.config));
		} else {
			try{
				self.emit('data',JSON.parse(data.toString()));
			}catch(e){
				self.emit('parse_error',data.toString());
			}
		}
	});
};

exports.ThinkGearClient = ThinkGearClient;

exports.createClient = function(opts){
	return new ThinkGearClient(opts || {});
};



/*
//         ___ Data Format: ___

// { eSense: { attention: 48, meditation: 51 },
//   eegPower:
//    { delta: 18293,
//      theta: 5224,
//      lowAlpha: 892,
//      highAlpha: 4135,
//      lowBeta: 1215,
//      highBeta: 3536,
//      lowGamma: 1101,
//      highGamma: 1555 },
//   poorSignalLevel: 0 }
// { blinkStrength: 140 }
// { eSense: { attention: 35, meditation: 41 },
//   eegPower:
//    { delta: 233485,
//      theta: 138936,
//      lowAlpha: 16654,
//      highAlpha: 7208,
//      lowBeta: 2998,
//      highBeta: 5517,
//      lowGamma: 2124,
//      highGamma: 1437 },
//   poorSignalLevel: 0 }
// { blinkStrength: 140 }
*/

