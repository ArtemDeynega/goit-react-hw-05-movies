import { BiSearchAlt } from 'react-icons/bi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Input, Header, Form } from '.';

export const SearchBar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = evt => {
    setSearchValue(evt.target.value);
  };
  const hableInputChange = evt => {
    evt.preventDefault();
    if (searchValue.trim() === '') {
      toast.warn(`Введите слово для поиска`);
      return;
    }
    onSubmit(searchValue.trim().toLowerCase());
    setSearchValue('');
  };

  return (
    <>
      <Header>
        <Form onSubmit={hableInputChange}>
          <Input
            placeholder="Search movie"
            value={searchValue}
            onChange={handleSubmit}
          />
          <button type="submit">
            <BiSearchAlt
              style={{
                marginRight: 'auto',
                marginLeft: 'auto',
                color: 'black',
              }}
            />
          </button>
        </Form>
      </Header>
    </>
  );
};
