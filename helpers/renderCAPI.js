const renderCAPI = content => {
  return content.reduce((accumulator, current) => {
    const { content: innerContent, emphasis, text, type, uri } = current;
    if (type === 'link') return `${accumulator}<a href=${uri} target="_blank" rel="noopener noreferrer">${text || renderCAPI(innerContent)}</a>`;
    if (type === 'emphasis' && emphasis === 'BOLD') return accumulator + `<strong>${(text || renderCAPI(innerContent))}</strong>`;
    if (type === 'emphasis' && emphasis === 'ITALIC') return accumulator + `<em>${(text || renderCAPI(innerContent))}</em>`;
    return accumulator + text;
  }, '');
};

export default renderCAPI;
