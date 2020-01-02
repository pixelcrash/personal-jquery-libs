<script>

function wwii(){
  let wi = $('.<?php echo $css; ?>').width();
  let wind = $( document ).width();
  if(wind < 959 ){
    $('.p-<?php echo $css; ?>').css('width', ((wi / 100) * 80) );
  } else {
    $('.p-<?php echo $css; ?>').css('width', ((wi / 100) * 38) );
  }
}

$( window ).resize(function() {
  wwii();
});

wwii();


</script>
