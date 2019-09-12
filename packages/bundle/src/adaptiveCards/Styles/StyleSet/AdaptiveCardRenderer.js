export default function({
  paddingRegular,
  primaryFont,
  adaptiveCardBackgroundColor,
  adaptiveCardBorderColor,
  adaptiveCardBorderRadius,
  adaptiveCardBorderStyle,
  adaptiveCardBorderWidth,
  adaptiveCardButtonBackgroundColor,
  adaptiveCardButtonBorder,
  adaptiveCardButtonTextColor,
  adaptiveCardDisabledButtonBackgroundColor,
  adaptiveCardDisabledButtonBorder,
  adaptiveCardDisabledButtonTextColor,
  adaptiveCardImageMaxHeight,
  adaptiveCardImageMinWidth,
  adaptiveCardImageWidth,
  adaptiveCardTextColor
}) {
  return {
    '& .ac-container': {
      backgroundColor: adaptiveCardBackgroundColor,
      color: adaptiveCardTextColor,
      borderColor: adaptiveCardBorderColor,
      borderRadius: adaptiveCardBorderRadius,
      borderStyle: adaptiveCardBorderStyle,
      borderWidth: adaptiveCardBorderWidth
    },
    '& .ac-container .ac-container': {
      borderStyle: 'none',
      borderRadius: 0
    },

    '& .ac-textBlock > *': {
      color: adaptiveCardTextColor
    },

    '& .ac-image': {
      maxHeight: adaptiveCardImageMaxHeight,
      minWidth: adaptiveCardImageMinWidth,
      width: adaptiveCardImageWidth
    },

    '& .ac-pushButton:disabled': {
      backgroundColor: adaptiveCardDisabledButtonBackgroundColor,
      borderColor: adaptiveCardDisabledButtonBorder,
      color: adaptiveCardDisabledButtonTextColor,
      fontWeight: 600,
      padding: paddingRegular
    },
    '& .ac-pushButton:not(:disabled)': {
      backgroundColor: adaptiveCardButtonBackgroundColor,
      borderColor: adaptiveCardButtonBorder,
      color: adaptiveCardButtonTextColor,
      fontWeight: 600,
      padding: paddingRegular
    },

    '& .ac-multichoiceInput': {
      padding: paddingRegular
    },

    '& .ac-input, & .ac-inlineActionButton, & .ac-quickActionButton': {
      fontFamily: primaryFont
    }
  };
}
