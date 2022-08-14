CREATE TABLE "Catalogs"(
  id integer PRIMARY KEY,
  "userId" integer REFERENCES "Users"(id) NOT NULL,
  "catalogName" varchar(255),
  chats integer ARRAY,
  "createdAt" timestamptz DEFAULT current_timestamp NOT NULL,
  "updatedAt" timestamptz DEFAULT current_timestamp NOT NULL
);

CREATE TABLE "Conversations"(
  id integer PRIMARY KEY,
  "userOneId" integer REFERENCES "Users"(id) NOT NULL,
  "userTwoId" integer REFERENCES "Users"(id) NOT NULL,
  "blackList" boolean ARRAY NOT NULL,
  "favoriteList" boolean ARRAY NOT NULL,
  "createdAt" timestamptz DEFAULT current_timestamp NOT NULL,
  "updatedAt" timestamptz DEFAULT current_timestamp NOT NULL
);

CREATE TABLE "CatalogsToConversations" (
  "catalogId" integer NOT NULL, 
  "conversationId" integer NOT NULL, 
  "createdAt" timestamptz DEFAULT current_timestamp NOT NULL, 
  "updatedAt" timestamptz DEFAULT current_timestamp NOT NULL, 
  PRIMARY KEY ("catalogId", "conversationId"), 
  CONSTRAINT "CatalogsToConversations_catalogId_fkey" 
  FOREIGN KEY ("catalogId") REFERENCES "Catalogs" ("id"), 
  CONSTRAINT "CatalogsToConversations_conversationId_fkey" 
  FOREIGN KEY ("conversationId") REFERENCES "Conversations" ("id")
);

CREATE TABLE "Messages"(
  id integer PRIMARY KEY,
  "senderId" integer REFERENCES "Users"(id) NOT NULL, 
  "conversationId" integer REFERENCES "Conversations"(id) NOT NULL,
  body varchar(255),
  "createdAt" timestamptz DEFAULT current_timestamp NOT NULL,
  "updatedAt" timestamptz DEFAULT current_timestamp NOT NULL
);

