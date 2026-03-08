const PHOTO_FILES = [
  "./photos/0C333F38-F0F4-4A28-8E8A-2114DABA4529_1_105_c.jpeg",
  "./photos/0D287707-404F-43C9-BB4F-FF76CF1E4BA3_1_105_c.jpeg",
  "./photos/125F929D-E7DE-48BF-94D5-BAB38F058871_1_105_c.jpeg",
  "./photos/1A08EC9E-5A25-4329-BD38-FE238773AFF9_1_105_c.jpeg",
  "./photos/20666011-7EF2-4836-947E-D9BA2436088B_1_105_c.jpeg",
  "./photos/22DD9627-8F7D-4BFA-B55E-CF0C6030DB15_1_105_c.jpeg",
  "./photos/2301B8EE-F60B-4202-8A35-71B76C07D3A2_1_105_c.jpeg",
  "./photos/23221644-3210-4703-9A9D-8A87472E64C6_1_105_c.jpeg",
  "./photos/245EA49C-A59B-40FB-B5B6-E3D0609BF3ED_1_105_c.jpeg",
  "./photos/2A359B57-0ECE-471B-9762-58C834177B64_1_105_c.jpeg",
  "./photos/2D7E637D-5DF6-4225-ADE2-1339A5111DBE_1_105_c.jpeg",
  "./photos/3019EE31-36A7-4AA2-9961-D52FA85658CB_1_105_c.jpeg",
  "./photos/32DC4542-FC46-42BA-875E-2DE0CD06FFEB_1_105_c.jpeg",
  "./photos/33349AF4-22FE-443C-9EF2-7FB451CF4A74_1_105_c.jpeg",
  "./photos/3A37B394-4C31-4B8F-A0FE-82C284A99E38_1_105_c.jpeg",
  "./photos/4CA8C646-E638-4395-9C31-127D983CBCA5_1_105_c.jpeg",
  "./photos/5191FB94-E4EB-46C8-9DA4-47AC7A35D2F5_1_105_c.jpeg",
  "./photos/56950689-0317-48B8-8D48-717017515B6C_1_105_c.jpeg",
  "./photos/57095EA7-EEF5-499D-AA44-2C5458841C83_1_105_c.jpeg",
  "./photos/5B802C9E-BDE9-48E6-8552-FD2012B69511_1_105_c.jpeg",
  "./photos/606FFA0F-12D8-46A1-B659-394AC691931B_1_105_c.jpeg",
  "./photos/61DD5676-0F78-4EF0-8752-98126B310E7A_1_105_c.jpeg",
  "./photos/654707F0-784F-4FF3-BA18-6527A30DA3B1_1_105_c.jpeg",
  "./photos/666CB888-34E8-4CB4-927C-0DA1E079877F_1_105_c.jpeg",
  "./photos/71C3FBFC-7723-43B9-8CC6-37EDA00DA453_1_105_c.jpeg",
  "./photos/76A01C1E-01AC-4D53-BB02-E6D654EFBFDB_1_105_c.jpeg",
  "./photos/78F2B8A6-A3BB-4A75-85C0-2113E678BF70_1_105_c.jpeg",
  "./photos/82B2217B-5B7E-453E-81D6-3B5D9E91F75B_1_105_c.jpeg",
  "./photos/87325C5C-195A-45C8-91F3-7C2E875E7329_1_105_c.jpeg",
  "./photos/90C882BD-7736-40FF-BEC3-1D3A584DA36A_1_105_c.jpeg",
  "./photos/98B38B08-AAD5-4F2B-B515-7958A8FFCAEF_1_105_c.jpeg",
  "./photos/A10AE077-25E4-44E3-85C6-A3F9DF64EE2F_1_105_c.jpeg",
  "./photos/A11C1C97-A395-4FBD-9A06-9B599D96B624_1_105_c.jpeg",
  "./photos/A5624E97-1E28-4552-86C6-33B4B9428CEE_1_105_c.jpeg",
  "./photos/A9017E47-F9EB-4022-A2D1-CD833FE12F97_1_105_c.jpeg",
  "./photos/ABF0507C-7DD6-4CE7-AF69-08DAB7E7DAC9_1_105_c.jpeg",
  "./photos/B03E0042-7789-427B-B543-0371DED2FE26_1_105_c.jpeg",
  "./photos/B70727D5-10C5-4D53-994A-1128B8B57062_1_105_c.jpeg",
  "./photos/B79244FD-376F-4BBF-8CE4-FF55B7B91044_1_105_c.jpeg",
  "./photos/BB18313E-264E-4D8B-B76C-85BFF7729184_1_105_c.jpeg",
  "./photos/BC2BE117-7FFF-42DA-8BD3-E6A76A93527D_1_105_c.jpeg",
  "./photos/BC434A20-68D9-49F9-BA45-7170E2732631_1_105_c.jpeg",
  "./photos/BE0446A5-D731-4922-9CC5-9D4D96CBAECF_1_105_c.jpeg",
  "./photos/C1F43FF3-3315-4651-A266-9D77DF53662B_1_105_c.jpeg",
  "./photos/C5A8C408-DFDF-43B1-B8A9-6C9F2E2E1070_1_105_c.jpeg",
  "./photos/C635F8D6-AC4C-4788-9A51-65EB5072C3B1_1_105_c.jpeg",
  "./photos/C81BD3E6-1566-4592-B24A-C983C885C133_1_105_c.jpeg",
  "./photos/CA797A85-8B81-47BD-BAD6-75E2DC77C039_1_105_c.jpeg",
  "./photos/CB5F9353-45FA-44F9-AFB3-562ADC9B78E1_1_105_c.jpeg",
  "./photos/D34EF85C-0725-4255-A7FE-2CC8240532ED_1_102_o.jpeg",
  "./photos/D63B3E69-EC91-44E1-B2B6-BD1FCBF632AD_1_105_c.jpeg",
  "./photos/D8035FE7-6511-40A2-9F99-7944AD75CADC_1_105_c.jpeg",
  "./photos/DCFB224A-ECBC-484E-ADB6-ADB6F47E81B8_1_105_c.jpeg",
  "./photos/DE7389C1-3946-4F82-8057-7987A7ED923C_1_105_c.jpeg",
  "./photos/DED613CA-AB91-4183-B0D5-D1728B62FBA5_1_105_c.jpeg",
  "./photos/E39544E9-916B-43AC-A801-821D119548A5_1_105_c.jpeg",
  "./photos/E83E40AD-D0DB-4A6E-9104-B5FC4A0FA18F_1_105_c.jpeg",
  "./photos/E910E606-9CF7-4DE5-9318-149BD601515F_1_105_c.jpeg",
  "./photos/E9CA5017-DF53-4DC1-92E9-563BDF586C30_1_105_c.jpeg",
  "./photos/EC43A297-F078-4357-8AD9-CDF3D4DEDF1C.jpeg",
  "./photos/EF1A1F7E-B398-418B-BB35-F69FAB652C9F_1_105_c.jpeg",
  "./photos/EF47BE75-3366-46CE-B9D9-BF9F438E67AF_1_105_c.jpeg",
  "./photos/F478F394-D3FE-476F-9465-EB737BFBC395.jpeg",
  "./photos/F51C4A75-7ABB-4CEC-8BAF-57EE2ACB5CA3_1_105_c.jpeg",
  "./photos/F8DA7C0B-0ECB-423D-BD47-D946EC407F5D_1_105_c.jpeg",
];

