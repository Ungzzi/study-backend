const { parse } = require('csv-parse/sync');
const fs = require('fs');

const csv = fs.readFileSync('csv/data.csv');
const records = parse(csv.toString('utf-8'));
records.forEach((r, i) => {
    console.log(i, r); // r[0] 제목, r[1] 링크
});