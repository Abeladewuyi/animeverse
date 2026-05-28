import { useState, useEffect, useRef } from "react";
import { FaRegCommentDots, FaHeart, FaEye } from "react-icons/fa";
import logo from "./assets/logo.png";
import lightDesktop from "./assets/light-desktop.png";
import "./App.css";
import lightMobile from "./assets/light-mobile.png";
import suzume from "./assets/suzume.png";
import soloLeveling from "./assets/solo-leveling.png";
import attackOnTitan from "./assets/attack-on-titan.png";
import jujutsuKaisen from "./assets/jujutsu-kaisen.png";
import streamImg from "./assets/stream.png";
import postImage1 from "./assets/post-image-1.png";
import postImage2 from "./assets/post-image-2.png";
import statBadge from "./assets/12M_.png";
import demonslayer from "./assets/demonslayer.jpg";
import HXH from "./assets/HXH.jpg";
import blakclover from "./assets/blackclover.jpg";
import naruto from "./assets/naruto.jpg";
import heroCollageMobile from "./assets/hero-collage-mobile.png";
import heroCollageDesktop from "./assets/hero-collage-desktop.png";
import discordIcon from "./assets/icons/discord.png";
import instagramIcon from "./assets/icons/instagram.png";
import xIcon from "./assets/icons/x.png";
import avatar1 from "./assets/avatar1.png";
import avatar2 from "./assets/avatar2.png";
import avatar3 from "./assets/avatar3.png";
import avatar4 from "./assets/avatar4.png";
import luffyAvatar from "./assets/avatars/luffy.jfif";
import nagamatzoAvatar from "./assets/avatars/nagamatzo.jfif";
import mostWatchedImage from "./assets/most-watched.png";
import recommendedImage from "./assets/recommended.png";
import wishlistImage from "./assets/wishlist.png";
import shareSection from "./assets/share-section.png";
import community from "./assets/community.png";
import leftCharacter from "./assets/painLeft.png";
import rightCharacter from "./assets/leviRight.png";
import { postcss } from "autoprefixer";
import { BiBorderBottom } from "react-icons/bi";


export default function App() {
  const navItems = ["Home", "About", "Community", "Socials", "Watch"];

const navRef = useRef(null);
const [indicatorStyle, setIndicatorStyle] = useState({});
const handleMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const parentRect = navRef.current.getBoundingClientRect();

  setIndicatorStyle({
    width: rect.width + "px",
    height: rect.height + "px",
    transform: `translateX(${rect.left - parentRect.left}px)`,
  });
};
  const [menuOpen, setMenuOpen] = useState(false);
  // Inside your App function
const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  // Run once on mount to be sure
  handleResize();

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  // ... useEffect for resize remains the same
const styles = {
  app: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "black", 
    backgroundImage: `url(${isDesktop ? lightDesktop:lightMobile})`,
    backgroundPosition: isDesktop ? "top center" : "center -36px",
    backgroundRepeat: "no-repeat",
    // 3. Keep it at the top so it doesn't stretch to the bottom
    backgroundSize: isDesktop ? "1600px" : "620px auto",
    position: "relative",
    overflowX: "hidden",

  },
  // Floating Characters (Desktop Only)
  floatingCharLeft: {
    position: "fixed",
    left: "-30px",
    bottom: "0",
    height: "85vh",
    zIndex: 0,
    pointerEvents: "none",
    opacity: 0.9,
    display: isDesktop ? "block" : "none",
  },
  floatingCharRight: {
    position: "fixed",
    right: "-30px",
    bottom: "0",
    height: "90vh",
    zIndex: 0,
    pointerEvents: "none",
    opacity: 0.9,
    display: isDesktop ? "block" : "none",
  },

  pageContainer: {
    maxWidth: "1500px",
    margin: "0 ",
    padding: isDesktop ? "0 40px" : "0 14px",
    position: "relative",
    zIndex: 2, // Keeps content above floating characters,
    width:"100%"
  },

  // --- NAVIGATION ---
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0",
    top:"0px",
    zIndex:10,
    width: isDesktop ? "529px" : "100%"
    
  },
  
  logo: { 
    height: isDesktop ? "41px" : "21.521484375px",
    width: isDesktop ? "auto" : "82.32264709472656px",
    marginTop: isDesktop ? "42px" : "0px",
    top: isDesktop ? "auto" : "65.2px",
    left: isDesktop ? "auto" : "19.5px",
    position: isDesktop ? "relative" : "absolute",
    opacity: 1,
  },

