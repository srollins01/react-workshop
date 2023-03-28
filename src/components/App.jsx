import React from 'react';
import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';

const App = () => {
  const gifIds = ["13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"];
  const selectedGifId = "gG6OcTSRWaSis";
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
      </div>
      <div className="selected-gif">
        <Gif gifId={selectedGifId} />
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} />
      </div>
    </div>
  );
};

export default App;