const stage = document.getElementById("photo-stage");
const messageCard = document.querySelector(".message-card");
const viewer = document.getElementById("photo-viewer");
const viewerImage = document.getElementById("viewer-image");

const MOBILE_BREAKPOINT = 720;
const SMALL_MOBILE_BREAKPOINT = 480;
const SMALL_MOBILE_FRAME_COUNT = 6;
const MOBILE_FRAME_COUNT = 9;
const DESKTOP_FRAME_COUNT = 16;

const MIN_SIZE_MOBILE = 78;
const MAX_SIZE_MOBILE = 120;
const MIN_SIZE_DESKTOP = 108;
const MAX_SIZE_DESKTOP = 188;
const MIN_IMAGE_SWAP_DELAY = 1800;
const MAX_IMAGE_SWAP_DELAY = 7600;
const MIN_SIZE_SHIFT_DELAY = 2600;
const MAX_SIZE_SHIFT_DELAY = 9000;
const VIEWER_CLOSE_DURATION = 330;

const frames = [];
let viewerCloseTimer = 0;

const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersReducedMotion = () => reducedMotionMedia.matches;

const randomBetween = (min, max) => min + Math.random() * (max - min);

function getFrameCount() {
  if (window.innerWidth <= SMALL_MOBILE_BREAKPOINT) {
    return SMALL_MOBILE_FRAME_COUNT;
  }

  return window.innerWidth <= MOBILE_BREAKPOINT ? MOBILE_FRAME_COUNT : DESKTOP_FRAME_COUNT;
}

