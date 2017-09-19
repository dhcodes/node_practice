var args = process.argv.slice(2);
console.log(args.reduce(function(a,b) {
  return Number(a)+ Number(b);
}))
