![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Pizza Builder

## Introduction

Do you remember the [Pizza Builder](https://github.com/ironhack-labs/lab-jquery-pizza-builder/blob/master/README.md) from Module 1? We are going to do it again but with only React.

## Instructions

You can update what ever you want in the code. You are not forced to create other components to make it works.

### Iteration 1: Add and remove toppings

There are five buttons on the left of the pizza builder. Three of those have to add or remove toppings from the pizza. Write the JavaScript necessary for those three buttons to **add and remove pepperonni, mushrooms and green peppers** from the pizza. **Don't worry about updating the price**. We will do it later.

Each individual topping has its own HTML element:

```html
<section class="green-pepper one"></section>
<section class="green-pepper two"></section>
```

```html
<section class="mushroom one">
  <div class="cap">1</div>
  <div class="stem"></div>
</section>
```

```html
<section class="pep one">1</section>
<section class="pep two">2</section>
```

**Create the code to display those elements when the buttons are clicked.**

### Iteration 2: Sauce and crust options

Wait a minute... this pizza comes with white sauce and gluten-free crust by default! Since that is a ridiculous default setting, we need to fix this as fast as possible. The last two buttons on the left are supposed to handle special options for the sauce and crust of your pizza. Make it so **regular sauce** and **crust** are selected **by default**. Also write the JavaScript code that will let users **select white sauce** and **gluten free crust** if they want to choose them. Again, **don't worry about updating the price**.

Both the crust and the sauce have their own HTML elements:

```html
<section class="crust crust-gluten-free">
  <section class="cheese"></section>
  <section class="sauce sauce-white"></section>
</section>
```

**As you can see, the sections have two classes `.crust-gluten-free` and `sauce-white` that may not be the best choice.**

### Iteration 3: Change the buttons' state

Currently our pizza builder's buttons look the same, no matter if the option is activateed or not. If you notice, all the buttons have an `active` class.

```html
<button class="btn btn-pepperonni active">Pepperonni</button>
```

**Write some JavaScript that will remove and add the buttons' `active` class appropriately**. This is, if the ingredient is turned on, its button should have `active`. If the ingredient is off, remove the `active` class from the button.

**Also make sure that the buttons' initial state matches that of their ingredient**. If when you first load the pizza builder there is no pepperonni, the pepperonni button should not be active.

### Iteration 4: Ingredients and prices

On the right side of the pizza builder there is a price section. It should show the ingredients we have in the pizza, not all of them. By default, it should show the base price $10, and the price for the pepperonni, mushrooms, and green pepper.

```html
<ul>
  <li>$1 pepperonni</li>
  <li>$1 mushrooms</li>
  <li>$1 green peppers</li>
  <li>$3 white sauce</li>
  <li>$5 gluten-free crust</li>
</ul>
```

**Use JavaScript to hide and show the items by default. For now, forget the total price of the pizza. When an ingredient is added or removed, update the list to show/hide the ingredient in the list.**

By default, the selected ingredients should be **pepperonni**, **mushrooms**, and **green peppers**. Once we remove the pepperonni and we add the white sauce, the list should show:

```
$10 cheese pizza
  + $1 mushrooms
  + $1 green peppers
  + $3 white sauce
```

**Don't worry about the total price right now.**

**Hint:** How could we select the current ingredients? Remember we have a jQuery Selector that allows us to check if an HTML Node contains a certain string :)

### Iteration 5: Update price

To finish this exercise, we should show the correct total price of our pizza. It should show the current price of your pizza, but it's always stuck on **$21**, which is the price if all the ingredients were on:

```html
<aside class="panel price">
```

```html
<strong>$21</strong>
```

**Write the JavaScript that update the current price of the pizza as a user clicks the ingredient buttons to turn ingredients on and off. How can you keep track of the current price? When an ingredient changes, how will you know how much to add or substract?**