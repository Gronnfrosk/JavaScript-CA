import GlobalLayout from "./GlobalLayout.jsx";
import AboutLayout from "./AboutPage.jsx";
import ContactLayout from "./ContactPage.jsx";
import ProductLayout from "./ProductPage.jsx";
import CheckoutLayout from "./CheckoutPage.jsx";
import CheckoutSuccessLayout from "./CheckoutSuccessPage.jsx";

function LayoutIndex(){
    return { ContactLayout, AboutLayout, ProductLayout, CheckoutLayout, CheckoutSuccessLayout, GlobalLayout }
}

export default LayoutIndex;