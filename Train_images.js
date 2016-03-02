///try the curl at node .js

var watson = require('watson-developer-cloud');
var fs = require('fs');



var visual_recognition = watson.visual_recognition({
  username: 'Your username',
  password: 'Your password',
  version: 'v2-beta',
  version_date: '2015-12-02'
});

var params = {
  name: 'cpu',
  positive_examples: fs.createReadStream('./cpu.zip'),
  negative_examples: fs.createReadStream('./noncpu.zip')
};

visual_recognition.createClassifier(params, 
  function(err, response) {
     if (err)
          console.log(err);
       else
      console.log(JSON.stringify(response, null, 2));
});