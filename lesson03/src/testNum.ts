export class testNum {
  constructor(private nums:number){}

  public output(elem: HTMLElement | null) : void {
    if(elem){ // 引数がnullでない場合
      elem.innerHTML = '数字: ' + this.nums;
    }
  }
}