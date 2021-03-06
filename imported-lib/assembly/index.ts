export class TestArray extends Array<u8>{

  constructor() {
    super(32);
  }

  /* Skip warnings */
  // @ts-ignore
  map(callbackfn: (value: u8, index: i32, array: Array<u8>) => u8): Array<u8> {
    return super.map<u8>(callbackfn);
  }

  // @ts-ignore
  reduce(callbackfn: (previousValue: u8, currentValue: u8, currentIndex: i32, array: Array<u8>) => u8, initialValue: u8): u8 {
    return super.reduce<u8>(callbackfn, initialValue);
  }

  // @ts-ignore
  reduceRight(callbackfn: (previousValue: u8, currentValue: u8, currentIndex: i32, array: Array<u8>) => u8, initialValue: u8): u8 {
    return super.reduceRight<u8>(callbackfn, initialValue);
  }
}

export function test(): i32 {
  const t = new TestArray();
  return 1;
}