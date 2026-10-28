const temperatureSlider = document.getElementById("temperature");
const temperatureValue = document.getElementById("temperature-value");
const depthSlider = document.getElementById("depth");
const depthValue = document.getElementById("depth-value");
const environmentResult = document.getElementById("environment-result");

function updateEnvironment() {
  // Stop safely if the environment controls are not on this page.
  if (
    !temperatureSlider ||
    !temperatureValue ||
    !depthSlider ||
    !depthValue ||
    !environmentResult
  ) {
    return;
  }

  const temperature = Number(temperatureSlider.value);
  const depth = Number(depthSlider.value);

  temperatureValue.textContent = `${temperature}°C`;
  depthValue.textContent = `${depth} m`;

  let temperatureMessage;

  if (temperature < 8) {
    temperatureMessage =
      "Cold water: some jellyfish species are adapted to cooler environments.";
  } else if (temperature < 20) {
    temperatureMessage =
      "Cool to temperate water: many marine species can live in these conditions.";
  } else {
    temperatureMessage =
      "Warm water: some jellyfish thrive in warmer seas, depending on the species.";
  }

  let depthMessage;

  if (depth < 50) {
    depthMessage =
      "Shallow water receives more sunlight, supporting photosynthesis in nearby marine ecosystems.";
  } else if (depth < 200) {
    depthMessage =
      "Deeper water receives less sunlight, and conditions can differ from the surface.";
  } else {
    depthMessage =
      "Deep water is dark and often cold. Only species adapted to these conditions can thrive there.";
  }

  environmentResult.textContent =
    `${temperatureMessage} ${depthMessage}`;
}

if (temperatureSlider && depthSlider) {
  temperatureSlider.addEventListener("input", updateEnvironment);
  depthSlider.addEventListener("input", updateEnvironment);
  updateEnvironment();
}
