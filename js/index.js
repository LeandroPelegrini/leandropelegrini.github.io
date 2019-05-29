$(document).ready(function(){ 
    
  $('a.glitch').each(function(i){ 
    var spanCont = $(this).html();
    $(this).prepend('<span>'+spanCont+'</span>')
           .append('<span>'+spanCont+'</span>');
  }); 
  
});