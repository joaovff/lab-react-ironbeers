import { useState } from "react";

function NewBeer(props) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuation, setAttenuation] = useState(0);
  const [contributed, setContributed] = useState("");

  function handleNameInput(event) {
    setName(event.target.value);
  }
  function handleTaglineInput(event) {
    setTagline(event.target.value);
  }
  function handleDescriptionInput(event) {
    setDescription(event.target.value);
  }
  function handleFirstBrewedInput(event) {
    setFirstBrewed(event.target.value);
  }
  function handleBrewersTipsInput(event) {
    setBrewersTips(event.target.value);
  }
  function handleAttenuationInput(event) {
    setAttenuation(event.target.value);
  }
  function handleContributedInput(event) {
    setContributed(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation: attenuation,
      contributed_by: contributed,
    };

    props.setBeers(props.beers.concat(newBeer));

    setName("");
    setTagline("");
    setDescription("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuation(0);
    setContributed("");
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <label for="name">Name</label>
      <input onChange={handleNameInput} type="text" id="name" value={name} />
      <label for="tagline">Tagline</label>
      <input
        onChange={handleTaglineInput}
        type="text"
        id="tagline"
        value={tagline}
      />
      <label for="description">Description</label>
      <input
        onChange={handleDescriptionInput}
        type="text"
        id="description"
        value={description}
      />
      <label for="first_brewed">First Brewed</label>
      <input
        onChange={handleFirstBrewedInput}
        type="text"
        id="first_brewed"
        value={firstBrewed}
      />
      <label for="brewers_tips">Brewers Tips</label>
      <input
        onChange={handleBrewersTipsInput}
        type="text"
        id="brewers_tips"
        value={brewersTips}
      />
      <label for="attenuation">Attenuation</label>
      <input
        onChange={handleAttenuationInput}
        type="text"
        id="attenuation"
        value={attenuation}
      />
      <label for="contributed_by">Contributed By</label>
      <input
        onChange={handleContributedInput}
        type="text"
        id="contributed_by"
        value={contributed}
      />
      <button type="submit">Add new</button>
    </form>
  );
}

export default NewBeer;
