let count = '';

for(var i = 0; i < 4; i++) {
    count += `<li> \n`;
    count += `\t <a href=''>${i}번 대메뉴</a> \n`;
    count += `\t <ul> \n`;
    for(var j = 0; j < 5; j++) {
        count += `\t \t <li>${j}번 소메뉴</li> \n`;
    }
    count += `\t </ul> \n`;
    count += `</li> \n`;
}

console.log(count);