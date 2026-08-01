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
  if (!navRef.current) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const parentRect = navRef.current.getBoundingClientRect();

  setIndicatorStyle({
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    top: `${rect.top - parentRect.top}px`,
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
    backgroundImage: isDesktop ? `url(${lightDesktop})` : `url(${lightMobile})`,
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    backgroundSize: isDesktop ? "1600px auto" : "120% auto",
    position: "relative",
    overflowX: "hidden",
  },
  backgroundImage: isDesktop
  ? `url(${lightDesktop})`
  : `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.82) 0%,
      rgba(0, 0, 0, 0.9) 55%,
      #000 100%
    ), url(${lightMobile})`,

backgroundPosition: "top center",
backgroundRepeat: "no-repeat",
backgroundSize: isDesktop
  ? "1600px auto"
  : "100% 560px, 100% auto",
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
    padding: isDesktop ? "0 40px" : "0 20px",
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
    width:"529px"
    
  },
  
  logo: { 
    height: isDesktop ? "41px" : "26px",
    width: isDesktop ? "auto" : "99px",
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
  alignItems: "center",
  borderRadius: "999px",
  color: "#FFFFFF38",
  gap: "28px",
  width: "529px",
  background: "rgba(10,10,12,0.55)",
  border: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
  padding: "21px 43px",
  position: "absolute",
  top: "42px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 10,
  marginLeft: "79px"
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
  gap: isDesktop ? "60px" : "30px",
  marginTop: isDesktop ? "-110px" : "40px",
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
  alignItems: "center",
  textAlign: "center",
  padding: "0 16px",
  gap: "12px",
  position: "relative",
  zIndex: 3,
  marginTop: "-8px",
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

heroRight: {
  position: "relative",
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  marginTop: "100px", // 👈 THIS pushes it below navbar
},
collageFade: {
  position: "absolute",
  inset:0,
  pointerEvents: "none",

  zIndex: 2,
},
collageFadeMobile: {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  background: `linear-gradient(
    to bottom,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0.8) 18%,
    rgba(0,0,0,0.35) 32%,
    rgba(0,0,0,0) 46%,
    rgba(0,0,0,0) 66%,
    rgba(0,0,0,0.45) 86%,
    rgba(0,0,0,1) 100%
  )`,
  zIndex: 2,
  marginTop:"-20px",
  height:"430px",
},

heroCollageImg: {
  width: isDesktop ? "120%" : "90%",
  height: isDesktop ? "auto" : "420px",
  maxWidth: isDesktop ? "800px" : "360px",
  objectFit: "cover",
  animation: "fadeUp 1s ease-out",
  position: "relative",
  top: 0,
  left: 0,
  zIndex: 1,
  transform: isDesktop ? "translateX(120px)" : "none",
  opacity: 1,
  borderRadius: isDesktop ? "0px" : "6px",
  display: "block",
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
    maxWidth:isDesktop ?"657px" : "297px",
    margin: "15px auto 50px",
    lineHeight: 1.6,
    letterSpacing:"-3%",
    fontSize: isDesktop ? "18px" :"12px"
  },
  features:{
    color:"#FFFFFF",
    fontSize:isDesktop ? "30px": "20px",
    fontWeight:600,
    fontFamily:"Plus Jakarta Sans",
    textAlign:"center",
    letterSpacing:"-3%",
    marginTop: "70px",
    maxWidth: isDesktop ? "none" : "360px",
  },

  featuresRow:{
    display:"flex",
    flexDirection: isDesktop ? "row" : "column",
    justifyContent:"center",
    alignItems:"center",
    gap: isDesktop ? "40px": "20px",
  },

  featuresColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    width: "100%",
  },


  featureGrid: {
    display: "flex",
    flexDirection: isDesktop ? "row" : "column",
    gap: "25px",
    justifyContent: "center",
  },
  featureCardImg: { width: "100%", maxWidth: isDesktop ? "360px" : "300px", borderRadius: "15px" },

  // --- COMMUNITY FEED ---
 feedPost: {
  backgroundColor: "#111",
  padding: "16px",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "100%",
  maxWidth: isDesktop ? "100%" : "520px",
  left: "0",
},

feedGrid: {
  display: "flex",
  gap: isDesktop ? "20px" : "10px",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  flexWrap: "wrap",
},

feedMobile: {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
},

feedColumn: {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: isDesktop ? "48%" : "100%",
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
  width: "40px",
  height: "40px",
  borderRadius: "50%",
},

postUsername: {
  fontWeight: "bold",
  color: "#fff",
},

postHandle: {
  fontSize: "12px",
  color: "#888",
},

followBtn: {
  background: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "999px",
  padding: "6px 14px",
  cursor: "pointer",
},

