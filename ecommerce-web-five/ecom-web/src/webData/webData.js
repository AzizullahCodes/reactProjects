import laptopOne from './images/laptopOne.jpg';
import laptopTwo from './images/laptopTwo.jpg';
import laptopThree from './images/laptopThree.jpg';
import laptopFour from './images/laptopFour.jpg';
import laptopFive from './images/laptopFive.jpg';
import laptopSix from './images/laptopSix.jpg';
import laptopSeven from './images/laptopSeven.jpg';
import laptopEight from './images/laptopEight.jpg';

import watchOne from './images/watchOne.jpg';
import watchTwo from './images/watchTwo.jpg';
import watchThree from './images/watchThree.jpg';
import watchFour from './images/watchFour.jpg';
import watchFive from './images/watchFive.jpg';
import watchSix from './images/watchSix.jpg';
import watchSeven from './images/watchSeven.jpg';
import watchEight from './images/watchEight.jpg';

import cameraOne from './images/cameraOne.jpg';
import cameraTwo from './images/cameraTwo.jpg';
import cameraThree from './images/cameraThree.jpg';
import cameraFour from './images/cameraFour.jpg';
import cameraFive from './images/cameraFive.jpg';
import cameraSix from './images/cameraSix.jpg';
import cameraSeven from './images/cameraSeven.jpg';
import cameraEight from './images/cameraEight.jpg';

import keyboardOne from './images/keyboardOne.jpg';
import keyboardTwo from './images/keyboardTwo.jpg';
import keyboardThree from './images/keyboardThree.jpg';
import keyboardFour from './images/keyboardFour.jpg';
import keyboardFive from './images/keyboardFive.jpg';
import keyboardSix from './images/keyboardSix.jpg';
import keyboardSeven from './images/keyboardSeven.jpg';
import keyboardEight from './images/keyboardEight.jpg';

import mobileOne from './images/mobileOne.jpg';
import mobileTwo from './images/mobileTwo.jpg';
import mobileThree from './images/mobileThree.jpg';
import mobileFour from './images/mobileFour.jpg';
import mobileFive from './images/mobileFive.jpg';
import mobileSix from './images/mobileSix.jpg';
import mobileSeven from './images/mobileSeven.jpg';
import mobileEight from './images/mobileEight.jpg';

