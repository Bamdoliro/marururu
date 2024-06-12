const convertLink = (content: string): string => {
  const pattern = /(https?:\/\/\S+)/g;

  return content
    .replace(pattern, '<a href="$1" class="link">$1</a>')
    .replace(/\n/g, '<br />');
};

export default convertLink;
