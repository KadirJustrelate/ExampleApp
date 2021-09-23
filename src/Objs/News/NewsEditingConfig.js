import * as Scrivito from "scrivito";
import HeadlineWidget from "../../Widgets/HeadlineWidget/HeadlineWidgetClass";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import ButtonWidget from '../../Widgets/ButtonWidget/ButtonWidgetClass'
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroups,
  metadataValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("News", {
  title: "News",
  attributes: {
    ...metadataEditingConfigAttributes,
    title: {
      title: "Title for new Page",
      description: "Limit to 55 characters.",
    },
  },
  properties: ["title"],
  propertiesGroups: [...metadataPropertiesGroups],
  initialContent: {
    body: [
      new SectionWidget({
        content: [new HeadlineWidget({ style: "h1" })],
      }),
      new HeadlineWidget({ headline: "The question is?" })
    ],
    ...metadataInitialContent,
  },
  validations: [...metadataValidations],
});
