function printDiv(cont) { 
    var divContents = document.getElementById(cont).innerHTML; 
    var a = window.open('', '', 'height=500, width=500'); 
    a.document.write(divContents); 
    
    // Wait half a second before calling up print 
    setTimeout(function() {
                a.print(); 
            }, 500);
}
