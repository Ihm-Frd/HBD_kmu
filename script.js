var modal = document.getElementById('myModal');
   
// Get the button that opens the modal
var openModalBtn = document.getElementById('openModalBtn');

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
openModalBtn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal  
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}



document.addEventListener("click", (event) => {
  bursty(event.pageX, event.pageY);
});

setInterval(() => randomizedConfetti(), 500);

function bursty(x, y) {
  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0: 200 },
    count: 20,
    degree: 360,
    children: {
      fill: { white: "#34e1ff" },
      duration: 2000,
    },
  }).tune({
    x: x,
    y: y,
  });

  burst.replay();
}

function randomizedConfetti() {
  let randomX = Math.floor(Math.random() * (document.body.clientWidth - 100) + 0);

  let randomY = Math.floor(Math.random() * (window.innerHeight - 200) + 0);

  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0: 200 },
    count: 20,
    degree: 360,
    children: {
      fill: { white: "#34e1ff" },
      duration: 2000,
    },
  }).tune({
    x: randomX,
    y: randomY,
  });

  burst.replay();
}

Splitting();



