# @ultranomic/vnpt-ekyc-sdk

VNPT eKYC Web SDK for identity verification (OCR, liveness detection, face comparison).

## Installation

```bash
npm install @ultranomic/vnpt-ekyc-sdk --registry=https://npm.pkg.github.com
```

## Usage

### Basic

```html
<div id="ekyc_sdk_intergrated"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js"></script>
```

```javascript
import sdk from "@ultranomic/vnpt-ekyc-sdk";

const config = {
  BACKEND_URL: "https://api.idg.vnpt.vn",
  TOKEN_KEY: "your_token_key",
  TOKEN_ID: "your_token_id",
  ACCESS_TOKEN: "your_access_token",
  SDK_FLOW: "DOCUMENT_TO_FACE",
  LIST_TYPE_DOCUMENT: [-1, 5, 6, 7, 9],
  DEFAULT_LANGUAGE: "vi",
  CALL_BACK_END_FLOW: (result) => {
    console.log(result);
  },
};

window.SDK.launch(config);
```

### Subpath Imports

```javascript
import sdk from "@ultranomic/vnpt-ekyc-sdk";
import browserSDK from "@ultranomic/vnpt-ekyc-sdk/browser";
import qrBrowser from "@ultranomic/vnpt-ekyc-sdk/qr-browser";
import qrUpload from "@ultranomic/vnpt-ekyc-sdk/qr-upload";

import webOval from "@ultranomic/vnpt-ekyc-sdk/assets/web-oval";
import mobileOval from "@ultranomic/vnpt-ekyc-sdk/assets/mobile-oval";
import bgVnpt from "@ultranomic/vnpt-ekyc-sdk/assets/bg-vnpt";
import viTutorial from "@ultranomic/vnpt-ekyc-sdk/assets/vietnamese-tutorial";
import enTutorial from "@ultranomic/vnpt-ekyc-sdk/assets/english-tutorial";
```

## Configuration

| Field | Type | Description |
|-------|------|-------------|
| `BACKEND_URL` | `string` | API base URL |
| `TOKEN_KEY` | `string` | API authorization key |
| `TOKEN_ID` | `string` | API authorization ID |
| `ACCESS_TOKEN` | `string` | API access token |
| `SDK_FLOW` | `string` | `DOCUMENT_TO_FACE`, `FACE_TO_DOCUMENT`, `FACE`, `DOCUMENT` |
| `LIST_TYPE_DOCUMENT` | `number[]` | Document types to display: `-1` (CMND), `5` (Passport), `6` (Driver License), `7` (Military ID), `9` (CCCD Chip) |
| `DEFAULT_LANGUAGE` | `string` | `vi` or `en` |
| `HAS_RESULT_SCREEN` | `boolean` | Show/hide result screen (default: `true`) |
| `SHOW_STEP` | `boolean` | Show/hide step bar (default: `true`) |
| `HAS_QR_SCAN` | `boolean` | Enable QR scanning (default: `false`) |
| `DOUBLE_LIVENESS` | `boolean` | Enable double face liveness (default: `false`) |
| `ENABLE_API_LIVENESS_DOCUMENT` | `boolean` | Enable document liveness check (default: `true`) |
| `ENABLE_API_LIVENESS_FACE` | `boolean` | Enable face liveness check (default: `true`) |
| `ENABLE_API_MASKED_FACE` | `boolean` | Enable masked face check (default: `true`) |
| `ENABLE_API_COMPARE_FACE` | `boolean` | Enable face comparison (default: `true`) |
| `USE_METHOD` | `string` | `BOTH`, `PHOTO`, or `UPLOAD` |
| `CALL_BACK_END_FLOW` | `function` | Callback with result after eKYC completes |
| `CALL_BACK_DOCUMENT_RESULT` | `function` | Async callback after document verification |
| `CUTOM_THEME` | `object` | Theme customization (`PRIMARY_COLOR`, `TEXT_COLOR_DEFAULT`, `BACKGROUND_COLOR`) |

See [dist/types/config.d.ts](dist/types/config.d.ts) for the full TypeScript interface.

## Result

The `CALL_BACK_END_FLOW` callback receives an `EkycResult` object with:

| Field | Description |
|-------|-------------|
| `type_document` | Document type ID |
| `ocr` | Extracted text data (name, ID, DOB, address, etc.) |
| `liveness_card_front` | Document front liveness check |
| `liveness_card_back` | Document back liveness check |
| `liveness_face` | Face liveness check |
| `masked` | Masked face detection |
| `compare` | Face comparison result |
| `base64_doc_img` | Document image (base64) |
| `base64_face_img` | Face image (base64) |
| `hash_img` | Image hash |

## TypeScript

This package includes TypeScript declarations. Types are exported from the main entry:

```typescript
import type { EkycConfig, EkycResult, EkycSDK } from "@ultranomic/vnpt-ekyc-sdk";
```

## Framework Integration

### React

```jsx
useEffect(() => {
  if (window.SDK) {
    window.SDK.launch(config);
  }
}, []);

return <div id="ekyc_sdk_intergrated"></div>;
```

### Angular

```typescript
const windowRef = window as any;
if (windowRef?.SDK) {
  windowRef.SDK.launch(config);
}
```

### Vue

```javascript
mounted() {
  if (window.SDK) {
    window.SDK.launch(config);
  }
}
```

## CI/CD

- **Publish**: Triggered on tag push matching `v*` (e.g. `git tag v3.0.1 && git push origin v3.0.1`)
- **Release**: Triggered on push to `prod` branch

## License

Proprietary - VNPT
