import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIdList, changeSelectGif } = props;
  // const gifIds = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"];
  return (
    <div className="gif-list">
      { gifIdList.map(
        (gifId) => <Gif gifId={gifId} changeSelectGif={changeSelectGif} key={gifId} />
      )}
    </div>
  );
};

export default GifList;
