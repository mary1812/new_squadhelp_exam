-- Всем юзерам с ролью customer которые делали
-- заказы в период с 25.12 по 14.01 необходимо
-- зачислить по 10% кэшбека со всех заказов в этот период

-- (если баг то можно вернуть кэшбек заказам finished либо
-- начислить его тем юзерам которые были созданы в этот период)


--Second Task
SELECT *
FROM "Contests"
WHERE "status" = 'finished';


--First task
SELECT role "роль", count(*) "количество"
FROM "Users" 
WHERE role IN('customer', 'creator')
GROUP BY role;

--Third task
UPDATE "Users"
SET balance = balance + 10
WHERE id IN (
  SELECT id FROM "Users"
  WHERE "role" IN ('creator')
  ORDER BY rating DESC
  LIMIT 3
  );






