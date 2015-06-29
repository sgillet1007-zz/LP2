var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// **1**

// for (var i=0; i<animals.length-1;i++){
// 	console.log(animals[i]);
// }

// **2**
// for (var i=0; i<animals.length;i+=2){
// 	console.log(animals[i]);
// }

// **3**

// for (var i=4; i > -1; i--){
// 	console.log(animals[i]);
// };

// **4**

for (var i=0; i<animals.length; i++){
	if (i === 0 || i === animals.length){
		console.log(animals[i]);	
	}
	else {
		console.log(animals[i]);
		console.log(animals[i]);	
	}
	
};