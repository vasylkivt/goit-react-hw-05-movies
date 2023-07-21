import { format } from 'date-fns';

export const formatDate = date => {
  try {
    return format(new Date(date), 'PP', { addSuffix: true });
  } catch (error) {
    return 'No release date... ';
  }
};
