

//content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
    var allelements = $("body").children()


    function setIntervalX(callback, delay, repetitions) {
        var x = 0;
        var intervalID = window.setInterval(function () {

           callback();

             if (++x === repetitions) {
                 window.clearInterval(intervalID);
             }
          }, delay);
      }
      setIntervalX(function () {  
                allelements.each(function () {
        var dictionary = { 
          Aboriginal: 'Normal',
          aboriginal: 'normal',
          Aboriginals: 'Normal People',
          aboriginals: 'normal people',
          Asian: 'Normal',
          asian: 'normal',
          Asians: 'Normal People',
          asians: 'normal people',
          Caucasian: 'Normal',
          caucasian: 'normal',    
          Caucasians: 'Normal People',
          caucasians: 'normal people',           
          Black: 'Normal',
          black: 'normal',
          Blacks: 'Normal People',
          blacks: 'normal people',      
          Gipsy: 'Normal',
          gipsy: 'normal', 
          Gipsies: 'Normal People', 
          gipsies: 'normal people',  
          Irish: 'Normal',
          irish: 'normal',
          Negro: 'Normal',
          negro: 'normal',
          Nigga: 'Normal',
          nigga: 'normal',
          Nigger: 'Normal',
          nigger: 'normal',
          White: 'Normal',
          white: 'normal',
          Whites: 'Normal People',
          whites: 'normal people', 
          Wypipo: 'Normal people',
          wypipo: 'normal people', 
          Romani: 'Normal',
          romani: 'normal',
          Romanis: 'Normal People',
          romanis: 'normal people'
        },
            regexp = RegExp ('\\b(' + Object.keys (dictionary).join ('|') + ')\\b', 'ig');

            $(this).html( $(this).html()
              .replace(regexp, function (_, word) { return dictionary[word]; }) 

              );
    });
        // })
}, 250, 10);



    }
  }
);
