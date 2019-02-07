import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const DeepLearning = ({ data }) => (
  <Layout>
    <Head pageTitle={data.deepLearningJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.deepLearningJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

DeepLearning.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DeepLearning;

export const query = graphql`
  query DeepLearningQuery {
    deepLearningJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
