console.log('app.js loaded!');

// initialize the application
var app = angular.module("hangmanApp", []);
app.controller('HangmanController', HangmanController);

function HangmanController() {
  var vm = this;

  vm.word = function(){
    var wordArr = ['elephnant', 'giraffe', 'monkey', 'hippopotamus', 'lion', 'moose'];
    return wordArr[Math.floor(Math.random() * wordArr.length)];
  };


  vm.hangman = new HangmanGame(vm.word());

  vm.guessLetter = function(input) {
    vm.hangman.guess(input.toLowerCase());
    vm.hangman.input = "";
  }
}