navItem: {
  position: "relative",
  padding: "10px 10px",
  cursor: "pointer",
  zIndex: 1,
  color: "#fff",
  fontWeight: 500,
  justifyContent:"center"
},
navIndicator: {
  position: "absolute",
  top: 21,
  left: 0,
  borderRadius: "999px",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(8px)",
  transition: "all 0.3s ease",
  zIndex: 0,
},
  navMenu: {
    display: "flex",
    alignItems:"center",
    borderRadius:"999px",
    color:"#FFFFFF38",
    gap:"28px",
    width:"529px",
    border:"1px solid rgba(255,255,255,0.3)",
    backdropFilter:"blur(12px)",
    padding:"21px 43px",
    position:"absolute",
    top:"42px",
    left:"50%",
    transform:"translateX(-50%)",
    zIndex:10,
    marginLeft:"79px"
  },
  navLink: { color: "#fff", fontSize: "20px", cursor: "pointer", fontWeight: "500", fontFamily:"Plus Jakarta Sans",
    padding:"10px 16px",letterSpacing:"-5%"
  },
hamburger: {
  fontSize: "24px",
  color: "#fff",
  cursor: "pointer",
  width: isDesktop ? "auto" : "24px",
  height: isDesktop ? "auto" : "24px",
  top: isDesktop ? "auto" : "62px",
  left: isDesktop ? "auto" : "349px",
  position: isDesktop ? "relative" : "absolute",
  opacity: 1,
},
  // --- HERO SECTION ---
heroWrapper: {
  display: "flex",
  // If isDesktop is true, it MUST be "row". If false, "column".
  flexDirection: isDesktop ? "row" : "column", 
  alignItems: "center",
  justifyContent: "space-between",
  gap: isDesktop ? "60px" : "18px",
  marginTop: isDesktop ? "-110px" : "32px",
},
 heroLeftDesktop: {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  gap: "20px",
  flex:"1",
  maxWidth:"500px"

},
  heroLeftMobile: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",   // center everything
  textAlign: "center",
  padding: "0 10px",
  gap: "10px",
  position: "relative",
  zIndex: 3,
},

  h1: {
    fontSize: "56px",
    lineHeight: 1.7,
    fontWeight: 500,
    marginBottom: "16px",
    fontFamily:"Poppins",
    letterSpacing: -3,
    colour:"#FFFFFF",
  },
  heroP: {
    fontSize: isDesktop ? "18px" : "12px",
    fontWeight: 700,
    color: "#FFFFFFCC",
    lineHeight: "100%",
    fontFamily: isDesktop ? "Plus Jakarta Sans, sans-serif" : '"Satoshi Variable", Satoshi, sans-serif',
    letterSpacing: isDesktop ? "2%" : "-0.03em",
    textAlign: isDesktop ? "left" : "center",
    marginBottom: "16px",
    maxWidth: isDesktop ? "none" : "300px",
    margin: isDesktop ? "-15px auto 28px" : "-6px auto 14px",
    width: isDesktop ? "700px" : "auto",
    display: isDesktop ? "inline-block" : "block",
  },
heroRight: {
  position: "relative",
  width: isDesktop ? "50%" : "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  marginTop: isDesktop ? "100px" : "-6px",
  minHeight: isDesktop ? "auto" : "290px",
},
collageFade: {
  position: "absolute",
  inset:0,

  pointerEvents: "none",
  background: `
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.9) 0%,
      rgba(0,0,0,0.4) 10%,
      rgba(0,0,0,0) 25%,
      rgba(0,0,0,0.4) 75%
      rgba(0,0,0,0.9) 100%
    )
  `,
  zIndex: 2,
},
collageFadeTopBlur: {
  position: "absolute",
  top: "4px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "450px",
  height: "95px",
  pointerEvents: "none",
  zIndex: 2,
  background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%)",
  filter: "blur(22px)",
},
collageFadeBottomBlur: {
  position: "absolute",
  top: "194px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "450px",
  height: "95px",
  pointerEvents: "none",
  zIndex: 2,
  background: "linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%)",
  filter: "blur(22px)",
},

