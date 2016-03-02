var watson = require('watson-developer-cloud');
var fs = require('fs');

var visual_recognition = watson.visual_recognition({
   username: 'Your username',
  password: 'Your password',
  version: 'v2-beta',
  version_date: '2015-12-02'
});

var params = {
  images_file: fs.createReadStream('./test.jpg'),
  classifier_ids: fs.readFileSync('./classifier.json')
};

visual_recognition.classify(params, 
  function(err, response) {
     if (err)
          console.log(err);
       else
      console.log(JSON.stringify(response, null, 2));
});
