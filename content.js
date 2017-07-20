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
          Aboriginal: 'Ordinary',
          aboriginal: 'ordinary',
          Aboriginals: 'Ordinary People',
          aboriginals: 'ordinary people',
          Asian: 'Ordinary',
          asian: 'ordinary',
          Asians: 'Ordinary People',
          asians: 'ordinary people',
          Caucasian: 'Ordinary',
          caucasian: 'ordinary',    
          Caucasians: 'Normal People',
          caucasians: 'normal people',           
          Black: 'Ordinary',
          black: 'ordinary',
          Blacks: 'Ordinary People',
          blacks: 'ordinary people',      
          Gipsy: 'Ordinary',
          gipsy: 'ordinary', 
          Gipsies: 'Ordinary People', 
          gipsies: 'ordinary people',  
          Irish: 'Ordinary',
          irish: 'ordinary',
          Latino: 'Ordinary',
          latino: 'ordinary',
          Latinos: 'Ordinary People',
          latinos: 'ordinary people', 
          Negro: 'Ordinary',
          negro: 'ordinary',
          Nigga: 'Ordinary',
          nigga: 'ordinary',
          Nigger: 'Ordinary',
          nigger: 'ordinary',
          White: 'Ordinary',
          white: 'ordinary',
          Whites: 'Ordinary People',
          whites: 'ordinary people', 
          Wypipo: 'Ordinary people',
          wypipo: 'ordinary people',
          Pole: 'Ordinary',
          pole: 'ordinary',
          Poles: 'Ordinary People',
          poles: 'ordinary people',  
          Romani: 'Ordinary',
          romani: 'ordinary',
          Romanis: 'Ordinary People',
          romanis: 'ordinary people'
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