const allProduct = [
  // ---- Laptops (1-8) ----
  { id: 1, title: "Dell Inspiron 15", brand: "Dell", price: 85000, ram: "8GB", storage: "512GB SSD", processor: "Intel Core i5", display: "15.6 Inch", rating: 4.5, image: laptopOne, category: "laptops" },
  { id: 2, title: "HP Pavilion 14", brand: "HP", price: 95000, ram: "16GB", storage: "512GB SSD", processor: "Intel Core i7", display: "14 Inch", rating: 4.6, image: laptopTwo, category: "laptops" },
  { id: 3, title: "Lenovo IdeaPad 3", brand: "Lenovo", price: 78000, ram: "8GB", storage: "256GB SSD", processor: "AMD Ryzen 5", display: "15.6 Inch", rating: 4.4, image: laptopThree, category: "laptops" },
  { id: 4, title: "Apple MacBook Air M2", brand: "Apple", price: 245000, ram: "8GB", storage: "256GB SSD", processor: "Apple M2", display: "13.6 Inch", rating: 4.9, image: laptopFour, category: "laptops" },
  { id: 5, title: "Acer Aspire 7", brand: "Acer", price: 105000, ram: "16GB", storage: "512GB SSD", processor: "AMD Ryzen 7", display: "15.6 Inch", rating: 4.5, image: laptopFive, category: "laptops" },
  { id: 6, title: "Asus VivoBook 15", brand: "Asus", price: 89000, ram: "8GB", storage: "512GB SSD", processor: "Intel Core i5", display: "15.6 Inch", rating: 4.3, image: laptopSix, category: "laptops" },
  { id: 7, title: "MSI Modern 14", brand: "MSI", price: 112000, ram: "16GB", storage: "512GB SSD", processor: "Intel Core i7", display: "14 Inch", rating: 4.7, image: laptopSeven, category: "laptops" },
  { id: 8, title: "Samsung Galaxy Book 3", brand: "Samsung", price: 125000, ram: "16GB", storage: "1TB SSD", processor: "Intel Core i7", display: "15.6 Inch", rating: 4.8, image: laptopEight, category: "laptops" },

  // ---- Watches (9-16) ----
  { id: 9, title: "Apple Watch Series 10", brand: "Apple", price: 125000, display: "1.9 Inch OLED", battery: "18 Hours", compatibility: "iOS", rating: 4.9, image: watchOne, category: "watches" },
  { id: 10, title: "Samsung Galaxy Watch 7", brand: "Samsung", price: 85000, display: "1.5 Inch AMOLED", battery: "40 Hours", compatibility: "Android", rating: 4.8, image: watchTwo, category: "watches" },
  { id: 11, title: "Huawei Watch GT 5", brand: "Huawei", price: 55000, display: "1.43 Inch AMOLED", battery: "14 Days", compatibility: "Android & iOS", rating: 4.7, image: watchThree, category: "watches" },
  { id: 12, title: "Amazfit GTR 4", brand: "Amazfit", price: 45000, display: "1.43 Inch AMOLED", battery: "12 Days", compatibility: "Android & iOS", rating: 4.6, image: watchFour, category: "watches" },
  { id: 13, title: "Fitbit Versa 4", brand: "Fitbit", price: 50000, display: "1.58 Inch AMOLED", battery: "6 Days", compatibility: "Android & iOS", rating: 4.5, image: watchFive, category: "watches" },
  { id: 14, title: "Garmin Venu 3", brand: "Garmin", price: 95000, display: "1.4 Inch AMOLED", battery: "14 Days", compatibility: "Android & iOS", rating: 4.8, image: watchSix, category: "watches" },
  { id: 15, title: "Noise ColorFit Pro 5", brand: "Noise", price: 12000, display: "1.85 Inch AMOLED", battery: "7 Days", compatibility: "Android & iOS", rating: 4.3, image: watchSeven, category: "watches" },
  { id: 16, title: "boAt Wave Sigma", brand: "boAt", price: 8500, display: "2.0 Inch HD", battery: "5 Days", compatibility: "Android & iOS", rating: 4.2, image: watchEight, category: "watches" },

  // ---- Cameras (17-24) ----
  { id: 17, title: "Canon EOS R50", brand: "Canon", price: 185000, resolution: "24.2 MP", lens: "18-45mm", type: "Mirrorless", rating: 4.8, image: cameraOne, category: "cameras" },
  { id: 18, title: "Nikon Z30", brand: "Nikon", price: 175000, resolution: "20.9 MP", lens: "16-50mm", type: "Mirrorless", rating: 4.7, image: cameraTwo, category: "cameras" },
  { id: 19, title: "Sony Alpha A6400", brand: "Sony", price: 225000, resolution: "24.2 MP", lens: "16-50mm", type: "Mirrorless", rating: 4.9, image: cameraThree, category: "cameras" },
  { id: 20, title: "Fujifilm X-T30 II", brand: "Fujifilm", price: 245000, resolution: "26.1 MP", lens: "18-55mm", type: "Mirrorless", rating: 4.8, image: cameraFour, category: "cameras" },
  { id: 21, title: "Canon EOS 2000D", brand: "Canon", price: 125000, resolution: "24.1 MP", lens: "18-55mm", type: "DSLR", rating: 4.5, image: cameraFive, category: "cameras" },
  { id: 22, title: "Nikon D3500", brand: "Nikon", price: 135000, resolution: "24.2 MP", lens: "18-55mm", type: "DSLR", rating: 4.6, image: cameraSix, category: "cameras" },
  { id: 23, title: "Sony ZV-E10", brand: "Sony", price: 210000, resolution: "24.2 MP", lens: "16-50mm", type: "Vlogging Camera", rating: 4.9, image: cameraSeven, category: "cameras" },
  { id: 24, title: "Panasonic Lumix G100", brand: "Panasonic", price: 165000, resolution: "20.3 MP", lens: "12-32mm", type: "Mirrorless", rating: 4.4, image: cameraEight, category: "cameras" },

  // ---- Keyboards (25-32) ----
  { id: 25, title: "Logitech K380 Multi-Device Keyboard", brand: "Logitech", price: 8500, type: "Wireless", connectivity: "Bluetooth", layout: "Compact", rating: 4.7, image: keyboardOne, category: "keyboards" },
  { id: 26, title: "Redragon K552 Kumara", brand: "Redragon", price: 12000, type: "Mechanical", connectivity: "Wired", layout: "Tenkeyless", rating: 4.8, image: keyboardTwo, category: "keyboards" },
  { id: 27, title: "Razer BlackWidow V4", brand: "Razer", price: 28000, type: "Mechanical", connectivity: "Wired", layout: "Full Size", rating: 4.9, image: keyboardThree, category: "keyboards" },
  { id: 28, title: "HP 230 Wireless Keyboard", brand: "HP", price: 6500, type: "Wireless", connectivity: "USB Receiver", layout: "Full Size", rating: 4.4, image: keyboardFour, category: "keyboards" },
  { id: 29, title: "Dell KB216 Multimedia Keyboard", brand: "Dell", price: 3500, type: "Membrane", connectivity: "Wired", layout: "Full Size", rating: 4.3, image: keyboardFive, category: "keyboards" },
  { id: 30, title: "Corsair K70 RGB Pro", brand: "Corsair", price: 32000, type: "Mechanical", connectivity: "Wired", layout: "Full Size", rating: 4.8, image: keyboardSix, category: "keyboards" },
  { id: 31, title: "Keychron K2", brand: "Keychron", price: 18000, type: "Mechanical", connectivity: "Bluetooth & Wired", layout: "75%", rating: 4.7, image: keyboardSeven, category: "keyboards" },
  { id: 32, title: "A4Tech FK10", brand: "A4Tech", price: 2500, type: "Membrane", connectivity: "Wired", layout: "Full Size", rating: 4.2, image: keyboardEight, category: "keyboards" },

  // ---- Mobiles (33-40) ----
  { id: 33, title: "iPhone 16 Pro", brand: "Apple", price: 320000, storage: "256GB", ram: "8GB", camera: "48MP", battery: "3582mAh", rating: 4.9, image: mobileOne, category: "mobiles" },
  { id: 34, title: "Samsung Galaxy S25 Ultra", brand: "Samsung", price: 295000, storage: "512GB", ram: "12GB", camera: "200MP", battery: "5000mAh", rating: 4.8, image: mobileTwo, category: "mobiles" },
  { id: 35, title: "Google Pixel 9 Pro", brand: "Google", price: 240000, storage: "256GB", ram: "12GB", camera: "50MP", battery: "4700mAh", rating: 4.8, image: mobileThree, category: "mobiles" },
  { id: 36, title: "OnePlus 13", brand: "OnePlus", price: 180000, storage: "256GB", ram: "12GB", camera: "50MP", battery: "5400mAh", rating: 4.7, image: mobileFour, category: "mobiles" },
  { id: 37, title: "Xiaomi 15", brand: "Xiaomi", price: 145000, storage: "256GB", ram: "12GB", camera: "50MP", battery: "5240mAh", rating: 4.6, image: mobileFive, category: "mobiles" },
  { id: 38, title: "Oppo Reno 13 Pro", brand: "Oppo", price: 125000, storage: "256GB", ram: "12GB", camera: "50MP", battery: "5800mAh", rating: 4.5, image: mobileSix, category: "mobiles" },
  { id: 39, title: "Vivo V50", brand: "Vivo", price: 95000, storage: "256GB", ram: "8GB", camera: "50MP", battery: "6000mAh", rating: 4.4, image: mobileSeven, category: "mobiles" },
  { id: 40, title: "Realme GT 7", brand: "Realme", price: 85000, storage: "256GB", ram: "8GB", camera: "50MP", battery: "5500mAh", rating: 4.3, image: mobileEight, category: "mobiles" },
];

export default allProduct;