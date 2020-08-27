# Server API


## GET Request

  - GET /sidebar/summary/

**Path Parameters:**
  * `id` id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": {
        "type": "Number",
        "unique": true,
      },
      "category": "String",
      "quantity": "Number",
      "size": "Number",
      "name": "String",
      "color": "String",
      "price": "Number",
      "thumbnailPC": "String",
      "main": "String"
    }
```

## POST Request



**Path Parameters:**

**Success Status Code:** `201`

**Returns:** Expects JSON with any of the following keys.

```json
    {
      "category": "String",
      "quantity": "Number",
      "size": "Number",
      "name": "String",
      "color": "String",
      "price": "Number",
      "thumbnailPC": "String",
      "main": "String"
    }
```

## PATCH Request



**Path Parameters:**

**Success Status Code:** `202`

**Returns:**

## DELETE Request



**Path Parameters:**

**Success Status Code:** `202`

**Returns:**
