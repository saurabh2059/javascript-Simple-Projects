
const heart = "\u{2764}"
const heart2 = "\u{1F496}"
const heart3 = "\u{2763}"
const heart4 = "\u{1F49D}"
const heart5 = "\u{1F498}"
const heart6 = "\u{1F493}"
const heart7 = "\u{1F49E}"
for (let index = 0; index < 30; index++) {
    if(index%2 === 0){
        const hi = " hello buddy "
        
    console.log(`  ${hi.toLocaleUpperCase()} ${heart}  `)
    }else if(index%3===0){
        const hi = " hello buddy"
        console.log(`  ${hi.toLocaleUpperCase()} ${heart2}`)
    }else if(index%4==0){
        const hi = " hello buddy"
        console.log(`  ${hi.toLocaleUpperCase()} ${heart4}`)
    }else if(index%5===0){
        const hi = " hello buddy"
        console.log(`  ${hi.toLocaleUpperCase()} ${heart5}`)
    }else if(index%6===0){
        const hi = " hello buddy"
        console.log(`  ${hi.toLocaleUpperCase()} ${heart6}`)
    }else if(index%7===0){
        const hi = " hello buddy"
        console.log(`  ${hi.toLocaleUpperCase()} ${heart7}`)
    }else{
        const hi = " hello buddy"
        console.log(`  ${hi.toLocaleUpperCase()} ${heart3}`)
       
    }
    
}