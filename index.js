'use strict'

// function generateDiv(itemTitle) {
//   return `<div class="item">
//   <div class="buttons">
//       <span class="delete-btn"></span>
//       <span class="like-btn"></span>
//       <button class="delete-btn" type="button" name="button">
//           <img src="delete-icon.svg" alt="Delete icon to delete item"  />
//       </button>
//       <button class="like-btn" type="button" name="button">
//           <img src="heart-icon.svg" alt="Heart icon to favorite an item" />
//       </button>
//   </div>

//   <div class="image">
//       <img class="item-img" src="https://sweettootsco.files.wordpress.com/2018/08/img_6860.jpg" alt="Cupcake Bath Bomb" />
//   </div>

//   <div class="description">
//       <span id="item-title">${itemTitle}</span>
//       <span>All Natural Ingredients</span>
//       <span>Unicorn Sparkles Scent</span>
//   </div>

//   <div class="quantity">
//       <button class="plus-btn" type="button" name="button">
//           <img src="plusIcon.svg" alt="Plus icon to increase item quantity by 1" />
//       </button>
//       <input type="text" name="name" value="1">
//       <button class="minus-btn" type="button" name="button">
//           <img src="minusIcon.svg" alt="Minus icon to decrease item quantity by 1" />
//       </button>
//   </div>

//   <div class="total-price">$7.00</div>
// </div>
// </div>`
// }

function main() {
  //this deletes the item
  $('.item').on('click', '.like-btn', function(event) {
    console.log('Please work!')
    // $(this)
    //   .closest('li')
    //   .remove()
  });

//   //this strikesthrough closest <li>
//   $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
//     //console.log(event)
//     $(this)
//       .closest('li')
//       .find('.shopping-item')
//       //toggleClass on .shopping-item
//       .toggleClass('shopping-item__checked')
//   })


//   $('#js-shopping-list-form').submit(event => {
//     // console.log(event)

//     event.preventDefault()

//     //listItem replaces the word you just typed in the input textbox ".js-shopping-list-entry" as an empty string once the submit button is triggered

//     let listItem = $('.js-shopping-list-entry').val()

//     console.log(listItem)

//     // const results = []

//     //figure out how to get the li added

//     // on submit you want to .append the resulting li
    // $('.shopping-list').append(generateDiv(listItem))
//   })
}

$(main)
