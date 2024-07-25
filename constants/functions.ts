export const timeAgo = (date: string) => {
    const now = new Date().getTime();
    const secondsPast = (now - Date.parse(date)) / 1000;
  
    if (secondsPast < 60) {
      return `${Math.round(secondsPast)} s`;
    } else if (secondsPast < 3600) {
      return `${Math.round(secondsPast / 60)} m`;
    } else if (secondsPast < 86400) {
      return `${Math.round(secondsPast / 3600)} h`;
    } else if (secondsPast < 2592000) {
      return `${Math.round(secondsPast / 86400)} d`;
    } else if (secondsPast < 31536000) {
      return `${Math.round(secondsPast / 2592000)} m`;
    } else {
      return `${Math.round(secondsPast / 31536000)} y`;
    }
  };

export const getFormattedAuthorName = (author : string) => {
    if (!author) return '';

    const [firstName, lastName] = author.split(' ');

    if (!lastName) return firstName;

    return `${firstName} ${lastName.charAt(0)}.`;
};

// src/constants/functions/dateUtils.ts
export const formatReadableDate = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// src/constants/functions/stringUtils.ts
export const stripSymbols = (text: string): string => {
  return text.replace(/[^\w\s]/gi, ''); // Remove all non-alphanumeric characters except spaces
};