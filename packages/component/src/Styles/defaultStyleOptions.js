/* eslint no-magic-numbers: "off" */

function fontFamily(fonts) {
  return fonts.map(font => `'${font}'`).join(', ');
}

const DEFAULT_ACCENT = '#0063B1';
const PADDING_REGULAR = 10;
const DEFAULT_SUBTLE = '#767676'; // With contrast 4.5:1 to white

const DEFAULT_OPTIONS = {
  // Color and paddings
  accent: DEFAULT_ACCENT,
  backgroundColor: 'White',
  paddingRegular: PADDING_REGULAR,
  paddingWide: PADDING_REGULAR * 2,
  subtle: DEFAULT_SUBTLE,

  // Word break
  messageActivityWordBreak: 'break-word', // 'normal' || 'break-all' || 'break-word' || 'keep-all'

  // Fonts
  fontSizeSmall: '80%',
  monospaceFont: fontFamily(['Consolas', 'Courier New', 'monospace']),
  primaryFont: fontFamily(['Calibri', 'Helvetica Neue', 'Arial', 'sans-serif']),

  // Avatar
  avatarSize: 40,
  botAvatarImage: '',
  botAvatarInitials: '',
  userAvatarImage: '',
  userAvatarInitials: '',

  // Bubble
  bubbleBackground: null,
  bubbleBorderColor: null,
  bubbleBorderRadius: null,
  bubbleBorderStyle: null,
  bubbleBorderWidth: null,
  bubbleTextColor: null,
  bubbleFromBotBackground: 'White',
  bubbleFromBotBorderColor: '#E6E6E6',
  bubbleFromBotBorderRadius: 2,
  bubbleFromBotBorderStyle: 'solid',
  bubbleFromBotBorderWidth: 1,
  bubbleFromBotTextColor: 'Black',
  bubbleFromUserBackground: 'White',
  bubbleFromUserBorderColor: '#E6E6E6',
  bubbleFromUserBorderRadius: 2,
  bubbleFromUserBorderStyle: 'solid',
  bubbleFromUserBorderWidth: 1,
  bubbleFromUserTextColor: 'Black',
  bubbleAttachmentBackground: 'White',
  bubbleAttachmentTextColor: 'Black',
  bubbleAttachmentBorderColor: '#E6E6E6',
  bubbleAttachmentBorderRadius: 2,
  bubbleAttachmentBorderStyle: 'solid',
  bubbleAttachmentBorderWidth: 1,
  bubbleAttachmentBubbleBackground: null,
  bubbleAttachmentBubbleBorderWidth: null,
  bubbleNubOffset: null,
  bubbleNubSize: null,
  bubbleNubBorderColor: null,
  bubbleFromBotNubOffset: 'bottom',
  bubbleFromBotNubSize: 0,
  bubbleFromBotNubBorderColor: '#E6E6E6',
  bubbleFromUserNubOffset: 'bottom',
  bubbleFromUserNubSize: 0,
  bubbleFromUserNubBorderColor: '#E6E6E6',
  bubbleImageHeight: 240,
  bubbleMaxWidth: 480, // screen width = 600px
  bubbleMinHeight: 40,
  bubbleMinWidth: 250, // min screen width = 300px, Edge requires 372px (https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/13621468/)

  // Markdown
  markdownRespectCRLF: true,

  // Rich Cards
  richCardWrapTitle: false, // Applies to subtitles as well

  // Root
  rootHeight: '100%',
  rootWidth: '100%',

  // Send box
  hideSendBox: false,
  hideUploadButton: false,
  microphoneButtonColorOnDictate: '#F33',
  sendBoxBackground: 'White',
  sendBoxButtonColor: '#767676',
  sendBoxButtonColorOnDisabled: '#CCC',
  sendBoxButtonColorOnFocus: '#333',
  sendBoxButtonColorOnHover: '#333',
  sendBoxHeight: 40,
  sendBoxMaxHeight: 200,
  sendBoxTextColor: 'Black',
  sendBoxBorderBottom: '',
  sendBoxBorderLeft: '',
  sendBoxBorderRight: '',
  sendBoxBorderTop: 'solid 1px #E6E6E6',
  sendBoxPlaceholderColor: '#767676',
  sendBoxTextWrap: false,

  // Visually show spoken text
  showSpokenText: false,

  // Suggested actions
  suggestedActionBackground: 'White',
  suggestedActionBorder: `solid 2px ${DEFAULT_ACCENT}`,
  suggestedActionBorderRadius: 0,
  suggestedActionImageHeight: 20,
  suggestedActionTextColor: DEFAULT_ACCENT,
  suggestedActionDisabledBackground: 'White',
  suggestedActionDisabledBorder: `solid 2px #E6E6E6`,
  suggestedActionDisabledTextColor: DEFAULT_SUBTLE,
  suggestedActionHeight: 40,

  // Timestamp
  timestampColor: DEFAULT_SUBTLE,

  // Transcript overlay buttons (e.g. carousel and suggested action flippers, scroll to bottom, etc.)
  transcriptOverlayButtonBackground: 'rgba(0, 0, 0, .6)',
  transcriptOverlayButtonBackgroundOnFocus: 'rgba(0, 0, 0, .8)',
  transcriptOverlayButtonBackgroundOnHover: 'rgba(0, 0, 0, .8)',
  transcriptOverlayButtonColor: 'White',
  transcriptOverlayButtonColorOnFocus: 'White',
  transcriptOverlayButtonColorOnHover: 'White',

  // Video
  videoHeight: 270, // based on bubbleMaxWidth, 480 / 16 * 9 = 270

  // Connectivity UI
  connectivityIconPadding: PADDING_REGULAR * 1.2,
  connectivityMarginLeftRight: PADDING_REGULAR * 1.4,
  connectivityMarginTopBottom: PADDING_REGULAR * 0.8,
  connectivityTextSize: 12,
  failedConnectivity: '#C50F1F',
  slowConnectivity: '#EAA300',
  notificationText: '#5E5E5E',

  typingAnimationBackgroundImage: null,
  typingAnimationHeight: 20,
  typingAnimationWidth: 64,

  spinnerAnimationBackgroundImage: null,
  spinnerAnimationHeight: 16,
  spinnerAnimationWidth: 16,
  spinnerAnimationPaddingRight: 12
};

export default DEFAULT_OPTIONS;
