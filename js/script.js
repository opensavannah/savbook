/https:\/\/docs\.google\.com\/spreadsheets\/d\/(.*)\//.test();

var baseURL = 'http://codeforamerica.github.io/citybook/static/?key='
var spreadsheetKey = ''
var cityBookTitle = 'Placeholder Title';
var cityBookWidth = '100';
var cityBookHeight = '600';

$(document).ready(function(){
  $('#citybook-height').val(cityBookHeight);
  $('#citybook-width').val(cityBookWidth);

  $("input[type='text']" ).on('input',function(e){
    var keyInput = $('#spreadsheet-key').val();

    if(/https:\/\/docs\.google\.com\/spreadsheets\/d\/(.*)\//.test(keyInput)){
      console.log('got to true!');
      spreadsheetKey = keyInput.match(/https:\/\/docs\.google\.com\/spreadsheets\/d\/(.*)\//)[1];
      $("spreadsheet-key-input-group").addClass('success');
    } else {
      console.log('false');
      $("spreadsheet-key-input-group").addClass('has-warning');
      return;
    }

    cityBookTitle = $('#citybook-title').val();
    cityBookHeight = $('#citybook-height').val();
    cityBookWidth = $('#citybook-width').val();

    safeTitle = encodeURIComponent(cityBookTitle);

    srcUrl = baseURL + spreadsheetKey + '&title=' + safeTitle;
    iframeEmbed = '<iframe src="' + srcUrl + '" width="' + cityBookWidth + '%" height="' + cityBookHeight + 'px" frameboarder="0"></iframe>';

    $('#citybook-test').attr('href', srcUrl);
    $('#output').val(iframeEmbed);

    console.log(srcUrl);

  });



})
