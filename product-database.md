# Database of products
- `products.json` contains an array of product objects. [[Download]](https://raw.githubusercontent.com/aron123/infrend-2022/master/_data/products.json)
- `products.sql` contains a MySQL dump with the same data. [[Download]](https://github.com/aron123/infrend-2023/blob/master/_data/products.sql)

## General schema
- `id`: Identifier of the product.
- `title`: Name of the product.
- `description`: Description of the product (optional, can be `null`).
- `price`: Price in US dollars.
- `imgUrl`: URL of the product image (optional, can be `null`).
- `brand`: Brand name (optional, can be `null`).
- `categories`: List of categories the product belongs to.

### JSON example
```json
{
   "id": "0130350591",
   "title": "Le Creuset Butter Dish Stoneware",
   "description": "Each piece of Le Creuset dinnerware is ...",
   "price": 14.05,
   "imgUrl": "http://ecx.images-amazon.com/images/I/21zcx6RCDoL.jpg",
   "brand": "Le Creuset",
   "categories": [
      "Home & Kitchen",
      "Kitchen & Dining",
      "Dining & Entertaining",
      "Serveware",
      "Butter Dishes"
   ]
},
```

### SQL example
```sql
INSERT INTO `product` (`id`, `title`, `description`, `price`, `imgUrl`, `brand`) VALUES
(2, 'Le Creuset Butter Dish Stoneware', 'Each piece of Le Creuset dinnerware is...', 14.05, 'http://ecx.images-amazon.com/images/I/21zcx6RCDoL.jpg', 'Le Creuset');
```

## Reference
J. McAuley, C. Targett, J. Shi, A. van den Hengel: Image-based recommendations on styles and substitutes. SIGIR, 2015.
