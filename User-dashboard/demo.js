function readURL(input) {
  document.getElementById("myImg").style.display="block";
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#myImg')
              .attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
  }
}

function chapterNumber()
{
    val = document.getElementById("select1").value;
    document.getElementById("select2").setAttribute('list',val)
}

function clicked(clk)
{
    // const label = document.this.id;
    console.log(clk);
    // alert("label");
}


