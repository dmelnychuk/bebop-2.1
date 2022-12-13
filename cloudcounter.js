const str = 'Python was developed by Guido van Rossum in the late eighties and early nineties at the National Research Institute for Mathematics and Computer Science in the Netherlands. Python is derived from many other languages, including ABC, Modula-3, C, C++, Algol-68, SmallTalk, and Unix shell and other scripting languages. Python is copyrighted. Python source code is now available under the GNU General Public License (GPL)';
const findTopThree = (str = '') => {
   str = str
   .replace(/[^\w\s]|_/g, "")
   .replace(/\s+/g, " ")
   .toLowerCase();
   const arr = str.split(' ');
   const map = {};
   arr.forEach(word => {
      map[word] = (map[word] || 0) + 1;
   });
   const res = Array.from(Object.keys(map), key => [key, map[key]]);
   res.sort((a, b) => b[1] - a[1]);
   return [res[0][0], res[1][0], res[2][0]];
};
console.log(typeof(findTopThree(str)));