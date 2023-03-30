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

function playTapticEngine() {
  console.log('playTapticEngine')
  // Call iOS
  if (window.webkit != undefined) {
    window.webkit.messageHandlers.playHaptic.postMessage("1");
  }
}