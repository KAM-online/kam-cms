import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsAddressBox extends Struct.ComponentSchema {
  collectionName: 'components_components_address_boxes';
  info: {
    displayName: 'AddressBox';
  };
  attributes: {
    address: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<
      ['white', 'transparent', 'primary', 'black']
    > &
      Schema.Attribute.Required;
  };
}

export interface ComponentsCardAi extends Struct.ComponentSchema {
  collectionName: 'components_components_card_ais';
  info: {
    displayName: 'CardAi';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCardBenefits extends Struct.ComponentSchema {
  collectionName: 'components_components_card_benefits';
  info: {
    displayName: 'CardBenefits';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCardOnboarding extends Struct.ComponentSchema {
  collectionName: 'components_components_card_onboardings';
  info: {
    displayName: 'CardOnboarding';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCardPortal extends Struct.ComponentSchema {
  collectionName: 'components_components_card_portals';
  info: {
    displayName: 'CardPortal';
  };
  attributes: {
    textItem_list: Schema.Attribute.Component<'components.text-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCardReports extends Struct.ComponentSchema {
  collectionName: 'components_components_card_reports';
  info: {
    displayName: 'CardReports';
  };
  attributes: {
    text: Schema.Attribute.Text;
    textItem_list: Schema.Attribute.Component<'components.text-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCardWorkflow extends Struct.ComponentSchema {
  collectionName: 'components_components_card_workflows';
  info: {
    displayName: 'CardWorkflow';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCopyright extends Struct.ComponentSchema {
  collectionName: 'components_components_copyrights';
  info: {
    displayName: 'Copyright';
  };
  attributes: {
    postYearText: Schema.Attribute.String;
    preYearText: Schema.Attribute.String;
  };
}

export interface ComponentsEmailBox extends Struct.ComponentSchema {
  collectionName: 'components_components_email_boxes';
  info: {
    displayName: 'EmailBox';
  };
  attributes: {
    emailAddress: Schema.Attribute.Email;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsPhoneBox extends Struct.ComponentSchema {
  collectionName: 'components_components_phone_boxes';
  info: {
    displayName: 'PhoneBox';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    phoneNumber: Schema.Attribute.String;
  };
}

export interface ComponentsPrivacyPolicyEntry extends Struct.ComponentSchema {
  collectionName: 'components_components_privacy_policy_entries';
  info: {
    displayName: 'PrivacyPolicyEntry';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTextItem extends Struct.ComponentSchema {
  collectionName: 'components_components_text_items';
  info: {
    displayName: 'TextItem';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    backgroundHorizontal: Schema.Attribute.Media<'images'>;
    backgroundVertical: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAi extends Struct.ComponentSchema {
  collectionName: 'components_sections_ais';
  info: {
    displayName: 'Ai';
  };
  attributes: {
    card_list: Schema.Attribute.Component<'components.card-ai', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    card_list: Schema.Attribute.Component<'components.card-benefits', true>;
    subTitle: Schema.Attribute.String;
    subTitleSlogan: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
    textItem_list: Schema.Attribute.Component<'components.text-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    addressImage: Schema.Attribute.Media<'images'>;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    dataProcessingConsent: Schema.Attribute.Text;
    emailImage: Schema.Attribute.Media<'images'>;
    formSubmitLabel: Schema.Attribute.String;
    formSuccessImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    formTickImage: Schema.Attribute.Media<'images'>;
    marketingConsent: Schema.Attribute.Text;
    phoneImage: Schema.Attribute.Media<'images'>;
    privacyNotice: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMain extends Struct.ComponentSchema {
  collectionName: 'components_sections_mains';
  info: {
    displayName: 'Main';
  };
  attributes: {
    button_list: Schema.Attribute.Component<'components.button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    mainAnimation: Schema.Attribute.Media<'images'>;
    secondaryAnimation: Schema.Attribute.Media<'images'>;
    slogan: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsOnboarding extends Struct.ComponentSchema {
  collectionName: 'components_sections_onboardings';
  info: {
    displayName: 'Onboarding';
  };
  attributes: {
    card_list: Schema.Attribute.Component<'components.card-onboarding', true>;
    listDivider: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPortal extends Struct.ComponentSchema {
  collectionName: 'components_sections_portals';
  info: {
    displayName: 'Portal';
  };
  attributes: {
    backgroundAnimation: Schema.Attribute.Media<'videos'>;
    card_list: Schema.Attribute.Component<'components.card-portal', true>;
    cardImage1: Schema.Attribute.Media<'images'>;
    cardImage2: Schema.Attribute.Media<'images'>;
    lastCardAnimation: Schema.Attribute.Media<'videos'>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    titleSlogan: Schema.Attribute.String;
  };
}

export interface SectionsReports extends Struct.ComponentSchema {
  collectionName: 'components_sections_reports';
  info: {
    displayName: 'Reports';
  };
  attributes: {
    animation: Schema.Attribute.Media<'videos'>;
    card_list: Schema.Attribute.Component<'components.card-reports', true>;
    disclaimer: Schema.Attribute.Text;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    titleSlogan: Schema.Attribute.String;
  };
}

export interface SectionsWorkflow extends Struct.ComponentSchema {
  collectionName: 'components_sections_workflows';
  info: {
    displayName: 'Workflow';
  };
  attributes: {
    card_list: Schema.Attribute.Component<'components.card-workflow', true>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.address-box': ComponentsAddressBox;
      'components.button': ComponentsButton;
      'components.card-ai': ComponentsCardAi;
      'components.card-benefits': ComponentsCardBenefits;
      'components.card-onboarding': ComponentsCardOnboarding;
      'components.card-portal': ComponentsCardPortal;
      'components.card-reports': ComponentsCardReports;
      'components.card-workflow': ComponentsCardWorkflow;
      'components.copyright': ComponentsCopyright;
      'components.email-box': ComponentsEmailBox;
      'components.phone-box': ComponentsPhoneBox;
      'components.privacy-policy-entry': ComponentsPrivacyPolicyEntry;
      'components.text-item': ComponentsTextItem;
      'sections.about': SectionsAbout;
      'sections.ai': SectionsAi;
      'sections.benefits': SectionsBenefits;
      'sections.contact': SectionsContact;
      'sections.main': SectionsMain;
      'sections.onboarding': SectionsOnboarding;
      'sections.portal': SectionsPortal;
      'sections.reports': SectionsReports;
      'sections.workflow': SectionsWorkflow;
    }
  }
}
