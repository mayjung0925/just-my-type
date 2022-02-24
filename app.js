$(document).ready(function () {
  $("#keyboard-upper-container").hide();

  $(document).on('keydown', function (e) {
    if (e.key === 'Shift') {
      $("#keyboard-upper-container").show();
      $("#keyboard-lower-container").hide();

    }
  });
  $(document).on('keyup', function (e) {
    if (e.key === 'Shift') {
      $("#keyboard-upper-container").hide();
      $("#keyboard-lower-container").show();

    }
  });


  let sentencesArr = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'
  ];

  //yellow block default position
  $('div[id="yellow-block"]').css({
    'position': 'relative',
    'left': '10px'
  })

  let sentIndex = 0;
  let letterCounter = 0;
  let totalNumOfLetters = 0
  let errorCounter = 0;

  let currentSentence = sentencesArr[sentIndex];
  let lettersArr = currentSentence.split("")
  let currentLetter = lettersArr[letterCounter];

  //Append first sentence and first letter of it
  $('div[id="sentence"]').append(currentSentence)
  $('#target-letter').text(currentLetter);

  let startTime = new Date().getTime();


  $(document).on('keypress', function (e) {


    //Add a check mark if it matches with the current letter, show next letter ,  move the yellow block
    if (e.key == currentLetter) {

      let checkMark = $("<span class='glyphicon glyphicon-ok'></span>")
      $('#feedback').append(checkMark);

      nextLetter();


      if (letterCounter === lettersArr.length) {
        //When the given sentences were all typed in, show wpm
        if (totalNumOfLetters == 240) {

          clearDivs()
          $('div[id="yellow-block"]').remove();

          let endTime = new Date().getTime();
          let timeTaken = endTime - startTime;
          let wpm = 240 / timeTaken - 2 * errorCounter;

          $('div[id="sentence"]').text('Your words per minute is' + wpm);

          $('#feedback').append('<button onClick="window.location.href=window.location.href">Replay</button>');

        }
        //Clear the divs, present the next sentence and the first letter of it
        else {

          clearDivs();
          $('div[id="yellow-block"]').css('left', '10px');

          nextSentence();

        }

      }

      // Add a cross mark if it doesn't match, show the next letter, move the yellow block
    } else if (e.key != currentLetter) {
      let crossMark = $("<span class='glyphicon glyphicon-remove'></span>")
      $('#feedback').append(crossMark);
      errorCounter++

      nextLetter();

      if (letterCounter === lettersArr.length) {
        //When the given sentences were all typed in, show wpm
        if (totalNumOfLetters == 240) {

          clearDivs()
          $('div[id="yellow-block"]').remove();

          let endTime = new Date().getTime();
          let timeTaken = endTime - startTime;
          let wpm = 240 / timeTaken - 2 * errorCounter;

          $('div[id="sentence"]').text('Your words per minute is' + wpm);

          $('#feedback').append('<button onClick="window.location.href=window.location.href">Replay</button>');

        }
        //Clear the divs, present the next sentence and the first letter of it
        else {

          clearDivs();
          $('div[id="yellow-block"]').css('left', '10px');

          nextSentence();

        }



    }
  }

  });


  $(document).on('keypress', function (e) {

    let keyCode = e.which
    let currentLetterSpan = $('#' + keyCode);
    currentLetterSpan.effect("highlight", { color: "yellow" }, 500)


  });

  function nextLetter() {
    letterCounter++
    totalNumOfLetters++
    currentLetter = lettersArr[letterCounter]
    $('#target-letter').text(currentLetter);
    $('div[id="yellow-block').css('left', "+=17.5px");

  }

  function nextSentence() {
    sentIndex++
    letterCounter = 0
    currentSentence = sentencesArr[sentIndex];
    lettersArr = currentSentence.split("")
    currentLetter = lettersArr[letterCounter];

    $('div[id="sentence"]').append(currentSentence)
    $('#target-letter').text(currentLetter);

  }
  function clearDivs() {

    $('div[id="sentence"]').empty();
    $('#feedback').empty();
    $('#target-letter').empty();
  }






});


