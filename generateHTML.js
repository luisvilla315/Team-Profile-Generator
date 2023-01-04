/* // generate cards by implementing variables into bootstrap card components // */

var card = document.createElement('div');
card.className = 'card';
var cardBody = document.createElement('div');
cardBody.className = 'card-body';
var cardTitle = document.createElement('h5');
cardTitle.className = 'card-title';
cardTitle.innerHTML = 'Card Title';
var cardText = document.createElement('p');
cardText.className = 'card-text';
cardText.innerHTML = 'Card Text';
cardBody.appendChild(cardTitle);
cardBody.appendChild(cardText);
card.appendChild(cardBody);
document.body.appendChild(card);




/* // generate manager card // */
var card = document.createElement('div');
card.className = 'card';
var cardBody = document.createElement('div');
cardBody.className = 'card-body';
var cardTitle = document.createElement('h5');
cardTitle.className = 'card-title';
cardTitle.innerHTML = 'Manager';
var cardText = document.createElement('p');
cardText.className = 'card-text';
cardText.innerHTML = 'Name: ' + '<br>' + 'ID: ' + '<br>' + 'Email: ' + '<br>' + 'Office Number: ';
cardBody.appendChild(cardTitle);
cardBody.appendChild(cardText);
card.appendChild(cardBody);
document.body.appendChild(card);
/* const generateManager = function (manager) { */



const generateManager = function (manager) {
  var card = document.createElement('div');
  card.className = 'card';
  var cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  var cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.innerHTML = 'Manager';
  var cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.innerHTML = 'Name: ' + manager.name + '<br>' + 'ID: ' + manager.id + '<br>' + 'Email: ' + manager.email + '<br>' + 'Office Number: ' + manager.officeNumber;
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);
  document.body.appendChild(card);
}


return `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <p class="card-text">Name: ${manager.name}<br>ID: ${manager.id}<br>Email: ${manager.email}<br>Office Number: ${manager.officeNumber}</p>
    </div>
  </div>
<div class="col-4 mt-4">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <p class="card-text">Name: ${manager.name}<br>ID: ${manager.id}<br>Email: ${manager.email}<br>Office Number: ${manager.officeNumber}</p>
    </div>
  </div>
</div>
 <div class="card h-100"> */
<div class="card h-100">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <p class="card-text">Name: ${manager.name}<br>ID: ${manager.id}<br>Email: ${manager.email}<br>Office Number: ${manager.officeNumber}</p>
  </div>
</div>
 <div class="card-header"> 
<div class="card-header">
  <h5 class="card-title">Manager</h5>
</div>
<h3>${manager.name}</h3> 
<h3>${manager.name}</h3>
<h4>Manager</h4><i class="material-icons">content_paste</i> 
<h4>Manager</h4><i class="material-icons">content_paste</i>
 </div> 
</div>
 <div class="card-body"> /</div>
 </body>
 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
 </html>
`;
}
``

// export the function //

module.exports = generateHTML; 