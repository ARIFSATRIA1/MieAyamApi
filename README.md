<h1 align="center"> 
    Mie Ayam API Documentation
</h1>

-------------------------

### About
Mie Ayam API is a side project i started at 2024 because i cannot find an API that provides list Mie Ayam, so I ended up creating this API  so that you don't have to.

This repository contains the public API using Node.js and Express. It is designed to work with Supabase,

## Features

- Retrieve a list of all Mie Ayam entries.
- Get details of a specific Mie Ayam entry by nameplace.
- Get List by filter using city 

### Endpoint Documentation

## Base URL
     **URL:** `https://mie-ayam-api.vercel.app/api`



- Get list Mie Ayam 

    -Method GET

    **URL:** `https://mie-ayam-api.vercel.app/api/mieayam`

    - Success Response 

    ```json
        {
            "data": {
                "mieAyam": [
                    {
                        "id": "clwged5bw0000zekgqcftq0hw",
                        "nameplace": "mie ayam wak geng",
                        "adress": "jln. marindal psr 7",
                        "city": "medan",
                        "image": "https://mqmajezukjidbhpdpibd.supabase.co/storage/v1/object/public/mieayam/annie-spratt-xGxQKw-uRkc-unsplash.jpg",
                        "lat": "1222",
                        "lon": "333"
                    }
                ]
            },
            "pagination": {
                "totalRecords": 1,
                "totalPages": 1,
                "currentPages": 1,
                "pageSize": 5
            },
            "message": "Fetching Success"
        }
    ```


- Get details of a specific Mie Ayam entry by nameplace. 

    - Method GET       

    **URL:** `https://mie-ayam-api.vercel.app/api/mieayam/:nameplace`

    This endpoint is used to retrieve specific articles stored in the database. The request should include a route parameter named :params to specify the unique identifier of the article being requested. Upon successful execution, the response will include the article's details.

    - Success Response

    ```json
        {
            "id": "clwged5bw0000zekgqcftq0hw",
            "nameplace": "mie ayam wak geng",
            "adress": "jln. marindal psr 7",
            "city": "medan",
            "image": "https://mqmajezukjidbhpdpibd.supabase.co/storage/v1/object/public/mieayam/annie-spratt-xGxQKw-uRkc-unsplash.jpg",
            "lat": "1222",
            "lon": "333"
        }

    ```


- Get List by filter using city

    -Method GET

     **URL:** `https://mie-ayam-api.vercel.app/api/mieayam/city/:city` 

     This endpoint is used to retrieve specific articles stored in the database. The request should include a route parameter named :city to specify the unique identifier of the article being requested. Upon successful execution, the response will include the article's details.

    - Success Response
  

    ```json

        {
            "data": {
                "mieAyam": [
                    {
                        "id": "clwged5bw0000zekgqcftq0hw",
                        "nameplace": "mie ayam wak geng",
                        "adress": "jln. marindal psr 7",
                        "city": "medan",
                        "image": "https://mqmajezukjidbhpdpibd.supabase.co/storage/v1/object/public/mieayam/annie-spratt-xGxQKw-uRkc-unsplash.jpg",
                        "lat": "1222",
                        "lon": "333"
                    }
                ]
            },
            "message": "Fetching Success"
        }

    ```


    ## Credit For Give List Mie Ayam
    - Benediktus
    - Hanif 
    - Yaffi  
    







