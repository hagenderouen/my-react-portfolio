import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const DownloadLink = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "Hagen-Derouen-Resume" } }) {
        nodes {
          publicURL
        }
      }
    }
  `);
  return (
    <a className="cta-btn cta-btn--resume" href={data.allFile.nodes[0].publicURL} download>
      {children}
    </a>
  );
};

DownloadLink.propTypes = {
  children: PropTypes.node,
};

export default DownloadLink;
