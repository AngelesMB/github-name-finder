const callToApi = (URL, username) => {
  return fetch(`${URL}/${username}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Not Found") {
        return "User not found";
      } else {
        const firstName =
          data.name !== null
            ? data.name.split(" ")[0]
            : "Name not found";
        return firstName;
      }
    });
};

export default callToApi;
