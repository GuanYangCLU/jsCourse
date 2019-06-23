const i = 101;
const s = i.toString();
const t1 = s.split("");
const t2 = t1.reverse();
let sum = t1.reduce((a,x,i)=>{if (x===t2[i]) {a +=1}; return a;}, 0);
console.log(sum);

const a = [1,3,3,4,4,5,10];
let r = a.reduce((s,x,i) => {
                                if (i <= 0) {
                                    return s += x;
                                }
                                if (i === a.length) {
                                    return s += ',' + x;
                                }
                                if (x > a[i-1] + 1) {
                                    return s += ','+x;
                                }
                                else {
                                    return s;
                                }
                            }, '');
console.log(r);
