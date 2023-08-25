let prom1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("mohit");
	},2000)
});
let prom2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Ram");
	},1000)
})
let prom3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		reject("rohit");
	},1000)
})
	window.promises = [prom1,prom2,prom3];
let x = Promise.any(promises);
x.then((data)=>{
	output.textContent = data;
})
let output = document.getElementById("output");


// Do not change the code above this
// add your promises to the array `promises`
