
var address ='https://www.googleapis.com/blogger/v3/blogs/18157064/posts/search?q=';

var key;
var content = document.getElementById('postComments');

// postsResults is the container from where the search results live
var postsResults = document.getElementById('postsResults');

var submitBtn = document.getElementById('submitBtn');

// On click get the vaule and initiate ajax for API Key
$('#submitBtn').click(function(e){
  var srch = $('#searchInput').val();
  e.preventDefault();
  $.ajax({
    url: 'config.json',
    dataType: 'json',
    type: 'GET',
    success: function(data){
      key = data[0].API_KEY;
      getData(srch);
    },
    error: function(error){
      console.log('ERROR');
      console.log(error);
    }
  });
});

// Retrieving the data
function getData(x){

  $.ajax({
    url: address+x+'&key='+key,
    type: 'GET',
    dataType: 'json',
    success: function(data) {

      function showResults() {
        // Clears the serach results from the previous search
        postsResults.innerHTML = '';

        // For loop the data to get the specific data we need to inject into the DOM
        for(var i = 0; i < data.items.length; i++){
          console.log(data.items[i]);

          // Creating the post header
          var postHeader = document.createElement('h2');
          postHeader.textContent = data.items[i].title;
          postsResults.appendChild(postHeader);

          // Creating the other post content and injecting it into the DOM
          var el = document.createElement('div');
          el.setAttribute('class', 'news');
          el.innerHTML = data.items[i].content;
          postsResults.appendChild(el);
        }
      }
      showResults();

      console.log(data.items);
      console.log(data.items[0].author.image.url);
      console.log(data.items[0].replies.selfLink);
    },

    error: function(error) {
      console.log(error);
      console.log('WRONG');
    }
  });
}