heroCollageImg: {
  width: isDesktop ? "120%" : "450px",
  height: isDesktop ? "auto" : "285px",
  maxWidth: isDesktop ? "800px" : "none",
  objectFit: "cover",
  animation: "fadeUp 1s ease-out",
  position: isDesktop ? "relative" : "absolute",
  top: isDesktop ? "auto" : "4px",
  left: isDesktop ? "auto" : "50%",
  zIndex: 1,
  transform: isDesktop ? "translateX(120px)" : "translateX(-50%)",
  opacity: 1,
  borderRadius: isDesktop ? "0px" : "6px",
  WebkitMaskImage: isDesktop
    ? "none"
    : "linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
  maskImage: isDesktop
    ? "none"
    : "linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
},
  // --- MARQUEE ---

streamImg:{
  width:"525px",
  height:"80px",
  
},

  // --- FEATURES ---
  section: { padding: isDesktop ? "100px 0px" : "60px 0",
    justifyContent:"center"
   },
  sectionTitle: { fontWeight: 700, marginBottom: "15px", textAlign: "center" },
  sectionSub: {
    color: "#FFFFFFCC",
    textAlign: "center",
    maxWidth: "700px",
    margin: isDesktop ? "25px auto 50px" : "16px auto 30px",
    lineHeight: 1.6,
    fontSize: isDesktop ? "18px" : "10px",
    maxWidth: isDesktop ? "700px" : "330px"
  },
  features:{
    marginTop: isDesktop ? "120px" : "24px",
  },
  featuresTitle: {
    color: "#FFFFFF",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontWeight: 600,
    fontSize: isDesktop ? "40px" : "30px",
    lineHeight: isDesktop ? "1.2" : "100%",
    letterSpacing: isDesktop ? "-3%" : "-0.03em",
    textAlign: "center",
    margin: 0,
  },

  featuresRow:{
    display:"flex",
    flexDirection: isDesktop ? "row" : "column",
    justifyContent:"center",
    alignItems:"center",
    gap: isDesktop ? "40px": "20px",
  },


  featureGrid: {
    display: "flex",
    flexDirection: isDesktop ? "row" : "column",
    gap: "25px",
    justifyContent: "center",
  },
  featureCardImg: { width: "100%", maxWidth: isDesktop ? "360px" : "245px", borderRadius: "15px" },

  // --- COMMUNITY FEED ---
 feedPost: {
  backgroundColor: isDesktop ? "#111" : "rgba(10, 10, 10, 0.88)",
  padding: isDesktop ? "16px" : "10px",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  gap: isDesktop ? "12px" : "8px",
  maxWidth: isDesktop ? "520px" : "325.9326171875px",
  width: isDesktop ? "auto" : "325.9326171875px",
  height: isDesktop ? "auto" : "245.4364776611328px",
  opacity: 1,
  left: isDesktop ? "100px" : "auto",
  margin: isDesktop ? "0" : "0 auto",
  boxSizing: "border-box",
  overflow: isDesktop ? "visible" : "hidden",
},

feedGrid: {
  display: "flex",
  gap: "10px",
  justifyContent:"space-between",
  alignItems:"flex-start",
  width:"100%"
},

feedMobile: {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",
  width: "100%",
},

feedColumn: {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
},
postHeader: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
},

postUser: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
},

postAvatar: {
  width: isDesktop ? "40px" : "28px",
  height: isDesktop ? "40px" : "28px",
  borderRadius: "50%",
},

postUsername: {
  fontWeight: "bold",
  color: "#fff",
  fontSize: isDesktop ? "16px" : "11px",
},

postHandle: {
  fontSize: isDesktop ? "12px" : "9px",
  color: "#888",
},

followBtn: {
  background: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "999px",
  padding: isDesktop ? "6px 14px" : "4px 10px",
  fontSize: isDesktop ? "14px" : "9px",
  cursor: "pointer",
},

postText: {
  color: "#aaa",
  fontSize: isDesktop ? "14px" : "10px",
  lineHeight: isDesktop ? "1.5" : "1.3",
  margin: 0,
  overflow: isDesktop ? "visible" : "hidden",
},

