// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg.
const logger = function (obj) {
  if (obj.errMsg) {
    console.log(obj.errMsg);
  }
};

const temp = {
  name: 'Sristika',
  errMsg: 'This is an error message',
};

logger(temp);
