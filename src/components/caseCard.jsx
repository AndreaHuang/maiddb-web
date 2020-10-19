import React from "react";

import Hate from "./hate";
import Share from "./share";
import ExternalSource from "./externalSource";
import Age from "./age";
import TextContent from "./textContent";
import ImageGrid from "./imageGrid";
import CountryFlag from "./countryFlag";

const CaseCard = ({ data }) => {
  return (
    <div className="card bg-white mx-10 h-100 shadow-sm rounded">
      <header className="d-flex m-2 justity-content-left">
        <span className="badge badge-danger" style={{ padding: "0.4em" }}>
          {data.maid.name}
        </span>

        <CountryFlag nationality={data.maid.nationality} />
        <Age
          birthYear={data.maid.yearOfBirth}
          birthMonth={data.maid.monthOfBirth}
        ></Age>
      </header>
      <div className="card-body">
        <div className="d-flex flex-row justify-content-start mb-2">
          {data.categories.map((catogory, idx) => (
            <span className="badge badge-warning" key={idx}>
              {catogory}
            </span>
          ))}
        </div>
        <TextContent content={data.details} className="card-text" />
        <ImageGrid images={data.files} />
      </div>
      <footer className="d-flex justify-content-end">
        {data.reference && (
          <div className="d-flex justify-content-start">
            <small>
              <ExternalSource
                name={data.reference.source}
                link={data.reference.link}
              />
            </small>
          </div>
        )}
        <div className="d-flex justify-content-start">
          <Share
            onClick={() => {
              console.log("To Share this post");
            }}
          />
        </div>
        <div className="d-flex justify-content-start">
          <Hate
            hated={true}
            count={100}
            onToggle={() => {
              console.log("Hate icon is clicked");
            }}
          />
        </div>
        <div className="d-flex justify-content-end">
          {" "}
          <small className="text-muted">
            {data.author.name ? data.author.name : null}
            {data.postDate ? data.postDate : null}
          </small>
        </div>
      </footer>
    </div>
  );
};

export default CaseCard;