postImageWrapper: {
  width: "100%",
  flex: isDesktop ? "0 0 auto" : "1 1 auto",
  minHeight: isDesktop ? "auto" : 0,
},
postImg: {
  width: "100%",
  height: isDesktop ? "300px" : "100%",
  objectFit: "cover",
  borderRadius: isDesktop ? "16px" : "10px",
},

videoThumb: {
  position: "relative",
  width: "100%",
  flex: isDesktop ? "0 0 auto" : "1 1 auto",
  minHeight: isDesktop ? "auto" : 0,
},

videoThumbImg: {
  width: "100%",
  height: isDesktop ? "300px" : "100%",
  objectFit: "cover",
  borderRadius: isDesktop ? "16px" : "10px",
},


playOverlay: {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "40px",
  color: "white",
},
shareImageWrap:{
  display:"flex",
  justifyContent: isDesktop ? "center" : "flex-start",
  marginBottom: isDesktop ? "50px" : "60px",
  width: "100%",
  paddingLeft: isDesktop ? "0" : "35.38px",
  boxSizing: "border-box",
},
streamImageWrap: {
  display: "flex",
  justifyContent: isDesktop ? "center" : "flex-start",
  textAlign: "center",
  marginBottom: isDesktop ? "60px" : "24px",
  width: "100%",
  paddingLeft: isDesktop ? "0" : "42.2px",
  boxSizing: "border-box",
},
streamImage: {
  width: isDesktop ? 370 : "310.030517578125px",
  height: isDesktop ? "69px" : "49.94005584716797px",
  opacity: 1,
},
  // --- FOOTER ---
  footer:{
  justifyContent:"center",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  textAlign:"center",
  marginTop:"60px",
  padding:"40px 20px",
  },
  footerCta: { padding: "120px 0 60px", textAlign: "center" },
  footerH2: { 
    fontWeight: 600,
    marginTop: "0px",
    color: "#ffffff",
    fontSize: isDesktop ? "56px" : "30px",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    lineHeight: isDesktop ? "1.2" : "100%",
    letterSpacing: isDesktop ? "normal" : "-0.03em",
    textAlign: "center",
    margin: 0,
  },
     footerP:{
      color:"rgba(255,255,255,0.7",
      fontSize: isDesktop ? "18px" : "13px",
      maxWidth: isDesktop ? "600px" : "330px",
      marginTop:"18px",
      marginBottom:"26px"
     },
  footerLogoImg: {
    width: isDesktop ? "100%" : "415px",
    height: isDesktop ? "auto" : "121px",
    maxWidth: isDesktop ? "1800px" : "415px",
    opacity: 0.23,
    marginTop: isDesktop ? "10px" : "0",
    objectFit: "contain",
  },
  logoWrap:{
    marginTop: isDesktop ? "50px" : "0",
    display:"flex",
    justifyContent: isDesktop ? "center" : "flex-start",
    marginBottom:"-80px",
    width: "100%",
    marginLeft: isDesktop ? "0" : "-16.47px",
    boxSizing: "border-box",
    overflow: isDesktop ? "visible" : "visible",
  },


  // --- REUSABLE COMPONENTS ---

  badge: {marginBottom: isDesktop ? "48px" : "-6px",
    marginTop: isDesktop ? "60px" : "50px",
    display:"flex",
 },
 badgeimg:{
  height:isDesktop ? "66px": "40.5482292175293px",
  width:isDesktop ? "306px" : "174.00830078125px",
  display:"block",
  marginBottom: isDesktop ? "40px" : "0px",
 },
 h2:{
  fontFamily: isDesktop ? "poppins" : "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: isDesktop ? "56px" : "30px",
  color:"#FFFFFF",
  letterSpacing: isDesktop ? "0.5px" : "-0.03em",
  marginTop: isDesktop ? "8px" : "0px",
  marginBottom: isDesktop ? "10px" : "4px",
  maxWidth:isDesktop ? "none" : "none",
  lineHeight: isDesktop ? 1 : "100%",
  whiteSpace: "nowrap"
 },

  ctaGroup: { display: "flex", flexDirection: "row", gap: isDesktop ? "10px" : "8px", justifyContent: "center" },
  btnPrimary: {
    background: "#f0ede8", color: "#0a0a0c", padding: isDesktop ? "15px 30px" : "11px 16px",
    borderRadius: "30px", fontWeight: 700, border: "none", cursor: "pointer",  boxShadow:"inset 0 0 8px rgba(247, 247, 247, 0.2)",
    fontSize: isDesktop ? "16px" : "11px",
  },
  footerBtnPrimary: {
    background: "#f0ede8", color: "#0a0a0c", padding: "15px 30px",
    borderRadius: "30px", fontWeight: 700, border: "none", cursor: "pointer",  boxShadow:"inset 0 0 8px rgba(247, 247, 247, 0.2)",
    marginTop: "30px"
  },
  btnPrimaryHover:{
    transform:"translateY(-2px)",
    boxShadow:"0 10px 25px rgba"
  },
  btnGhost: {
    backgroundColor:"#0A0A0A", 
    color: "#fff", 
    padding: isDesktop ? "10px 20px" : "10px 14px",
    borderRadius: "999px", 
    display:"inline-flex",
    gap:"4px",
    border: "1px solid rgba(255, 255, 255, 0.08)", 
    boxShadow:"inset 0 4px 16px rgba(255, 255, 255, 0.15)",
    fontSize: isDesktop ? "14px" : "11px",
    cursor: "pointer",
    alignItems:"center"
  },
  btnGhostHover:{
    boxShadow: "inset 0 4px 20px rgba(255,255,255,0.25)"
  },
  shareImage:{
    width: isDesktop ? "570px" : "323.67919921875px",
    height: isDesktop ? "115px" : "71.05030822753906px",
    opacity: 1,
    textAlignt:"center",
  },
  statBanner: {
     marginTop: isDesktop ? "20px" : "12px",
     display:"flex",
     justifyContent: isDesktop ? "flex-start" : "center",
   },
  statBannerAfterCollage: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "-8px",
    marginBottom: "8px",
    position: "relative",
    zIndex: 3,
  },
  statImg: { 
    width: isDesktop ? "180px" : "124.603759765625px",
    height: isDesktop ? "auto" : "60.99849319458008px",
    marginLeft: isDesktop ? "20px" : "0px",
    top: "auto",
    left: "auto",
    position: "relative",
    opacity: 1,
   },
  socialRow: {
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     gap: isDesktop ? "20px" : "12px",
     width: isDesktop ? "auto" : "115px",
     height: isDesktop ? "auto" : "30px",
     marginTop: "25px",
     marginBottom: isDesktop ? "0" : "10px",
     marginLeft: isDesktop ? "auto" : "auto",
     marginRight: "auto",
     opacity: 1,
   },
  socialIcon: { 
    width: isDesktop ? "68px" : "30px",
    height: isDesktop ? "68px" : "30px", 
    opacity: isDesktop ? 0.8 : 1,
    cursor: "pointer",
    transition: "transform 0.2s ease",
    objectFit: "contain",
  },

