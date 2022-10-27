// for (let i = 1; i < 10; i++) {
//     for (let i = 1; i < 10; i++) {
//         document.write(`${a} x ${b} = ${a * b}<br>`)
//         b = b + 1
//     }
//     a = a + 1
//     b = b - 9
// }
// for (let i = 1; i < 10; i++) {
//     for (let i = 1; i < 10; i++) {
//         document.write(`
//     <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border: 1px solid #ddd;">
//     <tbody>
//       <tr>
//         <td>${a} x ${b} = ${a * b}</td>
//       </tr>
//     </tbody>
//   </table>
//     `)
//         b = b + 1
//     }
//     a = a + 1
//     b = b - 9
// }

let a = 1
let b = 1

document.write(`<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border: 1px solid #ddd; border-bottom: none;"><tbody>`)

for (let i = 1; i < 10; i++) {
    document.write(`<tr>`)
    for (let i = 1; i < 10; i++) {
        document.write(`
       <td style="border-right: 1px solid #ddd; border-bottom: 1px solid #ddd;">${a} x ${b} = ${a * b}</td>
    `)
        a = a + 1
    }
    document.write(`</tr>`)
    b = b + 1
    a = a - 9
}

document.write(`</tbody></table>`)