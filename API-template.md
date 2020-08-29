# Server API


## GET Request

  - GET /sidebar/summary/:id

**Path Parameters:**
  * `id` id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "category": "String",
      "quantity": "Number",
      "size": "Number",
      "name": "String",
      "color": "String",
      "price": "Number",
      "thumbnailPC": "String"
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
      "thumbnailPC": "String"
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
      "thumbnailPC": "String"
    }
```

## DELETE Request

  - DELETE /sidebar/summary/:id

**Path Parameters:**
  * `id` id

**Success Status Code:** `204`
