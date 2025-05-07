import type { Schema, Struct } from '@strapi/strapi';

export interface SocialSocials extends Struct.ComponentSchema {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'socials';
    icon: 'link';
  };
  attributes: {
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'social.socials': SocialSocials;
    }
  }
}
