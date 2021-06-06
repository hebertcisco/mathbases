import head from '../head';
import ensureUniquePair from '../ensureUniquePair';

export default (xs: number[], ys: number[]) => {
  const a: any = [];
  xs.map((x) => ys.map((y) => a.push(ensureUniquePair(x)(y))));
  return a.filter(head);
};
