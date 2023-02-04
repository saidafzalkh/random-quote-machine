$(document).ready(function () {
  getQuote()
  $('#new-quote').click(getQuote)
})

function getQuote() {
  const url = 'https://api.api-ninjas.com/v1/quotes'
  const key = 'owbKpeMODWR/G7fp5SmgvQ==RrQ9zsAXRb2lVf9m'
  $('#text').text("Loading...")
  $('#author').text("...")
  $.ajax({
    method: 'GET',
    url: url,
    headers: { 'X-Api-Key': key },
    contentType: 'application/json',
    success: function (result) {
      const q = result[0]
      const link = `https://twitter.com/intent/tweet?hashtags=quotes&&text="${q.quote}" ${q.author}`
      $('#text').text(q.quote)
      $('#author').text(q.author)
      $('#tweet-quote').attr("href", link)
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
      $('#text').text("Something was wrong");
      $('#author').text("...");
    }
  });
}