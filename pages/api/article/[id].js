import get from 'lodash.get';

const ALLESSEH_ENDPOINT = process.env.ALLESSEH_ENDPOINT;
const ALLESSEH_KEY = process.env.ALLESSEH_KEY;

export default async (req, res) => {
  const { query: { id: seoId } } = req;
  const url = `${ALLESSEH_ENDPOINT}/api/articles/v1/wsj/seoId/${seoId}`;
  try {
    const response = await fetch(url, { headers: { 'x-api-key': ALLESSEH_KEY } });
    // Handle HTTP errors
    if (!response.ok) return res.status(response.status).end(response.statusText);
    const json = await response.json();
    // return res.json(json);
    return res.json(formatResponse(json));
  } catch(error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
};

const formatResponse = json => {
  const references = get(json, 'links.related', []);
  const body = get(json, 'data.attributes.body', []).map(element => {
    // Add expanded data to media types
    if (element.type === 'image' || element.type === 'video' || element.type === 'media') {
      const expandedElement = references.find(object => object.id === element.ref) || {};
      return {
        ...element,
        ...expandedElement,
      };
    }
    // Add expanded data to paragraphs
    if (element.type === 'paragraph') {
      element.content = element.content.map(paragraph => {
        if (paragraph.ref) {
          const expandedElement = references.find(object => object.id === paragraph.ref) || {};
          return {
            ...paragraph,
            ...expandedElement,
          };
        }
        return paragraph;
      });
      return element;
    }
    // Return default elements that require no transformations or aggregations
    return element;
  });
  const article = {
    headline: get(json, 'data.attributes.headline.text'),
    subheadline: get(json, 'data.attributes.standfirst.content[0].text'),
    sectionName: get(json, 'data.attributes.section_name'),
    sectionType: get(json, 'data.attributes.section_type'),
    byline: get(json, 'data.attributes.byline'),
    hero: body.length > 0 && (body[0].type === 'image' || body[0].type === 'video') && body.shift(),
    body,
    published: get(json, 'data.attributes.published_datetime'),
    updated: get(json, 'data.attributes.updated_datetime'),
  };
  return article;
};
