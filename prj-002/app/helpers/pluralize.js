import { helper } from '@ember/component/helper';

export function pluralize(params/*, hash*/) {
  let [count,zero,one,plus]=params;
  if (count===0){
    return zero;
  }
  if (count===1){
    return one;
  }

  return plus;
}

export default helper(pluralize);
