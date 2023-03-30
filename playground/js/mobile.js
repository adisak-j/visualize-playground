//##################################################################
// Example interfaces between your JavaScript code and client-side Android / iOS code
//##################################################################

function openInfomationScene(url) {
  console.log('openInfomationScene: '+url)
  // Call iOS
  if (window.webkit != undefined) {
    window.webkit.messageHandlers.openInfomationScene.postMessage(url);
  } else {
    console.error("[Error-1]window.webkit is undefined");
  }

  // Call Android
  if (typeof App !== "undefined") {
    App.openInfomationScene(url);
  }
}

function setContentHeight(height) {
  console.log('setContentHeight: '+height)
  // Call iOS
  if (window.webkit != undefined) {
    window.webkit.messageHandlers.setContentHeight.postMessage(height);
  } else {
    console.error("[Error-1]window.webkit is undefined");
  }

  // Call Android
  if (typeof App !== "undefined") {
    App.setCustomHeight(obj);
  }
}


function testTokenExpired() {
  var promise = window.webkit.messageHandlers.accessTokenExpired.postMessage("");
  
  promise.then(
    function(result) {
      console.log("--- Success")
      console.log(result); // "Stuff worked!"
    },
    function(err) {
      console.log("--- Error")
      console.log(err); // Error: "It broke"
    });
}

function playTapticEngine(value) {
  console.log('playTapticEngine :'+value)
  // Call iOS
  if (window.webkit != undefined) {
    window.webkit.messageHandlers.playHaptic.postMessage(value);
  }
}

function scrollUp(value) {
  console.log('scrollUp :'+value)
  // Call iOS
  if (window.webkit != undefined) {
    window.webkit.messageHandlers.scrollUp.postMessage(value);
  }
}

function getWebViewVisibleHeight() {
  var promise = window.webkit.messageHandlers.getWebViewVisibleHeight.postMessage("");
  
  promise.then(
    function(result) {
      console.log("--- Success")
      const visibleContnetHeight = parseInt(result);


      var divRect = document.getElementById('element1').getBoundingClientRect();

      // Calculate the position of the div relative to the viewport
      var divTop = divRect.top;
      var divLeft = divRect.left;

      
      console.log("visibleContnetHeight: "+visibleContnetHeight ); 
      console.log("divRect: "+divRect );
      console.log("divTop: "+divTop );
      
      var difBetweenVisibleAndDiv = (divTop - visibleContnetHeight); 

      console.log("difBetweenVisibleAndDiv: "+difBetweenVisibleAndDiv );
      difBetweenVisibleAndDiv = difBetweenVisibleAndDiv + divRect.height + 20;
      console.log("difBetweenVisibleAndDiv: "+difBetweenVisibleAndDiv );

      scrollUp(difBetweenVisibleAndDiv);
    },
    function(err) {
      console.log("--- Error")
      console.log(err); // Error: "It broke"
    });
}