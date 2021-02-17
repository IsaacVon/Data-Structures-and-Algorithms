// SQL
-- Total posts in last 30 days
SELECT COUNT(*)
FROM postsSOCI
WHERE created_at >= DATE_SUB(SYSDATE(), INTERVAL 30 DAY)

-- Total posts in last 30 days with email test@gmail.com
SELECT COUNT(*)
FROM usersSOCI
JOIN postsSOCI ON usersSOCI.id = postsSOCI.user_id
WHERE email = 'test@gmail.com' AND created_at >= DATE_SUB(SYSDATE(), INTERVAL 30 DAY) 

-- Index added to post table
CREATE INDEX idx_user_id ON postsSOCI (user_id);