# XYFORMS API DESIGN

Link to full swagger api documentation

## USER

| ROUTE          | METHOD |
| -------------- | ------ |
| /user/register | POST   |
| /user/login    | GET    |

## FORM

> All Routes are Protected

| ROUTE      | METHOD | RESULT        |
| ---------- | ------ | ------------- |
| /form      | POST   | create a form |
| /form      | GET    | get all forms |
| /form/{id} | GET    | get a form    |
| /form/{id} | PATCH  | update a form |
| /form/{id} | DELETE | delete a form |

## FORM RESPONSE

| ROUTE               | METHOD | RESULT                       |
| ------------------- | ------ | ---------------------------- |
| /form_response      | POST   | create a form response entry |
| /form_response      | GET    | get all form responses       |
| /form_response/{id} | GET    | get a form response          |
