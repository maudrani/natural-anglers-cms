'use strict';

/**
 * lia service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lia.lia');
