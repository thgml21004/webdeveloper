window.onload = function() {
    const tabbtn = document.querySelectorAll("#tab li");
    tabbtn.forEach(function(ele, idx) { //element:태그 idex:넘버링
        ele.addEventListener('click', function() {

            const siblings = this.parentElement.children; // 현재 요소와 함께 부모 요소의 다른 모든 자식 요소를 포함 // 나의 부모의 자식들 (html object)
            for (let sibling of siblings) {
                sibling.classList.remove = 'on';
            }
            // this.classList = 'on'; // 초기화
            // this.classList += ' on'; // 추가대입식
            this.classList.add('on'); // 추가클래스 // 띄어쓰기 안해도 됨 // this.classList.remove 반대
        })
    })
}