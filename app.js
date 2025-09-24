document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('toggle-sectors');
  var more = document.getElementById('more-sectors');
  if(btn && more){
    btn.addEventListener('click', function(){
      if(more.style.display === 'block'){
        more.style.display = 'none';
        btn.innerText = 'Show all sectors';
      }else{
        more.style.display = 'block';
        btn.innerText = 'Show fewer';
      }
    });
  }
});