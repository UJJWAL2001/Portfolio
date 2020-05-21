// NAVBAR

var section = "#HOME";
$('.fa-uniregistry , .b1 , .dir-text').css({
  color : "#08fdd8"
});

$('.l1 , .fa-uniregistry ').click(function(){

  if(section !== '#HOME')
  {
    exitsection(section);
    entersection('#HOME');
    section = "#HOME";
  }

  $('.fa-uniregistry , .dir-text , .b1').css({color:'#08fdd8'});
  $('.link').addClass('home-head');  $('.link').removeClass('about-head skill-head project-head contact-head');
  
  $('.b2 , .b3 , .b4, .b5').css({ color: '#444'});
  $('.b2 , .b3 , .b4, .b5').addClass('home-head');

});

$('.l2').click(function(){

  if( section !== '#ABOUT')
  {
    exitsection(section);
    entersection('#ABOUT');
    section = "#ABOUT";
  }
  
  $('.fa-uniregistry , .dir-text , .b2').css({color:'#8f08fd'});
  $('.link').addClass('about-head');  $('.link').removeClass('home-head skill-head project-head contact-head');

  $('.b1 , .b3 , .b4, .b5').css({ color : '#444'});
  $('.b1 , .b3 , .b4, .b5').addClass('about-head');

});

$('.l3').click(function(){

  if(section !== '#SKILL')
  {
    exitsection(section);
    entersection('#SKILL');
    section = "#SKILL";
  }

  $('.fa-uniregistry , .dir-text , .b3').css({color:'#08fd14'});
  $('.link').addClass('skill-head');  $('.link').removeClass('about-head home-head project-head contact-head');

  $('.b1 , .b2 , .b4, .b5').css({ color : '#444'});
  $('.b1 , .b2 , .b4, .b5').addClass('skill-head');

});

$('.l4').click(function(){

  if( section !== "#project")
  {
    exitsection(section);
    $('#project').slideDown(2000).css({
    display: 'block'
    });
    section = "#project";
  }
  

  $('.fa-uniregistry , .dir-text , .b4').css({color:'#fd8b08'});
  $('.link').addClass('project-head');  $('.link').removeClass('about-head skill-head home-head contact-head');

  $('.b2 , .b3 , .b1, .b5').css({color : '#444'});
  $('.b2 , .b3 , .b1, .b5').addClass('project-head');

});

$('.l5').click(function(){

  if( section !== "#contact")
  {
    exitsection(section);
    entersection('#contact');
    section = "#contact";
  }
  

  $('.fa-uniregistry , .dir-text , .b5').css({color:'#0c08fd'});
  $('.link').addClass('contact-head');  $('.link').removeClass('about-head skill-head home-head project-head');

  $('.b2 , .b3 , .b1, .b4').css({color : '#444'});
  $('.b2 , .b3 , .b1, .b4').addClass('contact-head');

});


function exitsection(c){
  $(c).hide(1000);
  
};

function  entersection(c){
  $(c).slideDown(2000);
  $(c).css({
    display : 'flex'
  })
};


//HOME TEXT 

anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 800,
    stroke : '#08fdd8',
    delay: function(el, i) { return i * 50 },
    direction: 'forword',
    
  });

  anime({
    targets: '.square',
    scale: [
      {value: .4, easing: 'easeOutSine', duration: 1200},
      {value: 1, easing: 'easeInOutQuad', duration: 500}
    ],
    delay: 100,
    // delay: anime.stagger(100, {grid: [10, 10], from: 'center'}),
    loop: true,
});

//headings

var sound = new Howl({
  src : ['js/s.mp3'] ,
  onend: function() {
    console.log('Finished!');
  },
  volume: 1
});

$('.h2').mouseenter(function(){
  $(this).toggleClass('animate__animated animate__rubberBand');
  sound.play();
});
 
//About me

function randomValues() {
  anime({
    targets: '.circle',
    translateY: function() {
      return anime.random(0, 270);
    },
    easing: 'easeInOutQuad',
    duration: 750,
    complete: randomValues
  });
}

randomValues();

//skills

var skillAnimation = anime({
  targets: '.skill',
  translateX: anime.stagger(10, {grid: [3, 4], from: 'center', axis: 'x'}),
  translateY: anime.stagger(10, {grid: [3, 4], from: 'center', axis: 'y'}),
  rotateZ: anime.stagger([0, 200], {grid: [3, 4], from: 'center', axis: 'x'}),
  delay: anime.stagger(800, {grid: [3, 4], from: 'center'}),
  easing: 'easeInOutQuad',
  direction:"alternate",
  loop: true
});

// skillAnimation.play;

$('#skill-anime').click(function(){
  skillAnimation.pause;
});

$('#skill-anime').mouseleave(function(){
  skillAnimation.play;
});

//Contact

