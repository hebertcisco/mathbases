import constants from '../../constants';

import head from '../head';
import find from '../find';

export default (key: any) => head(find(constants.BASE_MAP)(key))[constants.BASE_MAP_INDEX_RADIX];
