// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var devour = $(this).data("devour");
  
      var newDevour = {
        devoured: devour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevour
      }).then(
        function() {
          console.log("changed burger", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });