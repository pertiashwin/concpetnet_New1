import React from 'react';

export default function t1({ details, uniqueRelLabels,handleGetDetails }) {
  console.log("details-----==", details);

  return (
    <div className="App2 table">
      {/* <table> */}
        {Array.from(uniqueRelLabels).map(relLabel => (
          <div>
              <h2>{relLabel}</h2>
            {
              details.map((item, index) => {
                // if (item?.rel?.label === relLabel) {
                  return (
                    <ul key={index}>
                      <li className='listItem'>
                            <b>{item?.end?.language}</b>
                            <p onClick={(e) => {
                                handleGetDetails(item?.end?.label)
                            }}>
                                {item?.end?.label}
                            </p>
                        </li>
                    </ul>
                  );
                // }
                // return null;
              })}
          </div>))}
      {/* </table> */}
    </div>
  );
}