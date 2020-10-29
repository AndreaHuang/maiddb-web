import React from "react";

import Hate from "./hate";
import Share from "./share";
import ExternalSource from "./externalSource";
import Age from "./age";
import ImageGrid from "./imageGrid";
import CountryFlag from "./countryFlag";
import { ReadMore } from '@bisvarup/react-read-more'
import parser from 'html-react-parser';

const CaseCard = ({ data, imageModalId, toggleImageModal }) => {
  return (
    <div className="card">
      <header className="card-header">
        <div className="maid-name">
          {data.maid.name}
        </div>

        <CountryFlag nationality={data.maid.nationality} />
        <Age
          birthday={data.maid.birthday}
        ></Age>
      </header>
      <div className="card-body">
        <div className="card-tags">
          {data.categories.map((catogory, idx) => (
            <div className="case-tag" key={idx}>
              {catogory}
            </div>
          ))}
        </div>
        <div className="card-text">
          <ReadMore readMoreClass="card-text-view-more"
            lineHeight={2.5}
            height={5}
            readMoreStyles={{
              "background-color": "var(--light",
              "font-size": "1rem",
              "line-height": "2rem"
            }}>
            {parser(data.details)}
          </ReadMore>
        </div>
        <ImageGrid images={data.files} imageModalId={imageModalId} toggleImageModal={toggleImageModal} />
      </div>
      <footer className="card-footer">
        <div className="card-footer-line">

          {/* <div className="share">
          <Share
            onClick={() => {
              console.log("To Share this post");
            }}
          />
        </div>
        <div className="angry">
          <Hate
            hated={true}
            count={100}
            onToggle={() => {
              console.log("Hate icon is clicked");
            }}
          />
        </div> */}

        </div>
        <div className="card-footer-line">
          {data.postDateDisplay ? data.postDateDisplay + (data.author.authorDisplay ? " by " + data.author.authorDisplay : "") : null}

          {data.reference &&
            <div className="externalReference">
              <ExternalSource
                name={data.reference.source}
                link={data.reference.link}
              />
            </div>
          }
        </div>
      </footer>
    </div >
  );
};

export default CaseCard;
