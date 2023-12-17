Mongo DB 
It is an open source high performance scalable NO SQL document oriented database.

Document oriented database implies there is no relational connection like tables and rows, the data is stored in JSON like format called documents in dynamic schema.

Advantages of MongoDB are as follows.
Dynamic Schema: Meaning it is a flexible schema which is ideal for JSON like documents.
Scalability: Mongo is Highly Scalable
Cheap: It can be downloaded free of cost.

Mongo Can be installed as follows
npm install mongodb

Some of the inbuilt methods of mongodb
insertOne() --> this will insert one entry to the collection
findOne() --> This will find the first occurence of the data from the mongoDb Collection
find() --> This is read all the data from the mongoDb collection
UpdateOne() --> This will find the first occurence in the document and updates it.
UpdateMany() --> This will update all occurences based on the given qurey.
DeleteOne() --> This will delete the first occurence of the data.
DeleteMany() --> This will delete all the occurences in the data provided in the search query.