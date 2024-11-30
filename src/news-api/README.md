# Current Configuration Steps
-- Rationale -- 
-- Create a collection to use for this service
use('news-test-1')
db.createCollection('newsHistory')

-- Create the user for this service
db.createUser(
  {
    user: "graphql-news-api-std-user",
    pwd:  "pw-graphql-news-api-std-user-pw",   // or cleartext password
    roles: [ { role: "readWrite", db: "news-test-1" },
             { role: "read", db: "reporting" } ]
  }
)

-- !Update Admin Password! --
 use admin
 db.createUser(
   {
     user: "xcidisde",
     pwd: passwordPrompt(), // or cleartext password
     roles: [ 
       { role: "userAdminAnyDatabase", db: "admin" },
       { role: "readWriteAnyDatabase", db: "admin" } 
     ]
   }
 )
