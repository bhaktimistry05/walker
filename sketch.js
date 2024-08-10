function setup() {
  createCanvas(400, 400);
  background(240);
  stroke("black");

  let seedX = 200,
    seedY = 400,
    step = 12,
    maxGenerations = 9;

  // call the function
  branch(seedX, seedY, step, maxGenerations);
}

// cookiecutter for Y-shaped branches
// takes initial X Y coordinates of lower part of Y
// uses step to determine how far to go
// grows up => Y parameter always decreases
// stops when max generations is reached
function branch(seedX, seedY, step, maxGenerations) {
  // 0 create variations
  let wind = random(-step, step);
  step += wind;
  // 0.1 define stop point
  // decrease max generations
  maxGenerations = maxGenerations - 1;
  // 0.2 check if maximum number of generations was not reached
  if (maxGenerations > 0) {
    // here goes full code for branches
    // 1. find whereToGrow
    let whereToGrowX = seedX + wind;
    let whereToGrowY = seedY - (step + wind)/2;

    // 2. draw line from seed to whereToGrow point
    line(seedX, seedY, whereToGrowX, whereToGrowY);

    // 3. find pointLeft
    let pointLeftX = whereToGrowX - step,
      pointLeftY = whereToGrowY - step;
    // 4. draw line from whereToGrow to pointLeft
    line(whereToGrowX, whereToGrowY, pointLeftX, pointLeftY);
    // 4.1 start over growing from LEFT
    branch(pointLeftX, pointLeftY, step, maxGenerations);

    // 5. find pointRight
    let pointRightX = whereToGrowX + step,
      pointRightY = whereToGrowY - step;
    // 6. draw line from whereToGrow to pointRight
    line(whereToGrowX, whereToGrowY, pointRightX, pointRightY);
    // 6.1 start over growing from RIGHT
    branch(pointRightX, pointRightY, step, maxGenerations);
  }
}
