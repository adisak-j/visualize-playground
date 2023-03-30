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

async function getWebViewVisibleHeight() {
  try {
    const result = await window.webkit.messageHandlers.getWebViewVisibleHeight.postMessage("");
    console.log("--- Success:" + result);
    const { visibleHeight, offScreenTopArea } = JSON.parse(result);
    console.log("visibleContnetHeight:", visibleHeight);
    console.log("offScreenTopArea:", offScreenTopArea);
    const viewportHeight = window.innerHeight;

    if (visibleHeight === viewportHeight) {
      console.log("☝🏻 Web is showing all content");
      return;
    }

    const divRect = document.getElementById("element1").getBoundingClientRect();

    // Calculate the position of the div relative to the viewport
    const divTop = divRect.top;
    const divLeft = divRect.left;

    console.log("visibleContnetHeight:", visibleHeight);
    console.log("divRect:", divRect);
    console.log("divTop:", divTop);

    let difBetweenVisibleAndDiv = divTop - visibleHeight;
    console.log("difBetweenVisibleAndDiv:", difBetweenVisibleAndDiv);
    difBetweenVisibleAndDiv += divRect.height + 20;
    console.log("difBetweenVisibleAndDiv:", difBetweenVisibleAndDiv);

    if (visibleHeight + offScreenTopArea > divTop) {
      console.log("☝🏻☝🏻 Progress is still showing");
      return;
    }

    scrollUp(difBetweenVisibleAndDiv);
  } catch (err) {
    console.log("--- Error");
    console.log(err);
  }
}

// function getWebViewVisibleHeight() {
//   var promise = window.webkit.messageHandlers.getWebViewVisibleHeight.postMessage("");
  
//   promise.then(
//     function(result) {
//       console.log("--- Success:"+ result)
//       let obj = JSON.parse(result);
//       const visibleContnetHeight = parseInt(obj.visibleHeight);
//       const offScreenTopArea = parseInt(obj.offScreenTopArea);
//       console.log("visibleContnetHeight: "+visibleContnetHeight );
//       console.log("offScreenTopArea: "+offScreenTopArea );
//       var viewportHeight = window.innerHeight;

//       if (visibleContnetHeight == viewportHeight) {
//         console.log("🥹 Web is showing all content")
//         return
//       }

//       var divRect = document.getElementById('element1').getBoundingClientRect();

//       // Calculate the position of the div relative to the viewport
//       var divTop = divRect.top;
//       var divLeft = divRect.left;

      
//       console.log("visibleContnetHeight: "+visibleContnetHeight ); 
//       console.log("divRect: "+divRect );
//       console.log("divTop: "+divTop );
      
//       var difBetweenVisibleAndDiv = (divTop - visibleContnetHeight); 

//       console.log("difBetweenVisibleAndDiv: "+difBetweenVisibleAndDiv );
//       difBetweenVisibleAndDiv = difBetweenVisibleAndDiv + divRect.height + 20;
//       console.log("difBetweenVisibleAndDiv: "+difBetweenVisibleAndDiv );

//       if ((visibleContnetHeight + offScreenTopArea) > divTop) {
//         console.log("☝🏻 Progress is still showing")
//         return
//       }

//       scrollUp(difBetweenVisibleAndDiv);
//     },
//     function(err) {
//       console.log("--- Error")
//       console.log(err); // Error: "It broke"
//     });
// }