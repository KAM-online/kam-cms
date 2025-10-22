import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsBenefitCard extends Struct.ComponentSchema {
  collectionName: 'components_components_benefit_cards';
  info: {
    displayName: 'BenefitCard';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<
      ['white', 'transparent', 'primary', 'black']
    >;
  };
}

export interface ComponentsWorkflowCardList extends Struct.ComponentSchema {
  collectionName: 'components_components_workflow_card_lists';
  info: {
    displayName: 'WorkflowCard_list';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    benefitCard_list: Schema.Attribute.Component<
      'components.benefit-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMainSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_main_sections';
  info: {
    displayName: 'MainSection';
  };
  attributes: {
    button_list: Schema.Attribute.Component<'components.button', true>;
    slogan: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsWorkflow extends Struct.ComponentSchema {
  collectionName: 'components_sections_workflows';
  info: {
    displayName: 'Workflow';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    workflowCard_list: Schema.Attribute.Component<
      'components.workflow-card-list',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.benefit-card': ComponentsBenefitCard;
      'components.button': ComponentsButton;
      'components.workflow-card-list': ComponentsWorkflowCardList;
      'sections.benefits': SectionsBenefits;
      'sections.main-section': SectionsMainSection;
      'sections.workflow': SectionsWorkflow;
    }
  }
}
