import { Segment, Form } from 'semantic-ui-react';

export default function SearchBar({ onFormSubmit, inputValue, onChangeInputValue }) {
    const handleSubmit = () => {
      onFormSubmit(inputValue);
    };
  
    const handleChange = (event) => {
      onChangeInputValue(event.target.value);
    };
  
    return (
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            placeholder="Votre recherche"
            icon="search"
            iconPosition="left"
            value={inputValue}
            onChange={handleChange}
          />
        </Form>
      </Segment>
    );
  }