const elem = document.getElementById('output3');

export const testVoid = (test: string) => {
  console.log(test)

  const a: string = test;

  if(elem){ // 引数がnullでない場合
    elem.innerHTML = '引数testには: 「' + a + '」 が、代入されています';
  }
}