footerWrapper: {
  position: "relative",
  padding:"0",
  margin:"0",
},

leftCharacter: {
  display: isDesktop ? "block" : "none",
  position: "absolute",
  left: "0",
  bottom: "0",
  width: "200px",
  height:"500px",

},

rightCharacter: {
  display: isDesktop ? "block" : "none",
  position: "absolute",
  right: "-90px",
  bottom: "0",
  width: "200px",
  height:"500px",
},
   
}
  return (
    <div style={styles.app}>
      <div style={styles.pageContainer}>

      {/* 1. HEADER / NAV */}
      <header style={styles.navbar}>
        <img src={logo} alt="Animeverse" style={styles.logo} />
        {isDesktop ? (
         <nav style={styles.navMenu} ref={navRef}>
  
  {/* MOVING BACKGROUND */}
  <div style={{ ...styles.navIndicator, ...indicatorStyle }} />

  {/* MENU ITEMS */}
  {["Home", "About", "Community", "Socials", "Watch"].map((item) => (
    <div
      key={item}
      style={styles.navItem}
      onMouseEnter={handleMove}
    >
      {item}
    </div>
  ))}

</nav>
        ) : (
          <div style={styles.hamburger}>☰</div>
        )}
      </header>

      {/* 2. MAIN CONTENT */}
      <main style={styles.mainContainer}>
        
        {/* HERO SECTION */}
        <section style={styles.heroWrapper}>

  {/* LEFT SIDE */}
  <div style={isDesktop ? styles.heroLeftDesktop : styles.heroLeftMobile}>
    
    <div style={styles.badge}>
      <img src={community} alt="Community" style={styles.badgeimg}/>
    </div>

    <h2 style={styles.h2}>Don't Just Watch. Belong</h2>

    <p style={styles.heroP}>
      Experience your favorite series alongside a global community. Stream the latest hits,
      join live watch parties, and find your nakama in the ultimate anime social hub.
    </p>

    <div style={styles.ctaGroup}>
      <button style={styles.btnPrimary}>Sign Up →</button>
      <button style={styles.btnGhost}>Visit Community</button>
    </div>

    {isDesktop && (
      <div style={styles.statBanner}>
        <img src={statBadge} alt="12M+ Users" style={styles.statImg}/>
      </div>
    )}

  </div>

  {/* RIGHT SIDE (MOVE THIS OUT) */}
  <div style={styles.heroRight}>
    <img
      src={isDesktop ? heroCollageDesktop : heroCollageMobile}
      alt="Anime collage"
      style={styles.heroCollageImg}
    />
    {isDesktop ? (
      <div style={styles.collageFade} />
    ) : (
      <>
        <div style={styles.collageFadeTopBlur} />
        <div style={styles.collageFadeBottomBlur} />
      </>
    )}
  </div>

  {!isDesktop && (
    <div style={styles.statBannerAfterCollage}>
      <img src={statBadge} alt="12M+ Users" style={styles.statImg}/>
    </div>
  )}

</section>

        {/* MARQUEE */}
<div className="scroller">
  <div className="scroller-inner">
    {Array(10).fill("ANIME").map((item, i) => (
      <span key={i}>{item}</span>
    ))}
    {Array(10).fill("ANIME").map((item, i) => (
      <span key={"dup-" + i}>{item}</span>
    ))}
  </div>
</div>

        {/* FEATURES */}
        <section style={styles.features}>
           <h2 style={styles.featuresTitle}>Everything You Need in One Multiverse</h2>
                  <p style={styles.sectionSub}>
          Animeverse isn't just a player; it's a living, breathing community. Build your profile,
          showcase your "All-Time Top 10," and follow creators who share your taste.
        </p>
</section>

          {!isDesktop && (
            <div style={styles.streamImageWrap}>
              <img
                src={streamImg}
                alt="Stream your favourite series"
                style={styles.streamImage}
              />
            </div>
          )}

           {/* Your cards can now be wrapped in a flex container */}
  <div style={isDesktop ? styles.featuresRow : styles.featuresColumn}>

  {/* CARD 1 */}
  <div style={styles.featureCardImage}>
     <img src={recommendedImage} style={styles.featureCardImg} />
  </div>

  {/* CARD 2 */}
  <div style={styles.featureCardImage}>
   <img src={mostWatchedImage} style={styles.featureCardImg} />
  </div>

  {/* CARD 3 */}
  <div style={styles.featureCardImage}>
    <img src={wishlistImage} style={styles.featureCardImg} />
  </div>

</div>

          {isDesktop ? (
            <div style={styles.streamImageWrap}>
              <img
                src={streamImg}
                alt="Stream your favourite series"
                style={styles.streamImage}
              />
            </div>
          ) : (
            <div style={styles.shareImageWrap}>
              <img src={shareSection} alt="Share section" style={styles.shareImage} />
            </div>
          )}

        {/* FEED */}
     <section style={styles.feed}>

  <div style={isDesktop ? styles.feedGrid : styles.feedMobile}>

    {/* LEFT SIDE */}
    <div style={styles.feedColumn}>

      {/* Post 1 */}
      <div style={styles.feedPost}>
        <div style={styles.postHeader}>
          <div style={styles.postUser}>
            <img src={luffyAvatar} alt="Luffyfan_88" style={styles.postAvatar} />
            <div>
              <div style={styles.postUsername}>Luffy</div>
              <div style={styles.postHandle}>@Luffyfan_88</div>
            </div>
          </div>
          <button style={styles.followBtn}>Follow</button>
        </div>

        <p style={styles.postText}>
          These guys really said "watch this" and dropped the hardest 2 minutes of animation i've seen all year. i've rewatched this fight five times already. Animeverse we need a "Replay frame" btton for this specific scene because WOW🤯.    </p>

        <div style={styles.postImageWrapper}>
          <img src={postImage1} alt="Post" style={styles.postImg} />
        </div>

        <div className="postStats">
          <div className="statItem">
            <FaRegCommentDots />
            <span>600k</span>
          </div>
          <div className="statItem">
            <FaHeart />
            <span>1.5M</span>
          </div>
          <div className="statItem">
            <FaEye />
            <span>2.3M</span>
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE */}
    <div style={styles.feedColumn}>

      {/* Post 2 */}
      <div style={styles.feedPost}>
        <div style={styles.postHeader}>
          <div style={styles.postUser}>
            <img src={nagamatzoAvatar} alt="nagamato" style={styles.postAvatar} />
            <div>
              <div style={styles.postUsername}>Nagato</div>
              <div style={styles.postHandle}>@nagamato</div>
          </div>
          </div>
          <button style={styles.followBtn}>Follow</button>
        </div>

        <p style={styles.postText}>
          Just finished Episode 10 and I'm staring at a blank screen. How am i supposed to go to work tommorow acting like my soul wasn't just ripped out?😢 The animatio during that final sequence was literally peak.If you haven't started this yet bring tissues. Lots of them.
        </p>

        <div style={styles.videoThumb}>
          <img src={postImage2} alt="Video" style={styles.videoThumbImg} />
          <div style={styles.playOverlay}>▶</div>
        </div>

        <div className="postStats">
          <div className="statItem">
            <FaRegCommentDots />
            <span>1.3k</span>
          </div>
          <div className="statItem">
            <FaHeart />
            <span>12.5k</span>
          </div>
          <div className="statItem">
            <FaEye />
            <span>1.1M</span>
          </div>
        </div>

      </div>
    </div>

  </div>

