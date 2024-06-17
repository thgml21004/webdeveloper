CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    FullName VARCHAR(100),
    DateOfBirth DATE,
    RegistrationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    LastLogin TIMESTAMP NULL,
    Status VARCHAR(20) DEFAULT 'Active'
);


char(1) : 'a,b,c' => 도메인
smallint
int : -0 + 정수
varchar(255) : 한글, 특수문자, 아랍어, 중국어 (용량)
text : 내용
datetime


Users : 테이블이름
Username : 필드, 속성명
VARCHAR(50) : 데이터타입
NOT NULL : 빈값을 받지 않겠다., 빈값허용여부, 폼에서 필수 입력 값
DEFAULT NULL : 빈값을 받겠다., 설계필드
TIMESTAMP DEFAULT CURRENT_TIMESTAMP : 현재시간을 넣겠다.
AUTO_INCREMENT PRIMARY KEY : 컴퓨터가 관리하겠다.


-- 설계 시나리오
상담신청 테이블 생성해줘 기본필드로는
성함, 전화번호, 치료가 있는데
치료는 셀렉트태그로  임플란트 , 교정등등 정해져있어


CREATE TABLE ConsultationRequests (
    RequestID INT AUTO_INCREMENT PRIMARY KEY, -- (식별자 PK)       -- 상담 요청의 고유 ID, 자동으로 증가
    Name VARCHAR(100) NOT NULL,                     -- 상담을 요청하는 사람의 이름, 최대 100자
    PhoneNumber VARCHAR(20) NOT NULL,               -- 상담 요청자의 핸드폰 번호, 최대 100자
    Treatment ENUM('i','o','t','r','n') NOT NULL,   -- 상담받고 싶은 치료 옵션
    PrivacyPolicyConsent BOOLEAN NOT NULL,          -- 개인정보 취급방침 동의 여부, TRUE 또는 FALSE
    RequestDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 상담 요청이 접수된 날짜와 시간, 기본값은 현재 시간
);

-- Name은 보편적으로 쓰이고 있어서 c_name으로 바꿔서 쓰는게 좋다.
-- Name VARCHAR(100) => Name VARCHAR(255) : 외국인이 입력할수도 있으니깐 넉넉하게 변경하는게 좋다.
-- PhoneNumber VARCHAR(20) : -이 들어 올 수 있어서

<input type="text" name="c_name">
<select name="treatment">
    <option value="i">인플란트</option>
    <option value="o">교정</option>
    ...
</select>


1차테이블 회원
CREATE TABLE Members (
    MemberID INT AUTO_INCREMENT PRIMARY KEY,
    MemberName VARCHAR(50) NOT NULL,
    Contact VARCHAR(20),
    Email VARCHAR(100),
    SignupDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    Grade VARCHAR(20)
);

SELECT
pu.OrderNumber,
m.MemberID,
m.MemberName,
p.ProductCode,
p.ProductName,
pu.PurchasePrice,
pu.PurchaseDate,
pu.PurchaseQuantity
FROM Purchases pu
JOIN Members m ON pu.MemberID = m.MemberID
JOIN Products p ON pu.ProductCode = p.ProductCode;


