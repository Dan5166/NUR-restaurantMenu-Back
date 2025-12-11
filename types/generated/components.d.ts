import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAllergen extends Struct.ComponentSchema {
  collectionName: 'components_shared_allergens';
  info: {
    description: 'Food allergen information';
    displayName: 'Allergen';
    icon: 'exclamation-triangle';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    severity: Schema.Attribute.Enumeration<['low', 'medium', 'high']> &
      Schema.Attribute.DefaultTo<'medium'>;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    description: 'Restaurant contact information';
    displayName: 'Contact Info';
    icon: 'phone';
  };
  attributes: {
    address: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    email: Schema.Attribute.Email;
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    phone: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    tiktok: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    website: Schema.Attribute.String;
  };
}

export interface SharedNutritionalInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_nutritional_infos';
  info: {
    description: 'Dish nutritional information';
    displayName: 'Nutritional Info';
    icon: 'chart-pie';
  };
  attributes: {
    calories: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    carbs: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    fat: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    fiber: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    protein: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    sodium: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface SharedTag extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    description: 'Dish tags (vegetarian, vegan, spicy, etc.)';
    displayName: 'Tag';
    icon: 'tag';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#6b7280'>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.allergen': SharedAllergen;
      'shared.contact-info': SharedContactInfo;
      'shared.nutritional-info': SharedNutritionalInfo;
      'shared.tag': SharedTag;
    }
  }
}
