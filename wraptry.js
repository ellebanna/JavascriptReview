<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("about").click(function(){
    $(this).html("Cliked");
  });
});
</script>
<style>

</style>
</head>
<body>

<div id= "about" ></div>
<button type= "button" id="show">show</button>
<button type= "button" id="hide">hide</button>
<button type= "button" id="toogle">toogle</button>
</body>
</html>
