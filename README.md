# University Scraper

An-unofficial University Data API, data was crawled from https://www.hotcourses.co.id site. 
This API are not recommended used for production, just for self learning. Use with your own risk!

## How to
* Clone this repository `git clone https://github.com/heryvandoro/university-scraper`
* Install dependencies with `npm install` or `yarn install`
* Serve with `npm start`
* Done

**API Documentation**
----

* **URL**

  /universities

* **Method:**

  `GET`
  
*  **URL Params**

   **Optional:**
 
   `page=[integer]`
   
   `keyword=[string]`

* **Sample Response:**

 ```json
{
    "data": [
        {
            "logo": "https://images2.content-hci.com/commimg/myhotcourses/institution/myhc_139015.jpg",
            "name": "La Trobe University",
            "country": "Australia"
        },
        {
            "logo": "https://images3.content-hci.com/commimg/myhotcourses/institution/myhc_270593.jpg",
            "name": "Massey University",
            "country": "Selandia Baru"
        }
    ],
    "meta": {
        "total_page": 246,
        "current_page": 1
    }
}
```
