const Mock = require('mockjs');

let data = Mock.mock('/signs','GET',{
	"mac|1-3": "mac"
  	"label|1-3": "label",
  	"requestInterval|+1": 0,
    "timeSyncInterval|+1": 0,
    "message|1-3": "msg"
})