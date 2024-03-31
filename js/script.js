document.getElementById('printButton').addEventListener('click', function() {
    var content = document.getElementById('content').innerHTML;
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print Content</title></head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});