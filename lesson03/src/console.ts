const elem = document.getElementById('output2');

export const testConsoleLog = () => {

  const a: 'foo' = 'foo';
  // const b: 'bar' = 'foo'; // error bar という型にしてるので、fooが変数に代入できない
  // const b: string = 'true'; // success string型なので、文字列代入可能
  const b: string = a; // success foo型のaも代入可能

  if(elem){ // 引数がnullでない場合
    elem.innerHTML = 'a: ' + a + ',b: ' + b;
  }
}