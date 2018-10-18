```
מה מכיל נכס?...דוגמא
מזהה-ID כלשהוא
סוג: דירה, וילה וכו..
כמות חדרים:4
כתובת מלאה, עיר,רחוב, מספר
מחיר:1000000
ולידציות בהתאם, כלל השדות מנדטוריים
```
CURL requests :<br/>
curl -v -X POST -H "Content-type: application/json" -d  "{\"id\": 1,\"property_type\": \"house\",\"beds\": 6,\"location\": \"israel Beit aryeh hzit 751\",\"price\": 200}" localhost:4500/api/assets<br/>
curl -X GET -v localhost:4500/api/assets<br/>
curl -v -X DELETE localhost:4500/api/assets?id=1<br/>
curl -v -X PUT -H "Content-type: application/json" -d  "{\"id\": 1,\"property_type\": \"house\",\"beds\": 8,\"location\": \"Los angeles Beit aryeh hzit 751\",\"price\": 200}" localhost:4500/api/assets?id=2

POST request :
```
C:\Users\norel>curl -v -X POST -H "Content-type: application/json" -d  "{\"id\": 1,\"property_type\": \"house\",\"beds\": 6,\"location\": \"israel Beit aryeh hzit 751\",\"price\": 200}" localhost:4500/api/assets
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4500 (#0)
> POST /api/assets HTTP/1.1
> Host: localhost:4500
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 98
>
* upload completely sent off: 98 out of 98 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 28
< ETag: W/"1c-V5/fExuUjAcZwsfkwjbpXHuEAlM"
< Date: Thu, 18 Oct 2018 08:23:20 GMT
< Connection: keep-alive
<
New Asset addedd to the file* Connection #0 to host localhost left intact
```

GET request :
```
C:\Users\norel>curl -X GET -v localhost:4500/api/assets
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4500 (#0)
> GET /api/assets HTTP/1.1
> Host: localhost:4500
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 715
< ETag: W/"2cb-8zjiaEXYGsn0ftbi6zSa3QgrYB8"
< Date: Thu, 18 Oct 2018 08:24:09 GMT
< Connection: keep-alive
<
[{"_id":1,"_property_type":"house","_beds":8,"_location":"Los angeles Beit aryeh hzit 751","_price":2022220,"id":1,"property_type":"house","beds":8,"location":"Los angeles Beit aryeh hzit 751","price":202223320},{"_id":1,"_property_type":"house","_beds":6,"_location":"israel Beit aryeh hzit 751","_price":1},{"_id":2,"_property_type":"house","_beds":6,"_location":"israel Beit aryeh hzit 751","_price":300},{"_id":2,"_property_type":"house","_beds":6,"_location":"israel Beit aryeh hzit 751","_price":300},{"_id":2,"_property_type":"house","_beds":6,"_location":"israel Beit aryeh hzit 751","_price":1232131232300},{"_id":1,"_property_type":"house","_beds":6,"_location":"israel Beit aryeh hzit 751","_price":200}]* Connection #0 to host localhost left intact
```

 PUT request :
```
C:\Users\norel>curl -v -X PUT -H "Content-type: application/json" -d  "{\"id\": 1,\"property_type\": \"house\",\"beds\": 8,\"location\": \"Los angeles Beit aryeh hzit 751\",\"price\": 200}" localhost:4500/api/assets?id=2
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4500 (#0)
> PUT /api/assets?id=2 HTTP/1.1
> Host: localhost:4500
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 103
>
* upload completely sent off: 103 out of 103 bytes
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 44
< ETag: W/"2c-sP91lztxSKUWLWlQzs7+yJpA1+A"
< Date: Thu, 18 Oct 2018 08:25:15 GMT
< Connection: keep-alive
<
 ID number : 2 is edited in the file to 200 * Connection #0 to host localhost left intact
 ```

 DELETE request :
 ```
C:\Users\norel>curl -v -X DELETE localhost:4500/api/assets?id=1
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4500 (#0)
> DELETE /api/assets?id=1 HTTP/1.1
> Host: localhost:4500
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 27
< ETag: W/"1b-8XnzZpGDHc1WqTvGbqQZnapJnY8"
< Date: Thu, 18 Oct 2018 08:25:54 GMT
< Connection: keep-alive
<
 ID number : 1 is Deleted from the file* Connection #0 to host localhost left intact
 ```
