import React, { useEffect, useRef, useCallback, useMemo } from "react";
import "./ProfileCard.css";

/** Put these files in src/assets/… (adjust paths if different) */
import ucdLogo from "../../assets/id/ucd.png";
import emailIcon from "../../assets/id/email.png";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";

const DEFAULT_INNER_GRADIENT = "linear-gradient(145deg,#60496e1a 0%,#71C4FF22 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
};

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, p = 3) => parseFloat(v.toFixed(p));
const adjust = (v, a, b, c, d) => round(c + ((d - c) * (v - a)) / (b - a));
const easeInOutCubic = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

const ProfileCardComponent = ({
  avatarUrl,
  iconUrl,
  grainUrl,
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,

  /** Labels */
  universityLabel = "University of California, Davis",
  degreeLabel = "B.S. Data Science",

  /** Assets */
  schoolLogoUrl = ucdLogo,

  /** Interactions */
  onContactClick,               // optional: click handler for the icon
  contactHref = "mailto:sadia@example.com", // optional: where the icon links to
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;
    let rafId = null;

    const updateCardTransform = (offsetX, offsetY, card, wrap) => {
      const width = card.clientWidth;
      const height = card.clientHeight;
      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const props = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };
      Object.entries(props).forEach(([p, v]) => wrap.style.setProperty(p, v));
    };

    const createSmoothAnimation = (duration, startX, startY, card, wrap) => {
      const start = performance.now();
      const tx = wrap.clientWidth / 2;
      const ty = wrap.clientHeight / 2;
      const loop = (now) => {
        const t = clamp((now - start) / duration);
        const e = easeInOutCubic(t);
        updateCardTransform(adjust(e, 0, 1, startX, tx), adjust(e, 0, 1, startY, ty), card, wrap);
        if (t < 1) rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
      },
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    (e) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;
      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(e.clientX - rect.left, e.clientY - rect.top, card, wrap);
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap || !animationHandlers) return;
    animationHandlers.cancelAnimation();
    wrap.classList.add("active");
    card.classList.add("active");
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (e) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;
      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        e.offsetX,
        e.offsetY,
        card,
        wrap
      );
      wrap.classList.remove("active");
      card.classList.remove("active");
    },
    [animationHandlers]
  );

  const handleDeviceOrientation = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;
      const { beta, gamma } = event;
      if (!beta || !gamma) return;
      animationHandlers.updateCardTransform(
        card.clientHeight / 2 + gamma * mobileTiltSensitivity,
        card.clientWidth / 2 + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        card,
        wrap
      );
    },
    [animationHandlers, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const onClick = () => {
      if (!enableMobileTilt || location.protocol !== "https:") return;
      if (typeof window.DeviceMotionEvent?.requestPermission === "function") {
        window.DeviceMotionEvent
          .requestPermission()
          .then((state) => state === "granted" && window.addEventListener("deviceorientation", handleDeviceOrientation))
          .catch(console.error);
      } else {
        window.addEventListener("deviceorientation", handleDeviceOrientation);
      }
    };

    card.addEventListener("pointerenter", handlePointerEnter);
    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerleave", handlePointerLeave);
    card.addEventListener("click", onClick);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(ANIMATION_CONFIG.INITIAL_DURATION, initialX, initialY, card, wrap);

    return () => {
      card.removeEventListener("pointerenter", handlePointerEnter);
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", handlePointerLeave);
      card.removeEventListener("click", onClick);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      animationHandlers.cancelAnimation();
    };
  }, [enableTilt, enableMobileTilt, animationHandlers, handlePointerEnter, handlePointerLeave, handlePointerMove, handleDeviceOrientation]);

  const cardStyle = useMemo(
    () => ({
      "--icon": iconUrl ? `url(${iconUrl})` : "none",
      "--grain": grainUrl ? `url(${grainUrl})` : "none",
      "--behind-gradient": showBehindGradient ? behindGradient ?? DEFAULT_BEHIND_GRADIENT : "none",
      "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
    }),
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  const handleContact = useCallback(
    (e) => {
      onContactClick?.(e);
    },
    [onContactClick]
  );

  return (
    <div ref={wrapRef} className={`pc-card-wrapper ${className}`.trim()} style={cardStyle}>
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />

          {/* Photo */}
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt="Profile"
              loading="lazy"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />

            {/* Light info bar with UC Davis logo + labels + email icon */}
            <div className="pc-user-info">
              <div className="pc-user-details">
                <div className="pc-mini-logo">
                  <img src={schoolLogoUrl} alt="UC Davis logo" />
                </div>
                <div className="pc-user-text">
                  <div className="pc-handle">{universityLabel}</div>
                  <div className="pc-status">{degreeLabel}</div>
                </div>
              </div>

              <a
                className="pc-icon-btn"
                href={contactHref}
                aria-label="Email"
                onClick={handleContact}
              >
                <img src={emailIcon} alt="" />
              </a>
            </div>
          </div>

          {/* Top headline/subhead removed as requested */}
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;