</section>
      </main>

      {/* 3. FOOTER */}
      <div style={styles.footerWrapper}>
     {(isDesktop && <img src={leftCharacter} style={styles.leftCharacter} />)}
     {(isDesktop && <img src={rightCharacter} style={styles.rightCharacter} />)}
      <footer style={styles.footer}>
         {isDesktop && (
           <div style={styles.shareImageWrap}>
             <img src={shareSection} alt="Share section" style={styles.shareImage} />
           </div>
         )}
           <h2 style={styles.footerH2}>What are you waiting for?<br />Join now, it's free!</h2>
        <p style={styles.footerP}>
          Animeverse is the ultimate destination for the modern fan. Watch, react, and connect
          in a world built by otakus, for otakus.
        </p>
        <button style={styles.footerBtnPrimary}>Sign Up Free →</button>
    <div style={styles.socialRow}>
  <img src={discordIcon} alt="Discord" style={styles.socialIcon} />
  
  <img src={instagramIcon} alt="Instagram" style={styles.socialIcon} />
  <img src={xIcon} alt="X" style={styles.socialIcon} />
</div>
<div style={styles.logoWrap}>
  <img src={logo} alt="Animeverse" style={styles.footerLogoImg} />
</div>
      </footer>
      </div>
    </div>
     </div>
     
  );
}

  <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Sora:wght@300;400;600;700&display=swap');
  
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0a0a0c; color: #fff; font-family: 'Sora', sans-serif; overflow-x: hidden; }

  /* ANIMATIONS */
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes floatChar {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  /* Apply float to the anime characters */
  img[style*="position: fixed"] {
    animation: floatChar 5s ease-in-out infinite;
  }

  /* RESPONSIVE TYPOGRAPHY & HOVERS */
  
  /* Mobile Defaults */
  .responsive-h1 { font-size: 38px !important; }
  .responsive-h2 { font-size: 32px !important; }
  .responsive-footer-h2 { font-size: 34px !important; }

  /* Desktop Overrides (1024px +) */
  @media (min-width: 1024px) {
    .responsive-h1 { font-size: 72px !important; }
    .responsive-h2 { font-size: 56px !important; }
    .responsive-footer-h2 { font-size: 64px !important; }
    
    .card-hover:hover {
      transform: translateY(-15px);
      transition: transform 0.3s ease;
    }

    .feed-post-card:hover {
      background: #1c1c21 !important;
      border-color: rgba(255,255,255,0.2) !important;
      transition: all 0.3s ease;
    }
  }

  /* Custom scrollbar for horizontal feed on mobile */
  div[style*="overflow-x: auto"]::-webkit-scrollbar {
    display: none;
  }
    
`}
<style>{`
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
`}</style>
</style>
