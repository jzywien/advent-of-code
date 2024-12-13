import { Point } from '@util/geom';

export const convexHull = (points: Point[]): Point[] => {
   let n = points.length;
   if (n <= 3) return points;

   points.sort((a, b) => a.x - b.x || a.y - b.y);
   let ans = new Array(2 * n).fill(null);

   // Build lower hull
   let k = 0;
   for (let i = 0; i < n; i++) {
      while (k >= 2 && Point.crossProduct(ans[k-2], ans[k-1], points[i]) <= 0) k--;
      ans[k] = points[i];
      k++;
   }

   // Build upper hull
   let t = k + 1;
   for (let i = n - 2; i >= 0; i--) {
      while (k >= t && Point.crossProduct(ans[k-2], ans[k-1], points[i]) <= 0) k--;
      ans[k] = points[i];
      k++;
   }

   return ans.slice(0, k-1);
}