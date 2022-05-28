import { BiSearchAlt } from 'react-icons/bi';
import { useState } from 'react';
import { toast } from 'react-toastify';

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
      <header>
        <form onSubmit={hableInputChange}>
          <input
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
        </form>
      </header>
    </>
  );
};
