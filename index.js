function Card(term, definition,) {
  this.term = term;
  this.definition = definition;
}
var newDeck = [];
var newCard;
var front = document.getElementById("front");
var back = document.getElementById("back");
var formFront, formBack;


var card1 = new Card(
  "GB QB?",
  "Aaron Rodgers",
);
var card2 = new Card(
  "GB RB?",
  "Aaron Jones",
);
var card3 = new Card(
  "GB Kicker?",
  "Mason Crosby",
);

var myCards = [card1, card2, card3];
var cardIndex = 0;

front.innerHTML = card1.term;
back.innerHTML = card1.definition;

function cardAdd(formFront, formBack) {
  function clearForm() {
    document.getElementById("newTerm").value = "";
    document.getElementById("newDef").value = "";
    document.getElementById("cardForm").reset();
  }

  function updatePlaceholder() {
    document.getElementById("newTerm").placeholder =
      "...another term?";
    document.getElementById("newDef").placeholder =
      "...and another definition?";
  }

  formFront = document.getElementById("newTerm");
  formBack = document.getElementById("newDef");
  if (
    formFront.value !== formBack.value &&
    formFront.value != "" &&
    formBack.value != ""
  ) {
    var newCard = new Card();
    newCard.term = formFront.value;
    newCard.definition = formBack.value;
    myCards.push(newCard);
    cardIndex = myCards.length - 1;
    clearForm();
    updatePlaceholder();
    front.innerHTML = myCards[cardIndex].term;
    back.innerHTML = myCards[cardIndex].definition;
  } else if (formFront.value == formBack.value) {
    alert('same/same');
  } else if (
    (formFront.value == null || formFront.value == "", formBack.value == null ||
      formBack.value == "", formFront.value == null ||
      formBack.value == null ||
      formFront.value == "" ||
      formBack.value == "")
  ) {
    alert("Fill out both");
  }
  document.getElementById("newTerm").focus();
}

function nextCard() {
  cardIndex = (cardIndex + 1) % myCards.length;
  front.innerHTML = myCards[cardIndex].term;
  back.innerHTML = myCards[cardIndex].definition;
}
function prevCard() {
  if (cardIndex > 0)
    cardIndex = (cardIndex - 1);
  else if (cardIndex == 0) cardIndex = myCards.length-1;
  front.innerHTML = myCards[cardIndex].term;
  back.innerHTML = myCards[cardIndex].definition;

}
// failed delete
//   function delete1(myCards, cardIndex) {
// var confirmation = confirm("delete?")
// if (confirmation) {
//   const x = cardIndex
//   myCards.splice(x, 1);
//     }
//   }

  function delete1() {
var confirmation = confirm("delete?")
if (confirmation) {
myCards.pop();
    }
  }

    function emptyDeck() {
      var confirmation = confirm("delete this entire deck?");
      if (confirmation) {
      myCards.splice(0, myCards.length);
      cardIndex = 0;
      front.innerHTML = " ";
      back.innerHTML = " ";
      }
      document.getElementById("newTerm").focus();
    }
