import type { Schema, Attribute } from '@strapi/strapi';

export interface LitterComponentsPuppy extends Schema.Component {
  collectionName: 'components_litter_components_puppies';
  info: {
    displayName: 'Puppy';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    titles: Attribute.String;
    owner: Attribute.String;
    results: Attribute.Blocks;
    hometown: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface LitterComponentsParents extends Schema.Component {
  collectionName: 'components_litter_components_parents';
  info: {
    displayName: 'parents';
  };
  attributes: {
    sire_name: Attribute.String;
    sire_titles: Attribute.String;
    dam_name: Attribute.String;
    dam_titles: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'litter-components.puppy': LitterComponentsPuppy;
      'litter-components.parents': LitterComponentsParents;
    }
  }
}
