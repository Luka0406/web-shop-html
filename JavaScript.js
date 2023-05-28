function Malebg(){
    document.getElementById("forma").className = "Bgchange p-5 rounded";
    document.getElementById("forma").style.backgroundColor = "#66d2f9";
    document.getElementById("male").className = "male buttonselected "
    document.getElementById("female").className = "female"
}
function Femalebg(){
    document.getElementById("forma").className = "Bgchange p-5 rounded";
    document.getElementById("forma").style.backgroundColor = "pink";
    document.getElementById("male").className = "male"
    document.getElementById("female").className = "female buttonselected"
}

//SHOP STUFFS DOWN

var j=0;
var TotalPrice = 0;

let objects = [
  {
    name: 'Addidas Predator gloves',
    image: 'Slike/PredatorGloves.jpg',
    price: 124,
    rating: 5,
  },
  {
    name: 'Glove glue spray',
    image: 'Slike/Gloveglue.jfif',
    price: 19,
    rating: 3,
  },
  {
    name: 'Addidas Predator gloves',
    image: 'Slike/AddidasPredatorGloves.jpg',
    price: 116,
    rating: 5,
  },
  {
    name: 'Goalkeepers essentialns',
    image: 'Slike/Essentinals.jpg',
    price: 23,
    rating: 4,
  },
  {
    name: 'Sportout kids gloves',
    image: 'Slike/KidsGloves.jpg',
    rating: 1,
    price: 15
  },
  {
    name: 'Glove glue pack',
    image: 'Slike/GlovegluePack.jpg',
    price: 48,
    rating: 5
  },
  {
    name: 'Zhengdong gloves',
    image: 'Slike/Zhengdong.jpg',
    price: 43,
    rating: 2
  },
  {
    name: 'Grip mode gloves',
    image: 'Slike/Gripmodegloves.jpg',
    price: 107,
    rating: 5
  }

];

function createCard(object, index) {
  let card = `
    <div class="col-lg-3">
      <div class="card text-black h-100">
        <div class="card-body rounded">
          <div class="card-header text-center ShopItemHeader"><h3>${object.name}</h3></div>
          <div class="card-content ShopItemContent"><img src="${object.image}" class="card-img-top d-block m-auto"></div>
          <div class="card-footer d-flex align-items-center justify-content-between ShopItemFooter">
            <div>
              <p>Rating:</p>
              <p>
                <div class="progress">
                  <div class="progress-bar" style="width:${object.rating * 20}%">${object.rating}</div>
                </div>
              </p>
              <p class="mark">Price: ${object.price}$</p>
            </div>
            <div>
              <div>               
                <button class="btn btn-outline-success" type="button" onclick="onaddcart(${index})" id="clickablebtn${index}" data-bs-toggle="modal" data-bs-target="#myModal">Add to cart!</button>
              </div>
              <div>
                <label for="Amount${index}">Amount:</label>
                <input type="number" class="form-control Amount" name="Amount" id="Amount${index}"></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h5>Succesfully added to cart!</h4>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  `;
  return card;
}

function creatItem(object, amountOfItem, index){
    let card = `
    <div class="row m-3 ItemContainerInCart" id="ItemContainerInCart${index}">
      <div class="card text-black">
        <div class="card-body rounded">
          <div class="card-header"><h3>${object.name}</h3></div>
          <div class="card-content d-flex align-items-center justify-content-between InCartItem">
            <img src="${object.image}" class="d-block">
            <div style="border-right: 1px solid;padding: 10px">
                <p>Rating:</p>
                <p>
                  <div class="progress">
                    <div class="progress-bar" style="width:${object.rating * 20}%">${object.rating}</div>
                  </div>
                </p>
                <p>Price: <span class="mark">${object.price}$</span></p>
            </div>
            <div class="text-center">
              <p>
                Amount: <mark>${amountOfItem}</mark>
              </p>
              <p>Total price: <span class="mark">${amountOfItem * object.price}$</span></p>
            </div>
            <button type="button" onclick="onDeleteItem(${index}, ${amountOfItem})" class="btn deletebtn">
              <img src="Slike/remove.png" alt="delete">
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  return card;
}

function addObject(object, amountOfItem) {

  let cardContainer = document.getElementById("ItemsInCart");
  let card = creatItem(objects[object], amountOfItem, object);
  cardContainer.innerHTML += card;

}

function loadShopItems() {
  let cardContainer = document.getElementById("card-container");

  for (let object = 0; object < objects.length; object++) {
    let card = createCard(objects[object],object);
    cardContainer.innerHTML += card;
  }
}

document.addEventListener("DOMContentLoaded", loadShopItems);


function onaddcart(number){
  if(document.getElementById("Amount" + number).value > 0){
    document.getElementById("numberOfCartItems").innerHTML = ++j;
    addObject(number, document.getElementById("Amount" + number).value);
    document.getElementById("clickablebtn" + number).className = "btn btn-outline-success disabled";
    TotalPrice += document.getElementById("Amount" + number).value * objects[number].price;
    document.getElementById("TotalPriceOfItems").innerHTML = TotalPrice + "$";
    document.getElementById("Amount" + number).value = "";
  }
    
}

function onDeleteItem(index, amountOfItem){
  document.getElementById("numberOfCartItems").innerHTML = --j;
  document.getElementById("clickablebtn" + index).className = "btn btn-outline-success";
  document.getElementById("ItemContainerInCart" + index).remove();
  TotalPrice -= amountOfItem * objects[index].price;
  document.getElementById("TotalPriceOfItems").innerHTML = TotalPrice + "$";
}
