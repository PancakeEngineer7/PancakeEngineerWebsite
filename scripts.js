// Small accessible expand/collapse toggle for project details
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.project-card').forEach(function(card, index){
    // create toggle button
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'proj-toggle';
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-controls', 'proj-detail-' + index);
    btn.textContent = 'Hide details';

    // find detail element
    var detail = card.querySelector('.project-detail');
    if(!detail) return;
    detail.id = 'proj-detail-' + index;

    // attach button to project-info area
    var info = card.querySelector('.project-info');
    if(info){
      info.appendChild(btn);
    } else {
      card.insertBefore(btn, detail);
    }

    // toggle initial state (we keep visible by default)
    btn.addEventListener('click', function(){
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.textContent = expanded ? 'Read more' : 'Hide details';
  detail.classList.toggle('open', !expanded);
    });
  });
});
