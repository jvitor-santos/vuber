document.getElementById('downloadButton').addEventListener('click', function() {
    var fileUrl = "./archives/vuber.apk";
    var fileName = 'vuber.apk';

    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  });