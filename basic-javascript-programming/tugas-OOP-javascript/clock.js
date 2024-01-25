/*
function Clock({ template }) {
  
  var timer;

  function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}


var clock = new Clock({template: 'h:m:s'});
clock.start(); 
setTimeout(function(){
  clock.stop()
},5000)
*/
var timer

class Clock {
    constructor({template}){
      this._template = template
    }
    start(){
      
      const render = ()=>{
        var date = new Date()
        var hours = date.getHours()
        if (hours < 10) hours = '0' + hours;
        var mins = date.getMinutes()
        if (mins < 10) mins = '0' + mins;
        var secs = date.getSeconds()
        if (secs < 10) secs = '0' + secs;

        var output = this._template.replace('h', hours).replace('m', mins).replace('s', secs);
          
        console.log(output);

      };
      
      timer = setInterval(render, 1000);
      
    }
    stop(){
      clearInterval(timer)
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();

setTimeout(function(){
  clock.stop()
},5000)
