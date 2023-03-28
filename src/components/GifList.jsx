import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIds, setSelectedGidId } = props;
  // const gifIds = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"];
  return (
    <div className="gif-list">
      { gifIds.map((gifId) => <Gif gifId={gifId} setSelectedGidId={setSelectedGidId} key={gifId} />) }
    </div>
  );
};

export default GifList;
