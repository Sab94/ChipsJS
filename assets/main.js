$(document).ready(function(){
  let page = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  if(page === 'index.html') {
    $('.nav-item:nth-child(1)').addClass('active');
    let indexChipDemo = $(".index-demo").chips({
      separetor : [' ', ',', '+', '-'],
      activeOnBlur: true,
      md: true,
      target: '#target',
      wrapperStyle: 'width: 80%;margin: 10px;',
      containerStyle: 'display: flex;flex-wrap: wrap;justify-content: center;'
    });
    indexChipDemo.load(['tags', 'contacts', 'emails']);   
  }
  else if(page === 'examples.html') {
    $('.nav-item:nth-child(3)').addClass('active');
    let demoOne = $(".demo1").chips();
    let demoTwo = $(".demo2").chips({
      separetor : [' ', ',', '+', '-'],
      md: true,
      wrapperStyle: 'margin: 10px;',
    });
    demoTwo.load(['tags', 'contacts', 'emails']); 
    let demoThree = $(".demo3").chips({
      separetor : [' ', ',', '+', '-'],
      activeOnBlur: true,
      wrapperStyle: 'margin: 10px;',
      type: 'email'
    });

    let demoFour = $(".demo4").chips({
      separetor : [' ', ',', '+', '-'],
      activeOnBlur: true,
      md: true,
      target: '#target',
      wrapperStyle: 'margin: 10px;',
      containerStyle: 'display: flex;flex-wrap: wrap;justify-content: center;'
    });
  }
  else if(page === 'doc.html') {
    $('.nav-item:nth-child(2)').addClass('active');
  }
});