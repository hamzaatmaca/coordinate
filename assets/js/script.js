var findMyLocation = document.getElementById("findmylocation");
var inputs = document.getElementsByTagName("INPUT");

findMyLocation.addEventListener("click", () => {
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localitylanguage=en`
    )
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].readOnly = true;
          inputs[0].value = data.latitude;
          inputs[1].value = data.longitude;
          inputs[2].value = data.continent;
          inputs[3].value = data.countryName;
          inputs[4].value = data.city;
          inputs[5].value = data.locality;
        }
      });
  };
  const error = () => {
    console.log("error");
  };

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("geolocation is not avaliable");
  }
});