function getPhotoSize() {
  if (window.innerWidth <= MOBILE_BREAKPOINT) {
    return randomBetween(MIN_SIZE_MOBILE, MAX_SIZE_MOBILE);
  }

  return randomBetween(MIN_SIZE_DESKTOP, MAX_SIZE_DESKTOP);
}

function choosePhoto(previousSrc = "") {
  if (!PHOTO_FILES.length) {
    return "";
  }

  if (PHOTO_FILES.length === 1) {
    return PHOTO_FILES[0];
  }

  let nextPhoto = PHOTO_FILES[Math.floor(Math.random() * PHOTO_FILES.length)];
  while (nextPhoto === previousSrc) {
    nextPhoto = PHOTO_FILES[Math.floor(Math.random() * PHOTO_FILES.length)];
  }

  return nextPhoto;
}

function intersects(a, b) {
  return !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
}

function getSafeZone() {
  const rect = messageCard.getBoundingClientRect();
  const margin = window.innerWidth <= MOBILE_BREAKPOINT ? 26 : 52;

  return {
    left: rect.left - margin,
    top: rect.top - margin,
    right: rect.right + margin,
    bottom: rect.bottom + margin
  };
}

function getRandomPosition(width, height) {
  const safeZone = getSafeZone();
  const padding = window.innerWidth <= MOBILE_BREAKPOINT ? 6 : 12;
  const maxX = Math.max(padding, window.innerWidth - width - padding);
  const maxY = Math.max(padding, window.innerHeight - height - padding);

  for (let attempt = 0; attempt < 120; attempt += 1) {
    const x = randomBetween(padding, maxX);
    const y = randomBetween(padding, maxY);
    const candidate = { left: x, top: y, right: x + width, bottom: y + height };

    if (!intersects(candidate, safeZone)) {
      return { x, y };
    }
  }

  const side = Math.floor(Math.random() * 4);
  if (side === 0) {
    return { x: randomBetween(padding, maxX), y: padding };
  }

  if (side === 1) {
    return { x: maxX, y: randomBetween(padding, maxY) };
  }

  if (side === 2) {
    return { x: randomBetween(padding, maxX), y: maxY };
  }

  return { x: padding, y: randomBetween(padding, maxY) };
}

function getViewerTargetRect(aspectRatio) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const maxWidth = viewportWidth * (viewportWidth <= MOBILE_BREAKPOINT ? 0.92 : 0.84);
  const maxHeight = viewportHeight * (viewportWidth <= MOBILE_BREAKPOINT ? 0.82 : 0.86);

  let width = Math.min(maxWidth, maxHeight * aspectRatio);
  let height = width / aspectRatio;
  if (height > maxHeight) {
    height = maxHeight;
    width = height * aspectRatio;
  }

  return {
    left: (viewportWidth - width) / 2,
    top: (viewportHeight - height) / 2,
    width,
    height
  };
}

