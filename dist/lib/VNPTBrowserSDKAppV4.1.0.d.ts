import type { EkycConfig, EkycResult, EkycSDK, FaceVNPTBrowserSDK } from './types/config';

declare global {
  interface Window {
    SDK: EkycSDK;
    ekycsdk: EkycSDK;
    FaceVNPTBrowserSDK: FaceVNPTBrowserSDK;
  }
  var ekycsdk: EkycSDK;
  var FaceVNPTBrowserSDK: FaceVNPTBrowserSDK;
}

const sdk: EkycSDK;
export default sdk;
export type {
  EkycConfig,
  EkycConfigV2,
  EkycConfigV3,
  EkycResult,
  EkycSDK,
  FaceVNPTBrowserSDK,
  DocumentType,
  FlowType,
  SdkFlow,
  UseMethod,
  DefaultLanguage,
  LivenessResult,
  LivenessFaceResult,
  OcrResult,
  CompareResult,
  MaskedResult,
  ListChooseStyle,
  CaptureImageStyle,
  ResultDefaultStyle,
  MobileStyle,
  EkycTheme,
} from './types/config';
