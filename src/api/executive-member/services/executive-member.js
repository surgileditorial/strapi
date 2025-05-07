'use strict';

/**
 * executive-member service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::executive-member.executive-member');
