ALPHA
=================

Alpha is an anonymous name for this app which is a demo app for test REST API

Requirements
------------
- **Node**: v6.9.4
- **hapi**: 16.4.3
- **mongoose**: 4.11.1

Dependencies
-----------------
- "hapi": "16.4.3",
- "hapi-web-server": "1.2.0",
- "mongoose": "4.11.1"

API End Points
----

### createOrganization
  - **Usage**
    - Save organization details in mongoDB
  - **Path**
    - **/organizations**
  - **Method**
    - **POST**
  - **Input Variables**
    - **orgName** - Define the organization name
      - _Optional_ - No
      - _Type_ - String
      - _In_ - payload (body)
      - _Default value_ - None
    - **description** - Define the organization description
      -  _Optional_ - No
      - _Type_ - String
      - _In_ - payload (body)
      - _Default value_ - None
    - **location** - Define the location for the organization
      -  _Optional_ - No
      - _Type_ - String
      - _In_ - payload
      - _Default value_ - None
    - **logo** - Define the application logo name (For now we assuming that logo is a string)
      -  _Optional_ - No
      - _Type_ - String
      - _In_ - payload (body)
      - _Default value_ - ALPHA

### updateOrgDetails
  - **Usage**
    - Update existing organization details in mongoDB
  - **Path**
    - **/organizations/{orgName}**
  - **Method**
    - **PUT**
  - **Input Variables**
    - **orgName** - Define the organization name
      - _Optional_ - No
      - _Type_ - String
      - _In_ - params
      - _Default value_ - None

### getOrgList
  - **Usage**
    - Retrieve registered organization name list form mongoDB
  - **Path**
    - **/organizations**
  - **Method**
    - **GET**
  - **Input Variables**
    - **None**

### getOrgDetails
  - **Usage**
    - Retrieve selected registered organization details mongoDB
  - **Path**
    - **/organizations/{orgName}**
  - **Method**
    - **GET**
  - **Input Variables**
    - **orgName** - Define the organization name
      - _Optional_ - No
      - _Type_ - String
      - _In_ - query
      - _Default value_ - None
