//Fetch the data
function fetchData(){
    fetch("http://localhost:3000/cities").then(response => {
      return response.json();
    }).then(data => {
      // Obtain Query Parameter
      const queryString = window.location.search;
      console.log(queryString);
      const urlParams = new URLSearchParams(queryString);
      console.log(urlParams);
      const field = urlParams.get('orderByField').toLowerCase();
      console.log(field);
      sortTableByColumn(data, field);
        })
  }
  
  fetchData();
  
  //Sort the data based on given query parameter
  function sortTableByColumn(data, field){   
      switch(field) {
        case "city":
            const cityArray = data.sort((a, b) => {
            const aColText = a['City'];
            const bColText = b['City'];
            return aColText.localeCompare(bColText)
            });
  
            console.log(cityArray);
            displayData(cityArray);
          break;
        case "country":
            const countryArray = data.sort((a, b) => {
            const aColText = a['Country'];
            const bColText = b['Country'];
            return aColText.localeCompare(bColText)
            });
  
            console.log(countryArray);
            displayData(countryArray);
          break;
        case "all buildings":
          const buildingsArray = data.sort((a, b) => {
          const aColText = a['All\nBuildings'];
          const bColText = b['All\nBuildings'];
          return bColText - aColText;
          });
  
          console.log(buildingsArray);
          displayData(buildingsArray);
          break;
        case "100m+":
            const hundredArray = data.sort((a, b) => {
            const aColText = a['100m+'];
            const bColText = b['100m+'];
            return bColText - aColText;
            });
    
            console.log(hundredArray);
            displayData(hundredArray);
          break;
        case "150m+":
            const hundredFiftyArray = data.sort((a, b) => {
            const aColText = a['150m+'];
            const bColText = b['150m+'];
            return bColText - aColText;
            });
    
            console.log(hundredFiftyArray);
            displayData(hundredFiftyArray);
          break;
        case "200m+":
            const twoHundredArray = data.sort((a, b) => {
            const aColText = a['200m+'];
            const bColText = b['200m+'];
            return bColText - aColText;
            });
    
            console.log(twoHundredArray);
            displayData(twoHundredArray);
          break;
        case "300m+":
          const threeHundredArray = data.sort((a, b) => {
            const aColText = a['300m+'];
            const bColText = b['300m+'];
            return bColText - aColText;
            });
    
            console.log(threeHundredArray);
            displayData(threeHundredArray);
          break;
        case "telecom towers":
          const towersArray = data.sort((a, b) => {
            const aColText = a['Telecom\nTowers'];
            const bColText = b['Telecom\nTowers'];
            return bColText - aColText;
            });
    
            console.log(towersArray);
            displayData(towersArray);
          break;
        case "all structures":
          const structuresArray = data.sort((a, b) => {
            const aColText = a['All\nStructures'];
            const bColText = b['All\nStructures'];
            return bColText - aColText;
            });
    
            console.log(structuresArray);
            displayData(structuresArray);
          break;
      }
  }
  
  //Display the sorted data 
  
  function displayData(data) {
      var table = document.getElementById('myTable');
  
      for(var i = 0; i < data.length; i++){
          var row = `<tr>
                          <td>${data[i]['#']}</td>
                          <td>${data[i].City}</td>
                          <td>${data[i].Country}</td>
                          <td>${data[i]['All\nBuildings']}</td>
                          <td>${data[i]['100m+']}</td>
                          <td>${data[i]['150m+']}</td>
                          <td>${data[i]['200m+']}</td>
                          <td>${data[i]['300m+']}</td>
                          <td>${data[i]['Telecom\nTowers']}</td>
                          <td>${data[i]['All\nStructures']}</td>
                     </tr>`
                     table.innerHTML += row;
      }
  }
  
  
  