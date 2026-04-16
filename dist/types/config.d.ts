export type SdkFlow = 'DOCUMENT_TO_FACE' | 'FACE_TO_DOCUMENT' | 'FACE' | 'DOCUMENT';

export type UseMethod = 'BOTH' | 'PHOTO' | 'UPLOAD';

export type DefaultLanguage = 'vi' | 'en';

export type DocumentType = -1 | 4 | 5 | 6 | 7 | 9;

export type FlowType = 'DOCUMENT' | 'FACE';

export interface EkycTheme {
  PRIMARY_COLOR?: string;
  TEXT_COLOR_DEFAULT?: string;
  BACKGROUND_COLOR?: string;
}

export interface ListChooseStyle {
  background?: string;
  text_color?: string;
  border_item?: string;
  item_active_color?: string;
  background_icon?: string;
  id_icon?: string;
  passport_icon?: string;
  drivecard_icon?: string;
  army_id_icon?: string;
  id_chip_icon?: string;
  start_button_background?: string;
  start_button_color?: string;
}

export interface CaptureImageStyle {
  popup1_box_shadow?: string;
  popup1_title_color?: string;
  description1_color?: string;
  capture_btn_background?: string;
  capture_btn_color?: string;
  capture_btn_icon?: string;
  tutorial_btn_icon?: string;
  recapture_btn_background?: string;
  recapture_btn_color?: string;
  recapture_btn_border?: string;
  recapture_btn_icon?: string;
  nextstep_btn_background?: string;
  nextstep_btn_color?: string;
  nextstep_btn_icon?: string;
  popup2_box_shadow?: string;
  popup2_title_header_color?: string;
  popup2_icon_header?: string;
  popup2_icon_warning1?: string;
  popup2_icon_warning2?: string;
  popup2_icon_warning3?: string;
}

export interface ResultDefaultStyle {
  redemo_btn_background?: string;
  redemo_btn_icon?: string;
  redemo_btn_color?: string;
}

export interface MobileStyle {
  mobile_capture_btn?: string;
  mobile_capture_desc_color?: string;
  mobile_tutorial_color?: string;
  mobile_recapture_btn_background?: string;
  mobile_recapture_btn_border?: string;
  mobile_recapture_btn_icon?: string;
  mobile_recapture_btn_color?: string;
  mobile_nextstep_btn_background?: string;
  mobile_nextstep_btn_color?: string;
  mobile_nextstep_btn_icon?: string;
  mobile_popup2_icon_header?: string;
}

export interface LivenessResult {
  message?: string;
  face_swapping: string | boolean;
  fake_liveness: string | boolean;
  liveness?: string;
  liveness_msg: string;
}

export interface OcrResult {
  id: string;
  name: string;
  birth_day: string;
  nationality?: string;
  gender: string;
  valid_date?: string;
  origin_location: string;
  recent_location: string;
  issue_date?: string;
  issue_place?: string;
  id_prob?: number;
  name_prob?: number;
  birth_day_prob?: number;
  nationality_prob?: number;
  gender_prob?: number;
  valid_date_prob?: number;
  origin_location_prob?: number;
  recent_location_prob?: number;
  issue_date_prob?: number;
  issue_place_prob?: number;
  warning?: string[] | string;
  is_legal?: string | boolean;
  tampering?: boolean;
}

export interface LivenessFaceResult {
  liveness: string | boolean;
  liveness_msg: string;
  is_eye_open?: string;
  Is_eye_open?: string | boolean;
}

export interface CompareResult {
  result: string | boolean;
  msg: string;
  prob: string | number;
}

export interface MaskedResult {
  masked: string;
}

export interface EkycResult {
  type_document: DocumentType;
  liveness_card_front: LivenessResult;
  liveness_card_back: LivenessResult;
  ocr: OcrResult;
  liveness_face: LivenessFaceResult;
  masked: 'yes' | 'no' | MaskedResult;
  compare: CompareResult;
  hash_img: string;
  data_hash_document: string;
  base64_doc_img: string;
  base64_face_img: string;
  qrCode?: Record<string, unknown>;
  qr_code?: string;
  dataBase64?: string;
  dataSign?: string;
}

