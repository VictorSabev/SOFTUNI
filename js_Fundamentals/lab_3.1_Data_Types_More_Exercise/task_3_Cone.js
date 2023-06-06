// Task 3 - Cone

function coneParameters(radius, height) {
  const s = Math.sqrt(height ** 2 + radius ** 2);
  const volume = (1 / 3) * Math.PI * radius ** 2 * height;
  const surfaceAreaB = Math.PI * radius ** 2;
  const surfaceAreaL = s * Math.PI * radius;
  const totalSurfaceArea = surfaceAreaB + surfaceAreaL;

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}

coneParameters(3, 5);
coneParameters(3.3, 7.8);
