```sql
-- Get childs by parent id
WITH Tree
AS
(
    SELECT Id,ParentId FROM dbo.Node P WHERE P.Id = 21 -- parent id
    UNION ALL
    SELECT C.Id,C.ParentId FROM dbo.Node C
    INNER JOIN Tree T ON C.ParentId = T.Id
)
SELECT * FROM Tree

-- Get parents by child id
WITH Tree
AS
(
    SELECT Id,ParentId FROM dbo.Node C WHERE C.Id = 57 -- child id
    UNION ALL
    SELECT P.Id,P.ParentId FROM dbo.Node P
    INNER JOIN Tree T ON P.Id = T.ParentId
)
SELECT * FROM Tree
```
