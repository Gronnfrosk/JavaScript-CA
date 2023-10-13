# An eCom store build with Javascript framework React
![image](https://github.com/Gronnfrosk/JavaScript-CA/assets/91615712/5d587513-19b0-4a96-8865-9199f5860c9c)

- Goal of this project: To apply knowledge of React to build an eCom store.

## Description

This project is to learn about React and therefore simple design and the required features specifide in the CA. 
You will be using React Router to switch between pages.
Your design should be responsive. You are welcome to use a CSS Framework, however, you’re encouraged to design from scratch and use styled-components or CSS Modules.

You are tasked with build out the following pages for an eCom store:

1.   **Home page:** This page contains a list of all the products and clicking on a product card takes a user to an individual product page. The page also has a auto-complete search bar that filters products when typing in a product name.

2.   **About page**: Just an image and text card.

3.   **Contact:** The contact page which contains a contact form with the following fields and form validation:
   - Full name (Minimum number of characters is 3, Maximum number of characters is 30, required)
   - Subject (Minimum number of characters is 3, Maximum number of characters is 30, required)
   - Email (Minimum number of characters is 3, Maximum number of characters is 30, Must be a valid email address, required)
   - Body (Minimum number of characters is 3, required)

4.   **Individual product page:** Here data for a single product is displayed. The products data: Title, image, description, price, discount and reviews. There is also an Add to cart button which, upon clicking, adds the product to the cart.

5.   **Checkout/Cart page:** After cliking th cart icon to the left that also displays number of items in cart you will get to the checkout page. List of all of the products in the cart is shown here and a Checkout button.

6.   **Checkout success page:** A message to the user notifying them that their order was successful and a link that lets a user go back to the store. The cart gets cleared if the user gets to the Checkout success page.

## Built With

- [React](https://react.dev/)
- [Prettier](https://prettier.io/)
- [Bootstrap v.5.3.2](https://getbootstrap.com)
- [SASS/SCSS v.1.68.0](https://sass-lang.com/)
- [react-hook-form](https://www.npmjs.com/package/react-hook-form)
- [yup](https://www.npmjs.com/package/yup)

## Getting Started

1. Clone the repo through github website or CLI command:
```
[git clone https://github.com/Gronnfrosk/Ja](https://github.com/Gronnfrosk/JavaScript-CA.git)
```
2. Run ```npm install``` to install all dependencies.
3. Write ```npm run start``` to start runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- To format code with Prettier:
type ```npm run format```

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


