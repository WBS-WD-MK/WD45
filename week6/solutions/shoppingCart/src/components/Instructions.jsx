import React from 'react';

const Instructions = () => {
  return (
    <div className="block">
      <h1>
        Shopping cart{' '}
        <span role="img" aria-label="cart">
          🛒
        </span>
      </h1>
      <p>
        We are going to use the <code>useState</code> hook to implement a shoping cart feature.
      </p>

      <details>
        <summary>
          Instructions
          <span role="img" aria-label="eyes">
            👀
          </span>
        </summary>
        <ul>
          <li>
            We'll be working inside the <code>Eshop</code> component. Take some time to get familiar
            with the component tree structure.
          </li>
          <li>
            The <code>Eshop</code> component renders three children:
            <ol>
              <li>
                <code>Header</code> | home to a shopping cart badge
              </li>
              <li>
                <code>ProductList</code> | the list of available products
              </li>
              <li>
                <code>ShoppingCart</code> | our current selection of products
              </li>
            </ol>
          </li>
          <li>
            Your job is to replace the <code>products</code> and <code>cart</code> variables with
            pieces of state so React can...well, react to changes in them!
          </li>
          <li>
            Implement the logic for the <code>decrease</code> and <code>increase</code> functions in{' '}
            <code>utils.js</code> so they return the array of products with the current shopping
            cart content after removing or adding an item to your cart.{' '}
            <span role="img" aria-label="warning">
              ⚠️
            </span>{' '}
            Consider the quantity property of each product in your cart, it should never go below 0!
          </li>
          <li>
            Show the total number of items in your cart on your badge! (modify the{' '}
            <code>getTotalItems</code> function in <code>utils.js</code>)
          </li>
          <li>
            Calculate the total price (modify the <code>getTotalPrice</code> function in{' '}
            <code>utils.js</code>)
          </li>
        </ul>
      </details>
    </div>
  );
};

export default Instructions;
