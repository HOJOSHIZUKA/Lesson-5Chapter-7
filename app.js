let num = 0
for(let i = 1; i < 51; i++){

  if( i / 10 == 1 ){
    console.log('今10回ループしました。')
  }
  if( i / 10 == 2 ){
    console.log('今20回ループしました。')
  }
  if( i / 10 == 3 ){
    console.log('今30回ループしました。')
  }
  if( i / 10 == 4 ){
    console.log('今40回ループしました。')
  }
  if( i / 10 == 5 ){
    console.log('50回カウントが終わりました。')
  }

  if( i % 4 == 0){
    console.log('4で割り切れる数です。' + i )
  }
}

// 条件　10で割り切れた時に表示
// console.log('今' + i + '回ループしました。')
// 条件　4で割り切れたときに表示
// console.log('4で割り切れる数です。'+ i +)
// 条件　50回目は終わりの表示
// console.log('50回カウントが終わりました。')

