'use strict';

var websiteView = {};

// drop down menu
websiteView.dropdownMenu = function() {
  $('.fa').on('click', function() {
    $('div.navLinks').slideToggle();
  });
};

websiteView.carousel = function() {

  var index = 0;
  var imgList = [$('#1'), $('#2'), $('#3'), $('#4')];


  $('.button-right').on('click', function() {
    index++;
    $('.slide').hide();
    if(index === 4) {
      index = 0;
    }
    imgList[index].show();
  });

  $('.button-left').on('click', function() {
    index--;
    $('.slide').hide();
    if(index === -1) {
      index = 3;
    }
    imgList[index].show();
  });

  $('.slide').hide();
  imgList[index].show();
};

websiteView.navigationTabs = function() {
  $('nav').on('click', 'a', function(e) {
    e.preventDefault();
    var $id = $(this).attr('id');

    let ark = null;

    if($id === 'about') {
      ark = {
        title: "About",
        body: "This is some info about me!"
      };;
    }

    if($id === 'projects') {
      ark = {
        title: "Projects",
        body: "Here are some of my projects!"
      };
    }

    if($id === 'skills') {
      ark = {
        title: "Skills",
        body: "Here are some of my skills!"
      };
    }

    let template = Handlebars.compile($('#article-template').text());
    const temp = template(ark);
    $('#articles *').hide();
    $('#articles').append(temp);
  });


  $('nav a:last').click();
};

$(document).ready(function() {
  websiteView.navigationTabs();
  websiteView.dropdownMenu();
  websiteView.carousel();
});
