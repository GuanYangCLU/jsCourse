/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    let menu = { Table: {} }; // key: table number
    let col = 0;
    for (let i=0;i<orders.length;i++) {
        let tabIdx = orders[i][1];
        let food = orders[i][2];
        if (!(tabIdx in menu)) { // no this table
            menu = { ...menu, [tabIdx]: { [food]: '1' }, Table: { ...menu['Table'], [food]: true } };
        } else {
            if (!(food in menu[tabIdx])) {
                menu = { ...menu, [tabIdx]: { ...menu[tabIdx], [food]: '1'}, Table: { ...menu['Table'], [food]: true } };
            } else {
                menu = { ...menu, [tabIdx]: { ...menu[tabIdx], [food]: `${parseInt((menu[tabIdx])[food]) + 1}` }, Table: { ...menu['Table'], [food]: true } };
            }
        }
    }
    // transfer obj table to sorted array
    const { Table, ...rest } = menu;
    let thead = Object.keys(Table);
    thead.sort();
    // console.log(thead);
    let tbody = Object.entries(rest).map(([tid, tfood]) => {
        const tfoodArr = thead.map((food) => ((food in tfood) ? tfood[food] : '0'));
        return [tid, ...tfoodArr];
    })
    tbody.sort((a,b) => parseInt(a[0]) - parseInt(b[0]));
    const finalThead = ['Table', ...thead];
    const res = [finalThead, ...tbody];
    return res;
};
