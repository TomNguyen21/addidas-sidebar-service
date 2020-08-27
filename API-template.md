# Server API


## GET Request

  - GET /sidebar/summary/:id

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

  - POST /sidebar/summary/

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

  - PATCH /sidebar/summary/:id

**Path Parameters:**
  * `id` id

**Success Status Code:** `204`

**Returns:** Expects JSON with any of the following keys.(include only keys to be updated)

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

## DELETE Request

  - DELETE /sidebar/summary/:id

**Path Parameters:**
  * `id` id
**Success Status Code:** `204`