postText: {
  color: "#aaa",
  fontSize: "14px",
  lineHeight: "1.5",
},

postImageWrapper: {
  width: "100%",
},
postImg: {
  width: "100%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "16px",
},

videoThumb: {
  position: "relative",
},

videoThumbImg: {
  width: "100%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "16px",
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
  justifyContent:"center",
  marginBottom:"50px",
  width: isDesktop ? "420px" : "260px",
height: isDesktop ? "520px" : "340px",
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
    marginTop: isDesktop ? "-200px" : "0px",
    color: "#ffffff",
    fontSize: isDesktop ? "56px" : "30px",
    fontFamily: "Plus Jakarta Sans",
    fontStyle: "normal",
    leadingTrim: "none",
    lineHeight: "100%",
    letterSpacing: "-0.03em",
    textAlign: "center",
  },
     footerP:{
      color:"rgba(255,255,255,0.7",
      fontSize:"18px",
      maxWidth:"600px",
      marginTop:"24px",
      marginBottom:"40px"
     },
  footerLogoImg: { width: isDesktop ? "120px" : "90px", maxWidth: "100%", height: "auto", opacity:0.23, marginTop: "10px" },
  logoWrap:{
    marginTop:"50px",
    display:"flex",
    justifyContent:"center",
    marginBottom:"-80px"
  },


  // --- REUSABLE COMPONENTS ---

  badge: {marginBottom:"-48px",
    marginTop:"60px",
    display:"flex",
 },
 shareSection:{
  width: isDesktop ? "570px" : "300px",
  height: isDesktop ? "115px" : "60px",
  textAlign:"center",
  marginBottom:"70px"
 },
 badgeimg:{
  height:isDesktop ? "66px": "40px",
  width:isDesktop ? "306px":"174px",
  display:"block",
  marginBottom:"20px",
  marginTop: isDesktop ? "none":"30px"
 },
 h2:{
  fontFamily:"poppins",
  fontWeight: 500,
  fontSize:isDesktop ? "56px" : "30px",
  color:"#FFFFFF",
  letterSpacing: "-3%",
  marginTop: "25px",
  marginBottom:"20px",
  maxWidth:isDesktop ? "none" : "none",
  lineHeight: 1,
  whiteSpace: "nowrap"
 },

  heroP: {
    fontSize: isDesktop ? "18px":"12px",
    fontWeight:700,
    color: "#FFFFFFCC",
    lineHeight: "150%",
    fontFamily:"Plus Jakarta Sans",
    letterSpacing:"-3%",
    marginBottom: isDesktop ? "30px" : "10px",
    maxWidth: isDesktop ? "none" : "336px",
    margin: isDesktop ? "-15px auto 28px" : "-20px auto 12px",
    width: isDesktop ? "700px" : "100%",
    display:"inline-block"
  },

  ctaGroup: { 
    display: "flex", 
    flexDirection: isDesktop ? "row" : "row",
    gap: "10px", 
    marginTop: isDesktop ? "0px" : "-4px", 
    position: isDesktop ? "relative" : "relative", 
    zIndex: 4 },

  btnPrimary: {
    background: "#f0ede8", color: "#0a0a0c", padding: "15px 30px",
    borderRadius: "30px", fontWeight: 700, border: "none", cursor: "pointer",  boxShadow:"inset 0 0 8px rgba(247, 247, 247, 0.2)",
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
    padding: "10px 20px",
    borderRadius: "999px", 
    display:"inline-flex",
    gap:"4px",
    border: "1px solid rgba(255, 255, 255, 0.08)", 
    boxShadow: "inset 0px 4px 8.7px 0px rgba(255, 255, 255, 0.14)",

    fontSize:"14px",
    cursor: "pointer",
    alignItems:"center"
  },
  btnGhostHover:{
    boxShadow: "inset 0 4px 20px rgba(255,255,255,0.25)"
  },
  shareImage:{
    width: isDesktop ? "570px" : "323px",
    height: isDesktop ? "115px" : "71px",
    textAlignt:"center",
    marginBottom: isDesktop ? "none" : "24px",
    marginTop: isDesktop ? "none" : "24px",
  },
  statBanner: { order:isDesktop ? "unset": 3,
     marginTop: "20px",display:"flex",justifyContent:"flex-start",
   },
  statImg: { 
    width: isDesktop ? "180px" : "124.603759765625px",
    height: isDesktop ? "auto" : "60.99849319458008px",
    marginLeft: isDesktop ? "20px" : "0px",
    top: isDesktop ? "auto" : "666.16px",
    left: isDesktop ? "auto" : "134.2px",
    position: isDesktop ? "relative" : "absolute",
    opacity: 1,
   },
  socialRow: {
     display: "flex",
     justifyContent: "center",
     gap: "20px",
     marginTop: "25px"
   },
  socialIcon: { 
    width: isDesktop ? "68px" : "48px",
    height: isDesktop ? "68px" : "48px", 
    opacity: 0.8,
    cursor: "pointer",
    transition: "transform 0.2s ease",
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
};

  return (
 <div style={styles.app}>
      <div style={styles.pageContainer}>

      {/* 1. HEADER / NAV */}
      <header style={styles.navbar}>
        <img src={logo} alt="Animeverse" style={styles.logo} />
        {isDesktop ? (
         <nav style={styles.navMenu} className="nav-menu" ref={navRef}>

  {/* MOVING BACKGROUND */}
  <div style={{ ...styles.navIndicator, ...indicatorStyle }} className="nav-indicator" />

  {/* MENU ITEMS */}
  {navItems.map((item) => (
    <div
      key={item}
      style={styles.navItem}
      className="nav-link"
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
  {isDesktop ? (
    <div style={styles.heroRight}>
      <div style={styles.collageFade} />
      <img
        src={heroCollageDesktop}
        alt="Anime collage"
        style={styles.heroCollageImg}
      />
    </div>
  ) : null}

</section>

  {/* Mobile-only: hero collage first, then stat badge below it, per mobile design */}
  {!isDesktop && (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginTop: "8px", width: "100%", position: "relative" }}>
      <div style={{ position: "relative", width: "calc(100% + 40px)", marginLeft: "-20px", marginRight: "-20px", display: "flex", justifyContent: "center", marginTop: "-8px" }}>
        <div style={{ ...styles.collageFadeMobile, width: "100%", }} />
        <img
          src={heroCollageMobile}
          alt="Anime collage"
          style={{
            ...styles.heroCollageImg,
            width: "100%",
            maxWidth: "100%",
            height: "400px",
            borderRadius: "6px",
            marginTop: "-12px",
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "-18px", marginBottom: "8px", position: "relative", zIndex: 5 }}>
        <img
          src={statBadge}
          alt="12M+ Users"
          style={{
            width: "125px",
            height: "auto",
            display: "block",
            marginTop: "4px",
            marginBottom: "4px",
          }}
        />
      </div>
    </div>
  )}

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
           <h2>Everything You Need in One Multiverse</h2>
                  <p style={styles.sectionSub}>
          Animeverse isn't just a player; it's a living, breathing community. Build your profile,
          showcase your "All-Time Top 10," and follow creators who share your taste.
        </p>
</section>

{!isDesktop && (
  <div style={{ textAlign: "center", marginBottom: 24 }}>
    <img
      src={streamImg}
      alt="Stream your favourite series"
      style={{
        width: 370,
        height: "69px",
      }}
    />
  </div>
)}

           {/* Your cards can now be wrapped in a flex container */}
  <div style={isDesktop ? styles.featuresRow : styles.featuresColumn}>

  {isDesktop ? (
    <>
      {/* CARD 1 - Recommended */}
      <div style={styles.featureCardImage}>
         <img src={recommendedImage} style={styles.featureCardImg} />
      </div>

      {/* CARD 2 - Most Watched */}
      <div style={styles.featureCardImage}>
       <img src={mostWatchedImage} style={styles.featureCardImg} />
      </div>

      {/* CARD 3 - Wishlist */}
      <div style={styles.featureCardImage}>
        <img src={wishlistImage} style={styles.featureCardImg} />
      </div>
    </>
  ) : (
    <>
      {/* CARD 1 - Most Watched (mobile order) */}
      <div style={styles.featureCardImage}>
       <img src={mostWatchedImage} style={styles.featureCardImg} />
      </div>

      {/* CARD 2 - Recommended (mobile order) */}
      <div style={styles.featureCardImage}>
         <img src={recommendedImage} style={styles.featureCardImg} />
      </div>

      {/* CARD 3 - Wishlist */}
      <div style={styles.featureCardImage}>
        <img src={wishlistImage} style={styles.featureCardImg} />
      </div>
    </>
  )}

</div>
{isDesktop && (
  <div style={{ textAlign: "center", marginBottom: 60 }}>
    <img
      src={streamImg}
      alt="Stream your favourite series"
      style={{
        width: 370,
        height: "69px",
      }}
    />
  </div>
)}

{!isDesktop && (
  <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
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
            <img src={shareSection} alt="Share section" style={styles.shareImage}/>
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
  <img src={logo} alt="Animeverse" style={styles.footerLogoImg} className="footer-logo-img" />
</div>
      </footer>
      </div>
    </div>
     </div>
  );
}