function closeViewer(options = {}) {
  if (!viewer || !viewerImage) {
    return;
  }

  const { immediate = false } = options;
  clearTimeout(viewerCloseTimer);

  const wasOpen =
    viewer.classList.contains("is-active") || viewer.classList.contains("is-closing");
  if (!wasOpen) {
    return;
  }

  viewer.classList.remove("is-active");
  viewer.setAttribute("aria-hidden", "true");

  if (immediate || prefersReducedMotion()) {
    viewer.classList.remove("is-closing");
    viewerImage.removeAttribute("src");
    return;
  }

  viewer.classList.add("is-closing");
  viewerCloseTimer = window.setTimeout(() => {
    viewer.classList.remove("is-closing");
    viewerImage.removeAttribute("src");
  }, VIEWER_CLOSE_DURATION);
}

function openViewerFromPhoto(photoEl) {
  if (!viewer || !viewerImage || !photoEl) {
    return;
  }

  clearTimeout(viewerCloseTimer);
  const sourceRect = photoEl.getBoundingClientRect();
  if (sourceRect.width < 8 || sourceRect.height < 8) {
    return;
  }

  const aspectRatio = sourceRect.width / sourceRect.height || 1;
  const targetRect = getViewerTargetRect(aspectRatio);
  const sourceCenterX = sourceRect.left + sourceRect.width / 2;
  const sourceCenterY = sourceRect.top + sourceRect.height / 2;
  const targetCenterX = targetRect.left + targetRect.width / 2;
  const targetCenterY = targetRect.top + targetRect.height / 2;
  const startX = sourceCenterX - targetCenterX;
  const startY = sourceCenterY - targetCenterY;
  const startScale = Math.max(0.12, Math.min(1, sourceRect.width / targetRect.width));
  const imageSource = photoEl.currentSrc || photoEl.getAttribute("src") || "";

  if (!imageSource) {
    return;
  }

  viewerImage.setAttribute("src", imageSource);
  viewerImage.style.left = `${targetRect.left}px`;
  viewerImage.style.top = `${targetRect.top}px`;
  viewerImage.style.width = `${targetRect.width}px`;
  viewerImage.style.height = `${targetRect.height}px`;

  if (prefersReducedMotion()) {
    viewerImage.style.setProperty("--start-x", "0px");
    viewerImage.style.setProperty("--start-y", "0px");
    viewerImage.style.setProperty("--start-scale", "1");
  } else {
    viewerImage.style.setProperty("--start-x", `${startX}px`);
    viewerImage.style.setProperty("--start-y", `${startY}px`);
    viewerImage.style.setProperty("--start-scale", startScale.toFixed(3));
  }

  viewer.classList.remove("is-closing");
  viewer.classList.add("is-active");
  viewer.setAttribute("aria-hidden", "false");
}

function moveFrame(frame, options = {}) {
  const { immediate = false, reschedule = true } = options;
  const width = frame.el.offsetWidth || 120;
  const height = frame.el.offsetHeight || Math.round(width * 1.2);
  const { x, y } = getRandomPosition(width, height);
  const rotate = randomBetween(-12, 12).toFixed(2);

  const duration = immediate ? 0 : randomBetween(5600, 11000);
  frame.el.style.setProperty("--move-duration", `${duration}ms`);
  frame.el.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;

  if (!reschedule) {
    return;
  }

  const waitTime = immediate ? randomBetween(900, 2000) : Math.max(2200, duration - 450);
  clearTimeout(frame.moveTimer);
  frame.moveTimer = window.setTimeout(() => moveFrame(frame), waitTime);
}

function clearFrameTimers(frame) {
  clearTimeout(frame.moveTimer);
  clearTimeout(frame.imageTimer);
  clearTimeout(frame.sizeTimer);
}

