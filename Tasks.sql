--2
SELECT role "роль",
  count(*) "количество"
FROM "Users"
WHERE role IN('customer', 'creator')
GROUP BY role;


--3
WITH t AS (
  SELECT sum("prize" / 10 ) as cashback, "userId" as userid
  FROM "Contests" c
  JOIN "Users" u ON c."userId" = u.id
  WHERE c."createdAt" BETWEEN date('2022-02-14') and date('2022-03-08')
  GROUP BY c."userId" 
)
UPDATE "Users" u 
SET balance = balance + t.cashback
FROM t
WHERE u.id = t.userid
AND u."role" = 'customer'
;


--4
UPDATE "Users"
SET balance = balance + 10
WHERE id IN (
    SELECT id
    FROM "Users"
    WHERE "role" IN ('creator')
    ORDER BY rating DESC
    LIMIT 3
  );



