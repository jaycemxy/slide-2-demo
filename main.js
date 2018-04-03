let n = 1;
init();
setInterval(() => {
  makeLeave(getImage(n)).one('transitionend', (e) => { makeEnter($(e.currentTarger)); });
  makeCurrent(getImage(n + 1));
  makeEnter(getImage(n - 1)); // 走完之后，在给前一个补一个 enter
  n += 1;
}, 2000);


function getImage(n) {
  return $(`.images > img:nth-child(${get_current(n)})`);
}

function get_current(n) {
  if (n > 3) {
    n = n % 3;
    if (n === 0) {
      n = 3;
    }
  }
  return n;
}

function init() {
  $(`.images > img:nth-child(${get_current(n)})`)
    .addClass('current')
    .siblings()
    .addClass('enter');
    
}

function makeCurrent($node) {
  return $node.removeClass('enter leave').addClass('current');
}

function makeLeave($node) {
  return $node.removeClass('enter current').addClass('leave');
}

function makeEnter($node) {
  return $node.removeClass('leave current').addClass('enter');
}