import { RecentContainer } from "./recent.styles";
import PropTypes from "prop-types";
import React from "react";

<<<<<<< HEAD
const RecentlySearched = ({ recent, seachForOldSearch }) => {
  return (
    <RecentContainer>
      <h4>Recently Searched: </h4>
      <div style={{ display: "flex", gap: "1em" }}>
        {recent?.map((r, idx) => (
          <p key={idx} onClick={() => seachForOldSearch(r)}>
            {r}
          </p>
        ))}
      </div>
    </RecentContainer>
  );
};
RecentlySearched.propTypes = {
  recent: PropTypes.array.isRequired,
  seachForOldSearch: PropTypes.func.isRequired,
};

export default RecentlySearched;
=======
    return ( 
        <RecentContainer>
        <h4>Recently Searched: </h4>
        <div style={{display: 'flex', gap: '1em'}}>
        {recent.map((r) => <p onClick={() => seachForOldSearch(r)}>{r}</p>)}
        </div>
        </RecentContainer>
     );
}
 
export default RecentlySearched;
>>>>>>> parent of 3b9200a (Organized the backend routes)
