let dayoutput = "";

for(let week = 0; week < 4; week++) {
    for(let daynm = 1; daynm < 8; daynm++){
        dayoutput += daynm+"\t";  // \t :탭
    }
    dayoutput += "\n";
}

console.log(dayoutput);