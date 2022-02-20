$(document).ready(function () {

  //sentences on the top 
  let sentences = [
    '1.ten ate neite ate nee enet ite ate inet ent eate',
    '2.Too ato too nOt enot one totA not anot tOO aNot',
    '3.oat itain oat tain nate eate tea anne inant nean',
    '4.itant eate anot eat nato inate eat anot tain eat',
    '5.nee ene ate ite tent tiet ent ine ene ete ene ate'
  ];
  $('div[id="sentence"]').append(sentences[0])
  let counter = 0;

  $(document).on('keydown', function (event) {

    if (event.keyCode == 13) {
      counter++
      $('div[id="sentence"]').text('');
      $('div[id="sentence"]').append(sentences[counter]);
    }

  });
 // yellow block default position
  $('div[id="yellow-block"]').css({
    'position':'relative',
    'left':'40px'
  })
  let keydownCount= 0

  //move yellow block to the right
  $(document).on('keydown',function(){
    keydownCount++
    let num ;

    if(event.keyCode === 32){
    console.log('spacebar')
    let num = 40 + 20*keydownCount
    $('div[id="yellow-block"]').css('left',num+'px');
    }else{
    let num = 40 + (10*keydownCount)
   $('div[id="yellow-block"]').css('left',num+'px');
    }
  })
 



  $("#keyboard-upper-container").hide();
  $("#keyboard-lower-container").show();
  //shiftkey down->uppercase, shiftkey up ->lowercase
  //Q1 : .bind() => Attach a handler to an event for the elements
  //Q2: event.keyCode is deprecated, MDN recommends KeyboardEvent.code. but it doesn't work  https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode

  $(document).on('keydown', function (event) {
    if (event.keyCode == 16) {
      $("#keyboard-upper-container").show();
      $("#keyboard-lower-container").hide();

    }
  });
  $(document).on('keyup', function (event) {
    if (event.keyCode == 16) {
      $("#keyboard-upper-container").hide();
      $("#keyboard-lower-container").show();

    }
  });
  //when keys are down, they should be highlighted
  //effect() doesn't work.  .effect( "highlight", {color:"#669966"}, 3000 )
  //css property doesn't work either.  .css('background-color','yellow');
  $(document).on('keydown', function (event) {
    if (event.keyCode == 81) {
      console.log('Queen')
      const $q = $('span[id= "81"]')
      console.log($q)
      // $q.css('background-color','yellow');
    } else if (event.keyCode == 87) {
      console.log('world')

    }



    //sentences









  });










});