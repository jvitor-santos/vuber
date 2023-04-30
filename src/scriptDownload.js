document.getElementById('downloadButton').addEventListener('click', function() {
    var fileUrl = "../archives/Analise SWOT.docx";
    var fileName = 'Analise SWOT.docx';

    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  });