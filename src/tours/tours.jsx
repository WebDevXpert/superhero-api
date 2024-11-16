import React from "react";
import Tour from "./tour";

function Tours({ superheros, deleteHero, query }) {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {superheros
          .filter((mereHeros) => {
            return mereHeros.name.toLowerCase().startsWith(query);
          })
          .map((mereHeros) => {
            return <Tour {...mereHeros} deleteHero={deleteHero} />;
          })}
      </div>
    </>
  );
}

export default Tours;
