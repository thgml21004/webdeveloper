UPDATE `cms_member`
SET `mb_name` = '그린신도림',
    `mb_nick_date` = '2024-06-05', 
    `mb_email` = 'thgml21004@gmail.com' 
WHERE `cms_member`.`mb_no` = 1;

UPDATE 테이블 이름 
SET 속성 = '값',
WHERE `테이블`.`필드` = 1;

UPDATE 테이블 이름 
SET 속성 = '값';

UPDATE `cms_member`
SET `mb_name` = '그린신도림';
-- cms_member 테이블에서 `mb_name`의 값을 모두 '그린신도림'으로 바꿔라

UPDATE `cms_member`
SET `mb_name` = '그린신도림';
WHERE `mb_no` = 1;
-- cms_member 테이블에서 `mb_no`의 1인 데이터에서 `mb_name`의 값을 '그린신도림'으로 바꿔라

UPDATE `cms_member`
SET `mb_name` = '그린신도림';
WHERE `mb_no` > 10;
-- cms_member 테이블에서 `mb_no`의 10 이상인 데이터들의 `mb_name`의 값을 '그린신도림'으로 바꿔라

DELETE FROM `cms_member`
WHERE `mb_mo` = 2;
-- 데이터 삭제


-- 대소문자 구분하지 않음
-- WHERE은 = / < 밖에 없음
-- mb_level 10 : 최고 관리자
-- 최고 관리자는 삭제 불가

SELECT c.CustomerName as '회원이름', COUNT(o.OrderID) AS '주문회수'
FROM Customers c
JOIN Orders o ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerID
ORDER BY `주문회수` DESC
LIMIT 1;

SELECT c.CategoryName as '카테고리 이름', COUNT(o.CategoryID) AS '상품갯수'
FROM Categories c
JOIN Products o ON c.CategoryID = o.CategoryID
GROUP BY c.CategoryID
ORDER BY `상품갯수` DESC;