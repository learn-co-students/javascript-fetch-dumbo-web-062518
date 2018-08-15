const app = "I don't do much.";
// const fetchData = function(){
fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(res => res.json())
  .then(json => console.log(json))
  .then(result => console.log(result))
// let finalResponse = await response.json()


// async function stuff(){
// 	const result = await fetch('https://api.github.com/repos/jquery/jquery/commits')
// 	const finalResult = await result.json()
// 	console.log('Woo done!', finalResult)
// 	return finalResult
// }

// stuff()


// const sum = (num1, num2) => num1 + num2


// console.log(f())
// .then(data => console.log(data))
// .then(lastResult => console.log("lastResult", lastResult))

// function printData(data){
// 	// do something
// }


// var getGenres = function() {
//   return new Promise(function(resolve) {
//     setTimeout(function(){
//       resolve(['comedy', 'drama', 'action'])
//     }, 2000);
//   });
// }

// We start an 'async' function to use the 'await' keyword
// (async function(){
//   var result = await getGenres()
//   console.log('Woo done!', result)

//   // But the best part is, we can just keep awaiting different stuff, without ugly .then()s
//   var somethingElse = await getSomethingElse()
//   var moreThings = await getMoreThings()
// })()
