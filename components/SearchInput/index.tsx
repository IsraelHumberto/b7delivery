import styles from "./style.module.css";
import { useState } from "react";

type Props = {
  mainColor: string
  onSearch: (searchValue: string) => void
}

const SearchInput = ({mainColor, onSearch}: Props) => {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.code === 'Enter' || event.code === 'NumpadEnter') {
      onSearch(searchValue)
    }
  }

  return (
    <div className={styles.container}
      style={{borderColor: focused ? mainColor : "#fff"}}
    >
      <div className={styles.button}></div>
      <input
        type="text"
        className={styles.input}
        placeholder="Digite o nome do produto"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
