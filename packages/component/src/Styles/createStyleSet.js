/*eslint "complexity": ["error", { "max": 25 }] */

import createActivitiesStyle from './StyleSet/Activities';
import createActivityStyle from './StyleSet/Activity';
import createAudioAttachmentStyle from './StyleSet/AudioAttachment';
import createAudioContentStyle from './StyleSet/AudioContent';
import createAvatarStyle from './StyleSet/Avatar';
import createBubbleStyle from './StyleSet/Bubble';
import createCarouselFilmStrip from './StyleSet/CarouselFilmStrip';
import createCarouselFlipper from './StyleSet/CarouselFlipper';
import createConnectivityNotification from './StyleSet/ConnectivityNotification';
import createDictationInterimsStyle from './StyleSet/DictationInterims';
import createDownloadAttachmentStyle from './StyleSet/DownloadAttachment';
import createErrorBoxStyle from './StyleSet/ErrorBox';
import createErrorNotificationStyle from './StyleSet/ErrorNotification';
import createMicrophoneButtonStyle from './StyleSet/MicrophoneButton';
import createRootStyle from './StyleSet/Root';
import createScrollToEndButtonStyle from './StyleSet/ScrollToEndButton';
import createSendBoxButtonStyle from './StyleSet/SendBoxButton';
import createSendBoxStyle from './StyleSet/SendBox';
import createSendBoxTextAreaStyle from './StyleSet/SendBoxTextArea';
import createSendBoxTextBoxStyle from './StyleSet/SendBoxTextBox';
import createSendStatusStyle from './StyleSet/SendStatus';
import createSingleAttachmentActivityStyle from './StyleSet/SingleAttachmentActivity';
import createSpinnerAnimationStyle from './StyleSet/SpinnerAnimation';
import createStackedLayoutStyle from './StyleSet/StackedLayout';
import createSuggestedActionsStyle from './StyleSet/SuggestedActions';
import createSuggestedActionsStyleSet from './StyleSet/SuggestedActionsStyleSet';
import createSuggestedActionStyle from './StyleSet/SuggestedAction';
import createTextContentStyle from './StyleSet/TextContent';
import createTimestampStyle from './StyleSet/Timestamp';
import createTypingActivityStyle from './StyleSet/TypingActivity';
import createTypingAnimationStyle from './StyleSet/TypingAnimation';
import createUploadButtonStyle from './StyleSet/UploadButton';
import createVideoAttachmentStyle from './StyleSet/VideoAttachment';
import createVideoContentStyle from './StyleSet/VideoContent';
import createVimeoContentStyle from './StyleSet/VimeoContent';
import createWarningNotificationStyle from './StyleSet/WarningNotification';
import createYouTubeContentStyle from './StyleSet/YouTubeContent';

import defaultStyleOptions from './defaultStyleOptions';

// TODO: [P4] We should add a notice for people who want to use "styleSet" instead of "styleOptions".
//       "styleSet" is actually CSS stylesheet and it is based on the DOM tree.
//       DOM tree may change from time to time, thus, maintaining "styleSet" becomes a constant effort.

function parseBorder(border) {
  const dummyElement = document.createElement('div');

  dummyElement.setAttribute('style', `border: ${border}`);

  const {
    style: { borderColor: color, borderStyle: style, borderWidth: width }
  } = dummyElement;

  return {
    color,
    style,
    width
  };
}

const PIXEL_UNIT_PATTERN = /^\d+px$/u;

