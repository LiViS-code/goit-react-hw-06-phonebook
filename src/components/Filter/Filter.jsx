import PropTypes from "prop-types";
import { FcFilledFilter } from "react-icons/fc";
import { Container } from "./Filter.styled";
import { Input, Label } from "../ContactForm/ContactForm.styled";

export default function Filter({ onFilter, filter }) {
  const handleInput = (e) => {
    onFilter(e.target.value);
  };

  return (
    <Container>
      <Label htmlFor="inputFilter">
        <FcFilledFilter />
        Find contacts by name
      </Label>
      <Input
        id="inputFilter"
        type="text"
        value={filter}
        name="filter"
        onChange={handleInput}
      ></Input>
    </Container>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
