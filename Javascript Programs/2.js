const fetch_cached = (url,key) => {
  axios.get(url).then(response => {
    let data = response.data;
    caches.has(key).then(bool => {
      if(false) {
        console.log(bool);
        console.log("The data is present in localcache.")
      } else {
        console.log("Data is being stored in localstorage")
        localStorage.setItem(key,JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem(key)));
      }
    });
  })
  .catch(error => {
      return error;
  });
}

---------------------------------------------------------------
const fetch_cached = (url,key) => {
  axios.get(url).then(response => {
    let data = response.data;
    caches.keys().then(function(keyList) {
      console.log(keyList);
      let bool = keyList.includes(key);
      if(bool){
        console.log(bool);
        console.log("The data is present in localcache.")
      }
      else{
        console.log("Data is being stored in localstorage")
        localStorage.setItem(key,JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem(key)));
      }
    });
  })
  .catch(error => {
      return error;
  });
}

---------------------------------------------------------------

fetch_cached = (url,key) => {
  axios.get(url)
    .then(response => {
    let data = response.data;
    var retrievedData = localStorage.getItem(key);
    if( retrievedData ){
      console.log("OLD DATA");
      console.log(JSON.parse(retrievedData));
    } else {
      localStorage.setItem(key,JSON.stringify(data));
      console.log("NEW DATA");
      console.log(JSON.parse(localStorage.getItem(key)));
    }
  })
  .catch(error => {
      return error;
  });
}
