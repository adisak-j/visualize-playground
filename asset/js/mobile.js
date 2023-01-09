function initialData(data) {
  console.log("############ initialData ############");
}
 
//##################################################################
// Example interfaces between your JavaScript code and client-side Android / iOS code
//##################################################################

//Example for call native by pass parameter as string
//message: String
function example1(message) {
  // Call iOS
  if (window.webkit != undefined) {
    if (window.webkit.messageHandlers.appInterface != undefined) {
      window.webkit.messageHandlers.example1.postMessage(message);
    }
  }

  // Call Android
  if (typeof App !== "undefined") {
    App.example1(message);
  }
}

//Example for call native by pass parameter as json
//obj: json
function example2(obj) {
  // Call iOS
  if (window.webkit != undefined) {
    if (window.webkit.messageHandlers.appInterface != undefined) {
      window.webkit.messageHandlers.example2.postMessage(obj);
    }
  }

  // Call Android
  if (typeof App !== "undefined") {
    App.example2(obj);
  }
}


function setCustomHeight(height) {
  console.log('setCustomHeight: '+height)
  // Call iOS
  if (window.webkit != undefined) {
    if (window.webkit.messageHandlers.appInterface != undefined) {
      window.webkit.messageHandlers.setCustomHeight.postMessage(height);
    }
  }

  // Call Android
  if (typeof App !== "undefined") {
    App.setCustomHeight(obj);
  }
}