export default function createStyleSet(options) {
  options = { ...defaultStyleOptions, ...options };

  // Keep this list flat (no nested style) and serializable (no functions)

  // TODO: [P4] Deprecate this code after bump to v5
  const {
    bubbleBackground,
    bubbleBorder,
    bubbleBorderColor,
    bubbleBorderRadius,
    bubbleBorderStyle,
    bubbleBorderWidth,
    bubbleTextColor,
    bubbleNubOffset,
    bubbleNubSize,
    bubbleNubBorderColor,
    bubbleFromUserBorder
  } = options;

  if (bubbleBackground) {
    console.warn('Web Chat: styleSet.bubbleBackground is being deprecated. Please use bubbleFromBotBackground.');
    options.bubbleFromBotBackground = bubbleBackground;
  }

  if (bubbleBorder) {
    console.warn(
      'Web Chat: styleSet.bubbleBorder is being deprecated. Please use bubbleFromBotBorderColor, bubbleFromBotBorderStyle, and, bubbleFromBotBorderWidth.'
    );

    const { color, style, width } = parseBorder(bubbleBorder);

    if (color && color !== 'initial') {
      options.bubbleFromBotBorderColor = color;
    }

    if (style && style !== 'initial') {
      options.bubbleFromBotBorderStyle = style;
    }

    if (PIXEL_UNIT_PATTERN.test(width)) {
      options.bubbleFromBotBorderWidth = parseInt(width, 10);
    }
  }

  if (bubbleBorderColor) {
    console.warn('Web Chat: styleSet.bubbleBorderColor is being deprecated. Please use bubbleFromBotBorderColor.');
    options.bubbleFromBotBorderColor = bubbleBorderColor;
  }

  if (bubbleBorderRadius) {
    console.warn('Web Chat: styleSet.bubbleBorderRadius is being deprecated. Please use bubbleFromBotBorderRadius.');
    options.bubbleFromBotBorderRadius = bubbleBorderRadius;
  }

  if (bubbleBorderStyle) {
    console.warn('Web Chat: styleSet.bubbleBorderStyle is being deprecated. Please use bubbleFromBotBorderStyle.');
    options.bubbleFromBotBorderStyle = bubbleBorderStyle;
  }

  if (bubbleBorderWidth) {
    console.warn('Web Chat: styleSet.bubbleBorderWidth is being deprecated. Please use bubbleFromBotBorderWidth.');
    options.bubbleFromBotBorderWidth = bubbleBorderWidth;
  }

  if (bubbleTextColor) {
    console.warn('Web Chat: styleSet.bubbleTextColor is being deprecated. Please use bubbleFromBotTextColor.');
    options.bubbleFromBotTextColor = bubbleTextColor;
  }

  if (bubbleNubOffset) {
    console.warn('Web Chat: styleSet.bubbleNubOffset is being deprecated. Please use bubbleFromBotNubOffset.');
    options.bubbleFromBotNubOffset = bubbleNubOffset;
  }

  if (bubbleNubSize) {
    console.warn('Web Chat: styleSet.bubbleNubSize is being deprecated. Please use bubbleFromBotNubSize.');
    options.bubbleFromBotNubSize = bubbleNubSize;
  }

  if (bubbleNubBorderColor) {
    console.warn(
      'Web Chat: styleSet.bubbleNubBorderColor is being deprecated. Please use bubbleFromBotNubBorderColor.'
    );
    options.bubbleFromBotNubBorderColor = bubbleNubBorderColor;
  }

  if (bubbleFromUserBorder) {
    console.warn(
      'Web Chat: styleSet.bubbleFromUserBorder is being deprecated. Please use bubbleFromUserBorderColor, bubbleFromUserBorderStyle, and, bubbleFromUserBorderWidth.'
    );

    const { color, style, width } = parseBorder(bubbleFromUserBorder);

    if (color && color !== 'initial') {
      options.bubbleFromUserBorderColor = color;
    }

    if (style && style !== 'initial') {
      options.bubbleFromUserBorderStyle = style;
    }

    if (PIXEL_UNIT_PATTERN.test(width)) {
      options.bubbleFromUserBorderWidth = parseInt(width, 10);
    }
  }

  return {
    activities: createActivitiesStyle(options),
    activity: createActivityStyle(options),
    audioAttachment: createAudioAttachmentStyle(options),
    audioContent: createAudioContentStyle(options),
    avatar: createAvatarStyle(options),
    bubble: createBubbleStyle(options),
    carouselFilmStrip: createCarouselFilmStrip(options),
    carouselFlipper: createCarouselFlipper(options),
    connectivityNotification: createConnectivityNotification(options),
    dictationInterims: createDictationInterimsStyle(options),
    downloadAttachment: createDownloadAttachmentStyle(options),
    errorBox: createErrorBoxStyle(options),
    errorNotification: createErrorNotificationStyle(options),
    microphoneButton: createMicrophoneButtonStyle(options),
    options: {
      ...options,
      suggestedActionsStyleSet: createSuggestedActionsStyleSet(options)
    },
    root: createRootStyle(options),
    scrollToEndButton: createScrollToEndButtonStyle(options),
    sendBox: createSendBoxStyle(options),
    sendBoxButton: createSendBoxButtonStyle(options),
    sendBoxTextArea: createSendBoxTextAreaStyle(options),
    sendBoxTextBox: createSendBoxTextBoxStyle(options),
    sendStatus: createSendStatusStyle(options),
    singleAttachmentActivity: createSingleAttachmentActivityStyle(options),
    spinnerAnimation: createSpinnerAnimationStyle(options),
    stackedLayout: createStackedLayoutStyle(options),
    suggestedAction: createSuggestedActionStyle(options),
    suggestedActions: createSuggestedActionsStyle(options),
    textContent: createTextContentStyle(options),
    timestamp: createTimestampStyle(options),
    typingActivity: createTypingActivityStyle(options),
    typingAnimation: createTypingAnimationStyle(options),
    uploadButton: createUploadButtonStyle(options),
    videoAttachment: createVideoAttachmentStyle(options),
    videoContent: createVideoContentStyle(options),
    vimeoContent: createVimeoContentStyle(options),
    warningNotification: createWarningNotificationStyle(options),
    youTubeContent: createYouTubeContentStyle(options)
  };
}
