import BaseService from './base.service';

const COLORS_ENDPOINT = '/colors';

const colorsService = new BaseService(COLORS_ENDPOINT);

export default colorsService;