function swapPhoto(frame) {
  const currentPhoto = frame.el.getAttribute("src") || "";
  const nextPhoto = choosePhoto(currentPhoto);
  if (!nextPhoto) {
    return;
  }

  frame.el.style.opacity = "0.24";
  const preloader = new Image();
  frame.pendingImage = preloader;
  preloader.decoding = "async";
  preloader.onload = () => {
    if (frame.pendingImage !== preloader) {
      return;
    }

    frame.el.setAttribute("src", nextPhoto);
    frame.el.style.opacity = "1";
    frame.pendingImage = null;
  };
  preloader.onerror = () => {
    if (frame.pendingImage !== preloader) {
      return;
    }

    frame.el.style.opacity = "1";
    frame.pendingImage = null;
  };
  preloader.src = nextPhoto;
}

function scheduleImageSwap(frame) {
  const waitTime = randomBetween(MIN_IMAGE_SWAP_DELAY, MAX_IMAGE_SWAP_DELAY);
  clearTimeout(frame.imageTimer);
  frame.imageTimer = window.setTimeout(() => {
    swapPhoto(frame);
    scheduleImageSwap(frame);
  }, waitTime);
}

function scheduleSizeShift(frame) {
  const waitTime = randomBetween(MIN_SIZE_SHIFT_DELAY, MAX_SIZE_SHIFT_DELAY);
  clearTimeout(frame.sizeTimer);
  frame.sizeTimer = window.setTimeout(() => {
    frame.el.style.width = `${Math.round(getPhotoSize())}px`;
    moveFrame(frame, { immediate: false, reschedule: false });
    scheduleSizeShift(frame);
  }, waitTime);
}

function makeFrame(index) {
  const img = document.createElement("img");
  img.className = "floating-photo";
  img.alt = "Family memory";
  img.decoding = "async";
  img.loading = "eager";
  img.draggable = false;
  img.tabIndex = 0;

  img.style.width = `${Math.round(getPhotoSize())}px`;
  img.style.zIndex = `${2 + (index % 4)}`;

  const frame = {
    el: img,
    moveTimer: 0,
    imageTimer: 0,
    sizeTimer: 0,
    pendingImage: null,
    started: false
  };
  frames.push(frame);
  stage.appendChild(img);

  const startFrame = () => {
    if (frame.started) {
      return;
    }

    frame.started = true;
    img.dataset.ready = "true";
    moveFrame(frame, { immediate: true });
    scheduleImageSwap(frame);
    scheduleSizeShift(frame);
  };

  img.addEventListener("load", startFrame);

  img.addEventListener("error", () => {
    const replacement = choosePhoto(img.getAttribute("src") || "");
    if (replacement) {
      img.src = replacement;
    }
  });

  img.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openViewerFromPhoto(img);
  });

  img.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openViewerFromPhoto(img);
    }
  });

  const firstPhoto = choosePhoto();
  if (firstPhoto) {
    img.src = firstPhoto;
    if (img.complete && img.naturalWidth > 0) {
      startFrame();
    }
  }
}

function resetForResize() {
  closeViewer({ immediate: true });
  const count = getFrameCount();

  while (frames.length > count) {
    const frame = frames.pop();
    if (!frame) {
      break;
    }

    clearFrameTimers(frame);
    frame.pendingImage = null;
    frame.el.remove();
  }

  while (frames.length < count) {
    makeFrame(frames.length);
  }

  frames.forEach((frame) => {
    clearFrameTimers(frame);
    frame.pendingImage = null;
    frame.el.style.width = `${Math.round(getPhotoSize())}px`;
    moveFrame(frame, { immediate: true });
    scheduleImageSwap(frame);
    scheduleSizeShift(frame);
  });
}

function init() {
  if (!stage || !messageCard || !PHOTO_FILES.length) {
    return;
  }

  const frameCount = getFrameCount();
  for (let i = 0; i < frameCount; i += 1) {
    makeFrame(i);
  }
}

let resizeTimer = 0;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(resetForResize, 170);
});

if (viewer) {
  viewer.addEventListener("click", () => closeViewer());
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeViewer();
  }
});

init();
