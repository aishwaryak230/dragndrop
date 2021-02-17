var count = 0;

function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
function drop(ev) {
    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var Copy = document.getElementById(data).cloneNode(true);
    ev.target.appendChild(Copy);
    ev.stopPropagation();
    count++;
    localStorage.setItem('numberOfTimesItemDropped', JSON.stringify(count));

    var info = localStorage.getItem('numberOfTimesItemDropped');

    console.log('Number Of Times Item Dropped:', JSON.parse(info));
  }

  