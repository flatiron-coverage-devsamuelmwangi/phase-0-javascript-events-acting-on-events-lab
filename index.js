// Your code here
// Moves the DODGER to the left
let moveDodgerLeft = () => {
	var left = dodger.style.left
	left = parseInt(left)
	dodger.style.left = `${left - 1}px`;
}

// Moves the DODGER to the right 
let moveDodgerRight = () => {
	var left = dodger.style.left
	left = parseInt(left)
	dodger.style.left = `${left + 1}px`;
}