export interface EkycConfigV3 {
  BACKEND_URL: string;
  TOKEN_KEY: string;
  TOKEN_ID: string;
  ACCESS_TOKEN?: string;
  HAS_RESULT_SCREEN?: boolean;
  CALL_BACK_END_FLOW: (result: EkycResult) => void;
  ENABLE_API_LIVENESS_DOCUMENT?: boolean;
  ENABLE_API_LIVENESS_FACE?: boolean;
  ENABLE_API_MASKED_FACE?: boolean;
  ENABLE_API_COMPARE_FACE?: boolean;
  SDK_FLOW?: SdkFlow;
  LIST_TYPE_DOCUMENT?: DocumentType[];
  CUTOM_THEME?: EkycTheme;
  CHALLENGE_CODE?: string;
  SHOW_STEP?: boolean;
  HAS_QR_SCAN?: boolean;
  DOCUMENT_TYPE_START?: number;
  DEFAULT_LANGUAGE?: DefaultLanguage;
  DOUBLE_LIVENESS?: boolean;
  FAKE_CAM_LABEL?: string | RegExp;
  CALL_BACK_DOCUMENT_RESULT?: (result: EkycResult) => Promise<void> | void;
  LINK_ICON_CCCD?: string;
  LINK_ICON_HO_CHIEU?: string;
  LINK_ICON_BANG_LAI_XE?: string;
  LINK_ICON_GIAY_TO_KHAC?: string;
  LINK_ICON_QR?: string;
  HAS_BACKGROUND_IMAGE?: boolean;
  USE_METHOD?: UseMethod;
  SHOW_TAB_RESULT_INFORMATION?: boolean;
  SHOW_TAB_RESULT_VALIDATION?: boolean;
  SHOW_TAB_RESULT_QRCODE?: boolean;
  URL_WEB_OVAL?: string;
  URL_MOBILE_OVAL?: string;
  URL_VIDEO_TUTORIAL_EN?: string;
  URL_VIDEO_TUTORIAL_VI?: string;
  MAX_SIZE_IMAGE?: number;
  ENDPOINT_UPLOAD?: string;
  ENDPOINT_LIVENESS_DOCUMENT?: string;
  ENDPOINT_LIVENESS_FACE?: string;
  ENDPOINT_MASKED?: string;
  ENDPOINT_COMPARE?: string;
  ENDPOINT_OCR?: string;
  ENABLE_API_UPLOAD_IMAGE?: string;
  ENABLE_API_OCR_TWO_SIDE?: string;
  ENABLE_API_OCR_FRONT_SIDE?: string;
}

export interface EkycConfigV2 {
  BACKEND_URL: string;
  TOKEN_KEY: string;
  TOKEN_ID: string;
  AUTHORIZION?: string;
  PARRENT_ID?: string;
  CHECK_LIVENESS_CARD?: boolean;
  CHECK_LIVENESS_FACE?: boolean;
  CHECK_MASKED_FACE?: boolean;
  COMPARE_FACE?: boolean;
  LANGUAGE?: DefaultLanguage;
  LIST_ITEM?: DocumentType[];
  TYPE_DOCUMENT?: number;
  USE_WEBCAM?: boolean;
  USE_UPLOAD?: boolean;
  ADVANCE_LIVENESS_FACE?: boolean;
  LIST_CHOOSE_STYLE?: ListChooseStyle;
  CAPTURE_IMAGE_STYLE?: CaptureImageStyle;
  RESULT_DEFAULT_STYLE?: ResultDefaultStyle;
  MOBILE_STYLE?: MobileStyle;
  FLOW_TYPE?: FlowType;
  SHOW_RESULT?: boolean;
  SHOW_HELP?: boolean;
  SHOW_TRADEMARK?: boolean;
  ENABLE_GGCAPCHAR?: boolean;
}

export type EkycConfig = EkycConfigV3 & Partial<EkycConfigV2>;

export interface EkycSDK {
  launch(config: EkycConfig): void;
  init(config: EkycConfig, callback: (result: EkycResult) => void, callAfterEndFlow?: (data: EkycResult) => void): void;
  viewResult(typeDocument: DocumentType, result: EkycResult): void;
}

export interface FaceVNPTBrowserSDK {
  init(): Promise<void>;
}
