const DEFAULT_SUCCESS_MESSAGE =
  "Thanks for reaching out. Your message has been sent successfully.";
const DEFAULT_TIMEOUT_MS = 15000;

export async function submitContactInquiry(payload) {
  // These environment variables keep the form provider-agnostic so the same UI
  // can connect to Formspree, Web3Forms, EmailJS, a custom API route, or another service.
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
  const method = (import.meta.env.VITE_CONTACT_FORM_METHOD || "POST").toUpperCase();
  const contentType = import.meta.env.VITE_CONTACT_FORM_CONTENT_TYPE || "application/json";
  const successMessage =
    import.meta.env.VITE_CONTACT_FORM_SUCCESS_MESSAGE || DEFAULT_SUCCESS_MESSAGE;
  const timeoutMs = Number(import.meta.env.VITE_CONTACT_FORM_TIMEOUT_MS || DEFAULT_TIMEOUT_MS);

  if (!endpoint) {
    throw new Error(
      "Form delivery is not configured yet. Please use the email or WhatsApp options provided."
    );
  }

  const headers = {
    Accept: "application/json",
  };

  let body;

  if (contentType === "application/x-www-form-urlencoded") {
    headers["Content-Type"] = contentType;
    body = new URLSearchParams(normalizePayload(payload)).toString();
  } else {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(payload);
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  let response;

  try {
    response = await fetch(endpoint, {
      method,
      headers,
      body,
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("The request took too long. Please try again or use email or WhatsApp.");
    }

    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }

  const responseType = response.headers.get("content-type") || "";
  const responseData = responseType.includes("application/json")
    ? await response.json().catch(() => null)
    : await response.text().catch(() => "");

  if (!response.ok) {
    const message = extractErrorMessage(responseData);
    throw new Error(message || "Something went wrong while sending your message.");
  }

  return {
    ok: true,
    message: extractSuccessMessage(responseData) || successMessage,
  };
}

function normalizePayload(payload) {
  return Object.entries(payload).reduce((result, [key, value]) => {
    result[key] = value == null ? "" : String(value);
    return result;
  }, {});
}

function extractSuccessMessage(responseData) {
  if (!responseData) {
    return "";
  }

  if (typeof responseData === "string") {
    return responseData.trim();
  }

  if (typeof responseData === "object") {
    return responseData.message || responseData.success || "";
  }

  return "";
}

function extractErrorMessage(responseData) {
  if (!responseData) {
    return "";
  }

  if (typeof responseData === "string") {
    return responseData.trim();
  }

  if (typeof responseData === "object") {
    return responseData.error || responseData.message || "";
  }

  return "";
}
