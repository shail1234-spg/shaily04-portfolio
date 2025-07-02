function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
  
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
  
      // ✅ Show the thank-you popup
      showPopup(true);


      
  
      // ✅ Create a new 'recommendation' element
      var element = document.createElement("div");
      element.setAttribute("class", "recommendation");
      element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";
  
      // ✅ Add the element to the recommendation list
      document.getElementById("all_recommendations").appendChild(element);
  
      // ✅ Clear the textarea
      recommendation.value = "";
  
      // ✅ Hide popup after 2 seconds
      setTimeout(() => {
        showPopup(false);
      }, 2000);
    }
  }
  
  function showPopup(bool) {
    const popup = document.getElementById("popup");
    if (bool) {
      popup.style.visibility = "visible";
    } else {
      popup.style.visibility = "hidden";
    }
  }
  