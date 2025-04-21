import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css'

function App() { //initializing values to be used
  const menus = [
    { name: "Appliances", url: "#", id: 1},
    { name: "Groceries", url: "#", id: 2},
    { name: "Gadgets", url: "#", id: 3},
    { name: "Clothing", url: "#", id: 4},
  ];

  const products = [
    { 
      id: 1, 
      name: 'Laptop', 
      price: 40000, 
      image: 'https://benstore.com.ph/34217-medium_default/microsoft-surface-laptop-138-touch-snapdragon-x-elite-integrated-qualcomm-adreno-32gb-lpddr5x-1tb-ssd-.jpg'
    },
    { 
      id: 2, 
      name: 'Headphones', 
      price: 1000, 
      image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_Primary_image?$categorypdpnav$&fmt=png-alpha'
    },
    { 
      id: 3, 
      name: 'USB Stick', 
      price: 999, 
      image: 'https://png.pngtree.com/png-vector/20240612/ourmid/pngtree-durable-usb-flash-drive-isloated-on-transparent-background-png-image_12607940.png'
    },
    { 
      id: 4, 
      name: 'Phone', 
      price: 5000, 
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/5/JA/EQ/TA/138319557/redmi-note-7-4gb-64gb-mobile-phone-500x500.jpg'
    },
    { 
      id: 5, 
      name: 'Keyboard', 
      price: 650, 
      image: 'https://shop.tti.com.ph/pub/media/catalog/product/cache/07dc43095bd992476134f3022ceb9abf/2/5/2507134320422416_1.jpg'
    },
    { 
      id: 6, 
      name: 'Wireless Mouse', 
      price: 50, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntpMShpJBzsepbNRhUXz6YDtT5LOt8L30MB4VX8iGO8zBwEaordPwpd48NYsREFW-0ls&usqp=CAU' 
    },
    {
      id: 7,
      name: 'Printer',
      price: 199,
      image: 'https://ph.canon/media/image/2019/07/04/a4c4e43b25f9440495515be1d7339327_TS33XX_AS_FR_cl2_blk_en-362.png'
    },
    {
      id: 8,
      name: 'iPhone',
      price: 5000,
      image: 'https://www.designinfo.in/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-128GB-Black-Titanium-8-485x485-optimized.webp'
    },
    {
      id: 9,
      name: 'iPad',
      price: 8000,
      image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/139639376_01/w=800,h=800,fit=pad'
    },
    {
      id: 10,
      name: 'Bluetooth Speaker',
      price: 170,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-M1E9cyo51WBnKYk2yuYxh9dILuZEdxOUA&s'
    },
    {
      id: 11,
      name: 'Camera',
      price: 600,
      image: 'https://ph.canon/media/image/2023/05/19/b89bed4e21e540f985dedebe80166def_EOS+R100+RF-S18-45mm+Front+Slant.png'
    },
    {
      id: 12,
      name: 'Router',
      price: 900,
      image: 'https://www.officewarehouse.com.ph/__resources/_web_data_/products/products/image_gallery/7449_4361.jpg'
    },
    {
      id: 13,
      name: 'Wireless Earbuds',
      price: 130,
      image: 'https://jblstore.com.ph/cdn/shop/files/JBLTune130NC_Black_1_600x.png?v=1691369979'
    },
    {
      id: 14,
      name: 'Webcam',
      price: 90,
      image: 'https://powermaccenter.com/cdn/shop/files/LOGM099BLK001.jpg?v=1711354096'
    },
    {
      id: 15,
      name: 'Monitor',
      price: 200,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MonitorLCDlcd.svg/1200px-MonitorLCDlcd.svg.png'
    },
    {
      id: 16,
      name: 'Game Console',
      price: 980,
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/TW/TD/SK/142185310/black-playstation-4-sony-ps4-500x500.jpg'
    },
  ];

  const [cartItems, setCartItems] = useState([]); //uses useState hook

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]); //uses spread syntax
    console.log('Added to cart: ', product); //for checking if the product is successfully added to the cart
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1); //remove only one instance
        return updatedItems;
      }
      return prevItems;
    });
  };
  
    
  return (
    <>
      <Header menus={menus}/>
      <div className="container">
        <Product products={products} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
      <Footer/>
    </>
  )
}

export default App
