const renderCAPI = content => {
  return content.map((current, index) => {
    const { content: innerContent, emphasis, text, type, uri } = current;
    if (type === 'link') return <a key={index} href={uri} target="_blank" rel="noopener noreferrer">{text || renderCAPI(innerContent)}</a>;
    if (type === 'emphasis' && emphasis === 'BOLD') return <strong key={index}>{(text || renderCAPI(innerContent))}</strong>;
    if (type === 'emphasis' && emphasis === 'ITALIC') return <em key={index}>{(text || renderCAPI(innerContent))}</em>;
    return text;
  });
};

export default renderCAPI;
