const express = require('express');
const appServeer = express();
let cors = require('cors');
const path = require('path');
appServeer.use(cors());
appServeer.use(express.static(path.join(__dirname, 'public')));
appServeer.use(express.urlencoded({ extended: true }));
appServeer.set("view engine", "ejs");



let userDetails = {
    "products": [
      {
        "id": "78c977fa587c412cbd573561",
        "title": "MSI MPG 491CQP QD-OLED 49 DQHD 144Hz Curved Gaming Monitor",
        "description": "MSI MPG 491CQP QD-OLED 49 DQHD 144Hz Curved Monitor The MSI MPG 491CQP QD-OLED is a top-tier gaming monitor designed to deliver an immersive and high-performance gaming experience. Featuring a 49-inch QD-OLED panel with DQHD (5120 x 1440) resolution and 1800R curvature, it provides stunning clarity and a panoramic view that wraps around your field of vision. The 144Hz refresh rate and 0.3ms response time ensure ultra-smooth and responsive gameplay, while the 1,500",
        "category": "pc",
        "price": 200.20,
        "discountPercentage": 10,
        "rating": 4.7,
        "stock": 35,
        "tags": [
          "PC case",
          "ARGB",
          "MSI",
          "Gaming",
          "Tempered glass"
        ],
        "brand": "MSI",
        "sku": "MPG110R-GUN",
        "weight": 6.5,
        "dimensions": {
          "width": 215,
          "height": 450,
          "depth": 430
        },
        "warrantyInformation": "2-year limited warranty",
        "shippingInformation": "Ships within 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-15T10:26:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-08-27T08:46:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 3,
            "comment": "Works as expected, no complaints.",
            "date": "2024-06-22T00:03:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-10-21T15:40:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 2,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-19T15:34:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-04-13T11:23:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Amazing product, would buy again!",
            "date": "2024-04-18T19:33:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-13T19:50:00.000Z",
            "reviewerName": "Charlie Johnson",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 1,
            "comment": "Could be better, but does the job.",
            "date": "2024-02-14T15:24:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-05-09T06:55:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-04-08T05:01:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 1,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-24T12:26:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 4,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-28T11:27:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 2,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-18T07:32:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Works as expected, no complaints.",
            "date": "2024-01-14T02:40:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-05-14T09:34:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          }
        ],
        "returnPolicy": "30-day return policy",
        "minimumOrderQuantity": 1,
        "meta": {
          "createdAt": "2024-10-17T10:56:21.619Z",
          "updatedAt": "2024-10-17T10:56:21.619Z",
          "barcode": "2210136215090",
          "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://www.startech.com.bd/image/cache/catalog/monitor/msi/491cqp/mpg-491cqp-qd-oled-06-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/monitor/msi/491cqp/491cqp-02-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/monitor/msi/491cqp/mpg-491cqp-qd-oled-07-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/monitor/msi/491cqp/491cqp-05-500x500.webp"
        ],
        "thumbnail": "https://www.startech.com.bd/image/cache/catalog/monitor/msi/491cqp/mpg-491cqp-qd-oled-06-500x500.webp"
      },
      {
        "id": "79c977fa587c412cbd573562",
        "title": "Apple MacBook Air 13.3-Inch Retina Display 8-core Apple M1 chip with 8GB RAM, 256GB SSD (MGN63) Space Gray",
        "description": "Apple MacBook Air 13.3-Inch Retina Display 8-core Apple M1 chip with 8GB RAM, 256GB SSD (MGN63) Space Gray Apple's thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go. Itâ€™s here. Our first chip designed specifically for Mac. Packed with an astonishing 16 billion transistors, the Apple M1 system on a chip (SoC) integrates the CPU, GPU, Neural Engine, I/O, and so much more onto a single tiny chip. With incredible performance, custom technologies, and industry-leading power efficiency,1 M1 is not just a next step for Mac â€” itâ€™s another level entirely.M1 has the fastest CPU weâ€™ve ever made. With that kind of processing speed, MacBook Air can take on new extraordinarily intensive tasks like professional-quality editing and action-packed gaming. But the 8â€core CPU on M1 isnât just up to 3.5x faster than the previous generation2 â€” it balances high-performance cores with efficiency cores that can still crush everyday jobs while using just a tenth of the power.Up to 7-core GPUThe GPU in M1 puts MacBook Air in a class of its own. M1 features the worldâ€s fastest integrated graphics in a personal computer.8 Thatâ€™s up to 5x faster graphics performance compared with the previous generation.",
        "category": "laptop",
        "price": 400.99,
        "discountPercentage": 10,
        "rating": 4.7,
        "stock": 35,
        "tags": [
          "apple laptop",
          "laptop",
          "apple",
          "Gaming laptop",
          "ultra hd laptop"
        ],
        "brand": "apple",
        "sku": "MPG110R-GUN",
        "weight": 6.5,
        "dimensions": {
          "width": 215,
          "height": 450,
          "depth": 430
        },
        "warrantyInformation": "2-year limited warranty",
        "shippingInformation": "Ships within 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-15T10:26:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-08-27T08:46:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 3,
            "comment": "Works as expected, no complaints.",
            "date": "2024-06-22T00:03:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-10-21T15:40:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 2,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-19T15:34:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-04-13T11:23:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Amazing product, would buy again!",
            "date": "2024-04-18T19:33:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-13T19:50:00.000Z",
            "reviewerName": "Charlie Johnson",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 1,
            "comment": "Could be better, but does the job.",
            "date": "2024-02-14T15:24:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-05-09T06:55:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-04-08T05:01:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 1,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-24T12:26:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 4,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-28T11:27:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 2,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-18T07:32:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Works as expected, no complaints.",
            "date": "2024-01-14T02:40:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-05-14T09:34:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          }
        ],
        "returnPolicy": "30-day return policy",
        "minimumOrderQuantity": 1,
        "meta": {
          "createdAt": "2024-10-17T10:56:21.619Z",
          "updatedAt": "2024-10-17T10:56:21.619Z",
          "barcode": "2210136215090",
          "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-13-3-inch-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-13-3-inch-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-13-3-inch-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-2-500x500.jpg"
        ],
        "thumbnail": "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-13-3-inch-500x500.webp"
      },
      {
        "id": "ce388f5b8bae475fad3cc549",
        "title": "Lenovo IdeaPad Slim 3 15AMN8 Ryzen 5 7520U 15.6 FHD Laptop Lenovo IdeaPad Slim 3 15AMN8 Ryzen 5 7520U 15.6 FHD Laptop Lenovo IdeaPad Slim 3 15AMN8 Ryzen 5 7520U 15.6 FHD Laptop Lenovo IdeaPad Slim 3 15AMN8 Ryzen 5 7520U 15.6 FHD Laptop",
        "description": "Lenovo IdeaPad Slim 3 15ABR8 Ryzen 5 15.6 FHD Laptop The Lenovo IdeaPad Slim 3 15ABR8 is a powerful and sleek laptop that combines performance and portability to enhance your computing experience. Whether you're working, studying, or enjoying multimedia entertainment, this laptop is designed to cater to your needs. The laptop is equipped with an AMD Ryzen 5 7530U processor, which delivers excellent performance with a base clock speed of 2.0GHz. When needed, the processor can dynamically boost its clock speed up to 4.5GHz, ensuring smooth multitasking and efficient handling of demanding tasks. With 8GB of DDR4 RAM, you'll experience fast and responsive performance, allowing you to run multiple applications simultaneously without significant slowdowns. The laptop is also equipped with a spacious 512GB SSD (Solid State Drive) that not only offers ample storage space for your files but also enhances overall system responsiveness, boot times",
        "category": "laptop",
        "price": 350.80,
        "discountPercentage": 10,
        "rating": 4.7,
        "stock": 35,
        "tags": [
          "lenovo laptop",
          "laptop",
          "Lenovo",
          "Gaming laptop",
          "ultra hd laptop"
        ],
        "brand": "lenovo",
        "sku": "MPG110R-GUN",
        "weight": 6.5,
        "dimensions": {
          "width": 215,
          "height": 450,
          "depth": 430
        },
        "warrantyInformation": "2-year limited warranty",
        "shippingInformation": "Ships within 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-15T10:26:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-08-27T08:46:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 3,
            "comment": "Works as expected, no complaints.",
            "date": "2024-06-22T00:03:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-10-21T15:40:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 2,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-19T15:34:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-04-13T11:23:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Amazing product, would buy again!",
            "date": "2024-04-18T19:33:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-13T19:50:00.000Z",
            "reviewerName": "Charlie Johnson",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 1,
            "comment": "Could be better, but does the job.",
            "date": "2024-02-14T15:24:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-05-09T06:55:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-04-08T05:01:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 1,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-24T12:26:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 4,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-28T11:27:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 2,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-18T07:32:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Works as expected, no complaints.",
            "date": "2024-01-14T02:40:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-05-14T09:34:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          }
        ],
        "returnPolicy": "30-day return policy",
        "minimumOrderQuantity": 1,
        "meta": {
          "createdAt": "2024-10-17T10:56:21.619Z",
          "updatedAt": "2024-10-17T10:56:21.619Z",
          "barcode": "2210136215090",
          "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3-15amn8/ideapad-slim-3-15amn8-0001-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3-15amn8/ideapad-slim-3-15amn8-03-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3-15amn8/ideapad-slim-3-15amn8-02-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3-15amn8/ideapad-slim-3-15amn8-0001-500x500.webp"
        ],
        "thumbnail": "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3-15amn8/ideapad-slim-3-15amn8-0001-500x500.webp"
      },
      {
        "id": "2f7dbefc1c2641afb0cc11b0",
        "title": "Lenovo IdeaPad Slim 3 15ABR8 Ryzen 5 15.6 FHD Laptop",
        "description": "Lenovo IdeaPad Slim 3 15ABR8 Ryzen 5 15.6 FHD Laptop The Lenovo IdeaPad Slim 3 15ABR8 is a powerful and sleek laptop that combines performance and portability to enhance your computing experience. Whether you're working, studying, or enjoying multimedia entertainment, this laptop is designed to cater to your needs. The laptop is equipped with an AMD Ryzen 5 7530U processor, which delivers excellent performance with a base clock speed of 2.0GHz. When needed, the processor can dynamically boost its clock speed up to 4.5GHz, ensuring smooth multitasking and efficient handling of demanding tasks. With 8GB of DDR4 RAM, you'll experience fast and responsive performance, allowing you to run multiple applications simultaneously without significant slowdowns. The laptop is also equipped with a spacious 512GB SSD (Solid State Drive) that not only offers ample storage space for your files but also enhances overall system responsiveness, boot times",
        "category": "laptop",
        "price": 370.13,
        "discountPercentage": 10,
        "rating": 4.7,
        "stock": 35,
        "tags": [
          "lenovo laptop",
          "laptop",
          "Lenovo",
          "Gaming laptop",
          "ultra hd laptop"
        ],
        "brand": "lenovo",
        "sku": "MPG110R-GUN",
        "weight": 6.5,
        "dimensions": {
          "width": 215,
          "height": 450,
          "depth": 430
        },
        "warrantyInformation": "2-year limited warranty",
        "shippingInformation": "Ships within 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-15T10:26:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-08-27T08:46:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 3,
            "comment": "Works as expected, no complaints.",
            "date": "2024-06-22T00:03:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-10-21T15:40:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 2,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-19T15:34:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-04-13T11:23:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Amazing product, would buy again!",
            "date": "2024-04-18T19:33:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-13T19:50:00.000Z",
            "reviewerName": "Charlie Johnson",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 1,
            "comment": "Could be better, but does the job.",
            "date": "2024-02-14T15:24:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-05-09T06:55:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-04-08T05:01:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 1,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-24T12:26:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 4,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-28T11:27:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 2,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-18T07:32:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Works as expected, no complaints.",
            "date": "2024-01-14T02:40:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-05-14T09:34:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          }
        ],
        "returnPolicy": "30-day return policy",
        "minimumOrderQuantity": 1,
        "meta": {
          "createdAt": "2024-10-17T10:56:21.619Z",
          "updatedAt": "2024-10-17T10:56:21.619Z",
          "barcode": "2210136215090",
          "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3i-15iru8/ideapad-slim-3i-04-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3i-15iru8/ideapad-slim-3i-05-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3i-15iru8/ideapad-slim-3i-06-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3i-15iru8/ideapad-slim-3i-04-500x500.webp"
        ],
        "thumbnail": "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3i-15iru8/ideapad-slim-3i-04-500x500.webp"
      },
      {
        "id": "77aa889abdec4869984c9259",
        "title": "Lenovo IdeaCentre AIO 3 24IAP7 Core i5 13th Gen 23.8 All-in-One Desktop PC",
        "description": "Lenovo IdeaCentre AIO 3 24IAP7 Core i5 13th Gen 23.8 All-in-One PC The Lenovo IdeaCentre AIO 3 24IAP7 is a sleek and powerful all-in-one PC designed to provide an optimal blend of performance, efficiency, and style. Ideal for both home and office use, this machine delivers robust computing capabilities within a streamlined, space-saving design. It is equipped with an Intel Core i5-13420H processor, a 13th generation chip that features a 12M cache and a base clock speed of 3.4 GHz, capable of turbo boosting up to 4.6 GHz. This ensures smooth performance for multitasking, productivity applications, and even some light gaming. The device has enough capacity to run many apps at once and run more demanding software without experiencing any lags thanks to its 16GB RAM. In addition to offering speedy program launches and short boot times, the 512GB SSD has enough storage capacity for applications, media files, and documents.",
        "category": "pc",
        "price": 900.99,
        "discountPercentage": 10,
        "rating": 4.7,
        "stock": 35,
        "tags": [
          "PC case",
          "ARGB",
          "MSI",
          "Gaming",
          "Tempered glass"
        ],
        "brand": "lenovo",
        "sku": "MPG110R-GUN",
        "weight": 6.5,
        "dimensions": {
          "width": 215,
          "height": 450,
          "depth": 430
        },
        "warrantyInformation": "2-year limited warranty",
        "shippingInformation": "Ships within 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-15T10:26:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-08-27T08:46:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 3,
            "comment": "Works as expected, no complaints.",
            "date": "2024-06-22T00:03:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-10-21T15:40:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 2,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-19T15:34:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-04-13T11:23:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Amazing product, would buy again!",
            "date": "2024-04-18T19:33:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-13T19:50:00.000Z",
            "reviewerName": "Charlie Johnson",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 1,
            "comment": "Could be better, but does the job.",
            "date": "2024-02-14T15:24:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-05-09T06:55:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-04-08T05:01:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 1,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-24T12:26:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 4,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-28T11:27:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 2,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-18T07:32:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Works as expected, no complaints.",
            "date": "2024-01-14T02:40:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-05-14T09:34:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          }
        ],
        "returnPolicy": "30-day return policy",
        "minimumOrderQuantity": 1,
        "meta": {
          "createdAt": "2024-10-17T10:56:21.619Z",
          "updatedAt": "2024-10-17T10:56:21.619Z",
          "barcode": "2210136215090",
          "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://www.startech.com.bd/image/cache/catalog/desktop-pc/all-in-one/lenovo/f0gh003dlk/f0gh003dlk-02-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/desktop-pc/all-in-one/lenovo/f0gh003dlk/f0gh003dlk-03-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/desktop-pc/all-in-one/lenovo/f0gh003dlk/f0gh003dlk-04-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/desktop-pc/all-in-one/lenovo/f0gh003dlk/f0gh003dlk-05-500x500.webp"
        ],
        "thumbnail": "https://www.startech.com.bd/image/cache/catalog/desktop-pc/all-in-one/lenovo/f0gh003dlk/f0gh003dlk-01-500x500.webp"
      },
      {
        "id": "3320b604ea4f405f9ed551fb",
        "title": "AOC AGON PRO PD34 PORSCHE DESIGN 34 240Hz 0.3ms WQHD QD-OLED Gaming Curved Monitor",
        "description": "AOC AGON PRO PD34 34 240Hz 0.3ms WQHD QD-OLED Gaming Curved Monitor The AOC AGON PRO PD34 34 QD-OLED Gaming Curved Monitor offers gamers and multimedia makers alike an unparalleled level of immersion. With a wide range of vision and an 1800R curvature, the 34-inch curved screen immerses you in the action and increases immersion. With an extraordinarily sharp 2K WQHD resolution of 3440 × 1440, the AOC AGON PRO PD34 34 QD-OLED Gaming Curved Monitor delivers vivid, true-to-life colors thanks to its Quantum Dot OLED display. This monitor is excellent at color accuracy, with coverage of 98% Adobe, 100% sRGB, and 99% DCI-P3. It is ideal for both professional creative work and gaming. Its Delta E < 2 guarantees accurate color reproduction. A scorching 240Hz refresh rate and an incredibly quick 0.03ms GtG reaction time power the remarkable performance of the AOC AGON PRO PD34 34 QD-OLED Gaming Curved Monitor, producing fluid, tear-free images with negligible input lag.",
        "category": "monitor",
        "price": 410.99,
        "discountPercentage": 10,
        "rating": 4.7,
        "stock": 35,
        "tags": [
          "aoc monitor",
          "monitor",
          "aoc",
          "Gaming monitor",
          "ultra hd monitor"
        ],
        "brand": "aoc",
        "sku": "MPG110R-GUN",
        "weight": 6.5,
        "dimensions": {
          "width": 215,
          "height": 450,
          "depth": 430
        },
        "warrantyInformation": "2-year limited warranty",
        "shippingInformation": "Ships within 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-15T10:26:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-08-27T08:46:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 3,
            "comment": "Works as expected, no complaints.",
            "date": "2024-06-22T00:03:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-10-21T15:40:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 2,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-19T15:34:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-04-13T11:23:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Amazing product, would buy again!",
            "date": "2024-04-18T19:33:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-13T19:50:00.000Z",
            "reviewerName": "Charlie Johnson",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 1,
            "comment": "Could be better, but does the job.",
            "date": "2024-02-14T15:24:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-05-09T06:55:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-04-08T05:01:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 1,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-24T12:26:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 4,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-28T11:27:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 2,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-18T07:32:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Works as expected, no complaints.",
            "date": "2024-01-14T02:40:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-05-14T09:34:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          }
        ],
        "returnPolicy": "30-day return policy",
        "minimumOrderQuantity": 1,
        "meta": {
          "createdAt": "2024-10-17T10:56:21.619Z",
          "updatedAt": "2024-10-17T10:56:21.619Z",
          "barcode": "2210136215090",
          "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://www.startech.com.bd/image/cache/catalog/monitor/aoc/agon-pro-pd34/agon-pro-pd34-01-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/monitor/aoc/agon-pro-pd34/agon-pro-pd34-02-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/monitor/aoc/agon-pro-pd34/agon-pro-pd34-03-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/monitor/aoc/agon-pro-pd34/agon-pro-pd34-06-500x500.webp"
        ],
        "thumbnail": "https://www.startech.com.bd/image/cache/catalog/monitor/aoc/agon-pro-pd34/agon-pro-pd34-01-500x500.webp"
      },
      {
        "id": "c02e4d8e18c0425bb0f42620",
        "title": "Lenovo Yoga PRO 7 14ARP8 Ryzen 7 7735HS RTX 3050 6GB Graphics 14.5 3K Gaming Laptop",
        "description": "Lenovo Yoga PRO 7 14ARP8 Ryzen 7 7735HS RTX 3050 6GB Graphics 14.5 3K Gaming Laptop The Lenovo Yoga PRO 7 14ARP8 is a premium 14.5 3K gaming laptop that smoothly integrates high performance and stylish design, making it an ideal choice for both gamers and professionals. This Yoga PRO 7 14ARP8 laptop is powered by the powerful AMD Ryzen 7 7735HS CPU, which has a basic clock speed of 3.2GHz and can turbo boost up to 4.75GHz across its 8 cores. This offers strong performance, allowing for seamless multitasking and fast handling of demanding workloads. With 16GB of LPDDR5 RAM, the Yoga PRO 7 provides quick and efficient memory management, letting users to run numerous apps without latency. The 512GB SSD has plenty of storage space and offers fast boot times and access to data and apps. The Yoga PRO 7 14ARP8 laptop's NVIDIA GeForce RTX 3050 graphics card, which has 6GB of GDDR6 RAM, provides spectacular images and great performance, making it ideal for gaming, video editing, and other graphics-intensive applications.",
        "category": "laptop",
        "price": 510.99,
        "discountPercentage": 10,
        "rating": 4.7,
        "stock": 35,
        "tags": [
          "lenovo laptop",
          "laptop",
          "lenovo",
          "Gaming laptop",
          "ultra hd laptop"
        ],
        "brand": "lenovo",
        "sku": "MPG110R-GUN",
        "weight": 6.5,
        "dimensions": {
          "width": 215,
          "height": 450,
          "depth": 430
        },
        "warrantyInformation": "2-year limited warranty",
        "shippingInformation": "Ships within 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-15T10:26:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-08-27T08:46:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 3,
            "comment": "Works as expected, no complaints.",
            "date": "2024-06-22T00:03:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-10-21T15:40:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 2,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-19T15:34:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-04-13T11:23:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Amazing product, would buy again!",
            "date": "2024-04-18T19:33:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-13T19:50:00.000Z",
            "reviewerName": "Charlie Johnson",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 1,
            "comment": "Could be better, but does the job.",
            "date": "2024-02-14T15:24:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-05-09T06:55:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-04-08T05:01:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 1,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-24T12:26:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 4,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-28T11:27:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 2,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-18T07:32:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Works as expected, no complaints.",
            "date": "2024-01-14T02:40:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-05-14T09:34:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          }
        ],
        "returnPolicy": "30-day return policy",
        "minimumOrderQuantity": 1,
        "meta": {
          "createdAt": "2024-10-17T10:56:21.619Z",
          "updatedAt": "2024-10-17T10:56:21.619Z",
          "barcode": "2210136215090",
          "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/yoga-pro-7-14arp8/yoga-pro-7-14arp8-01-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/yoga-pro-7-14arp8/yoga-pro-7-14arp8-03-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/yoga-pro-7-14arp8/yoga-pro-7-14arp8-04-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/yoga-pro-7-14arp8/yoga-pro-7-14arp8-05-500x500.webp"
        ],
        "thumbnail": "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/yoga-pro-7-14arp8/yoga-pro-7-14arp8-01-500x500.webp"
      },
      {
        "id": "b5ca8c02c4cf41d2beaf46ec",
        "title": "Lenovo LOQ 15IRX9 Core i5 13th Gen RTX 3050 6GB Graphics 15.6",
        "description": "Lenovo Yoga PRO 7 14ARP8 Ryzen 7 7735HS RTX 3050 6GB Graphics 14.5 3K Gaming Laptop The Lenovo Yoga PRO 7 14ARP8 is a premium 14.5 3K gaming laptop that smoothly integrates high performance and stylish design, making it an ideal choice for both gamers and professionals. This Yoga PRO 7 14ARP8 laptop is powered by the powerful AMD Ryzen 7 7735HS CPU, which has a basic clock speed of 3.2GHz and can turbo boost up to 4.75GHz across its 8 cores. This offers strong performance, allowing for seamless multitasking and fast handling of demanding workloads. With 16GB of LPDDR5 RAM, the Yoga PRO 7 provides quick and efficient memory management, letting users to run numerous apps without latency. The 512GB SSD has plenty of storage space and offers fast boot times and access to data and apps. The Yoga PRO 7 14ARP8 laptop's NVIDIA GeForce RTX 3050 graphics card, which has 6GB of GDDR6 RAM, provides spectacular images and great performance, making it ideal for gaming, video editing, and other graphics-intensive applications.",
        "category": "laptop",
        "price": 610.99,
        "discountPercentage": 10,
        "rating": 4.7,
        "stock": 35,
        "tags": [
          "lenovo laptop",
          "laptop",
          "lenovo",
          "Gaming laptop",
          "ultra hd laptop"
        ],
        "brand": "lenovo",
        "sku": "MPG110R-GUN",
        "weight": 6.5,
        "dimensions": {
          "width": 215,
          "height": 450,
          "depth": 430
        },
        "warrantyInformation": "2-year limited warranty",
        "shippingInformation": "Ships within 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-15T10:26:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-08-27T08:46:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 3,
            "comment": "Works as expected, no complaints.",
            "date": "2024-06-22T00:03:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-10-21T15:40:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 2,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-19T15:34:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-04-13T11:23:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Amazing product, would buy again!",
            "date": "2024-04-18T19:33:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-13T19:50:00.000Z",
            "reviewerName": "Charlie Johnson",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 1,
            "comment": "Could be better, but does the job.",
            "date": "2024-02-14T15:24:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-05-09T06:55:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-04-08T05:01:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 1,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-24T12:26:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 4,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-28T11:27:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 2,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-18T07:32:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Works as expected, no complaints.",
            "date": "2024-01-14T02:40:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-05-14T09:34:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          }
        ],
        "returnPolicy": "30-day return policy",
        "minimumOrderQuantity": 1,
        "meta": {
          "createdAt": "2024-10-17T10:56:21.619Z",
          "updatedAt": "2024-10-17T10:56:21.619Z",
          "barcode": "2210136215090",
          "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/loq-15iax9/loq-15iax9-01-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/loq-15iax9/loq-15iax9-04-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/loq-15iax9/loq-15iax9--03-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/loq-15iax9/loq-15iax9-05-500x500.webp"
        ],
        "thumbnail": "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/loq-15iax9/loq-15iax9-01-500x500.webp"
      },
      {
        "id": "71f27284ca8f4a5f8e998c71",
        "title": "Sony Bravia KD-55X85K 55 4K Ultra HD Smart TV",
        "description": "Sony Bravia KD-55X85K 55 Smart LED TV features Intelligent TV processing technology powered by 4K HDR Processor X1 that delivers picture quality full of rich colors and detailed contrast. It Sees blur-free picture quality in fast-moving sports and movies with a native 120Hz refresh rate and Motionflow XR technology. Get the advantage of high-performance gaming with 4K/120, VRR, and ALLM as specified in HDMI 2.1. TRILUMINOS PRO enhances the reproduction of over a billion accurate colors, resulting in natural and precise picture quality. Google TV with Google Assistant organizes all of your content in one location. Stream from your Apple device using AirPlay 2. With Dolby Vision and Atmos support, you can enjoy immersive cinematic content. With the optional BRAVIA CAM, you can video chat with friends and family and use Gesture Control for continuous control without a remote.",
        "category": "monitor",
        "price": 300,
        "discountPercentage": 10,
        "rating": 4.7,
        "stock": 35,
        "tags": [
          "monitor",
          "monitor",
          "monitor",
          "monitor",
          "monitor",
          "monitor"
        ],
        "brand": "",
        "sku": "MPG110R-GUN",
        "weight": 6.5,
        "dimensions": {
          "width": 215,
          "height": 450,
          "depth": 430
        },
        "warrantyInformation": "2-year limited warranty",
        "shippingInformation": "Ships within 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
          {
            "rating": 5,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-15T10:26:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-08-27T08:46:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 3,
            "comment": "Works as expected, no complaints.",
            "date": "2024-06-22T00:03:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-10-21T15:40:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 2,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-19T15:34:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-04-13T11:23:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 3,
            "comment": "Amazing product, would buy again!",
            "date": "2024-04-18T19:33:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-13T19:50:00.000Z",
            "reviewerName": "Charlie Johnson",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 1,
            "comment": "Could be better, but does the job.",
            "date": "2024-02-14T15:24:00.000Z",
            "reviewerName": "Bob Smith",
            "reviewerEmail": "dana@example.com"
          },
          {
            "rating": 5,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-05-09T06:55:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 3,
            "comment": "Good value for the price.",
            "date": "2024-04-08T05:01:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "bob@example.com"
          },
          {
            "rating": 1,
            "comment": "Amazing product, would buy again!",
            "date": "2024-12-24T12:26:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 4,
            "comment": "Amazing product, would buy again!",
            "date": "2024-08-28T11:27:00.000Z",
            "reviewerName": "Dana Lee",
            "reviewerEmail": "evan@example.com"
          },
          {
            "rating": 2,
            "comment": "Not satisfied, lacks essential features.",
            "date": "2024-12-18T07:32:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "charlie@example.com"
          },
          {
            "rating": 1,
            "comment": "Works as expected, no complaints.",
            "date": "2024-01-14T02:40:00.000Z",
            "reviewerName": "Evan Williams",
            "reviewerEmail": "alice@example.com"
          },
          {
            "rating": 2,
            "comment": "Could be better, but does the job.",
            "date": "2024-05-14T09:34:00.000Z",
            "reviewerName": "Alice Brown",
            "reviewerEmail": "alice@example.com"
          }
        ],
        "returnPolicy": "30-day return policy",
        "minimumOrderQuantity": 1,
        "meta": {
          "createdAt": "2024-10-17T10:56:21.619Z",
          "updatedAt": "2024-10-17T10:56:21.619Z",
          "barcode": "2210136215090",
          "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
          "https://www.startech.com.bd/image/cache/catalog/television/sony/bravia-kd-85x85k/bravia-kd-85x85k-02-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/television/sony/bravia-kd-85x85k/bravia-kd-85x85k-03-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/television/sony/bravia-kd-85x85k/bravia-kd-85x85k-04-500x500.webp",
          "https://www.startech.com.bd/image/cache/catalog/television/sony/bravia-kd-85x85k/bravia-kd-85x85k-05-500x500.webp"
        ],
        "thumbnail": "https://www.startech.com.bd/image/cache/catalog/television/sony/bravia-kd-85x85k/bravia-kd-85x85k-01-500x500.webp"
      }
    ],
    "blogs": [
      {
        "userId": 1,
        "id": 1,
        "img": "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "img": "https://images.unsplash.com/photo-1608892711230-ffa1e7209012?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "img": "https://plus.unsplash.com/premium_photo-1683746792239-6ce8cdd3ac78?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "img": "https://plus.unsplash.com/premium_photo-1683798464819-d1376249293e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": 5,
        "img": "https://images.unsplash.com/photo-1695527081782-33e110235ade?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        "userId": 1,
        "id": 6,
        "img": "https://images.unsplash.com/photo-1695527081874-b674c46f40fb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      },
      {
        "userId": 1,
        "id": 7,
        "img": "https://images.unsplash.com/photo-1669003154400-053af9a35eba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
      },
      {
        "userId": 1,
        "id": 8,
        "img": "https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
      },
      {
        "userId": 1,
        "id": 9,
        "img": "https://plus.unsplash.com/premium_photo-1677995700951-4fcb0693cf17?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "nesciunt iure omnis dolorem tempora et accusantium",
        "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
      },
      {
        "userId": 1,
        "id": 10,
        "img": "https://images.unsplash.com/photo-1695527081901-b2dd7452cdcb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
        "title": "optio molestias id quia eum",
        "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
      },
      {
        "userId": 2,
        "id": 11,
        "img": "https://images.unsplash.com/photo-1713947506242-8fcae733d158?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
        "title": "et ea vero quia laudantium autem",
        "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
      },
      {
        "userId": 2,
        "id": 12,
        "img": "https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
        "title": "in quibusdam tempore odit est dolorem",
        "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
      }
    ]
  }

appServeer.get('/', (req, res) => {
    res.send("AKASH");
})
appServeer.get('/products', async (req, res) => {
    res.status(200).json({
        data: userDetails,
        error: null,
    })
})

// appServeer.get('/product/:id', async (req, res) => {
//     const { id } = req.params;  // Extract the product ID from the URL parameter
//     const product = userDetails.find(item => item.id === id); // Find the product by ID
    
//     if (!product) {
//         return res.status(404).json({
//             data: null,
//             error: 'Product not found',
//         });
//     }

//     return res.status(200).json({
//         data: product,
//         error: null,
//     });
// });

appServeer.listen(4000, () => {
    console.log("server is working");

})


